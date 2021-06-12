import React, { useEffect, useMemo, useState } from 'react';
import { CheckItem } from '@bloobirds-it/bloobirds-platform-component-library';
import PropTypes from 'prop-types';
import SyncSettingsCard from './syncSettingsCard/syncSettingsCard';
import LeadSyncSettings from './syncLeadSettings/syncLeadSettings';
import ActivitiesSyncSettings from './syncActivitySettings/syncActitvitySettings';
import AccountSyncSettings from './syncAccountSettings/syncAccountSettings';

const SyncSettingsTab = ({
  handleSubmit,
  accountTriggers,
  standardTriggers,
  salesforceUsers,
  leadStatus,
  callResults,
  dealPipeline,
  triggerActivity,
  triggerLead,
  activeIntegration,
  triggerMeeting,
  crm,
  disconnectIntegration,
}) => {
  const [disabled, setDisabled] = useState({
    isDisabledLead: true,
    isDisabledActivities: true,
    isDisabledSalesforceAccount: true,
  });
  const [activities, setActivities] = useState({
    calls: false,
    email: false,
    linkedin: false,
    notes: false,
    meeting: false,
  });
  const isHubspot = crm === 'Hubspot';
  const [callDisabled, isCallDisabled] = useState(true);
  const [canRenderActivities, setCanRenderActivities] = useState(false);
  const [accountLeadTrigger, setAccountLeadTrigger] = useState(
    accountTriggers[standardTriggers[triggerLead]].jsonConfig,
  );
  const [accountActivityTrigger, setAccountActivityTrigger] = useState(
    accountTriggers[standardTriggers[triggerActivity]].jsonConfig,
  );
  const [accountMeetingTrigger, setAccountMeetingTrigger] = useState(
    isHubspot && accountTriggers[standardTriggers[triggerMeeting]].jsonConfig,
  );
  const [accountMeetingTriggerActive, setAccountMeetingTriggerActive] = useState(
    isHubspot && accountTriggers[standardTriggers[triggerMeeting]].active,
  );

  const [accountSetting, setAccountSetting] = useState(
    isHubspot ? activeIntegration.apiKey : activeIntegration.salesforceUser,
  );
  const [leadContactFlow, setLeadContactFlow] = useState(undefined);

  const mappedLeadStatus = useMemo(
    () => leadStatus?.map(status => <CheckItem value={status.logicRole}>{status.value}</CheckItem>),
    [leadStatus],
  );
  const handleChangeLeadContactFlow = flow => {
    switch (flow) {
      case 'alwaysCreateLead':
        setAccountLeadTrigger({
          ...accountLeadTrigger,
          alwaysCreateLead: true,
          alwaysCreateContact: false,
        });
        break;
      case 'alwaysCreateContact':
        setAccountLeadTrigger({
          ...accountLeadTrigger,
          alwaysCreateContact: true,
          alwaysCreateLead: false,
        });
        break;
      case 'createLeadOrContact':
        setAccountLeadTrigger({
          ...accountLeadTrigger,
          alwaysCreateLead: false,
          alwaysCreateContact: false,
        });
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (accountLeadTrigger.alwaysCreateLead) {
      setLeadContactFlow('alwaysCreateLead');
    } else if (accountLeadTrigger.alwaysCreateContact) {
      setLeadContactFlow('alwaysCreateContact');
    } else if (!accountLeadTrigger.alwaysCreateLead && !accountLeadTrigger.alwaysCreateContact) {
      setLeadContactFlow('createLeadOrContact');
    }
  }, [accountLeadTrigger]);

  useEffect(() => {
    let activityTypes = {
      calls: false,
      email: false,
      linkedin: false,
      notes: false,
      meeting: false,
    };
    accountLeadTrigger.activityTypes.map(type => {
      switch (type) {
        case 'ACTIVITY__TYPE__CALL':
          activityTypes = { ...activityTypes, calls: true };
          isCallDisabled(false);
          break;
        case 'ACTIVITY__TYPE__EMAIL':
          activityTypes = { ...activityTypes, email: true };
          break;
        case 'ACTIVITY__TYPE__NOTE':
          activityTypes = { ...activityTypes, notes: true };
          break;
        case 'ACTIVITY__TYPE__LINKEDIN_MESSAGE':
          activityTypes = { ...activityTypes, linkedin: true };
          break;
        case 'ACTIVITY__TYPE__MEETING':
          activityTypes = { ...activityTypes, meeting: true };
          break;
        default:
          break;
      }
      return true;
    });
    setActivities(activityTypes);
    setCanRenderActivities(true);
  }, []);
  return (
    <>
      <SyncSettingsCard
        icon="personAdd"
        isDisabled={disabled.isDisabledLead}
        onSave={() => {
          handleSubmit({ triggerLead: accountLeadTrigger });
          setDisabled({ ...disabled, isDisabledLead: true });
        }}
        title={isHubspot ? 'Creating contacts' : 'Creating leads / contacts'}
      >
        <LeadSyncSettings
          crm={crm}
          accountTriggers={accountTriggers}
          standardTriggers={standardTriggers}
          value={leadContactFlow}
          onChange={value => {
            handleChangeLeadContactFlow(value);
            setDisabled({ ...disabled, isDisabledLead: false });
          }}
          accountLeadTrigger={accountLeadTrigger}
          onChange1={value => {
            setDisabled({ ...disabled, isDisabledLead: false });
            setAccountLeadTrigger({ ...accountLeadTrigger, leadStatus: value });
          }}
          mappedLeadStatus={mappedLeadStatus}
          onClick={() => {
            setAccountLeadTrigger({
              ...accountLeadTrigger,
              searchExistingLead: !accountLeadTrigger.searchExistingLead,
            });
            setDisabled({ ...disabled, isDisabledLead: false });
          }}
        />
      </SyncSettingsCard>
      <SyncSettingsCard
        icon="activity"
        title="Syncing Activities"
        isDisabled={disabled.isDisabledActivities}
        onSave={() => {
          handleSubmit({
            triggerLead: accountLeadTrigger,
            triggerActivities: accountActivityTrigger,
            triggerMeeting: {
              jsonConfig: accountMeetingTrigger,
              active: accountMeetingTriggerActive,
            },
          });
          setDisabled({ ...disabled, isDisabledActivities: true });
        }}
      >
        <ActivitiesSyncSettings
          crm={crm}
          canRenderActivities={canRenderActivities}
          activities={activities}
          callDisabled={callDisabled}
          accountLeadTrigger={accountLeadTrigger}
          accountActivityTrigger={accountActivityTrigger}
          accountMeetingTrigger={accountMeetingTrigger}
          callResults={callResults}
          dealPipeline={dealPipeline}
          handleAccountLead={setAccountLeadTrigger}
          handleAccountActivity={setAccountActivityTrigger}
          handleAccountMeeting={setAccountMeetingTrigger}
          handleDisabled={setDisabled}
          disabled={disabled}
          handleActivities={setActivities}
          handleCallDisabled={isCallDisabled}
          accountMeetingTriggerActive={accountMeetingTriggerActive}
          handleAccountMeetingTriggerActive={setAccountMeetingTriggerActive}
        />
      </SyncSettingsCard>
      <SyncSettingsCard
        onSave={() => {
          handleSubmit({ userEmail: accountSetting });
          setDisabled({ ...disabled, isDisabledSalesforceAccount: true });
        }}
        isDisabled={disabled.isDisabledSalesforceAccount}
        icon="person"
        title={`${crm} account`}
        email
        crm={crm}
        disconnectIntegration={disconnectIntegration}
      >
        <AccountSyncSettings
          crm={crm}
          activeIntegration={activeIntegration}
          mappedSalesforceUsers={salesforceUsers}
          defaultValue={accountSetting}
          handleDisabled={setDisabled}
          disabled={disabled}
          handleAccountSettings={setAccountSetting}
        />
      </SyncSettingsCard>
    </>
  );
};
SyncSettingsTab.propTypes = {
  accountTriggers: PropTypes.object,
  handleSubmit: PropTypes.func,
  standardTriggers: PropTypes.object,
};
export default SyncSettingsTab;
