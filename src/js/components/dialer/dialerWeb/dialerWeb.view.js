import React, { useEffect, useCallback, useState } from 'react';
import classNames from 'clsx';
import * as Sentry from '@sentry/react';
import debounce from 'lodash/debounce';
import {
  Icon,
  IconButton,
  Input,
  Item,
  Label,
  Section,
  Select,
  Text,
  TextArea,
} from '@bloobirds-it/bloobirds-platform-component-library';
import { useBloobirdsApiStateContext } from '@bloobirds-it/bloobirds-platform-react-api-library';
import { usePhoneConnections, useRouter, useTimer } from '../../../hooks';
import { APP_MANAGEMENT_USER, companyUrl, leadUrl } from '../../../app/_constants/routes';
import { getFiledsByType, getValueFromLogicRole } from '../../../utils/bobjects.utils';
import { formatSecondToElapsedTime } from '../../../utils/dates.utils';
import { openNewTab } from '../../../utils/url.utils';
import { isValidPhone } from '../../../utils/phone.utils';
import { useUserSettings } from '../../userPermissions/hooks';
import { useSetCallFromPhoneSubscriptions } from '../useCallFromPhoneSubscriptions';
import { CALL_STATE, CALL_STATE_MESSAGE } from '../dialer.constants';
import {
  isCallConnecting,
  isCallEnded,
  isCallIncoming,
  isCallIncomingToSDRPhone,
  isCallInCourse,
  isDeviceReady,
} from '../dialer.utils';
import { callFromPhone } from '../dialer.service';
import CallButtonView from '../callButton';
import Keypad from '../keypad';
import styles from './dialerWeb.module.css';

const generateQualityMessage = (callFromDialer, warnings, callMethod) => {
  let connectionQualityMessage;
  if (callFromDialer) {
    connectionQualityMessage =
      warnings.length > 0 ? 'The connection is unstable' : 'Network quality is very good';
  } else {
    connectionQualityMessage = `Connected to phone (${callMethod})`;
  }
  return connectionQualityMessage;
};

const DialerTimer = ({ status }) => {
  const { seconds, startTimer, pauseTimer, stopTimer } = useTimer();

  useEffect(() => {
    if (status === 'stopped') {
      stopTimer();
    } else if (status === 'paused') {
      pauseTimer();
    } else if (status === 'playing') {
      startTimer();
    }
  }, [status]);

  return (
    <Text size="m" color="white" align="center">
      {formatSecondToElapsedTime(seconds)}
    </Text>
  );
};

const DialerWeb = ({
  activity,
  company,
  context,
  dialerState,
  fromPhoneNumber,
  inputPhoneNumber,
  isCallMuted,
  isKeypadVisible,
  keypadRef,
  leads,
  newPhones,
  selectedLead,
  selectedUserPhone,
  send,
  setInputPhoneNumber,
  setIsCallMuted,
  setIsKeypadVisible,
  setSelectedUserPhone,
  setShowErrorModal,
  timerStatus,
  updateActivity,
  updateSelectedLead,
  selectedConnectionPhone,
  setSelectedConnectionPhone,
}) => {
  const settings = useUserSettings();
  const { webApi } = useBloobirdsApiStateContext();

  const { connection, device, isIncomingCall, leadConnected, message, warnings } = context;

  const { connections } = usePhoneConnections();
  const [callMethod, setCallMethod] = useState(
    settings?.user.incomingCallsForwarding ? connections.defaultConnection : 'dialer',
  );

  useSetCallFromPhoneSubscriptions(
    send,
    !!settings?.user.incomingCallsForwarding || callMethod !== 'dialer',
  );

  const { history } = useRouter();

  const companyPhoneNumbers = getFiledsByType(company, 'PHONE').filter(phone => !!phone.value);
  const leadPhoneNumbers = getFiledsByType(selectedLead, 'PHONE').filter(phone => !!phone.value);
  const selectedLeadName = getValueFromLogicRole(selectedLead, 'LEAD__FULL_NAME', true);
  const companyName = getValueFromLogicRole(company, 'COMPANY__NAME');

  const endCall = () => {
    device.disconnectAll();
    connection.reject();
  };

  const acceptCall = () => {
    connection.accept();
  };

  const callFromDialer = callMethod === 'dialer';
  const makeCall = () => {
    if (callFromDialer) {
      try {
        const data = {
          companyId: company?.id.value,
          twilioPhone: selectedUserPhone,
          leadPhone: inputPhoneNumber,
          userId: settings?.user.id,
          isOutgoing: true,
        };

        if (selectedLead?.id.value) {
          data.leadId = selectedLead?.id.value;
        }
        const callConnection = device.connect(data);
        send('makeCall', { connection: callConnection });
      } catch (e) {
        setShowErrorModal(true);
        Sentry.captureException(e, {
          tags: {
            module: 'dialer',
          },
          extra: {
            origin: 'Dialer on make call',
          },
        });
      }
    } else {
      send('makeFromPhoneCall');
      callFromPhone(webApi, {
        twilioPhone: selectedUserPhone,
        leadPhone: inputPhoneNumber,
        sdrPhone: callMethod,
        leadId: selectedLead?.id.value,
        companyId: company?.id.value,
      }).catch(() => send('callFailed'));
    }
  };

  const handleVisitContactView = () => {
    if (company) {
      history.push(companyUrl(company));
    } else if (selectedLead) {
      history.push(leadUrl(selectedLead));
    }
  };

  const connectionQualityMessage = generateQualityMessage(callFromDialer, warnings, callMethod);

  const saveNote = (note, activityId) => {
    const data = {
      ACTIVITY__NOTE: note,
    };
    return updateActivity(activityId, data);
  };

  const debouncedSaveNote = useCallback(
    debounce((note, id) => {
      saveNote(note, id).catch(() => {
        const error = new Error(
          id
            ? `Failed to save the dialer note with the activity id: ${id}`
            : 'Tried to save a note without activity ID on the dialer view',
        );
        Sentry.captureException(error, {
          tags: {
            module: 'dialer',
          },
          extra: {
            origin: 'Dialer on a call',
          },
        });
      });
    }, 2000),
    [],
  );

  return (
    <>
      <div className={styles._input__container__link}>
        <Input
          placeholder="Company"
          value={companyName || 'Unknown company'}
          width="100%"
          inline
          darkMode
          disabled
        />
        <div className={styles._company_link} onClick={handleVisitContactView}>
          <Icon name="arrowRight" color="white" size={16} />
        </div>
      </div>
      <div className={styles._input__container}>
        <Select
          placeholder="Lead"
          width="100%"
          value={selectedLead?.id.value || 'unknownLead'}
          darkMode
          onChange={value => updateSelectedLead(value)}
          disabled={leads.length === 0 || isIncomingCall}
        >
          {leads.length > 0 ? (
            leads.map(lead => (
              <Item value={lead.id.value} key={`lead-${lead.id.value}`}>
                {getValueFromLogicRole(lead, 'LEAD__FULL_NAME', true)}
              </Item>
            ))
          ) : (
            <Item value="unknownLead">Unknown lead</Item>
          )}
        </Select>
      </div>
      <div className={styles._input__container}>
        <Select
          placeholder="Phone number"
          value={selectedConnectionPhone || fromPhoneNumber}
          onChange={value => {
            setInputPhoneNumber(value);
            setSelectedConnectionPhone(value);
          }}
          width="100%"
          darkMode
          disabled={isIncomingCall}
        >
          {leadPhoneNumbers.length > 0 && <Section icon="person">{selectedLeadName}</Section>}
          {leadPhoneNumbers.length > 0 &&
            leadPhoneNumbers.map(phone => (
              <Item key={`lead-phone-${phone.value}`} value={phone.value}>
                {phone.value}
              </Item>
            ))}
          {companyPhoneNumbers.length > 0 && <Section icon="company">{companyName}</Section>}
          {companyPhoneNumbers.length > 0 &&
            companyPhoneNumbers.map(phone => (
              <Item key={`company-phone-${phone.value}`} value={phone.value}>
                {phone.value}
              </Item>
            ))}
          {!selectedConnectionPhone && <Item value={fromPhoneNumber}>{fromPhoneNumber}</Item>}
        </Select>
      </div>
      <div className={styles._phone__container}>
        <input
          className={styles._phone_number}
          value={isIncomingCall ? fromPhoneNumber : inputPhoneNumber}
          disabled={isIncomingCall}
          onPaste={event => {
            setInputPhoneNumber(event.target.value.replace(/[^0-9, ^+]/g, ''));
          }}
          onChange={event => {
            setInputPhoneNumber(event.target.value);
          }}
          onKeyDown={event => {
            const { keyCode, key, ctrlKey, metaKey } = event;
            const allowCode = [187, 37, 39, 46, 8, 107];

            if ((ctrlKey || metaKey) && (key === 'c' || key === 'x' || key === 'v')) {
              return;
            }

            if (
              (keyCode < 48 || keyCode > 57) &&
              (keyCode < 96 || keyCode > 105) &&
              allowCode.indexOf(keyCode) === -1
            ) {
              event.preventDefault();
            }
          }}
        />
      </div>
      <div className={styles._input__container}>
        <Select
          placeholder="Your Bloobirds number"
          defaultValue={selectedUserPhone}
          width="100%"
          darkMode
          onChange={value => setSelectedUserPhone(value)}
          disabled={isIncomingCall}
        >
          {newPhones && newPhones.length > 0 ? (
            newPhones.map(phone => (
              <Item key={`available-phone-${phone.value}`} value={phone}>
                {phone}
              </Item>
            ))
          ) : (
            <Item value="no-twilio-phone">Your account does not have an active phone number</Item>
          )}
        </Select>
      </div>
      <div className={styles._buttons__container}>
        <Keypad
          anchor={
            <IconButton
              name="dragAndDrop"
              color="white"
              onClick={() => setIsKeypadVisible(!isKeypadVisible)}
            />
          }
          handleClose={() => setIsKeypadVisible(!isKeypadVisible)}
          innerRef={keypadRef}
          isCallInCourse={isCallInCourse(dialerState)}
          handleKeyPress={value => {
            if (value === 'backspace') {
              setInputPhoneNumber(inputPhoneNumber.slice(0, -1));
              return null;
            }
            setInputPhoneNumber(`${inputPhoneNumber || ''}${value}`);
            return connection?.sendDigits(value?.toString());
          }}
          visible={isKeypadVisible}
        />
        <CallButtonView
          acceptCall={acceptCall}
          endCall={endCall}
          greenControlDisabled={
            !isCallIncoming(dialerState) && (!selectedUserPhone || !isValidPhone(inputPhoneNumber))
          }
          makeCall={makeCall}
          redControlDisabled={callMethod !== 'dialer'}
          state={dialerState}
        />
        {!isCallMuted ? (
          <IconButton
            name="voiceOn"
            color="white"
            disabled={!callFromDialer || !isCallInCourse(dialerState)}
            onClick={() => {
              connection.mute(true);
              setIsCallMuted(true);
            }}
          />
        ) : (
          <IconButton
            name="voiceOff"
            color="white"
            onClick={() => {
              connection.mute(false);
              setIsCallMuted(false);
            }}
          />
        )}
      </div>
      {(isCallConnecting(dialerState) ||
        isCallInCourse(dialerState) ||
        isCallIncomingToSDRPhone(dialerState)) &&
        (isCallInCourse(dialerState) ? (
          <DialerTimer status={timerStatus} />
        ) : (
          <Text size="m" color="white" align="center">
            {
              CALL_STATE_MESSAGE[
                `${dialerState}${
                  leadConnected && dialerState === CALL_STATE.CALL_CONNECTING ? '_LEAD' : ''
                }`
              ]
            }
          </Text>
        ))}
      {isCallIncomingToSDRPhone(dialerState) && (
        <div className={styles._answerFromPhone__container}>
          <Text color="verySoftPeanut" size="xs">
            You can answer with your phone
          </Text>
        </div>
      )}
      {isDeviceReady(dialerState) && (
        <div className={styles._call_method__container} data-intercom="dailer-call-method">
          <Select
            size="small"
            value={callMethod}
            width={256}
            darkMode
            onChange={value => setCallMethod(value)}
          >
            <Item value="dialer">Call from browser</Item>
            {connections.list.map(phoneConnection => (
              <Item
                key={`phone-connection-${phoneConnection.phoneNumber}`}
                value={phoneConnection.phoneNumber}
              >
                Call via phone ({phoneConnection.phoneNumber})
              </Item>
            ))}
            <Item onClick={() => openNewTab(APP_MANAGEMENT_USER, { tab: 4 })}>
              <Text color="bloobirds" size="s">
                Add phone option
              </Text>
            </Item>
          </Select>
        </div>
      )}
      {((isCallInCourse(dialerState) && !callFromDialer) ||
        (!isCallEnded(dialerState) && callFromDialer)) && (
        <div className={styles._call_quality_message__container}>
          <span
            className={classNames(styles._call_quality_container, {
              [styles._call_quality_container__ok]: warnings.length === 0,
              [styles._call_quality_container__warning]: warnings.length > 0,
            })}
          />
          <Text size="xs" color="verySoftPeanut" align="center">
            {connectionQualityMessage}
          </Text>
        </div>
      )}
      {isCallEnded(dialerState) && (
        <div className={styles._call_ended_message__container}>
          <Label
            overrideStyle={{
              backgroundColor: 'var(--verySoftTomato)',
              color: 'var(--tomato)',
              border: '1px solid var(--verySoftTomato)',
            }}
          >
            {message || 'Call Ended'}
          </Label>
        </div>
      )}
      {(isCallEnded(dialerState) || isCallInCourse(dialerState)) && activity && (
        <div>
          <TextArea
            rows="5"
            placeholder="Add a note..."
            width="100%"
            darkMode
            onBlur={event => {
              const value = event.target.value;
              saveNote(value, activity.id.objectId);
            }}
            onChange={note => debouncedSaveNote(note, activity.id.objectId)}
          />
        </div>
      )}
      <div className={styles._footer_message__container}>
        <Icon name="info" />
        <Text size="xs" color="verySoftPeanut">
          Having connection problems? Check Twilio's setup
        </Text>
      </div>
    </>
  );
};

export default DialerWeb;
