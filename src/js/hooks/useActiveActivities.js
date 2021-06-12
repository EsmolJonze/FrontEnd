import { useMemo } from 'react';
import {
  atom,
  DefaultValue,
  selector,
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState,
} from 'recoil';
import { SubscriptionHooks } from '@bloobirds-it/bloobirds-platform-react-api-library';
import { injectReferencesSearchProcess } from '../misc/api/bobject';
import { activeCompanyAtom } from './useActiveCompany';
import { activeLeadSelector, useActiveLeads } from './useActiveLeads';
import { differenceInDays, getDateRange } from '../utils/dates.utils';
import { isEqual } from 'lodash';
import { activeOpportunitySelector } from './useActiveOpportunities';
import { isLeadWithoutCompanyPage } from '../utils/pages.utils';
import { useRouter } from './useRouter';

const defaultTypeFilter = [
  'ACTIVITY__TYPE__CALL',
  'ACTIVITY__TYPE__EMAIL',
  'ACTIVITY__TYPE__LINKEDIN_MESSAGE',
  'ACTIVITY__TYPE__MEETING',
  'ACTIVITY__TYPE__INBOUND',
  'ACTIVITY__TYPE__NOTE',
  'ACTIVITY__TYPE__CADENCE',
];

const defaultDateFilter = {
  startDate: null,
  endDate: null,
};

const loadingAtom = atom({
  key: 'activeActivitiesLoading',
  default: true,
});

const typeFilterAtom = atom({
  key: 'activeActivitiesTypeFilter',
  default: defaultTypeFilter,
});

const dateFilterAtom = atom({
  key: 'activeActivitiesDateFilter',
  default: defaultDateFilter,
});

const leadFilterAtom = atom({
  key: 'activeActivitiesLeadFilter',
  default: null,
});

const pageAtom = atom({
  key: 'activeActivitiesPage',
  default: 1,
});

const hasNextPageAtom = atom({
  key: 'activeActivitiesHasNextPage',
  default: true,
});

const filtersAtom = selector({
  key: 'activeActivitiesFilters',
  get: ({ get }) => {
    const typeFilter = get(typeFilterAtom);
    const { startDate, endDate } = get(dateFilterAtom);
    const leadId = get(leadFilterAtom);

    let dateRange = [];
    if (startDate) {
      dateRange = getDateRange({
        startingDate: startDate,
        pastRange: 0,
        futureRange: differenceInDays(endDate, startDate),
      });
    }
    return {
      date: dateRange,
      type: typeFilter,
      lead: leadId,
    };
  },
  set: ({ set, reset }, value) => {
    if (value instanceof DefaultValue) {
      reset(typeFilterAtom);
      reset(dateFilterAtom);
      reset(leadFilterAtom);
    } else {
      if (value.type) set(typeFilterAtom, value.type);
      if (value.date) set(dateFilterAtom, value.date);
      if (value.lead) set(leadFilterAtom, value.lead);
    }
    reset(loadingAtom);
    reset(hasNextPageAtom);
    reset(pageAtom);
  },
});

const activitiesAtom = atom({
  key: 'activeActivities',
  default: [],
});

const pinnedActivitiesAtom = atom({
  key: 'pinnedActivities',
  default: [],
});

const queryAtom = selector({
  key: 'activeActivitiesQuery',
  get: ({ get }) => {
    const company = get(activeCompanyAtom);
    const opportunity = get(activeOpportunitySelector);
    const filters = get(filtersAtom);
    const selectedLead = get(activeLeadSelector);

    const query = {
      ACTIVITY__TYPE: filters.type,
      ACTIVITY__TIME: filters.date,
    };

    if (opportunity) {
      query.ACTIVITY__OPPORTUNITY = [opportunity?.id.value];
    }

    if (filters.lead) {
      query.ACTIVITY__LEAD = [filters.lead];
    }

    if (company?.data) {
      query.ACTIVITY__COMPANY = [company?.data.id.value];
    } else if (selectedLead) {
      query.ACTIVITY__LEAD = [selectedLead?.id.value];
    }

    return query;
  },
});

const pinnedQueryAtom = selector({
  key: 'pinnedActivitiesQuery',
  get: ({ get }) => {
    const company = get(activeCompanyAtom);
    const opportunity = get(activeOpportunitySelector);
    const filters = get(filtersAtom);
    const selectedLead = get(activeLeadSelector);

    const query = {
      ACTIVITY__TYPE: filters.type,
      ACTIVITY__IS_PINNED: 'ACTIVITY__IS_PINNED__YES',
    };
    if (opportunity) {
      query.ACTIVITY__OPPORTUNITY = [opportunity?.id.value];
    }

    if (filters.lead) {
      query.ACTIVITY__LEAD = [filters.lead];
    }

    if (company?.data) {
      query.ACTIVITY__COMPANY = [company?.data.id.value];
    } else if (selectedLead) {
      query.ACTIVITY__LEAD = [selectedLead?.id.value];
    }

    return query;
  },
});

const searchAtom = selector({
  key: 'activeActivitiesSearch',
  get: ({ get }) => {
    const query = get(queryAtom);
    const page = get(pageAtom);
    return {
      query,
      page: 0,
      formFields: true,
      pageSize: page * 10,
      injectReferences: true,
      sort: [
        {
          field: 'ACTIVITY__TIME',
          direction: 'DESC',
        },
      ],
    };
  },
});

const pinnedSearchAtom = selector({
  key: 'pinnedActivitiesSearch',
  get: ({ get }) => {
    const query = get(pinnedQueryAtom);
    return {
      query,
      page: 0,
      formFields: true,
      pageSize: 100,
      injectReferences: true,
      sort: [
        {
          field: 'ACTIVITY__TIME',
          direction: 'DESC',
        },
      ],
    };
  },
});

const responseAtom = selector({
  key: 'activeActivitiesResponse',
  get: () => null,
  set: ({ set }, response) => {
    set(activitiesAtom, response.contents);
    set(loadingAtom, false);
    if (response.contents.length === response.totalMatching) {
      set(hasNextPageAtom, false);
    }
  },
});

const pinnedResponseAtom = selector({
  key: 'pinnedActivitiesResponseAtom',
  get: () => null,
  set: ({ set }, response) => {
    set(pinnedActivitiesAtom, response.contents);
  },
});

export const useActiveActivitiesFilters = () => {
  const typeFilter = useRecoilValue(typeFilterAtom);
  const dateFilter = useRecoilValue(dateFilterAtom);
  const leadFilter = useRecoilValue(leadFilterAtom);
  const resetTypeFilter = useResetRecoilState(typeFilterAtom);
  const resetDateFilter = useResetRecoilState(dateFilterAtom);
  const resetLeadFilter = useResetRecoilState(leadFilterAtom);
  const resetAllFilters = useResetRecoilState(filtersAtom);
  const setFilters = useSetRecoilState(filtersAtom);

  const usingDefaultFilters = useMemo(
    () => isEqual(typeFilter, defaultTypeFilter) && isEqual(dateFilter, defaultDateFilter),
    [typeFilter, dateFilter],
  );

  return {
    ...dateFilter,
    usingDefaultFilters,
    typeFilter,
    resetDateFilter,
    resetTypeFilter,
    resetLeadFilter,
    resetAllFilters,
    setTypeFilter: value => {
      if (!isEqual(value, typeFilter)) {
        setFilters({ type: value });
      }
    },
    setDateFilter: value => {
      if (!isEqual(value, dateFilter)) {
        if (!dateFilter.startDate) {
          setFilters({ date: value });
        } else {
          // Check that day has changed
          const diffStart = differenceInDays(dateFilter.startDate, value.startDate);
          const diffEnd = differenceInDays(dateFilter.endDate, value.endDate);
          if (diffStart !== 0 || diffEnd !== 0) {
            setFilters({ date: value });
          }
        }
      }
    },
    setLeadFilter: value => {
      if (!isEqual(value, leadFilter)) {
        setFilters({ lead: value });
      }
    },
  };
};

export const useActiveActivitiesPage = () => {
  const hasNextPage = useRecoilValue(hasNextPageAtom);
  const [page, setPage] = useRecoilState(pageAtom);

  const loadNextPage = () => {
    setPage(page + 1);
  };

  return {
    hasNextPage,
    loadNextPage,
  };
};

export const useActiveActivities = ({ shouldCreateSubscription = false } = {}) => {
  const activities = useRecoilValue(activitiesAtom);
  const pinnedActivities = useRecoilValue(pinnedActivitiesAtom);
  const loading = useRecoilValue(loadingAtom);
  const search = useRecoilValue(searchAtom);
  const pinnedSearch = useRecoilValue(pinnedSearchAtom);
  const setResponse = useSetRecoilState(responseAtom);
  const setPinnedResponse = useSetRecoilState(pinnedResponseAtom);
  const company = useRecoilValue(activeCompanyAtom);
  const { pathname } = useRouter();
  const isLeadWithoutCompany = isLeadWithoutCompanyPage(pathname);
  const { selectedLead } = useActiveLeads();
  const resetActiveActivities = useResetRecoilState(activitiesAtom);
  const resetPinnedActiveActivities = useResetRecoilState(pinnedActivitiesAtom);
  const resetActivitiesFilters = useResetRecoilState(filtersAtom);

  const resetActivitiesState = () => {
    resetPinnedActiveActivities();
    resetActivitiesFilters();
    resetActiveActivities();
  };

  SubscriptionHooks.useBobjectSubscription(
    'Activity',
    search,
    response => {
      injectReferencesSearchProcess(response);
      setResponse(response);
    },
    console.error,
    shouldCreateSubscription && (company.loaded || (isLeadWithoutCompany && !!selectedLead)),
  );

  SubscriptionHooks.useBobjectSubscription(
    'Activity',
    pinnedSearch,
    response => {
      injectReferencesSearchProcess(response);
      setPinnedResponse(response);
    },
    console.error,
    shouldCreateSubscription && (company.loaded || (isLeadWithoutCompany && !!selectedLead)),
  );

  return {
    pinnedActivities,
    activities,
    loading,
    resetActivitiesState,
  };
};
