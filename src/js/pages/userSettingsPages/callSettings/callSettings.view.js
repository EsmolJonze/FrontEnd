import React, { useEffect, useState } from 'react';
import {
  Select,
  Item,
  Text,
  Button,
  useToasts,
  Tooltip,
  Icon,
  Spinner,
  Checkbox,
} from '@bloobirds-it/bloobirds-platform-component-library';
import { Controller, useForm } from 'react-hook-form';
import { usePhoneConnections, useActiveUser } from '../../../hooks';
import styles from './callSettings.module.css';
import { useBloobirdsApiStateContext } from '@bloobirds-it/bloobirds-platform-react-api-library';
import { useUserSettings, useUserSettingsReload } from '../../../components/userPermissions/hooks';
import ConnectionCard from '../../../components/connectionCard';
import AddPhoneModal from './addPhoneModal';

const CallSettings = ({ handleChangeTab }) => {
  const [openAddPhoneModal, setOpenAddPhoneModal] = useState(false);
  const settings = useUserSettings();
  const reloadSettings = useUserSettingsReload();
  const { connections } = usePhoneConnections();
  const { activeUser } = useActiveUser();
  const { restApi } = useBloobirdsApiStateContext();
  const { createToast } = useToasts();
  const defaultValues = {
    callMethod: settings.user.incomingCallsForwarding ? 'phone' : 'web',
    defaultView: settings.user.dialerDefaultView || 'webDialer',
    enableLogCall: settings.user.enableLogCall,
  };
  const { connections: phoneConnections } = usePhoneConnections();
  const INFO_TOOLTIP_TEXT =
    "A private phone number is the number of your mobile device. When making calls with Bloobirds, we will call this number to connect you with the lead's number." +
    'Never your private number will be shown to the lead. Instead they will see the Bloobirds number assigned to your account.';

  const { handleSubmit, control, formState, reset } = useForm({
    defaultValues,
  });

  useEffect(() => {
    if (!connections.defaultConnection) {
      reset({ callMethod: 'web' });
    }
  }, [connections.defaultConnection]);

  const createIncomingCallsToast = () => {
    createToast({ type: 'success', message: 'Incoming calls method updated' });
  };

  const createDialerDefaulValueToast = () => {
    createToast({ type: 'success', message: 'Dialer default value updated' });
  };

  const onSubmit = async data => {
    const incomingCallsForwarding = data.callMethod === 'phone';
    const dialerDefaultView = data.defaultView;
    const enableLogCall = data.enableLogCall;
    await restApi
      .service('users')
      .partialUpdate(activeUser.id, { incomingCallsForwarding, dialerDefaultView, enableLogCall });

    if (defaultValues.callMethod !== data.callMethod) createIncomingCallsToast();

    if (defaultValues.defaultView !== data.dialerDefaultView) createDialerDefaulValueToast();

    reset({ callMethod: data.callMethod, dialerDefaultView: data.dialerDefaultView });
    reloadSettings();
  };

  return (
    <div className={styles._container} data-intercom="user-settings-page-call">
      <div className={styles._content__box}>
        <div className={styles._section__box}>
          <div className={styles._title__container}>
            <div className={styles._title__content}>
              <Text size="m" color="softPeanut" htmlTag="span">
                Your connected private phone numbers
              </Text>
            </div>
            <Tooltip title={INFO_TOOLTIP_TEXT} position="top">
              <Icon color="darkBloobirds" name="infoFilled" />
            </Tooltip>
            <div className={styles._add_phone__container}>
              <Button
                iconLeft="plus"
                variant="secondary"
                size="small"
                onClick={() => setOpenAddPhoneModal(true)}
              >
                Add phone
              </Button>
            </div>
          </div>
          {phoneConnections?.list?.length > 0 ? (
            <div className={styles._connections_container}>
              {phoneConnections.list.map(connection => (
                <ConnectionCard
                  data={connection}
                  key={`phone-${connection.phoneNumber}`}
                  type="phone"
                  isDefault={connection.phoneNumber === phoneConnections.defaultConnection}
                />
              ))}
            </div>
          ) : (
            <>
              {phoneConnections?.loaded ? (
                <Text color="softPeanut" size="s">
                  You don't have connected phone numbers
                </Text>
              ) : (
                <Spinner name="loadingCircle" />
              )}
            </>
          )}
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles._section__box}>
            <div className={styles._form__box}>
              <div className={styles._heading__wrapper}>
                <Text color="softPeanut" size="m" weight="medium">
                  How do you want to receive incoming calls?
                </Text>
              </div>
              <div className={styles._selector__wrapper}>
                <Controller
                  name="callMethod"
                  control={control}
                  as={
                    <Select width="448px">
                      <Item value="web">By web dialer</Item>
                      {connections.defaultConnection && (
                        <Item value="phone">
                          {`By phone call (${connections.defaultConnection})`}
                        </Item>
                      )}
                    </Select>
                  }
                />
              </div>
              <Text color="peanut" size="s">
                Managing your connected phone numbers and your default phone number for making
                calls, can be configured{' '}
                <span className={styles._link} onClick={() => handleChangeTab('Connections')}>
                  over here
                </span>
              </Text>
            </div>
          </div>
          <div className={styles._section__box}>
            <div className={styles._form__box}>
              <div className={styles._heading__wrapper}>
                <Text color="softPeanut" size="m" weight="medium">
                  Do you want to be able to log calls manually from the dialer?
                </Text>
              </div>
              <div className={styles._checkbox__wrapper}>
                <Controller
                  name="enableLogCall"
                  valueName="checked"
                  defaultValue="checked"
                  onChangeName="onClick"
                  control={control}
                  as={<Checkbox>Enable call log view manually</Checkbox>}
                />
              </div>
            </div>
            <div className={styles._form__box}>
              <div className={styles._heading__wrapper}>
                <Text color="softPeanut" size="m" weight="medium">
                  Select the daler default view
                </Text>
              </div>
              <div className={styles._selector__wrapper}>
                <Controller
                  name="defaultView"
                  control={control}
                  as={
                    <Select width="448px">
                      <Item value="webDialer">Call by web dialer</Item>
                      <Item value="logCall">Log calls manually</Item>
                    </Select>
                  }
                />
              </div>
            </div>
          </div>
          <div className={styles._buttons__container}>
            <Button type="submit" disabled={formState.isSubmitting || !formState.dirty}>
              Save Changes
            </Button>
          </div>
        </form>
        {openAddPhoneModal && (
          <AddPhoneModal open handleClose={() => setOpenAddPhoneModal(false)} />
        )}
      </div>
    </div>
  );
};

export default CallSettings;
