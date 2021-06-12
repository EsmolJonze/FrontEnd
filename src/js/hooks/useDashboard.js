import { atom, useRecoilState, waitForAny } from 'recoil';
import { useQueryParam, StringParam, DateParam, JsonParam } from 'use-query-params';
import { useParams } from 'react-router-dom';
import { Commons } from '@bloobirds-it/bloobirds-platform-js-api-library';
import { extractReportsFromDefinition } from '../pages/dashboardPages/utils/extractReportsFromDefinition';
import { format } from 'date-fns';
import * as definitions from '../constants/dashboards';
import { getDashboardTimeRange } from '../pages/dashboardPages/utils/getDashboardTimeRange';
import { merge, isEmpty, camelCase } from 'lodash';
import { getIntervalFromType } from '../pages/dashboardPages/utils/getIntervalFromType';
import { mergeRemovingUndefined } from '../utils/objects.utils';
import { ServiceApi } from '../misc/api/service';

const dashboardDataAtom = atom({
  key: 'dashboardDataAtom',
  default: {
    isFetching: false,
    isFetchingEvolution: false,
    isNetworkBusy: false,
    isFetchingForTheFirstTime: false,
    loaded: false,
    data: undefined,
    hasErrors: false,
    isSideBarOpen: true,
  },
});

const waitFor = ms => new Promise(resolve => setTimeout(resolve, ms));

const formatDateForAPI = date => format(date, 'yyyy-MM-dd');

export const dateRangeToApiFilter = (start, end) => {
  const result = {};

  if (!start && !end) {
    return result;
  }

  if (start) {
    result.from = formatDateForAPI(start);
  }

  if (end) {
    result.to = formatDateForAPI(end);
  }

  return {
    date: result,
  };
};

export const useDashboard = () => {
  const { slug } = useParams();

  const [dashboardData, setDashboardData] = useRecoilState(dashboardDataAtom);

  const [intervalFilter = 'week', setIntervalFilter] = useQueryParam('interval', StringParam);

  const [dateRangeTypeFilter = 'this_week', setDateRangeTypeFilter] = useQueryParam(
    'dateRangeType',
    StringParam,
  );

  const [dateRangeStartFilter, setDateRangeStartFilter] = useQueryParam(
    'dateRangeStart',
    DateParam,
  );

  const [dateRangeEndFilter, setDateRangeEndFilter] = useQueryParam('dateRangeEnd', DateParam);

  const [filters, setFilters] = useQueryParam('filters', JsonParam);
  const [groupBy = undefined, setGroupBy] = useQueryParam('groupBy', StringParam);

  async function updatingLoadState({ initialLoad = false } = {}, cb) {
    const isFetchingKey = initialLoad ? 'isFetchingForTheFirstTime' : 'isFetching';

    try {
      setDashboardData({
        ...dashboardData,
        [isFetchingKey]: true,
        isFetchingEvolution: false,
        isNetworkBusy: true,
        loaded: false,
        data: null,
        hasErrors: false,
      });

      const data = await cb();

      setDashboardData({
        ...dashboardData,
        [isFetchingKey]: false,
        isFetchingEvolution: false,
        isNetworkBusy: false,
        loaded: true,
        hasErrors: false,
        data,
      });

      if (data.status && data.status !== 200) {
        setDashboardData({ ...dashboardData, hasErrors: true });
      }
    } catch (e) {
      console.error(e);

      setDashboardData({
        ...dashboardData,
        [isFetchingKey]: false,
        isFetchingEvolution: false,
        loaded: true,
        data: null,
        hasErrors: true,
        isNetworkBusy: false,
      });
    }
  }

  function setLoadingStateEarly(cb) {
    return async (...args) => {
      setDashboardData(previousState => ({
        ...previousState,
        isFetching: true,
      }));

      await waitForAny([dashboardData]);

      cb(...args);

      await Promise.race([waitForAny([dashboardData]), waitFor(100)]);

      // Sometimes callback does not trigger a network request, and we get
      // stuck in loading state.
      //
      // Removing loading state in case no network request has been made.
      if (!dashboardData.isNetworkBusy) {
        setDashboardData(previousState => ({
          ...previousState,
          isFetching: false,
        }));
      }
    };
  }

  const fetchReports = ({ reports, filters: filterParams }) =>
    ServiceApi.request({
      url: '/service/analytics/report',
      method: Commons.HttpMethod.POST,
      body: {
        reports,
        filters: filterParams,
        requestType: 'charts',
      },
    });

  const fetchDashboardData = async () => {
    const definition = definitions[camelCase(slug)];

    if (!definition) {
      throw new Error(`Could not find definition ${slug}`);
    }

    const { regular: regularReports, timeBased: timeBasedReports } = extractReportsFromDefinition(
      definition,
    );

    const buildFilters = (start, end) => ({
      timeWindow: intervalFilter,
      fields: {
        ...(filters || {}),
      },
      ...dateRangeToApiFilter(start, end),
      groupBy: groupBy || null,
    });

    const rangeParams = {
      start: dateRangeStartFilter,
      end: dateRangeEndFilter,
      interval: intervalFilter,
      type: dateRangeTypeFilter,
    };

    const paddedRange = getDashboardTimeRange({
      ...rangeParams,
      withPadding: true,
    });

    const originalRange = getDashboardTimeRange({
      ...rangeParams,
      withPadding: false,
    });

    const responses = await Promise.all([
      fetchReports({
        reports: regularReports,
        filters: buildFilters(originalRange.start, originalRange.end),
      }),
      fetchReports({
        reports: timeBasedReports,
        filters: buildFilters(paddedRange.start, paddedRange.end),
      }),
    ]);

    const mergedResults = responses.reduce((memo, { results }) => merge(memo, results), {});

    return { results: mergedResults };
  };

  const fetchEvolutionReports = async value => {
    const definition = definitions[camelCase(slug)];

    const { timeBased: timeBasedReports } = extractReportsFromDefinition(definition);

    const buildFilters = (start, end) => ({
      timeWindow: value,
      fields: {
        ...(filters || {}),
      },
      ...dateRangeToApiFilter(start, end),
      groupBy: groupBy || null,
    });

    const rangeParams = {
      start: dateRangeStartFilter,
      end: dateRangeEndFilter,
      interval: value,
      type: dateRangeTypeFilter,
    };

    const paddedRange = getDashboardTimeRange({
      ...rangeParams,
      withPadding: true,
    });

    const response = await Promise.all([
      fetchReports({
        reports: timeBasedReports,
        filters: buildFilters(paddedRange.start, paddedRange.end),
      }),
    ]);
    const responseResult = response.reduce((memo, { results }) => merge(memo, results), {});

    return { results: { ...dashboardData.data.results, ...responseResult } };
  };

  const setIsSideBarOpen = boolean =>
    setDashboardData({ ...dashboardData, isSideBarOpen: boolean });

  const updateEvolutionData = value => {
    setDashboardData({ ...dashboardData, isFetchingEvolution: true });
    fetchEvolutionReports(value).then(res =>
      setDashboardData({
        ...dashboardData,
        data: res,
        isFetching: false,
        isFetchingEvolution: false,
        isNetworkBusy: false,
        isFetchingForTheFirstTime: false,
        loaded: true,
        hasErrors: false,
      }),
    );
  };
  /**
   * Most setters are wrapped with setLoadingStateEarly, which sets the
   * isFetching flag early to avoid UI flashes (ex: groupBy disclaimers,
   * changes of time interval in cohorts table)
   */
  return {
    definition: definitions[camelCase(slug)],
    dashboardData,
    fetchDashboardData: ({ initialLoad = false }) =>
      updatingLoadState({ initialLoad }, () => fetchDashboardData()),
    setDashboardData,
    intervalFilter,
    setDateRange: ({ type, start, end }) => {
      setDateRangeTypeFilter(type);

      if (type === 'custom') {
        setDateRangeStartFilter(start);
        setDateRangeEndFilter(end);
      } else {
        setDateRangeStartFilter(undefined);
        setDateRangeEndFilter(undefined);
      }

      setIntervalFilter(getIntervalFromType(type, start, end));
    },
    clearFilters: () => {
      setFilters(undefined);
      setGroupBy(undefined);
    },
    setIntervalFilter,
    dateRangeTypeFilter,
    dateRangeEndFilter,
    dateRangeStartFilter,
    setDateRangeTypeFilter: setLoadingStateEarly(setDateRangeTypeFilter),
    setDateRangeEndFilter: setLoadingStateEarly(setDateRangeEndFilter),
    setDateRangeStartFilter: setLoadingStateEarly(setDateRangeStartFilter),
    filters,
    setFilters,
    updateFilters: newValue => {
      const nextFilters = mergeRemovingUndefined(filters || {}, newValue);

      setFilters(isEmpty(nextFilters) ? undefined : nextFilters);
    },
    setIsSideBarOpen,
    groupBy,
    setGroupBy: setLoadingStateEarly(setGroupBy),
    fetchEvolutionReports,
    updateEvolutionData,
  };
};
