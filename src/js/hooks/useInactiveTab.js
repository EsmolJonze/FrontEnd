import { useMemo, useEffect, useState } from 'react';
import { getDateRange } from '../utils/dates.utils';
import { useActiveUser } from './index';
import { useUserSettings } from '../components/userPermissions/hooks';
import { useBobjectList } from '../contexts/bobjectList';
import { BobjectApi } from '../misc/api/bobject';
import { makeSort } from '../components/bobjectList/bobjectList.util';
import { COMPANY_STATUS_LOGIC_ROLE } from '../constants/company';
import { TASK_TYPE } from '../constants/task';

export const useInactiveTab = () => {
  const { activeUser } = useActiveUser();
  const settings = useUserSettings();
  const salesFeatureEnabled = settings?.account?.features.salesFeature;
  const { state } = useBobjectList();
  const [assignedCompanies, setAssignedCompanies] = useState(null);
  const [futureTasksCompanies, setFutureTasksCompanies] = useState([]);
  const [missingCompanies, setMissingCompanies] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  console.log(assignedCompanies);
  console.log(futureTasksCompanies);
  console.log(missingCompanies);

  const assignedCompaniesQuery = useMemo(
    () => ({
      formFields: true,
      injectReferences: false,
      page: 0,
      pageSize: 10000,
      query: {
        COMPANY__ASSIGNED_TO: [activeUser.id],
        COMPANY__STATUS:
          state.filters.status.value.length > 0
            ? state.filters.status.value
            : [
                COMPANY_STATUS_LOGIC_ROLE.ENGAGED,
                COMPANY_STATUS_LOGIC_ROLE.CONTACTED,
                COMPANY_STATUS_LOGIC_ROLE.ON_PROSPECTION,
                COMPANY_STATUS_LOGIC_ROLE.READY_TO_PROSPECT,
              ],
        COMPANY__SOURCE: state.filters.source.value.length > 0 ? state.filters.source.value : [],
      },
      sort: makeSort({ sort: state?.filters?.sort, bobjectType: 'Company' }),
    }),
    [state],
  );

  const futureTasksQuery = useMemo(() => {
    const query = {
      TASK__ASSIGNED_TO: [activeUser.id],
      TASK__TASK_TYPE: [TASK_TYPE.PROSPECT_CADENCE, TASK_TYPE.NEXT_STEP, TASK_TYPE.START_CADENCE],
      TASK__STATUS: ['TASK__STATUS__TODO'],
      TASK__SCHEDULED_DATE: getDateRange({
        startingDate: new Date(),
        pastRange: 0,
        futureRange: 730,
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

  useEffect(() => {
    setIsLoaded(false);
    setAssignedCompanies(null);
    BobjectApi.request()
      .Company()
      .search(assignedCompaniesQuery)
      .then(response => {
        setAssignedCompanies(response.contents);
      });
  }, [state]);

  useEffect(() => {
    setIsLoaded(false);
    setFutureTasksCompanies(null);
    BobjectApi.request()
      .Task()
      .search(futureTasksQuery)
      .then(response => {
        const futureTasksCompaniesId = [];
        response.contents.forEach(object => {
          const company = object.fields.find(field => field.logicRole === 'TASK__COMPANY').text;
          const alreadyFutureTask = futureTasksCompanies.find(x => x === company);
          if (!alreadyFutureTask) {
            futureTasksCompaniesId.push(company);
          }
        });
        setFutureTasksCompanies(futureTasksCompaniesId);
      });
  }, []);

  useEffect(() => {
    const missingCompaniesList = [];
    if (futureTasksCompanies && assignedCompanies) {
      assignedCompanies.forEach(company => {
        const found = futureTasksCompanies.find(x => x === company.id.value);
        if (!found) {
          missingCompaniesList.push(company);
        }
      });
      setIsLoaded(true);
      setMissingCompanies(missingCompaniesList);
    }
  }, [assignedCompanies, futureTasksCompanies]);

  return {
    isLoaded,
    count: missingCompanies.length,
    missingCompanies,
  };
};
