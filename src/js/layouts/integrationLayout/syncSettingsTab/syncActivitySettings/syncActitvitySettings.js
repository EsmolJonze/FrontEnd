import React, { useEffect, useMemo, useState } from 'react';
import styles from '../syncSettingsTab.module.css';
import {
  Checkbox,
  CheckItem,
  Icon,
  MultiSelect,
  Text,
} from '@bloobirds-it/bloobirds-platform-component-library';
import PropTypes from 'prop-types';
import SyncDealsHubspot from './syncDealsHubspot/syncDealsHubspot';

const ActivitiesSyncSettings = ({
  callResults,
  dealPipeline,
  accountLeadTrigger,
  accountMeetingTrigger,
  activities,
  callDisabled,
  canRenderActivities,
  crm,
  disabled,
  handleAccountActivity,
  handleAccountLead,
  handleAccountMeeting,
  handleDisabled,
  accountActivityTrigger,
  handleActivities,
  handleCallDisabled,
  accountMeetingTriggerActive,
  handleAccountMeetingTriggerActive,
}) => {
  const isHubspot = crm === 'Hubspot';
  const [isMeeting, setIsMeeting] = useState(accountMeetingTriggerActive);
  const reducedPipelines = useMemo(
    () =>
      dealPipeline?.reduce(
        (acc, curr) => ({
          ...acc,
          [curr.pipelineId]: curr.stages,
        }),
        {},
      ),
    [dealPipeline],
  );
  const setActivityType = (value, activityLogicRole) => {
    if (value) {
      handleAccountActivity({
        ...accountActivityTrigger,
        activityTypes: [...accountActivityTrigger.activityTypes, activityLogicRole],
      });
      handleAccountLead({
        ...accountLeadTrigger,
        activityTypes: [...accountActivityTrigger.activityTypes, activityLogicRole],
      });
    } else {
      accountActivityTrigger.activityTypes.map((activityType, index) => {
        if (activityType === activityLogicRole) {
          return accountActivityTrigger.activityTypes.splice(index, 1);
        }
        return true;
      });
      handleAccountActivity({
        ...accountActivityTrigger,
        activityTypes: accountActivityTrigger.activityTypes,
      });
      handleAccountLead({
        ...accountLeadTrigger,
        activityTypes: accountActivityTrigger.activityTypes,
      });
    }
  };
  const handleChangeActivityTypes = (value, type) => {
    switch (type) {
      case 'CALL':
        handleActivities({ ...activities, calls: value });
        handleCallDisabled(!callDisabled);
        setActivityType(value, 'ACTIVITY__TYPE__CALL');
        break;
      case 'EMAIL':
        handleActivities({ ...activities, email: value });
        setActivityType(value, 'ACTIVITY__TYPE__EMAIL');
        break;
      case 'NOTE':
        handleActivities({ ...activities, notes: value });
        setActivityType(value, 'ACTIVITY__TYPE__NOTE');
        break;
      case 'LINKEDIN_MESSAGE':
        handleActivities({ ...activities, linkedin: value });
        setActivityType(value, 'ACTIVITY__TYPE__LINKEDIN_MESSAGE');
        break;
      default:
        break;
    }
    handleDisabled({ ...disabled, isDisabledActivities: false });
  };
  useEffect(() => {
    setIsMeeting(activities.meeting);
  }, [activities]);
  return (
    <div className={styles.children_activities_container}>
      <div className={styles._children_small_checkbox}>
        <Text color="peanut" size="m" weight="bold">
          Send the following activities to {crm}:
        </Text>
        {canRenderActivities && (
          <>
            <Checkbox
              size="small"
              defaultChecked={activities.calls}
              onClick={value => handleChangeActivityTypes(value, 'CALL')}
            >
              Calls
            </Checkbox>
            <Checkbox
              size="small"
              defaultChecked={activities.email}
              onClick={value => handleChangeActivityTypes(value, 'EMAIL')}
            >
              Emails
            </Checkbox>
            <Checkbox
              size="small"
              defaultChecked={activities.linkedin}
              onClick={value => handleChangeActivityTypes(value, 'LINKEDIN_MESSAGE')}
            >
              {isHubspot
                ? 'LinkedIn messages (created in Hubspot as activities of type Email)'
                : 'LinkedIn messages'}
            </Checkbox>
            <Checkbox
              size="small"
              defaultChecked={activities.notes}
              onClick={value => handleChangeActivityTypes(value, 'NOTE')}
            >
              Notes
            </Checkbox>
            {isHubspot && (
              <Checkbox
                size="small"
                defaultChecked={accountMeetingTriggerActive}
                onClick={value => {
                  handleAccountMeetingTriggerActive(value);
                  handleDisabled({ ...disabled, isDisabledActivities: false });
                  setIsMeeting(value);
                }}
              >
                Meetings
              </Checkbox>
            )}
          </>
        )}
      </div>
      <div className={isHubspot && styles._children_multiselect_container}>
        <div className={styles._children_multiselect}>
          <Text color={callDisabled ? 'softPeanut' : 'peanut'} size="m" weight="bold">
            Only send calls with the following call results
          </Text>
          <Icon name="arrowRight" color="softPeanut" size="24" />
          {accountLeadTrigger && (
            <MultiSelect
              disabled={callDisabled}
              onChange={value => {
                handleDisabled({ ...disabled, isDisabledActivities: false });
                handleAccountLead(
                  isHubspot
                    ? {
                        ...accountLeadTrigger,
                        hubspotCallResults: value,
                      }
                    : {
                        ...accountLeadTrigger,
                        salesforceCallResults: value,
                      },
                );
                handleAccountActivity(
                  isHubspot
                    ? { ...accountActivityTrigger, hubspotCallResults: value }
                    : {
                        ...accountActivityTrigger,
                        salesforceCallResults: value,
                      },
                );
              }}
              defaultValue={
                isHubspot
                  ? accountLeadTrigger.hubspotCallResults
                  : accountLeadTrigger.salesforceCallResults
              }
            >
              {Object.entries(callResults)?.map(callResult => (
                <CheckItem value={callResult[1].logicRole}>{callResult[0]}</CheckItem>
              ))}
            </MultiSelect>
          )}
        </div>
      </div>
      {accountLeadTrigger && (
        <>
          <div className={isHubspot && styles._children_medium_checkbox_container}>
            <div className={styles._children_medium_checkbox}>
              <Checkbox
                size="medium"
                defaultChecked={accountLeadTrigger.mustHaveCallRecording}
                disabled={callDisabled}
                onClick={() => {
                  handleAccountLead({
                    ...accountLeadTrigger,
                    mustHaveCallRecording: !accountLeadTrigger.mustHaveCallRecording,
                  });
                  handleAccountActivity({
                    ...accountActivityTrigger,
                    mustHaveCallRecording: !accountActivityTrigger.mustHaveCallRecording,
                  });
                  handleDisabled({ ...disabled, isDisabledActivities: false });
                }}
                expand
              >
                Only send calls when they have a recording included
              </Checkbox>
              {!isHubspot && (
                <Checkbox
                  size="medium"
                  defaultChecked={accountLeadTrigger.addCallRecording === true}
                  disabled={callDisabled}
                  onClick={() => {
                    handleAccountLead({
                      ...accountLeadTrigger,
                      addCallRecording: !accountLeadTrigger.addCallRecording,
                    });
                    handleAccountActivity({
                      ...accountActivityTrigger,
                      addCallRecording: !accountActivityTrigger.addCallRecording,
                    });
                    handleDisabled({ ...disabled, isDisabledActivities: false });
                  }}
                  expand
                >
                  Include the associated call recording within the call recording description
                </Checkbox>
              )}
            </div>
          </div>
          {isHubspot && (
            <SyncDealsHubspot
              accountMeetingTrigger={accountMeetingTrigger}
              handleMeetingTrigger={handleAccountMeeting}
              dealPipeline={dealPipeline}
              disabled={disabled}
              handleDisabled={handleDisabled}
              stages={reducedPipelines}
              isMeeting={isMeeting}
            />
          )}
        </>
      )}
    </div>
  );
};
export default ActivitiesSyncSettings;

ActivitiesSyncSettings.propTypes = {
  accountLeadTrigger: PropTypes.any,
  activities: PropTypes.shape({
    calls: PropTypes.bool,
    email: PropTypes.bool,
    linkedin: PropTypes.bool,
    notes: PropTypes.bool,
  }),
  callDisabled: PropTypes.bool,
  canRenderActivities: PropTypes.bool,
};
