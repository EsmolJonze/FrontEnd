import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  Button,
  Item,
  Modal,
  ModalFooter,
  MultiEmail,
  Select,
  Spinner,
  Text,
  IconButton,
} from '@bloobirds-it/bloobirds-platform-component-library';
import styles from './emailModal.module.css';
import RichTextEditor from '../richTextEditor';
import AddVariableButton from '../richTextEditor/variables/addVariableButton';
import { deserializeHtmlTemplate } from '../richTextEditor/serializer/serializer';
import AttachedFile from './attachedFile/attachedFile.view';
import AttachFilesButton from './attachFilesButton/attachFilesButton.view';
import { AttachImageButton } from './attachImageButton/attachImageButton.view';
import { useBloobirdsApiStateContext } from '@bloobirds-it/bloobirds-platform-react-api-library';
import isEqual from 'lodash/isEqual';
import { bobjectFieldsModel } from '../../misc/model/bobjectFieldsModel';
import { getValueFromLogicRole } from '../../utils/bobjects.utils';
import { EMAIL_MODE } from '../../constants/email';
import { submitNewEmailForm } from './emailModal.service';
import { useActiveLeads, useEmailConnections, useRouter } from '../../hooks';
import { isHtml } from '../../utils/strings.utils';
import { initialSlateObject } from '../richTextEditor/richTextEditor.utils';
import AppendEmail from './appendEmail';
import { useMinimizableModals } from '../../hooks/emails/useMinimizableModals';

const getActivityUserEmail = (model, mode, connections) => {
  if (mode === EMAIL_MODE.REPLY && connections.list && model) {
    return connections.list.find(
      connection => connection.email === model.findByLogicRole('ACTIVITY__EMAIL_USER').text,
    )?.email;
  }

  const defaultConnection = connections.defaultConnection;

  if (!defaultConnection && connections.list && connections.list.length !== 0) {
    return connections.list[0].email;
  }

  return defaultConnection;
};

const EmailModal = ({ id }) => {
  const { getMinimizableModalContext, openConfirmModal } = useMinimizableModals();

  const {
    closeModal,
    activity,
    company,
    data: savedData,
    title,
    isOpen,
    minimize,
    mode,
    template,
    variables: availableVariables,
  } = getMinimizableModalContext(id);

  const model = activity ? bobjectFieldsModel(activity.fields) : undefined;
  const { selectedLead: activeLead } = useActiveLeads();
  const { connections } = useEmailConnections();

  const leadEmail = activeLead && getValueFromLogicRole(activeLead, 'LEAD__EMAIL', true);
  const toEmails = leadEmail ? [leadEmail] : [];

  const replyEmails = useMemo(() => {
    if (model && mode === EMAIL_MODE.REPLY && model.findByLogicRole('ACTIVITY__EMAIL_LEAD').text) {
      return [model.findByLogicRole('ACTIVITY__EMAIL_LEAD').text];
    }
    return [];
  }, [model]);

  const activityEmail = getActivityUserEmail(model, mode, connections);
  const hasConnections = connections?.list && connections?.list.length > 0;

  const defaultValues = {
    emailTo: mode === EMAIL_MODE.REPLY ? replyEmails : toEmails,
    emailCc: [],
    emailFrom: hasConnections ? activityEmail : 'no-connections',
    subject: template
      ? deserializeHtmlTemplate(
          isHtml(template.subject) ? template.subject : `<p>${template.subject}</p>`,
          availableVariables,
        )
      : initialSlateObject,
    body:
      template.body !== ''
        ? deserializeHtmlTemplate(template.body, availableVariables)
        : initialSlateObject,
  };

  const replyHistoryNode = useMemo(() => {
    if (mode === EMAIL_MODE.REPLY && model) {
      return {
        type: 'reply-history',
        children: [{ text: '' }],
        html: model.findByLogicRole('ACTIVITY__MESSAGE_BODY').value,
      };
    }

    return null;
  }, [mode, model]);
  const { webApi } = useBloobirdsApiStateContext();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorSubmitting, setErrorSubmitting] = useState(undefined);
  const [attachedFiles, setAttachedFiles] = useState([]);
  const [isAttachingFile, setIsAttachingFile] = useState([]);
  const editorRef = useRef();
  const subjectEditorRef = useRef();

  const { handleSubmit, errors, control, setValue, getValues } = useForm({
    defaultValues: savedData || defaultValues,
  });

  const { history } = useRouter();

  useEffect(() => {
    if (connections.loaded) {
      setValue('emailFrom', activityEmail);
    }
  }, [connections.loaded]);

  useEffect(() => {
    if (model && mode === EMAIL_MODE.REPLY) {
      setValue(
        'emailTo',
        model.findByLogicRole('ACTIVITY__EMAIL_LEAD').text && [
          model.findByLogicRole('ACTIVITY__EMAIL_LEAD').text,
        ],
      );
    }
  }, [model, mode]);

  const removeAttachedFile = attachedFileId => {
    const attachedFilesFiltered = attachedFiles.filter(file => file.id !== attachedFileId);
    setAttachedFiles(attachedFilesFiltered);
  };

  const onSubmit = data => {
    setIsSubmitting(true);

    submitNewEmailForm({
      mode,
      replyEmails,
      model,
      data,
      attachedFiles,
      webApi,
      setIsSubmitting,
      handleClose: closeModal,
      setErrorSubmitting,
      templateId: template.id,
    });
  };

  const handleMinimize = () => {
    const values = getValues();
    minimize(values);
  };

  const shouldBeConnectionDisabled = () => {
    let isDisabled = false;

    if (
      mode === EMAIL_MODE.REPLY &&
      activityEmail &&
      connections?.list.some(connection => connection.email === activityEmail)
    ) {
      isDisabled = true;
    }
    return isDisabled;
  };

  const handleRedirect = () => {
    history.push(company.url);
    handleMinimize();
  };

  return (
    <Modal open={isOpen} onClose={() => openConfirmModal(id)}>
      <div className={styles._header__container}>
        <div className={styles._header__info}>
          <div className={styles._header_companyName} onClick={handleRedirect}>
            <IconButton name="company" size={24} />
            <Text size="m" weight="regular" color="bloobirds">
              {company.name}
            </Text>
          </div>
          <Text size="s" weight="medium">
            {title}
          </Text>
        </div>
        <div className={styles._header__icons}>
          <IconButton name="minus" size={20} onClick={handleMinimize} />
          <IconButton name="cross" size={24} onClick={() => openConfirmModal(id)} />
        </div>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles._container}
        data-intercom="send-email-modal"
      >
        <div className={styles._to__container}>
          <div className={styles._tag}>
            <Text size="m" color="softPeanut">
              To:
            </Text>
          </div>
          <div className={styles._to__input__container}>
            <Controller
              name="emailTo"
              as={<MultiEmail width="100%" />}
              control={control}
              rules={{ validate: value => value.length > 0 || 'Provide at least one email' }}
              error={errors.emailTo?.message}
            />
          </div>
        </div>
        <div className={styles._to__container}>
          <div className={styles._tag}>
            <Text size="m" color="softPeanut">
              Cc:
            </Text>
          </div>
          <div className={styles._to__input__container}>
            <Controller
              name="emailCc"
              as={<MultiEmail width="100%" />}
              control={control}
              error={errors.emailCc?.message}
            />
          </div>
        </div>
        <div className={styles._to__container}>
          <div className={styles._tag}>
            <Text size="m" color="softPeanut">
              From:
            </Text>
          </div>
          <div className={styles._to__input__container}>
            <Controller
              name="emailFrom"
              as={
                <Select
                  name="defaultConnection"
                  width="100%"
                  disabled={shouldBeConnectionDisabled() || !hasConnections}
                >
                  {hasConnections ? (
                    connections.list.map(connection => (
                      <Item value={connection.email} key={connection.email}>
                        {connection.email}
                      </Item>
                    ))
                  ) : (
                    <Item value="no-connections">No emails connected yet</Item>
                  )}
                </Select>
              }
              control={control}
              error={errors.emailFrom?.message}
            />
          </div>
        </div>
        <div className={styles._subject__container}>
          <Controller
            name="subject"
            as={
              <RichTextEditor
                ref={subjectEditorRef}
                hoveringToolbar={false}
                singleLine
                styled
                placeholder="Subject"
                error={errors.subject?.message}
              >
                <AddVariableButton editorRef={subjectEditorRef} shouldReplace />
              </RichTextEditor>
            }
            control={control}
            rules={{ required: 'A subject for the email is required' }}
            error={errors.subject?.message}
          />
        </div>
        <div className={styles._editor__container} data-intercom="send-email-modal-body">
          <Controller
            name="body"
            as={
              <RichTextEditor ref={editorRef}>
                <AppendEmail nodes={[replyHistoryNode]} />
                <AddVariableButton editorRef={editorRef} shouldReplace />
                {attachedFiles.length > 0 && (
                  <div className={styles._attachments__container}>
                    {attachedFiles.map(file => (
                      <AttachedFile
                        fileId={file.id}
                        fileName={file.name}
                        key={file.id}
                        removeAttachedFile={removeAttachedFile}
                      />
                    ))}
                  </div>
                )}
                <div className={styles._actions__container}>
                  <AttachFilesButton
                    appendAttachedFile={file => {
                      setAttachedFiles([...attachedFiles, file]);
                    }}
                    setIsAttachingFile={setIsAttachingFile}
                  />
                  <AttachImageButton />
                </div>
              </RichTextEditor>
            }
            control={control}
          />
        </div>
      </form>
      <ModalFooter>
        <div className={styles._footer__container}>
          {errorSubmitting && (
            <div className={styles._errors_container}>
              <Text color="tomato" size="xs">
                {errorSubmitting}
              </Text>
            </div>
          )}
          <div className={styles._footerActions__container}>
            <span data-intercom="send-email-modal-action-cancel">
              <Button variant="clear" color="bloobirds" onClick={() => openConfirmModal(id)}>
                Cancel
              </Button>
            </span>
            <span data-intercom="send-email-modal-action-accept">
              <Button
                onClick={handleSubmit(onSubmit)}
                disabled={isSubmitting || !isEqual(errors, {}) || isAttachingFile}
              >
                {isSubmitting ? <Spinner name="loadingCircle" /> : 'Send email'}
              </Button>
            </span>
          </div>
        </div>
      </ModalFooter>
    </Modal>
  );
};

export default EmailModal;
