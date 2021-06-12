import { atomFamily, useRecoilState } from 'recoil';
import { BobjectApi } from '../misc/api/bobject';
import { usePicklistValues } from './usePicklistValues';
import { ACTIVITY_FIELDS_LOGIC_ROLE } from '../constants/activity';
import { useToasts } from '@bloobirds-it/bloobirds-platform-component-library';

const activityAtom = atomFamily({
  key: 'activityAtom',
  default: {
    data: undefined,
    loaded: false,
    isFetching: false,
  },
});

const fetchActivity = activityId =>
  BobjectApi.request()
    .Activity()
    .getForm(activityId);

// TODO: Use the new bobjectApi
const updateActivity = (activityId, data) =>
  BobjectApi.request()
    .bobjectType('Activity')
    .partialSet({ bobjectId: activityId, data });

export const useActivity = family => {
  const [activity, setActivity] = useRecoilState(activityAtom(family));
  const reportedValues = usePicklistValues({
    picklistLogicRole: ACTIVITY_FIELDS_LOGIC_ROLE.REPORTED,
  });
  const { createToast } = useToasts();

  const resetActivity = () =>
    setActivity({
      data: undefined,
      loaded: false,
      isFetching: false,
    });

  const setActivityWithId = activityIdToUpdate => {
    if (!activity.isFetching) {
      setActivity({ ...activity, isFetching: true, loaded: false });
      fetchActivity(activityIdToUpdate).then(response => {
        setActivity({
          data: response,
          loaded: true,
          isFetching: false,
        });
      });
    }
  };

  const reportedActivityResult = ({ valueLogicRole, activityId }) => {
    const reported = reportedValues.find(status => status.logicRole === valueLogicRole);
    const activityIdToUpdate = activity.data?.id.objectId || activityId;

    updateActivity(activityIdToUpdate, {
      [ACTIVITY_FIELDS_LOGIC_ROLE.REPORTED]: reported?.id,
    });
  };

  const setPinned = (bobjectId, isPinned, type) => {
    updateActivity(bobjectId, {
      ACTIVITY__IS_PINNED: isPinned ? null : 'ACTIVITY__IS_PINNED__YES',
    }).then(() =>
      createToast({
        message: `${type} ${isPinned ? 'unpinned' : 'pinned'} successfully!`,
        type: 'success',
      }),
    );
  };

  return {
    activity: activity.data,
    isLoaded: activity.loaded,
    isFetching: activity.isFetching,
    reportedActivityResult,
    resetActivity,
    setActivityWithId,
    updateActivity,
    setPinned,
  };
};
