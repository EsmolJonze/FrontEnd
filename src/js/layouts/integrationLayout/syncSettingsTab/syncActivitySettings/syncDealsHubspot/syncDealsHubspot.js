import React, { useMemo, useState } from 'react';
import {
  Callout,
  Checkbox,
  CheckItem,
  Chip,
  ChipGroup,
  Icon,
  Item,
  MultiSelect,
  Select,
  Text,
} from '@bloobirds-it/bloobirds-platform-component-library';
import PropTypes from 'prop-types';
import styles from './syncDealsHubspot.css';
import { usePicklistValues } from '../../../../../hooks';

const SyncDealsHubspot = ({
  accountMeetingTrigger,
  dealPipeline,
  handleDisabled,
  disabled,
  stages,
  handleMeetingTrigger,
  isMeeting,
}) => {
  const [disableSelects, setDisabledSelects] = useState(!accountMeetingTrigger.createDeal);
  const [selectedStages, setSelectedStages] = useState(stages[accountMeetingTrigger.dealPipeline]);
  const [disableCallOut, setDisableCallOut] = useState(!accountMeetingTrigger.sendMeetingType);
  const mappedStages = useMemo(
    () => selectedStages?.map(stage => <Item value={stage.stageId}>{stage.label}</Item>),
    [selectedStages],
  );
  const mappedPipelines = useMemo(
    () => dealPipeline?.map(pipeline => <Item value={pipeline.pipelineId}>{pipeline.label}</Item>),
    [dealPipeline],
  );
  const defaultStage = useMemo(() => accountMeetingTrigger?.dealStage, [accountMeetingTrigger]);
  const meetingTypes = usePicklistValues({ picklistLogicRole: 'MEETING__TYPE' });
  const mappedMeetingTypes = useMemo(
    () => meetingTypes?.map(type => <CheckItem value={type.id}>{type.value}</CheckItem>),
    [meetingTypes],
  );
  return (
    <div className={styles._container}>
      <div className={!isMeeting ? styles._disabled_chip_group : styles._chipGroup}>
        <Text color={!isMeeting ? 'softPeanut' : 'peanut'} size="m" weight="bold">
          Do you also want a Deal to be created when a meeting is created?
        </Text>
        <ChipGroup
          defaultValue={accountMeetingTrigger.createDeal}
          onChange={value => {
            setDisabledSelects(!disableSelects);
            handleDisabled({ ...disabled, isDisabledActivities: false });
            handleMeetingTrigger({ ...accountMeetingTrigger, createDeal: value });
          }}
        >
          <Chip value disabled={!isMeeting}>
            Yes
          </Chip>
          <Chip value={false} disabled={!isMeeting}>
            No
          </Chip>
        </ChipGroup>
      </div>
      <div className={styles._text}>
        <Text color={disableSelects || !isMeeting ? 'softPeanut' : 'peanut'} size="m" weight="bold">
          Default state of Deals when created:
        </Text>
      </div>
      {mappedPipelines && (
        <div className={styles._select_group}>
          <Select
            defaultValue={accountMeetingTrigger.dealPipeline}
            onChange={value => {
              setSelectedStages(stages[value]);
              handleDisabled({ ...disabled, isDisabledActivities: false });
              handleMeetingTrigger({ ...accountMeetingTrigger, dealPipeline: value });
            }}
            placeholder="Default Hubspot Pipeline*"
            disabled={disableSelects || !isMeeting}
          >
            {mappedPipelines}
          </Select>
          {defaultStage && (
            <Select
              defaultValue={defaultStage}
              onChange={value => {
                handleDisabled({ ...disabled, isDisabledActivities: false });
                handleMeetingTrigger({ ...accountMeetingTrigger, dealStage: value });
              }}
              placeholder="Default Hubspot Stage*"
              disabled={disableSelects || !isMeeting}
            >
              {mappedStages}
            </Select>
          )}
        </div>
      )}
      {meetingTypes && (
        <div className={styles._children_multiselect}>
          <Text color={!isMeeting ? 'softPeanut' : 'peanut'} size="m" weight="bold">
            Create Hubspot Deals when Meeting type is
          </Text>
          <Icon name="arrowRight" color="softPeanut" size="24" />
          <MultiSelect
            defaultValue={accountMeetingTrigger.meetingTypes}
            disabled={!isMeeting}
            onChange={value => {
              handleDisabled({ ...disabled, isDisabledActivities: false });
              handleMeetingTrigger({ ...accountMeetingTrigger, meetingTypes: value });
            }}
          >
            {mappedMeetingTypes}
          </MultiSelect>
        </div>
      )}
      <Checkbox
        size="medium"
        defaultChecked={accountMeetingTrigger.sendMeetingType}
        expand
        disabled={!isMeeting}
        onClick={value => {
          handleDisabled({ ...disabled, isDisabledActivities: false });
          handleMeetingTrigger({ ...accountMeetingTrigger, sendMeetingType: value });
          handleDisabled({ ...disabled, isDisabledActivities: false });
          setDisableCallOut(!disableCallOut);
        }}
      >
        Include Meeting Type when sending meetings to Hubspot
      </Checkbox>
      {!disableCallOut && !disableSelects && isMeeting && (
        <div className={styles._callout}>
          <Callout variant="alert">
            <span role="img" aria-label="icon-label">
              👉
            </span>
            When including the Meeting Type, you need to ensure that the Deal type in Hubspot is
            exactly the same as in Bloobirds, otherwise the Deal won't be created in Hubspot.
          </Callout>
        </div>
      )}
    </div>
  );
};
export default SyncDealsHubspot;

SyncDealsHubspot.propTypes = {
  accountMeetingTrigger: PropTypes.any,
  dealPipeline: PropTypes.any,
};
