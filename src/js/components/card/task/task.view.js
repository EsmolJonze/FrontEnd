import React, { useState } from 'react';
import {
  Button,
  Icon,
  IconButton,
  Text,
  Tooltip,
} from '@bloobirds-it/bloobirds-platform-component-library';
import { useTaskContext } from '../../../contexts/task';
import {
  formatDate,
  formatDistance,
  isToday,
  getLocationFromCompleteTimeZone,
  getUTCFromCompleteTimeZone,
  convertLocationToHourMinutes,
} from '../../../utils/dates.utils';
import { bobjectUrl } from '../../../app/_constants/routes';
import { BOBJECT_TYPES } from '../../../constants/bobject';
import { TASK_TYPE } from '../../../constants/task';
import CardItem from '../../cardItem';
import Name from '../name';
import { extractDataForCard, getButtonMarkAsDone } from '../card.service';
import styles from './task.module.css';
import TaskIcon from '../../taskIcon';
import { getTimezone } from '../../../constants/countryToTimeZone';
import CountryTooltip from '../countryTooltip';
import {
  useActiveCompany,
  useRouter,
  useActiveOpportunities,
  useBobjectFormVisibility,
  useActiveLeads,
} from '../../../hooks';
import { isCompanyPage, isOpportunityPage } from '../../../utils/pages.utils';
import { convertHtmlToString } from '../../../utils/email.utils';
import { useUserSettings } from '../../userPermissions/hooks';
import { getDateByLogicRole, getValueFromLogicRole } from '../../../utils/bobjects.utils';
import { PROSPECT_TAB } from '../../../pages/prospectPage/prospectPage.constant';
import { SALES_TABS } from '../../../pages/salesPage/salesPage.constant';
import { BobjectApi } from '../../../misc/api/bobject';

const TaskCard = ({
  bobject,
  tabSelected,
  setContextCompany,
  displayDateLastAttempt = true,
  redirect = false,
}) => {
  const { updateActiveLeads } = useActiveLeads();
  const { company: activeCompany } = useActiveCompany();
  const { selectedOpportunity } = useActiveOpportunities();
  const { openEditModal } = useBobjectFormVisibility();
  const { setShowToast, checked } = useTaskContext();
  const [hover, setHover] = useState(false);

  const { history, pathname } = useRouter();
  const isContactView = isCompanyPage(pathname);
  const { company, task, opportunity, lead } = extractDataForCard({
    bobject,
    bobjectType: BOBJECT_TYPES.TASK,
    activeCompany,
    isContactView,
    opportunity: selectedOpportunity,
  });

  const isReadyTab = tabSelected === PROSPECT_TAB.ready;
  const isScheduledTab = [PROSPECT_TAB.scheduled, SALES_TABS.scheduled].includes(tabSelected);
  const isCadenceTab = [PROSPECT_TAB.cadence, SALES_TABS.cadence].includes(tabSelected);
  const isMeetingTab = tabSelected === PROSPECT_TAB.meeting;
  const isAddLeads = task.type === TASK_TYPE.ADD_LEADS_TO_QC;
  const isProspect = task.type === TASK_TYPE.PROSPECT_CADENCE;
  const isMeeting = task.type === TASK_TYPE.MEETING;
  const isEditable = task.type === TASK_TYPE.NEXT_STEP;

  const isCompleted = task.taskIsCompleted;
  const isRejected = task.taskIsRejected;
  if (!company) {
    return null;
  }

  const buttonData = getButtonMarkAsDone({ company, task });

  const getDateFieldText = fieldNameDate => {
    const dateBobject = opportunity || company;
    if (dateBobject) {
      if (!dateBobject[fieldNameDate]) {
        return 'never';
      }

      if (isToday(dateBobject[fieldNameDate])) {
        return 'today';
      }

      return formatDate(dateBobject[fieldNameDate], 'do, MMMM');
    }
    return '';
  };

  const getDateText = () => {
    if ((!displayDateLastAttempt || isMeeting) && !isCompleted && task.date && !isRejected) {
      return {
        tooltip: formatDate(new Date(task.date), 'PPP'),
        content: `Due date ${formatDate(
          new Date(task.date),
          task.type === 'NEXT_STEP' || task.type === 'CONTACT_BEFORE_MEETING'
            ? 'MMM dd HH:mm'
            : 'MMM dd',
        )}`,
      };
    }
    if (isReadyTab && !isCompleted) {
      return {
        tooltip: company.deliveryDate ? formatDate(new Date(company.deliveryDate), 'PPP') : '',
        content: `Delivered ${getDateFieldText('deliveryDate')}`,
      };
    }

    if (isCompleted && task.completedDate) {
      return {
        tooltip: formatDate(new Date(task.completedDate), 'PPP'),
        content: `Completed ${formatDistance(task.completedDate, new Date())} ago`,
      };
    }
    if (isRejected && task.completedDate) {
      return {
        tooltip: formatDate(new Date(task.completedDate), 'PPP'),
        content: `Rejected ${formatDistance(task.completedDate, new Date())} ago`,
      };
    }
    const lastAttemptDate = !opportunity ? company.lastAttemptDate : opportunity?.lastAttemptDate;

    return {
      tooltip: lastAttemptDate ? formatDate(new Date(lastAttemptDate), 'PPP') : 'Never',
      content: `Last attempt ${getDateFieldText('lastAttemptDate')}`,
    };
  };

  const getLastAttempt = () => {
    const { content, tooltip } = getDateText();
    const color = isRejected ? 'tomato' : 'softPeanut';
    return (
      <Tooltip title={tooltip} position="top" trigger="hover">
        <Text size="s" color={color} inline align="right">
          {content}
        </Text>
      </Tooltip>
    );
  };

  const handleCheckClick = event => {
    event.preventDefault();
    event.stopPropagation();
    if (!buttonData.disabled) {
      setShowToast(true, task.id);
    }
  };
  const settings = useUserSettings();
  const countryTimezone = getTimezone(company?.country);
  const taskName =
    task.description && !task.description.startsWith('org.mozilla.javascript') ? (
      <Tooltip position="top" trigger="hover" title={convertHtmlToString(task.description)}>
        {task.name}
      </Tooltip>
    ) : (
      task.name
    );

  const taskUrl = opportunity?.bobject
    ? bobjectUrl(opportunity?.bobject, company?.bobject)
    : bobjectUrl(company?.bobject);

  return (
    <div className={styles._container}>
      <CardItem
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        isCompleted={isCompleted}
        isRejected={isRejected}
        history={history}
        to={company && redirect ? taskUrl : undefined}
        contentLeft={
          <>
            <div className={styles._complete_button_wrapper}>
              {(!isProspect || isMeeting) && <TaskIcon type={task.type} />}
              {isProspect && (
                <>
                  {task.taskIsCall && <Icon name="phone" color="melon" />}
                  {!task.taskIsCall && <Icon name="circle" color="lightPeanut" />}
                  {task.taskIsEmail && <Icon name="mail" color="tangerine" />}
                  {!task.taskIsEmail && <Icon name="circle" color="lightPeanut" />}
                  {task.taskIsLinkedinMessage && <Icon name="linkedin" color="darkBloobirds" />}
                  {!task.taskIsLinkedinMessage && <Icon name="circle" color="lightPeanut" />}
                </>
              )}
            </div>
            <div className={styles._task_name_wrapper}>
              <Text
                dataTest="taskListTaskNumber"
                size="s"
                weight="medium"
                ellipsis={25}
                color={task.description ? 'darkBloobirds' : 'peanut'}
                decoration={isCompleted ? 'line-through' : ''}
              >
                {isAddLeads ? 'Search Leads' : taskName}
              </Text>
            </div>
            <div styles={styles._name_wrapper}>
              <Name
                name={!opportunity ? company?.name : opportunity?.name}
                bobject={!opportunity ? company?.bobject : opportunity?.bobject}
                isCompleted={isCompleted}
                isContactView={isContactView}
              />
              {!isOpportunityPage(pathname) && opportunity && (
                <>
                  <span className={styles._separator}>|</span>
                  <Name
                    name={company?.name}
                    bobject={company?.bobject}
                    isCompleted={isCompleted}
                    isContactView={isContactView}
                  />
                </>
              )}
              {isMeeting && (
                <>
                  <span className={styles._separator}> - </span>
                  <Name
                    name={lead?.name}
                    bobject={lead?.bobject}
                    isCompleted={isCompleted}
                    isContactView={isContactView}
                  />
                </>
              )}
            </div>
            {settings?.account?.features.timeZoneFeature && company.timeZone?.text && (
              <>
                <div className={styles._timeZoneLocation}>
                  <Text
                    size="s"
                    weight="medium"
                    color="darkBloobirds"
                    dataTest={'Time-timeZoneText'}
                  >
                    {getUTCFromCompleteTimeZone(company.timeZone.text)}
                  </Text>
                </div>
                <div className={styles._timeZoneLocation}>
                  <Text
                    size="s"
                    weight="medium"
                    color="darkBloobirds"
                    dataTest={'Time-currentCompanyHour'}
                  >
                    {convertLocationToHourMinutes(
                      getLocationFromCompleteTimeZone(company.timeZone.text),
                    )}
                  </Text>
                </div>
              </>
            )}
            {company?.country && (
              <CountryTooltip country={company?.country} timezone={countryTimezone} />
            )}
            <div className={styles._company_source}>
              {!opportunity ? company?.source : opportunity?.status?.text}
            </div>
            {company?.highPriority && <Icon size="16" name="zap" color="banana" />}
          </>
        }
        contentRight={
          <>
            {(!hover || checked || isCompleted) && (
              <>
                {(isScheduledTab || isMeetingTab) && (
                  <div className={styles._last_attempt_wrapper}>
                    <Text size="s" color="softPeanut" inline align="right">
                      Due date{' '}
                      {formatDate(
                        getDateByLogicRole(task.bobject, 'TASK__SCHEDULED_DATE'),
                        'MMM dd HH:mm',
                      )}
                    </Text>
                  </div>
                )}
                {(isReadyTab || isCadenceTab || isContactView || isMeeting) && (
                  <div className={styles._last_attempt_wrapper}>{getLastAttempt()}</div>
                )}
                {task?.isOverdue && (
                  <div className={styles._overdue_wrapper}>
                    <Text size="s" color="tomato" inline align="right">
                      Overdue
                    </Text>
                  </div>
                )}
                {isReadyTab && company?.startCadenceDate && (
                  <div className={styles._overdue_wrapper}>
                    <Text size="s" color="tangerine" inline align="right">
                      Scheduled for {formatDate(company?.startCadenceDate, 'MMM d')}
                    </Text>
                  </div>
                )}
              </>
            )}
            {hover && !checked && !isCompleted && (
              <>
                {!isCompleted && buttonData.disabled && (
                  <Tooltip title={buttonData.tooltip} position="top">
                    <Button dataTest="markAsDone" disabled size="small">
                      Mark as Done
                    </Button>
                  </Tooltip>
                )}
                {!isCompleted && !buttonData.disabled && (
                  <Button
                    dataTest="markAsDone"
                    iconLeft="check"
                    onClick={handleCheckClick}
                    size="small"
                  >
                    Mark as Done
                  </Button>
                )}

                {isEditable && !isCompleted && (
                  <span className={styles._edit_button}>
                    <IconButton
                      name="edit"
                      onClick={async event => {
                        event.preventDefault();
                        event.stopPropagation();
                        if (task?.bobject) {
                          const companyId = getValueFromLogicRole(task?.bobject, 'TASK__COMPANY');
                          if (companyId) {
                            const result = await BobjectApi.request()
                              .Lead()
                              .search({
                                injectReferences: false,
                                formFields: true,
                                pageSize: 50,
                                query: {
                                  LEAD__COMPANY: [companyId],
                                },
                              });
                            updateActiveLeads(result.contents);
                          }
                        }
                        setContextCompany(company?.bobject, () =>
                          openEditModal({ bobject: task?.bobject }),
                        );
                      }}
                    />
                  </span>
                )}
              </>
            )}
          </>
        }
      />
    </div>
  );
};

export default TaskCard;
