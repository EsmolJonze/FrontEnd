import React, { useEffect, useState } from 'react';
import {
  Button,
  Chip,
  ChipGroup,
  Input,
  Item,
  ModalContent,
  ModalFooter,
  ModalSection,
  Select,
  Text,
  DateTimePicker,
  useToasts,
} from '@bloobirds-it/bloobirds-platform-component-library';
import { BobjectApi } from '../../../misc/api/bobject';
import {
  useActiveCompany,
  useActiveOpportunities,
  useActiveUser,
  useContactFlow,
  useLeads,
  useRouter,
} from '../../../hooks';
import { getValueFromLogicRole, getFieldByLogicRole } from '../../../utils/bobjects.utils';
import { isLeadPage } from '../../../utils/pages.utils';
import styles from './scheduleNextStep.module.css';
import { formatDate, parseTimeToDatetime } from '../../../utils/dates.utils';
import { scheduleLongTimes, scheduleShortTimes } from './scheduleNextStep.constants';
import { COMPANY_FIELDS_LOGIC_ROLE } from '../../../constants/company';
import { LEAD_FIELDS_LOGIC_ROLE } from '../../../constants/lead';
import {
  TASK_FIELDS_LOGIC_ROLE,
  TASK_STATUS_VALUE_LOGIC_ROLE,
  TASK_TYPE,
} from '../../../constants/task';
import { BOBJECT_TYPES } from '../../../constants/bobject';

const updateEntity = (id, data, entity) =>
  BobjectApi.request()
    .bobjectType(entity)
    .partialSet({ bobjectId: id, data });

const createEntity = (data, entity) =>
  BobjectApi.request()
    .bobjectType(entity)
    .create(data);

const searchEntity = (entity, query) =>
  BobjectApi.request()
    .bobjectType(entity)
    .search({
      injectReferences: false,
      query,
      formFields: true,
      pageSize: 10,
    });

const ScheduleNextStep = ({ handleBack, handleSkip, handleClose }) => {
  const { scheduleStepData, changeStatusStepData, setScheduleStepData } = useContactFlow();
  const { location } = useRouter();
  const { leads: activeLeads } = useLeads('contactFlow');
  const { company } = useActiveCompany();
  const { selectedOpportunity } = useActiveOpportunities();
  const { createToast } = useToasts();
  const { activeUser, activeAccount } = useActiveUser();
  const { updateLeadsByCompany, updateSingleLead, leads } = useLeads('scheduleNextStep');
  const [taskForToday, setTaskForToday] = useState();
  const [isDisabled, setIsDisabled] = useState(false);
  const companyName = getValueFromLogicRole(company, COMPANY_FIELDS_LOGIC_ROLE.NAME);
  const leadName = getValueFromLogicRole(activeLeads[0], LEAD_FIELDS_LOGIC_ROLE.FULL_NAME, true);
  const companyId = company?.id?.value;
  const getLeadBobject = leadId => leads.find(lead => lead.id.value === leadId);

  const allowSave =
    !!scheduleStepData?.title &&
    (!!scheduleStepData?.dateTime || !!scheduleStepData.time) &&
    scheduleStepData.lead;
  const hasCompany = !isLeadPage(location.pathname);
  let status = changeStatusStepData?.companyStatus || changeStatusStepData?.leadStatus;

  if (!status && (company || activeLeads[0])) {
    status =
      getFieldByLogicRole(company, COMPANY_FIELDS_LOGIC_ROLE.STATUS)?.text ||
      getFieldByLogicRole(activeLeads[0], LEAD_FIELDS_LOGIC_ROLE.STATUS)?.text;
  }

  const scheduleTimes =
    status.toLowerCase() === 'nurturing' ? scheduleLongTimes : scheduleShortTimes;

  const isReminder = datetime => datetime.getDay() === new Date().getDay();

  const saveAndSchedule = () => {
    const { dateTime, lead, time, title } = scheduleStepData;
    const newDateTime = dateTime || parseTimeToDatetime(time);
    let data;

    if (newDateTime && isReminder(newDateTime) && taskForToday) {
      data = {
        [TASK_FIELDS_LOGIC_ROLE.LEAD]: lead?.id.objectId,
        [TASK_FIELDS_LOGIC_ROLE.SCHEDULED_DATETIME]: newDateTime.toISOString(),
        [TASK_FIELDS_LOGIC_ROLE.TITLE]: title,
      };

      if (selectedOpportunity) {
        data = { ...data, [TASK_FIELDS_LOGIC_ROLE.OPPORTUNITY]: selectedOpportunity?.id.value };
      }

      updateEntity(taskForToday.id.objectId, data, BOBJECT_TYPES.TASK)
        .then(() => {
          createToast({ type: 'success', message: 'Task has been successfully scheduled!' });
          handleClose();
        })
        .catch(() => {
          setIsDisabled(false);
        });
    } else {
      data = {
        [TASK_FIELDS_LOGIC_ROLE.LEAD]: lead?.id.value,
        [TASK_FIELDS_LOGIC_ROLE.ASSIGNED_TO]: activeUser.id,
        [TASK_FIELDS_LOGIC_ROLE.COMPANY]: companyId
          ? `${activeAccount.id}/Company/${companyId}`
          : null,
        [TASK_FIELDS_LOGIC_ROLE.TITLE]: title,
        [TASK_FIELDS_LOGIC_ROLE.TASK_TYPE]: TASK_TYPE.NEXT_STEP,
        [TASK_FIELDS_LOGIC_ROLE.STATUS]: TASK_STATUS_VALUE_LOGIC_ROLE.TODO,
        [TASK_FIELDS_LOGIC_ROLE.SCHEDULED_DATETIME]: newDateTime.toISOString(),
      };

      if (selectedOpportunity) {
        data = { ...data, [TASK_FIELDS_LOGIC_ROLE.OPPORTUNITY]: selectedOpportunity?.id.value };
      }

      createEntity(data, BOBJECT_TYPES.TASK)
        .then(() => {
          createToast({ type: 'success', message: 'Task has been successfully scheduled!' });
          handleClose();
        })
        .catch(() => {
          setIsDisabled(false);
        });
    }
  };

  const getTaskForToday = () => {
    searchEntity(BOBJECT_TYPES.TASK, {
      TASK__COMPANY: companyId,
      TASK__TASK_TYPE: [TASK_TYPE.PROSPECT_CADENCE],
      TASK__ASSIGNED_TO: [activeUser?.id],
      TASK__SCHEDULED_DATE: formatDate(new Date(), 'yyyy-MM-dd'),
    }).then(response => setTaskForToday(response.contents[0]));
  };

  useEffect(() => {
    if (companyId) {
      updateLeadsByCompany(companyId);
    }
  }, [companyId]);

  useEffect(() => {
    if (!hasCompany) {
      updateSingleLead(activeLeads[0]?.id.objectId);
    }
  }, [hasCompany, activeLeads[0]]);

  useEffect(() => {
    setScheduleStepData({
      lead: activeLeads[0],
    });
  }, [activeLeads[0], setScheduleStepData]);

  useEffect(() => {
    getTaskForToday();
  }, []);

  const valuePicker = scheduleStepData?.dateTime ? { value: scheduleStepData.dateTime } : undefined;

  return (
    <>
      <ModalContent>
        <ModalSection
          size="l"
          title={`Next step details for ${company ? companyName : leadName}`}
          icon="chat"
        >
          <div className={styles._section__wrapper}>
            <div className={styles._title_input__wrapper}>
              <Input
                width="100%"
                placeholder="Add a title *"
                defaultValue={scheduleStepData?.title}
                onKeyPress={() => {}}
                onBlur={event => {
                  setScheduleStepData({
                    ...scheduleStepData,
                    title: event.target.value,
                  });
                }}
              />
            </div>
            <div className={styles._text__wrapper}>
              <Text size="m" color="softPeanut">
                Schedule a next step in...
              </Text>
            </div>
            <div className={styles._time__wrapper}>
              <ChipGroup
                value={scheduleStepData?.time}
                onChange={value => {
                  setScheduleStepData({
                    ...scheduleStepData,
                    time: value,
                    dateTime: null,
                  });
                }}
              >
                {scheduleTimes.map(time => (
                  <Chip key={`time-${time.value}`} value={time.value}>
                    {time.name}
                  </Chip>
                ))}
              </ChipGroup>
            </div>
            <div className={styles._text__wrapper}>
              <Text size="m" color="softPeanut">
                or create a next step for another time
              </Text>
            </div>
            <div className={styles._next_step__wrapper}>
              <div className={styles._datepicker__wrapper}>
                <DateTimePicker
                  {...valuePicker}
                  width="100%"
                  placeholder="Date and time"
                  onChange={value => {
                    setScheduleStepData({
                      ...scheduleStepData,
                      dateTime: value,
                      time: null,
                    });
                  }}
                />
              </div>
              <div className={styles._leads__wrapper}>
                <Select
                  placeholder="Lead *"
                  value={scheduleStepData?.lead?.id.value}
                  width="100%"
                  onChange={value => {
                    setScheduleStepData({
                      ...scheduleStepData,
                      lead: getLeadBobject(value),
                    });
                  }}
                >
                  {leads.map(lead => (
                    <Item value={lead.id.value} key={`lead-${lead.id.value}`}>
                      {getValueFromLogicRole(lead, LEAD_FIELDS_LOGIC_ROLE.FULL_NAME, true)}
                    </Item>
                  ))}
                </Select>
              </div>
            </div>
          </div>
        </ModalSection>
      </ModalContent>
      <ModalFooter>
        <div className={styles._buttons__wrapper}>
          <Button variant="clear" onClick={handleBack}>
            Back
          </Button>
          <Button variant="secondary" onClick={handleSkip}>
            Skip
          </Button>
          <Button
            disabled={!allowSave || isDisabled}
            onClick={() => {
              setIsDisabled(true);
              saveAndSchedule();
            }}
          >
            Save & schedule next step
          </Button>
        </div>
      </ModalFooter>
    </>
  );
};

export default ScheduleNextStep;
