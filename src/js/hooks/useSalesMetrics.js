import { SubscriptionHooks } from '@bloobirds-it/bloobirds-platform-react-api-library';
import { atom, useRecoilState } from 'recoil';
import { intervalDaysOfMonthWithFormat, subMonth } from '../utils/dates.utils';
import { useActiveUser } from './useActiveUser';
import { getValueFromLogicRole } from '../utils/bobjects.utils';
import { BOBJECT_TYPES } from '../constants/bobject';
import { OPPORTUNITY_FIELDS_LOGIC_ROLE } from '../constants/opportunity';

const formatDateQuery = 'yyyy-MM-dd';

const opportunitiesWonThisMonthAtom = atom({
  key: 'opportunitiesWonThisMonthAtom',
  default: 0,
});
const opportunitiesWonLastMonthAtom = atom({
  key: 'opportunitiesWonLastMonthAtom',
  default: 0,
});

export const useSalesMetrics = () => {
  const [opportunitiesWonThisMonth, setOpportunitiesWonThisMonth] = useRecoilState(
    opportunitiesWonThisMonthAtom,
  );
  const [opportunitiesWonLastMonth, setOpportunitiesWonLastMonth] = useRecoilState(
    opportunitiesWonLastMonthAtom,
  );
  const { activeUser } = useActiveUser();

  const getTotalAmount = opportunities => {
    const amounts = opportunities?.map(opportunity =>
      getValueFromLogicRole(opportunity, OPPORTUNITY_FIELDS_LOGIC_ROLE.AMOUNT, true),
    );
    const totalAmount = amounts.reduce((prev, current) => prev + parseInt(current, 10), 0);

    return new Intl.NumberFormat('en-EN', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
    }).format(totalAmount);
  };

  const baseQuery = date => ({
    query: {
      [OPPORTUNITY_FIELDS_LOGIC_ROLE.STATUS__CLOSED_WIN_DATE]: intervalDaysOfMonthWithFormat({
        date,
        format: formatDateQuery,
      }),
      [OPPORTUNITY_FIELDS_LOGIC_ROLE.ASSIGNED_TO]: [activeUser?.id],
    },
    formFields: true,
    injectReferences: true,
  });

  SubscriptionHooks.useBobjectSubscription(
    BOBJECT_TYPES.OPPORTUNITY,
    baseQuery(new Date()),
    response => {
      setOpportunitiesWonThisMonth({
        amount: getTotalAmount(response.contents),
        total: response.totalMatching,
      });
    },
    () => {},
  );

  SubscriptionHooks.useBobjectSubscription(
    BOBJECT_TYPES.OPPORTUNITY,
    baseQuery(subMonth(new Date(), 1)),
    response => {
      setOpportunitiesWonLastMonth({
        amount: getTotalAmount(response.contents),
        total: response.totalMatching,
      });
    },
    () => {},
  );

  return { opportunitiesWonThisMonth, opportunitiesWonLastMonth };
};
