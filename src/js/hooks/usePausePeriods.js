import { Rest } from '@bloobirds-it/bloobirds-platform-js-api-library';
import { useActiveUser } from './useActiveUser';
import { useToasts } from '@bloobirds-it/bloobirds-platform-component-library';
import { useState, useEffect } from 'react';
import { useBloobirdsApiStateContext } from '@bloobirds-it/bloobirds-platform-react-api-library';
import { atom, useRecoilState } from 'recoil';
import { ServiceApi } from '../misc/api/service';

const fetchPeriods = (restApi, userId, accountId) =>
  restApi.service(Rest.ResourceNameEnum.pausedCadencePeriods).search({
    page: 0,
    sort: [
      {
        field: 'creationDatetime',
        direction: 'DESC',
      },
    ],
    query: {
      'account.id': accountId,
      'user.id': userId,
    },
  });

const addPeriodRequest = period =>
  ServiceApi.request({
    url: '/service/cadences/pause',
    method: 'POST',
    body: {
      startDate: new Date(period.startDate).toISODate(),
      endDate: new Date(period.endDate).toISODate(),
      pauseName: period.pauseName,
    },
  });

const updatePeriodRequest = (id, period) =>
  ServiceApi.request({
    url: `/service/cadences/pauses/${id}`,
    method: 'PATCH',
    body: {
      startDate: new Date(period.startDate).toISODate(),
      endDate: new Date(period.endDate).toISODate(),
      pauseName: period.pauseName,
    },
  });

const removePeriodRequest = id =>
  ServiceApi.request({
    url: `/service/cadences/pauses/${id}/cancel`,
    method: 'PUT',
  });

const getDaysArray = (start, end) => {
  let arr;
  let dt;
  for (arr = [], dt = start; dt <= end; dt.setDate(dt.getDate() + 1)) {
    arr.push(new Date(dt).toISODate());
  }
  return arr;
};

const getLastActiveEndDate = periods =>
  periods.reduce((lastEndDate, period) => {
    const endDate = new Date(period.endDate);
    if (period.isActive && endDate > lastEndDate) {
      lastEndDate = endDate;
    }
    return lastEndDate;
  }, new Date());

const pausePeriodsAtom = atom({
  key: 'pausePeriods',
  default: {
    list: [],
    loaded: false,
    uniqueDates: null,
    isUserCurrentlyPaused: false,
    currentPausedPeriod: [],
  },
});

const pauseModalAtom = atom({
  key: 'pauseModal',
  default: {
    mode: 'CREATE',
    period: {},
  },
});

const pauseModalVisibility = atom({
  key: 'pauseModalVisibility',
  default: false,
});

const cachedUserIdAtom = atom({
  key: 'cachedPauseUserId',
  default: null,
});

export const usePausePeriodsModal = () => {
  const [pausePeriod, setPausePeriod] = useRecoilState(pauseModalAtom);
  const [open, setOpen] = useRecoilState(pauseModalVisibility);

  const handleClose = () => {
    setPausePeriod(pauseModalAtom);
    setOpen(false);
  };

  const openEditPauseModal = period => {
    setPausePeriod({
      mode: 'EDIT',
      ...period,
    });
    setOpen(true);
  };

  const openCreatePauseModal = () => {
    setPausePeriod({
      mode: 'CREATE',
    });
    setOpen(true);
  };

  return {
    openEditPauseModal,
    openCreatePauseModal,
    handleClose,
    open,
    pausePeriod,
  };
};

export const usePausePeriods = props => {
  const { restApi } = useBloobirdsApiStateContext();
  const [periods, setPeriods] = useRecoilState(pausePeriodsAtom);
  const [cachedUserId, setCachedUserId] = useRecoilState(cachedUserIdAtom);
  const { activeUser, activeAccount } = useActiveUser();
  const { createToast } = useToasts();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [refreshPeriods, setRefreshPeriods] = useState(false);
  const userId = props?.userId;
  const todayIso = new Date().toISODate();

  useEffect(() => {
    if ((userId && userId !== cachedUserId) || refreshPeriods) {
      setCachedUserId(userId);
      fetchPeriods(restApi, userId, activeAccount.id).then(response => {
        const periodsList = response._embedded.pausedCadencePeriods;
        let pausedDates = [];
        periodsList.forEach((period, i) => {
          const startDate = new Date(
            new Date(period.startDate).getTime() +
              new Date(period.startDate).getTimezoneOffset() * 60000,
          );
          const endDate = new Date(
            new Date(period.endDate).getTime() +
              new Date(period.endDate).getTimezoneOffset() * 60000,
          );
          const today = new Date();
          const dates = getDaysArray(startDate, endDate);
          pausedDates = [...pausedDates, ...dates];
          periodsList[i].finished = endDate.setHours(23, 59, 59, 999) < today;
          periodsList[i].isActive = new Set(dates).has(todayIso);
        });
        const uniqueDates = pausedDates.length > 0 ? new Set(pausedDates) : undefined;
        const lastActiveEndDate = getLastActiveEndDate(periodsList);
        setRefreshPeriods(false);
        setPeriods({
          list: periodsList,
          loaded: true,
          uniqueDates,
          isUserCurrentlyPaused: periodsList.filter(period => period.isActive).length > 0,
          currentPausedPeriod: periodsList.reduce((lastEndDate, period) => {
            const endDate = new Date(period.endDate);
            const startDate = new Date(period.startDate);
            if (startDate < lastEndDate && endDate > lastEndDate) {
              lastEndDate = endDate;
            }
            return lastEndDate;
          }, lastActiveEndDate),
        });
      });
    }
  }, [userId, refreshPeriods]);

  const addNewPeriod = async data => {
    setIsSubmitting(true);
    await addPeriodRequest({ ...data }, activeUser.id, activeAccount.id)
      .then(response => {
        setRefreshPeriods(!refreshPeriods);
        setIsSubmitting(false);
        createToast({ type: 'success', message: 'Pause Period successfully created' });
        return response;
      })
      .catch(() => {
        setIsSubmitting(false);
        createToast({ type: 'error', message: 'There was an error creating your Pause Period' });
      });
  };

  const cancelPeriod = id => {
    setIsSubmitting(true);
    return removePeriodRequest(id)
      .then(() => {
        setIsSubmitting(false);
        setRefreshPeriods(!refreshPeriods);
        createToast({ type: 'success', message: 'Pause Period successfully removed' });
      })
      .catch(() => {
        setIsSubmitting(false);
        createToast({
          type: 'error',
          message: 'There was an error pausing your cadences, please try again later',
        });
      });
  };

  const updatePeriod = (id, period) => {
    setIsSubmitting(true);
    return updatePeriodRequest(id, period)
      .then(response => {
        setRefreshPeriods(!refreshPeriods);
        setIsSubmitting(false);
        createToast({ type: 'success', message: 'Pause Cadence Updated' });
        return response;
      })
      .catch(() => {
        setIsSubmitting(false);
        createToast({
          type: 'error',
          message: 'There was an error pausing your cadences, please try again later',
        });
      });
  };

  return {
    periods,
    addNewPeriod,
    cancelPeriod,
    updatePeriod,
    isSubmitting,
    setRefreshPeriods,
  };
};
