import { ACTIVITY_FIELDS_LOGIC_ROLE } from '../constants/activity';
import { LEAD_FIELDS_LOGIC_ROLE, LEAD_STATUS_LOGIC_ROLE } from '../constants/lead';
import { OPPORTUNITY_FIELDS_LOGIC_ROLE } from '../constants/opportunity';
import { TASK_FIELDS_LOGIC_ROLE, TASK_STATUS_VALUE_LOGIC_ROLE, TASK_TYPE } from '../constants/task';
import { COMPANY_FIELDS_LOGIC_ROLE } from '../constants/company';
import { useActiveUser } from './useActiveUser';
import { useActiveCompany } from './useActiveCompany';
import { usePicklistValues } from './usePicklistValues';
import { getValueFromLogicRole } from '../utils/bobjects.utils';
import { useBobjectFormVisibility } from './useBobjectForm';
import { useActiveLeads } from './useActiveLeads';
import { useActiveOpportunities } from './useActiveOpportunities';
import { useEntity } from './entities/useEntity';

export const useBobjectFormCreation = () => {
  const { activeUser } = useActiveUser();
  const { company } = useActiveCompany();
  const { selectedLead } = useActiveLeads();
  const { openCreateModal } = useBobjectFormVisibility();
  const taskStatuses = usePicklistValues({ picklistLogicRole: 'TASK__STATUS' });
  const leadStatuses = usePicklistValues({ picklistLogicRole: 'LEAD__STATUS' });
  const activityTypes = usePicklistValues({ picklistLogicRole: 'ACTIVITY__TYPE' });
  const { selectedOpportunity } = useActiveOpportunities();
  const bobjectPicklistFieldValues = useEntity('bobjectPicklistFieldValues');

  const openAddLead = () => {
    const defaultValues = {
      [LEAD_FIELDS_LOGIC_ROLE.OPPORTUNITY]: '',
    };
    const additionalValues = {
      [LEAD_FIELDS_LOGIC_ROLE.AUTHOR]: activeUser?.id,
      [LEAD_FIELDS_LOGIC_ROLE.COMPANY]: company?.id.value,
    };
    openCreateModal({ bobjectType: 'Lead', defaultValues, additionalValues });
  };

  const openAddLeadWithOpportunity = opportunityId => {
    const statusId = leadStatuses.find(value => value.logicRole === LEAD_STATUS_LOGIC_ROLE.CONTACT)
      .id;

    const defaultValues = {
      [LEAD_FIELDS_LOGIC_ROLE.OPPORTUNITY]: opportunityId,
      [LEAD_FIELDS_LOGIC_ROLE.STATUS]: statusId,
    };

    const additionalValues = {
      [LEAD_FIELDS_LOGIC_ROLE.COMPANY]: company?.id.value,
    };

    openCreateModal({ bobjectType: 'Lead', defaultValues, additionalValues });
  };

  const openAddTask = ({ leadId, opportunityId }) => {
    const defaultValues = {
      [TASK_FIELDS_LOGIC_ROLE.LEAD]: leadId,
    };

    const nextStepId = bobjectPicklistFieldValues?.findByLogicRole(TASK_TYPE.NEXT_STEP)?.id;
    const todoStatusId = taskStatuses.find(
      value => value.logicRole === TASK_STATUS_VALUE_LOGIC_ROLE.TODO,
    )?.id;

    let additionalValues = {
      [TASK_FIELDS_LOGIC_ROLE.ASSIGNED_TO]: activeUser?.id,
      [TASK_FIELDS_LOGIC_ROLE.COMPANY]: company?.id.value,
      [TASK_FIELDS_LOGIC_ROLE.TASK_TYPE]: nextStepId,
      [TASK_FIELDS_LOGIC_ROLE.STATUS]: todoStatusId,
    };

    if (selectedOpportunity || opportunityId) {
      additionalValues = {
        ...additionalValues,
        [TASK_FIELDS_LOGIC_ROLE.OPPORTUNITY]: selectedOpportunity?.id.value || opportunityId,
      };
    }

    openCreateModal({ bobjectType: 'Task', defaultValues, additionalValues });
  };

  const openAddOpportunity = ({ onSuccess } = {}) => {
    const additionalValues = {
      [OPPORTUNITY_FIELDS_LOGIC_ROLE.AUTHOR]: activeUser?.id,
    };

    if (company !== undefined) {
      additionalValues[OPPORTUNITY_FIELDS_LOGIC_ROLE.COMPANY] = company?.id.value;
      additionalValues[OPPORTUNITY_FIELDS_LOGIC_ROLE.ASSIGNED_TO] = getValueFromLogicRole(
        company,
        'COMPANY__ASSIGNED_TO',
      );
    }

    openCreateModal({ bobjectType: 'Opportunity', additionalValues, onSuccess });
  };

  const openAddActivity = ({ type } = {}) => {
    const defaultValues = {
      [ACTIVITY_FIELDS_LOGIC_ROLE.LEAD]: selectedLead?.id.value,
    };

    if (type) {
      defaultValues.ACTIVITY__TYPE = activityTypes.find(
        activityType => activityType.value === type,
      ).id;
    }

    const additionalValues = {
      [ACTIVITY_FIELDS_LOGIC_ROLE.USER]: activeUser?.id,
    };

    if (company !== undefined) {
      additionalValues[ACTIVITY_FIELDS_LOGIC_ROLE.COMPANY] = company?.id.value;
    }

    if (selectedOpportunity !== undefined) {
      additionalValues[ACTIVITY_FIELDS_LOGIC_ROLE.OPPORTUNITY] = selectedOpportunity?.id.value;
    }

    openCreateModal({ bobjectType: 'Activity', defaultValues, additionalValues });
  };

  const openAddCompany = () => {
    const additionalValues = {
      [COMPANY_FIELDS_LOGIC_ROLE.AUTHOR]: activeUser?.id,
    };
    openCreateModal({ bobjectType: 'Company', additionalValues });
  };

  const openAddCompanyAndAssign = lead => {
    const additionalValues = {
      [COMPANY_FIELDS_LOGIC_ROLE.AUTHOR]: activeUser?.id,
    };
    openCreateModal({ bobjectType: 'Company', additionalValues, leadToAssign: lead });
  };

  const openAddLeadWithoutCompany = () => {
    const additionalValues = {
      [LEAD_FIELDS_LOGIC_ROLE.AUTHOR]: activeUser?.id,
    };
    openCreateModal({ bobjectType: 'Lead', additionalValues });
  };

  return {
    openAddActivity,
    openAddLeadWithOpportunity,
    openAddOpportunity,
    openAddLead,
    openAddTask,
    openAddCompany,
    openAddLeadWithoutCompany,
    openAddCompanyAndAssign,
  };
};
