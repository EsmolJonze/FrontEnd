import { bobjectFieldsModel } from '../../misc/model/bobjectFieldsModel';
import { getSimpleDate, isAfterDate, isAfterToday, isSameDayDate } from '../../utils/dates.utils';
import { BOBJECT_TYPES } from '../../constants/bobject';
import { OPPORTUNITY_FIELDS_LOGIC_ROLE } from '../../constants/opportunity';
import { LEAD_FIELDS_LOGIC_ROLE } from '../../constants/lead';

const isToday = date => {
  if (!date) {
    throw new Error('Date parameter is required');
  }

  const dateObject = new Date(date);
  const today = new Date();

  return getSimpleDate(dateObject) === getSimpleDate(today);
};

export const extractDataForCard = ({
  activeCompany,
  bobject,
  bobjectType,
  isContactView,
  activeOpportunity,
}) => {
  const isTask = bobjectType === BOBJECT_TYPES.TASK;
  const isOpportunity = bobjectType === BOBJECT_TYPES.OPPORTUNITY;
  let company = isTask ? activeCompany : bobject;
  let opportunity = !isOpportunity ? activeOpportunity : bobject;
  let lead;
  let taskObject;
  let companyObject;
  let opportunityObject;
  let leadObject;

  if (isTask) {
    const taskModel = bobjectFieldsModel(bobject?.fields);
    const taskId = bobject?.id.objectId;
    const taskName = taskModel.findByLogicRole('TASK__TITLE')?.text;
    const taskDate = taskModel.findByLogicRole('TASK__SCHEDULED_DATE')?.text;
    const taskTitle = taskModel.findByLogicRole('TASK__TITLE')?.text;
    const description = taskModel.findByLogicRole('TASK__DESCRIPTION')?.text;
    const taskType = taskModel.findByLogicRole('TASK__TASK_TYPE')?.valueLogicRole;
    const taskStatus = taskModel.findByLogicRole('TASK__STATUS')?.valueLogicRole;
    if (!opportunity) {
      opportunity = taskModel.findByLogicRole('TASK__OPPORTUNITY')?.referencedBobject;
    }
    const taskCompletedDate =
      taskType === 'PROSPECT_CADENCE'
        ? taskModel.findByLogicRole('TASK__STATUS__FINISHED_DATE')?.text
        : taskModel.findByLogicRole('TASK__COMPLETED_DATE')?.text;
    const isAutomated =
      taskModel.findByLogicRole('TASK__IS_AUTOMATED')?.valueLogicRole === 'TASK__IS_AUTOMATED__YES';
    const taskIsCall =
      taskModel.findByLogicRole('TASK__IS_ACTION_CALL')?.valueLogicRole ===
      'TASK__IS_ACTION_CALL__YES';
    const taskIsEmail =
      taskModel.findByLogicRole('TASK__IS_ACTION_EMAIL')?.valueLogicRole ===
      'TASK__IS_ACTION_EMAIL__YES';
    const taskIsLinkedinMessage =
      taskModel.findByLogicRole('TASK__IS_ACTION_LINKEDIN_MESSAGE')?.valueLogicRole ===
      'TASK__IS_ACTION_LINKEDIN_MESSAGE__YES';
    company =
      company === undefined || !isContactView
        ? taskModel.findByLogicRole('TASK__COMPANY')?.referencedBobject
        : company;
    opportunity =
      opportunity === undefined
        ? taskModel.findByLogicRole('TASK__OPPORTUNITY')?.referencedBobject
        : opportunity;
    lead = taskModel.findByLogicRole('TASK__LEAD')?.referencedBobject;
    taskObject = {
      task: {
        isAutomated,
        description,
        taskIsCompleted:
          taskStatus === 'TASK__STATUS__COMPLETED' ||
          taskStatus === 'TASK__STATUS__COMPLETED_OVERDUE',
        taskIsRejected: taskStatus === 'TASK__STATUS__REJECTED',
        taskIsCall,
        taskIsEmail,
        taskIsLinkedinMessage,
        bobject,
        bobjectId: bobject.id.objectId,
        bobjectType: bobject.id.typeName,
        date: taskDate,
        id: taskId,
        isOverdue: taskStatus === 'TASK__STATUS__OVERDUE',
        name: taskName,
        type: taskType,
        title: taskTitle,
        completed: taskStatus === 'TASK__STATUS__COMPLETED',
        completedDate: taskCompletedDate ? new Date(taskCompletedDate) : taskCompletedDate,
      },
    };
  }

  if (opportunity) {
    const opportunityModel = bobjectFieldsModel(opportunity?.fields);
    const opportunityName = opportunityModel.findByLogicRole(OPPORTUNITY_FIELDS_LOGIC_ROLE.NAME)
      ?.text;
    const opportunityStatus = opportunityModel.findByLogicRole(
      OPPORTUNITY_FIELDS_LOGIC_ROLE.STATUS,
    );
    const opportunityLastAttemptDate = opportunityModel.findByLogicRole(
      OPPORTUNITY_FIELDS_LOGIC_ROLE.ATTEMPTS_LAST_DAY,
    )?.text;
    company = isOpportunity
      ? opportunityModel.findByLogicRole(OPPORTUNITY_FIELDS_LOGIC_ROLE.COMPANY)?.referencedBobject
      : company;
    opportunityObject = {
      opportunity: {
        bobject: opportunity,
        id: opportunity?.id.objectId,
        name: opportunityName,
        status: opportunityStatus,
        lastAttemptDate: opportunityLastAttemptDate
          ? new Date(opportunityLastAttemptDate)
          : opportunityLastAttemptDate,
      },
    };
  }

  if (company) {
    const fields = isTask || isOpportunity ? company.fields : bobject.fields;
    const companyModel = bobjectFieldsModel(fields);
    const companyHighPriority = companyModel.findByLogicRole('COMPANY__HIGH_PRIORITY')?.text;
    const companyLastAttemptDate = companyModel.findByLogicRole('COMPANY__ATTEMPTS_LAST_DAY')?.text;
    const companyDeliveryDate = companyModel.findByLogicRole(
      'COMPANY__STATUS__CHANGED_DATE_DELIVERED',
    )?.text;
    const companyStartCadenceDate = companyModel.findByLogicRole('COMPANY__START_CADENCE')?.text;
    const companyName = companyModel.findByLogicRole('COMPANY__NAME')?.text;
    const companySource = companyModel.findByLogicRole('COMPANY__SOURCE')?.text;
    const companyCountry = companyModel.findByLogicRole('COMPANY__COUNTRY')?.text;
    const companyStatus = companyModel.findByLogicRole('COMPANY__STATUS');
    const companyTimeZone = companyModel.findByLogicRole('COMPANY__TIME_ZONE');

    companyObject = {
      company: {
        bobject: company,
        highPriority: companyHighPriority,
        id: company.id.objectId,
        lastAttemptDate: companyLastAttemptDate
          ? new Date(companyLastAttemptDate)
          : companyLastAttemptDate,
        deliveryDate: companyDeliveryDate ? new Date(companyDeliveryDate) : companyDeliveryDate,
        startCadenceDate: companyStartCadenceDate
          ? new Date(companyStartCadenceDate)
          : companyStartCadenceDate,
        name: companyName,
        source: companySource,
        status: companyStatus,
        value: company.id.value,
        country: companyCountry,
        timeZone: companyTimeZone,
      },
    };
  }

  if (lead) {
    const leadModel = bobjectFieldsModel(lead?.fields);
    const leadName = leadModel.findByLogicRole(LEAD_FIELDS_LOGIC_ROLE.FULL_NAME)?.text;
    leadObject = {
      lead: {
        bobject: lead,
        name: leadName,
      },
    };
  }
  if (opportunity) {
    const opportunityModel = bobjectFieldsModel(opportunity?.fields);
    const opportunityName = opportunityModel.findByLogicRole(OPPORTUNITY_FIELDS_LOGIC_ROLE.NAME)
      ?.text;
    const opportunityStatus = opportunityModel.findByLogicRole(OPPORTUNITY_FIELDS_LOGIC_ROLE.STATUS)
      ?.text;
    const opportunityLastAttemptDate = opportunityModel.findByLogicRole(
      OPPORTUNITY_FIELDS_LOGIC_ROLE.ATTEMPTS_LAST_DAY,
    )?.text;
    opportunityObject = {
      opportunity: {
        bobject: opportunity,
        name: opportunityName,
        status: opportunityStatus,
        lastAttemptDate: opportunityLastAttemptDate
          ? new Date(opportunityLastAttemptDate)
          : opportunityLastAttemptDate,
      },
    };
  }

  return {
    ...companyObject,
    ...taskObject,
    ...opportunityObject,
    ...leadObject,
  };
};

export const getButtonMarkAsDone = ({ task, company }) => {
  if (
    task?.isOverdue &&
    task?.type !== undefined &&
    task?.type !== 'NEXT_STEP' &&
    task?.type !== 'CONTACT_BEFORE_MEETING'
  ) {
    if (!task?.isAutomated) {
      return {
        disabled: false,
        tooltip: 'Mark as done',
      };
    }
    let disabled = true;
    if (company?.lastAttemptDate && isToday(company?.lastAttemptDate)) {
      disabled = false;
    }
    return {
      disabled,
      tooltip:
        'When you complete this task it will be marked as overdue. If you have several, ' +
        'they will all be marked. In that case we recommend you to reschedule the cadence.',
    };
  }
  if (
    task &&
    task?.type !== undefined &&
    task?.type !== 'PROSPECT_CADENCE' &&
    task?.type !== 'START_CADENCE'
  ) {
    return {
      disabled: false,
      tooltip: 'Mark as done',
    };
  }
  if (
    company &&
    task?.type === 'START_CADENCE' &&
    company?.lastAttemptDate &&
    task?.date &&
    (isAfterDate(company?.lastAttemptDate, new Date(task?.date)) ||
      isSameDayDate(company?.lastAttemptDate, new Date(task?.date)))
  ) {
    return {
      disabled: false,
      tooltip: 'Mark as done',
    };
  }
  if (task?.type === 'START_CADENCE') {
    return {
      disabled: true,
      tooltip: 'Make at least one attempt to mark as done',
    };
  }
  if (task?.date && isToday(task?.date)) {
    if (
      (company &&
        company.lastAttemptDate &&
        isAfterDate(company?.lastAttemptDate, new Date(task?.date))) ||
      isSameDayDate(company?.lastAttemptDate, new Date(task?.date))
    ) {
      return {
        disabled: false,
        tooltip: 'Mark as done',
      };
    }
    if (!task?.isAutomated) {
      return {
        disabled: false,
        tooltip: 'Mark as done',
      };
    }
    return {
      disabled: true,
      tooltip: 'Make at least one attempt to mark as done',
    };
  }
  if (isAfterToday(new Date(task?.date))) {
    return {
      disabled: true,
      tooltip: 'This is a task for the future. You cannot mark it as done.',
    };
  }
  return {
    disabled: true,
    tooltip: 'This task cannot be marked as done',
  };
};
