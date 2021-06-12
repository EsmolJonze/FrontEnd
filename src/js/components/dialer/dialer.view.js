import React, { useEffect, useMemo, useState } from 'react';
import classnames from 'clsx';
import {
  IconButton,
  Tab,
  TabGroup,
  Text,
  useVisible,
} from '@bloobirds-it/bloobirds-platform-component-library';
import { getValueFromLogicRole } from '../../utils/bobjects.utils';
import { isCompanyPage, isLeadPage } from '../../utils/pages.utils';
import { useUserSettings } from '../userPermissions/hooks';
import {
  useActiveCompany,
  useCompany,
  useDialer,
  usePhoneConnections,
  useRouter,
} from '../../hooks';
import {
  isCallActive,
  isCallEnded,
  isCallIncoming,
  isCallIncomingToSDRPhone,
  isCallInCourse,
} from './dialer.utils';
import { useSetCallFromPhoneSubscriptions } from './useCallFromPhoneSubscriptions';
import CallErrorModalView from './callErrorModal';
import LogCallTab from './logCallTab';
import DialerWeb from './dialerWeb';
import styles from './dialer.module.css';

const TABS = Object.freeze({
  webDialer: 'Dialer',
  logCall: 'Log call',
});

const DialerView = () => {
  const settings = useUserSettings();
  const [selectedTab, setSelectedTab] = useState();
  const { company: activeCompany } = useActiveCompany();

  const {
    activity,
    company,
    context,
    handleCloseDialer,
    isOpen,
    leads,
    openDialer,
    selectedLead,
    send,
    getCompanyById,
    updateActivity,
    updateLeadsByCompany,
    updateSelectedLead,
    value: dialerState,
  } = useDialer();

  const { connection, errors, isIncomingCall } = context;
  const { connections, phonesList } = usePhoneConnections();
  const [newPhones, setNewPhones] = useState();

  const [fromPhoneNumber, setFromPhoneNumber] = useState('');
  const [isCallMuted, setIsCallMuted] = useState(false);
  const [callMethod, setCallMethod] = useState(
    settings?.user.incomingCallsForwarding ? connections.defaultConnection : 'dialer',
  );

  useSetCallFromPhoneSubscriptions(
    send,
    !!settings?.user.incomingCallsForwarding || callMethod !== 'dialer',
  );

  const selectedLeadPhoneNumber = getValueFromLogicRole(selectedLead, 'LEAD__PHONE');
  const [selectedConnectionPhone, setSelectedConnectionPhone] = useState(selectedLeadPhoneNumber);
  const [inputPhoneNumber, setInputPhoneNumber] = useState(selectedConnectionPhone);

  const { ref: keypadRef, visible: isKeypadVisible, setVisible: setIsKeypadVisible } = useVisible();

  const [selectedUserPhone, setSelectedUserPhone] = useState(
    newPhones?.length > 0 ? newPhones[0] : 'no-twilio-phone',
  );
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [timerStatus, setTimerStatus] = useState('stopped');

  const { pathname } = useRouter();
  const callActive = isCallActive(dialerState);
  const { resetCompany: resetDialerCompany } = useCompany('dialer');

  useEffect(() => {
    if (phonesList?.phones) {
      setNewPhones(phonesList?.phones.map(phone => phone.phoneNumber));
    }
  }, [phonesList?.phones]);

  useEffect(() => {
    if (errors.length >= 1) {
      setShowErrorModal(true);
    }
  }, [errors.length]);

  useEffect(() => {
    const defaultTab = settings?.user?.dialerDefaultView;
    setSelectedTab(TABS[defaultTab] || TABS.webDialer);
  }, [settings?.user]);

  useEffect(() => {
    if (isOpen) {
      setTimerStatus('stopped');
      setCallMethod(
        settings?.user.incomingCallsForwarding ? connections.defaultConnection : 'dialer',
      );
      if (isLeadPage(pathname)) {
        resetDialerCompany();
      } else if (
        activeCompany?.id.objectId !== company?.id.objectId &&
        (!isCallInCourse(dialerState) && !isCallIncoming(dialerState))
      ) {
        getCompanyById(activeCompany?.id.objectId);
        updateLeadsByCompany(activeCompany?.id.value);
      }
    }
  }, [isOpen]);

  useEffect(() => {
    if (leads.length > 0 && !selectedLead) {
      updateSelectedLead(leads[0]?.id.value);
    }
  }, [leads, isOpen]);

  useEffect(() => {
    if (connection && isCallIncoming(dialerState)) {
      setFromPhoneNumber(connection.parameters.From);
    }
  }, [connection?.parameters.From]);

  useEffect(() => {
    if (isCallInCourse(dialerState)) {
      setTimerStatus('playing');
    }

    if (isCallEnded(dialerState)) {
      setTimerStatus('paused');
      setIsCallMuted(false);
    }

    if (isCallIncoming(dialerState) || isCallIncomingToSDRPhone(dialerState)) {
      openDialer();
      setSelectedTab(TABS.webDialer);
    }

    if (isOpen && !callActive) {
      const isSelectedLeadPage =
        isLeadPage(pathname) && pathname.includes(selectedLead?.id.objectId);
      const isSelectedCompanyPage =
        isCompanyPage(pathname) && pathname.includes(company?.id.objectId);
      if (
        (!isCompanyPage(pathname) && !isLeadPage(pathname)) ||
        (isCompanyPage(pathname) && !isSelectedCompanyPage) ||
        (isLeadPage(pathname) && !isSelectedLeadPage)
      ) {
        handleCloseDialer();
        setIsKeypadVisible(false);
      }
    }
  }, [dialerState, pathname]);

  useEffect(() => {
    setSelectedConnectionPhone(selectedLeadPhoneNumber);
  }, [selectedLead?.id.objectId]);

  useEffect(() => setSelectedConnectionPhone(selectedLeadPhoneNumber), [selectedLeadPhoneNumber]);

  useEffect(() => {
    if (newPhones?.length > 0) {
      setSelectedUserPhone(newPhones[0]);
    }
  }, [newPhones]);

  useEffect(() => {
    setInputPhoneNumber(isIncomingCall ? fromPhoneNumber : selectedConnectionPhone || '');
  }, [isIncomingCall, fromPhoneNumber, selectedConnectionPhone]);

  useEffect(() => {
    if (!isOpen) {
      const defaultTab = settings?.user?.dialerDefaultView;
      setSelectedTab(TABS[defaultTab] || TABS.webDialer);
    }
  }, [isOpen]);

  const errorCode = useMemo(() => (errors[0] ? errors[0].connection.code : 10001), [
    showErrorModal,
  ]);

  return (
    <>
      {showErrorModal && (
        <CallErrorModalView
          open={showErrorModal}
          errorCode={errorCode}
          close={() => setShowErrorModal(false)}
        />
      )}
      {isOpen && (
        <>
          <div className={styles._empty_space} />
          <div
            className={classnames(styles._container, {
              [styles._tab_container]: settings?.user?.enableLogCall,
            })}
            data-intercom="dialer-container"
          >
            {settings?.user?.enableLogCall ? (
              <>
                {!isCallInCourse(dialerState) && (
                  <div className={styles._close_icon__container}>
                    <IconButton
                      name="cross"
                      color="white"
                      onClick={() => {
                        handleCloseDialer();
                        setIsKeypadVisible(false);
                      }}
                    />
                  </div>
                )}
                <TabGroup value={selectedTab} onClick={setSelectedTab}>
                  <Tab color="white" name="Dialer">
                    <div className={styles._tab_content}>
                      <DialerWeb
                        activity={activity}
                        company={company}
                        context={context}
                        dialerState={dialerState}
                        fromPhoneNumber={fromPhoneNumber}
                        inputPhoneNumber={inputPhoneNumber}
                        isCallMuted={isCallMuted}
                        isKeypadVisible={isKeypadVisible}
                        keypadRef={keypadRef}
                        leads={leads}
                        newPhones={newPhones}
                        selectedConnectionPhone={selectedConnectionPhone}
                        selectedLead={selectedLead}
                        selectedUserPhone={selectedUserPhone}
                        send={send}
                        setInputPhoneNumber={setInputPhoneNumber}
                        setIsCallMuted={setIsCallMuted}
                        setIsKeypadVisible={setIsKeypadVisible}
                        setSelectedConnectionPhone={setSelectedConnectionPhone}
                        setSelectedUserPhone={setSelectedUserPhone}
                        setShowErrorModal={setShowErrorModal}
                        timerStatus={timerStatus}
                        updateActivity={updateActivity}
                        updateSelectedLead={updateSelectedLead}
                      />
                    </div>
                  </Tab>
                  <Tab color="white" name="Log call" disabled={isCallActive(dialerState)}>
                    <LogCallTab
                      availablePhones={newPhones}
                      handleClose={handleCloseDialer}
                      leads={leads}
                      selectedLead={selectedLead}
                      updateSelectedLead={updateSelectedLead}
                      inputPhoneNumber={inputPhoneNumber}
                      selectedConnectionPhone={selectedConnectionPhone}
                      setInputPhoneNumber={setInputPhoneNumber}
                      setSelectedConnectionPhone={setSelectedConnectionPhone}
                    />
                  </Tab>
                </TabGroup>
              </>
            ) : (
              <>
                <div className={styles._header__container}>
                  <div className={styles._title__container}>
                    <Text color="softPeanut" size="m">
                      Dialer
                    </Text>
                  </div>
                  {!isCallInCourse(dialerState) && (
                    <div className={styles._close_icon__container}>
                      <IconButton
                        name="cross"
                        color="white"
                        onClick={() => {
                          handleCloseDialer();
                          setIsKeypadVisible(false);
                        }}
                      />
                    </div>
                  )}
                </div>
                <DialerWeb
                  activity={activity}
                  company={company}
                  context={context}
                  dialerState={dialerState}
                  fromPhoneNumber={fromPhoneNumber}
                  inputPhoneNumber={inputPhoneNumber}
                  isCallMuted={isCallMuted}
                  isKeypadVisible={isKeypadVisible}
                  keypadRef={keypadRef}
                  leads={leads}
                  newPhones={newPhones}
                  selectedConnectionPhone={selectedConnectionPhone}
                  selectedLead={selectedLead}
                  selectedUserPhone={selectedUserPhone}
                  send={send}
                  setInputPhoneNumber={setInputPhoneNumber}
                  setIsCallMuted={setIsCallMuted}
                  setIsKeypadVisible={setIsKeypadVisible}
                  setSelectedConnectionPhone={setSelectedConnectionPhone}
                  setSelectedUserPhone={setSelectedUserPhone}
                  setShowErrorModal={setShowErrorModal}
                  timerStatus={timerStatus}
                  updateActivity={updateActivity}
                  updateSelectedLead={updateSelectedLead}
                />
              </>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default DialerView;
