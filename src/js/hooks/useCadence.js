import { atom, useRecoilState } from 'recoil';
import { BOBJECT_TYPES } from '../constants/bobject';
import { useUserSettings } from '../components/userPermissions/hooks';
import { TASK_FIELDS_LOGIC_ROLE, TASK_STATUS_VALUE_LOGIC_ROLE, TASK_TYPE } from '../constants/task';
import { OPPORTUNITY_FIELDS_LOGIC_ROLE } from '../constants/opportunity';
import { getValueFromLogicRole } from '../utils/bobjects.utils';
import { SubscriptionHooks } from '@bloobirds-it/bloobirds-platform-react-api-library';

const cadenceAtom = atom({
  key: 'cadenceStartedAtom',
  default: {
    hasStarted: false,
  },
});

export const useCadence = bobject => {
  const [cadenceInfo, setCadenceInfo] = useRecoilState(cadenceAtom);
  const settings = useUserSettings();
  const isFullSalesEnabled = settings?.account?.features.salesFeature;
  const bobjectType = bobject?.id.typeName;

  const fullSalesQuery = isFullSalesEnabled
    ? {
        TASK__OPPORTUNITY:
          bobjectType === BOBJECT_TYPES.OPPORTUNITY
            ? [bobject?.id.value]
            : ['__MATCH_EMPTY_ROWS__'],
      }
    : {};

  const searchRequest = {
    query: {
      [TASK_FIELDS_LOGIC_ROLE.COMPANY]:
        bobjectType === BOBJECT_TYPES.COMPANY
          ? bobject?.id.value
          : getValueFromLogicRole(bobject, OPPORTUNITY_FIELDS_LOGIC_ROLE.COMPANY),
      [TASK_FIELDS_LOGIC_ROLE.STATUS]: [
        TASK_STATUS_VALUE_LOGIC_ROLE.TODO,
        TASK_STATUS_VALUE_LOGIC_ROLE.OVERDUE,
      ],
      [TASK_FIELDS_LOGIC_ROLE.TASK_TYPE]: [TASK_TYPE.PROSPECT_CADENCE, TASK_TYPE.START_CADENCE],
      ...fullSalesQuery,
    },
    formFields: true,
    pageSize: 10,
    injectReferences: true,
  };

  SubscriptionHooks.useBobjectSubscription(
    'Task',
    searchRequest,
    ({ contents: tasks }) => {
      setCadenceInfo({ hasStarted: !!tasks.length });
    },
    () => {},
    !!bobject,
  );

  return {
    hasStarted: cadenceInfo?.hasStarted,
  };
};
