import { useState, useEffect, useMemo } from 'react';
import { SubscriptionHooks } from '@bloobirds-it/bloobirds-platform-react-api-library';
import { useActiveUser } from '../../hooks';
import { useUserSettings } from '../../components/userPermissions/hooks';
import {
  readyToProspectQuery,
  overdueActiveProspectQuery,
  todayTasksByTypeAndStatusQuery,
} from '../../misc/utils/prospectionQueries';
import { getDateRange } from '../../utils/dates.utils';
import { COMPANY_STATUS_LOGIC_ROLE } from '../../constants/company';
import { TASK_TYPE, TASK_FIELDS_LOGIC_ROLE } from '../../constants/task';

const useOverdueActiveProspectTasksCount = () => {
  const [count, setCount] = useState(null);
  const { activeUser } = useActiveUser();
  const settings = useUserSettings();
  const salesFeatureEnabled = settings?.account?.features.salesFeature;
  const query = overdueActiveProspectQuery(
    activeUser.id,
    'TASK__STATUS__OVERDUE',
    'PROSPECT_CADENCE',
    ['TASK__TASK_TYPE'],
    false,
    salesFeatureEnabled,
  );

  SubscriptionHooks.useBobjectAggSubscription('Task', query, response => {
    setCount(response.contents[0]?.value || 0);
  });
  return count;
};

const useTodayActiveProspectTasksCount = () => {
  const [count, setCount] = useState(null);
  const { activeUser } = useActiveUser();
  const settings = useUserSettings();
  const salesFeatureEnabled = settings?.account?.features.salesFeature;
  const query = todayTasksByTypeAndStatusQuery(
    activeUser.id,
    ['TASK__TASK_TYPE'],
    ['PROSPECT_CADENCE'],
    ['TASK__STATUS__TODO'],
    false,
    salesFeatureEnabled,
  );

  SubscriptionHooks.useBobjectAggSubscription('Task', query, response => {
    setCount(response.contents[0]?.value || 0);
  });
  return count;
};

export const useActiveOnProspectTaskCount = () => {
  const today = useTodayActiveProspectTasksCount();
  const overdue = useOverdueActiveProspectTasksCount();
  const totalCount = today + overdue;
  return totalCount === 0 ? undefined : totalCount;
};

export const useReadyToProspectCompanyCount = (bobjectFields, bobjectPicklistFieldValues) => {
  const [count, setCount] = useState(null);
  const { activeUser } = useActiveUser();
  const settings = useUserSettings();
  const salesFeatureEnabled = settings?.account?.features.salesFeature;
  const query = readyToProspectQuery(
    bobjectFields,
    bobjectPicklistFieldValues,
    activeUser.id,
    true,
    salesFeatureEnabled,
  );

  SubscriptionHooks.useBobjectSubscription('Task', query, response => {
    setCount(response.totalMatching === 0 ? undefined : response.totalMatching);
  });
  return count;
};

const useOverdueNextStepCount = () => {
  const [count, setCount] = useState(null);
  const { activeUser } = useActiveUser();
  const settings = useUserSettings();
  const salesFeatureEnabled = settings?.account?.features.salesFeature;
  const query = overdueActiveProspectQuery(
    activeUser.id,
    'TASK__STATUS__TODO',
    'NEXT_STEP',
    ['TASK__TASK_TYPE'],
    false,
    salesFeatureEnabled,
  );

  SubscriptionHooks.useBobjectAggSubscription('Task', query, response => {
    setCount(response.contents[0]?.value || 0);
  });
  return count;
};

export const useNextStepCompanyTodayCount = () => {
  const [count, setCount] = useState(null);
  const { activeUser } = useActiveUser();
  const settings = useUserSettings();
  const salesFeatureEnabled = settings?.account?.features.salesFeature;
  const query = todayTasksByTypeAndStatusQuery(
    activeUser.id,
    ['TASK__TASK_TYPE'],
    ['NEXT_STEP'],
    ['TASK__STATUS__TODO'],
    false,
    salesFeatureEnabled,
  );

  SubscriptionHooks.useBobjectAggSubscription('Task', query, response => {
    setCount(response.contents[0]?.value || 0);
  });
  return count === 0 ? null : count;
};

export const useNextStepCompanyCount = () => {
  const today = useNextStepCompanyTodayCount();
  const overdue = useOverdueNextStepCount();
  const totalCount = today + overdue;
  return totalCount === 0 ? undefined : totalCount;
};

const useOverdueMeetingCount = () => {
  const [count, setCount] = useState(null);
  const { activeUser } = useActiveUser();
  const settings = useUserSettings();
  const salesFeatureEnabled = settings?.account?.features.salesFeature;
  const query = overdueActiveProspectQuery(
    activeUser.id,
    'TASK__STATUS__TODO',
    'CONTACT_BEFORE_MEETING',
    ['TASK__TASK_TYPE'],
    false,
    salesFeatureEnabled,
  );

  SubscriptionHooks.useBobjectAggSubscription('Task', query, response => {
    setCount(response.contents[0]?.value || 0);
  });
  return count;
};

export const useMeetingCompanyTodayCount = () => {
  const [count, setCount] = useState(null);
  const { activeUser } = useActiveUser();
  const settings = useUserSettings();
  const salesFeatureEnabled = settings?.account?.features.salesFeature;
  const query = todayTasksByTypeAndStatusQuery(
    activeUser.id,
    ['TASK__TASK_TYPE'],
    ['CONTACT_BEFORE_MEETING'],
    ['TASK__STATUS__TODO'],
    false,
    salesFeatureEnabled,
  );

  SubscriptionHooks.useBobjectAggSubscription('Task', query, response => {
    setCount(response.contents[0]?.value || 0);
  });
  return count === 0 ? null : count;
};

export const useMeetingCompanyCount = () => {
  const today = useMeetingCompanyTodayCount();
  const overdue = useOverdueMeetingCount();
  const totalCount = today + overdue;
  return totalCount === 0 ? undefined : totalCount;
};

export const useNoScheduledTaskCount = () => {
  const [assignedCompanies, setAssignedCompanies] = useState(null);
  const [futureTasksCompanies, setFutureTasksCompanies] = useState([]);
  const [missingCompanies, setMissingCompanies] = useState([]);
  const { activeUser } = useActiveUser();
  const settings = useUserSettings();
  const salesFeatureEnabled = settings?.account?.features.salesFeature;

  const assignedCompaniesQuery = {
    formFields: true,
    injectReferences: false,
    page: 0,
    pageSize: 10000,
    query: {
      COMPANY__ASSIGNED_TO: [activeUser.id],
      COMPANY__STATUS: [
        COMPANY_STATUS_LOGIC_ROLE.ENGAGED,
        COMPANY_STATUS_LOGIC_ROLE.CONTACTED,
        COMPANY_STATUS_LOGIC_ROLE.ON_PROSPECTION,
        COMPANY_STATUS_LOGIC_ROLE.READY_TO_PROSPECT,
      ],
    },
  };

  const futureTasksQuery = useMemo(() => {
    const query = {
      TASK__ASSIGNED_TO: [activeUser.id],
      TASK__TASK_TYPE: [TASK_TYPE.PROSPECT_CADENCE, TASK_TYPE.NEXT_STEP, TASK_TYPE.START_CADENCE],
      TASK__STATUS: ['TASK__STATUS__TODO'],
      TASK__SCHEDULED_DATE: getDateRange({
        startingDate: new Date(),
        pastRange: 0,
        futureRange: 300,
      }),
    };

    if (salesFeatureEnabled) {
      query.TASK__OPPORTUNITY = ['__MATCH_EMPTY_ROWS__'];
    }
    return {
      formFields: true,
      injectReferences: false,
      page: 0,
      pageSize: 10000,
      query,
    };
  }, []);

  SubscriptionHooks.useBobjectSubscription('Company', assignedCompaniesQuery, response => {
    setAssignedCompanies(response?.contents || null);
  });

  SubscriptionHooks.useBobjectSubscription('Task', futureTasksQuery, response => {
    const futureTasksCompaniesId = [];
    if (response) {
      response.contents.forEach(object => {
        const company = object.fields.find(
          field => field.logicRole === TASK_FIELDS_LOGIC_ROLE.COMPANY,
        ).text;
        const alreadyFutureTask = futureTasksCompanies.find(x => x === company);
        if (!alreadyFutureTask) {
          futureTasksCompaniesId.push(company);
        }
      });
      setFutureTasksCompanies(futureTasksCompaniesId);
    }
  });

  useEffect(() => {
    const missingCompaniesList = [];
    if (futureTasksCompanies && assignedCompanies) {
      assignedCompanies.forEach(company => {
        const found = futureTasksCompanies.find(x => x === company.id.value);
        if (!found) {
          missingCompaniesList.push(company);
        }
      });
      setMissingCompanies(missingCompaniesList);
    }
  }, [futureTasksCompanies, assignedCompanies]);

  return {
    count: missingCompanies.length === 0 ? undefined : missingCompanies.length,
  };
};
