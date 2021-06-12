import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import {
  Button,
  Checkbox,
  Icon,
  Input,
  Text,
  TextArea,
  useToasts,
} from '@bloobirds-it/bloobirds-platform-component-library';
import { Controller, useForm } from 'react-hook-form';
import { isEmpty } from 'lodash';
import { AttachImageButton } from '../../../components/emailModal/attachImageButton/attachImageButton.view';
import RichTextEditor from '../../../components/richTextEditor';
import {
  deserializeHtmlTemplate,
  serialize,
} from '../../../components/richTextEditor/serializer/serializer';
import { ServiceApi } from '../../../misc/api/service';
import styles from './emailSettings.module.css';
import {
  useEmailSignature,
  useEmailConnections,
  useActiveUser,
  useQueryParams,
} from '../../../hooks';
import { useRestApi } from '@bloobirds-it/bloobirds-platform-react-api-library';
import { GoogleSignIn, MicrosoftSignIn } from '../../../components/BrandedButtons';
import { fetchAndOpenLegacyUrl, fetchAndOpenNylasUrl } from './emailSettings.services';
import ConnectionCard from '../../../components/connectionCard';
import { useUserSettings } from '../../../components/userPermissions/hooks';

const parseUserSignature = signature =>
  signature.body
    ? deserializeHtmlTemplate(signature.body)
    : [{ children: [{ type: 'paragraph', children: [{ text: '' }] }] }];

const submitEmail = (
  inputEmail,
  onSubmit,
  setIsSubmittingObject,
  setNewEmailSubmitted,
  isSubmittingObject,
) => {
  ServiceApi.request({
    url: '/service/users/me/updateEmail',
    method: 'POST',
    body: { email: inputEmail },
  })
    .then(() => {
      if (onSubmit) {
        onSubmit();
      }
      setIsSubmittingObject({ ...isSubmittingObject, email: false });
      setNewEmailSubmitted(true);
    })
    .catch(() => {
      setIsSubmittingObject({ ...isSubmittingObject, email: false });
    });
};

const needsEmailUpdate = (data, email) => data.email !== '' && data.email !== email;

const needsSignatureUpdate = (data, signature) =>
  data.signature !== signature.body || data.enableSignature !== signature.enabled;

const EmailSettingsView = ({ email, onSubmit }) => {
  const { signature, updateSignature, isSubmitting: isSubmittingSignature } = useEmailSignature();
  const { connections, isSubmitting: isSubmittingConnections } = useEmailConnections();
  const { activeUser } = useActiveUser();
  const hasConnections = connections?.list && connections.list.length > 0;
  const userSignature = parseUserSignature(signature);
  const restApi = useRestApi();
  const { createToast } = useToasts();
  const settings = useUserSettings();
  const params = useQueryParams();
  const error = params.get('error');

  const googleOnClick =
    settings?.settings.gmailConnectButtonType === 'LEGACY'
      ? fetchAndOpenLegacyUrl
      : fetchAndOpenNylasUrl;

  const emailIsDuplicated = error === 'ALREADY_CONNECTED';

  const emailConnections = {
    ...connections,
    duplicateEmail: {
      isDuplicated: emailIsDuplicated,
      errorMessage: emailIsDuplicated ? 'Connection not created. Email account already exists' : '',
    },
  };

  const {
    duplicateEmail: { isDuplicated: isDuplicatedEmail, errorMessage: duplicatedEmailError },
    list: nylasConnections,
  } = emailConnections;

  const defaultValues = {
    email: '',
    signature: userSignature,
    htmlSignature: signature.body,
    enableSignature: signature.enabled,
    emailTrackingNotificationsEnabled: false,
  };

  const { register, handleSubmit, errors, control, setValue, reset, watch } = useForm({
    defaultValues,
  });

  useEffect(() => {
    restApi
      .service('users')
      .get(activeUser.id)
      .then(({ emailTrackingNotificationsEnabled }) => {
        setValue('emailTrackingNotificationsEnabled', emailTrackingNotificationsEnabled);
      })
      .catch(console.error);
  }, [restApi]);

  const [isSubmittingObject, setIsSubmittingObject] = useState({ email: false });
  const [newEmailSubmitted, setNewEmailSubmitted] = useState(false);
  const [isRawHtmlSignature, setIsRawHtmlSignature] = useState(false);

  const isSubmitting =
    (isSubmittingObject.email && isSubmittingSignature) || isSubmittingConnections;

  useEffect(() => {
    if (signature.loaded) {
      setValue('signature', userSignature);
      setValue('htmlSignature', signature.body);
      setValue('enableSignature', signature.enabled);
      setIsRawHtmlSignature(signature.isRawHtml);
    }
  }, [signature.loaded]);

  const onFormSubmit = async data => {
    let submitted = false;

    if (needsEmailUpdate(data, email)) {
      submitEmail(
        data.email,
        onSubmit,
        setIsSubmittingObject,
        setNewEmailSubmitted,
        isSubmittingObject,
      );
      submitted = true;
    }

    if (needsSignatureUpdate(data, signature)) {
      updateSignature({
        body: isRawHtmlSignature ? data.htmlSignature : serialize({ children: data.signature }),
        enabled: data.enableSignature,
        isRawHtml: isRawHtmlSignature,
      });
      submitted = true;
    }

    await restApi.service('users').partialUpdate(activeUser.id, {
      emailTrackingNotificationsEnabled: data.emailTrackingNotificationsEnabled,
    });

    if (submitted) {
      createToast({ type: 'success', message: 'Email settings updated' });
    }
  };

  const onChangeEditionMode = mode => event => {
    event.stopPropagation();
    event.preventDefault();
    setIsRawHtmlSignature(mode === 'HTML');
  };

  return (
    <div className={styles._container} data-intercom="user-settings-page-email">
      <div className={styles._content__box}>
        <div className={styles._section__box}>
          <div className={styles._email_buttons__container}>
            <Text size="m" color="softPeanut" htmlTag="span">
              Your connected email accounts
            </Text>
            {settings?.settings.gmailConnectButtonEnabled && (
              <GoogleSignIn onClick={googleOnClick} />
            )}
            {settings?.settings.microsoftConnectButtonEnabled && (
              <MicrosoftSignIn onClick={() => fetchAndOpenNylasUrl('outlook')} />
            )}
          </div>
          {isDuplicatedEmail && (
            <div className={styles._message_error__container}>
              <Icon name="alertTriangle" color="tomato" />
              <span className={styles._message_error__text}>{duplicatedEmailError}</span>
            </div>
          )}
          <div className={styles._connections_container}>
            {nylasConnections?.map(connection => (
              <ConnectionCard
                data={connection}
                isNylas
                key={connection.email}
                isDefault={connection.email === connections.defaultConnection}
              />
            ))}
          </div>
        </div>
        <form className={styles._section__box} onSubmit={handleSubmit(onFormSubmit)}>
          <div className={styles._form__box}>
            <Text color="peanut" size="m" weight="medium">
              Email tracking notifications
            </Text>
            <Controller
              name="emailTrackingNotificationsEnabled"
              control={control}
              valueName="checked"
              onChangeName="onClick"
              as={
                <Checkbox expand>Notify me when a lead opens, clicks or replies my emails</Checkbox>
              }
            />
          </div>
          <div className={styles._form__box}>
            <Text color="peanut" size="m" weight="medium">
              Change email
            </Text>
            <Text color="peanut" size="s">
              Your email address is currently <b>{email}</b>
            </Text>
            <Input
              placeholder="New email address"
              name="email"
              innerRef={register({ pattern: /^\S+@\S+$/i })}
              error={errors.email && 'Must be a valid email'}
              width="100%"
            />
          </div>
          <div>
            <div className={styles._signature__container}>
              <Text color="peanut" size="m" weight="medium">
                Change email signature
              </Text>
              <div className={styles._switchButtons__container}>
                <Button
                  variant={!isRawHtmlSignature ? 'primary' : 'secondary'}
                  onClick={onChangeEditionMode('EDITOR')}
                  size="small"
                >
                  Editor
                </Button>
                <Button
                  variant={isRawHtmlSignature ? 'primary' : 'secondary'}
                  onClick={onChangeEditionMode('HTML')}
                  size="small"
                >
                  HTML
                </Button>
              </div>
            </div>
            <div
              className={styles._editor__container}
              hidden={isRawHtmlSignature}
              data-intercom="user-settings-page-email-email-signature-input"
            >
              <Controller
                name="signature"
                as={
                  <RichTextEditor>
                    <div className={styles._actions__container}>
                      <AttachImageButton />
                    </div>
                  </RichTextEditor>
                }
                control={control}
              />
            </div>
            <div className={styles._htmlSignature__container} hidden={!isRawHtmlSignature}>
              <Controller
                name="htmlSignature"
                as={
                  <TextArea rows="8" width="100%" placeholder="HTML signature" autoScroll={false} />
                }
                control={control}
              />
              <Text color="peanut" size="s" weight="medium">
                HTML preview
              </Text>
              <div className={styles._htmlPreview__container}>
                <div dangerouslySetInnerHTML={{ __html: watch('htmlSignature') }} />
              </div>
            </div>
            <Controller
              name="enableSignature"
              valueName="checked"
              onChangeName="onClick"
              as={
                <Checkbox expand>
                  Insert my signature within the email editor whenever I compose an email
                </Checkbox>
              }
              control={control}
            />
          </div>
          {newEmailSubmitted && !isSubmitting && (
            <Text color="peanut" size="s">
              We've sent a verification email to the new email. Once it is verified it will be set
              as as your email.
            </Text>
          )}
          <div className={styles._buttons__container}>
            <Button type="submit" disabled={!isEmpty(errors) || isSubmitting}>
              Save Changes
            </Button>
            <Button
              variant="clear"
              onClick={() =>
                reset({
                  email: '',
                  signature: userSignature,
                  htmlSignature: signature.body,
                  enableSignature: signature.enabled,
                  defaultConnection: hasConnections
                    ? connections.defaultConnection
                    : 'no-connections',
                })
              }
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

EmailSettingsView.propTypes = {
  email: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default EmailSettingsView;
