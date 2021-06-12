import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState,
} from 'recoil';
import { BobjectApi, injectReferencesSearchProcess } from '../misc/api/bobject';
import { SubscriptionHooks } from '@bloobirds-it/bloobirds-platform-react-api-library';

const activeOpportunitiesAtom = atom({
  key: 'activeOpportunitiesAtom',
  default: {
    data: undefined,
    loaded: false,
    isFetching: false,
  },
});

const activeOpportunityIdAtom = atom({
  key: 'activeOpportunityIdAtom',
  default: undefined,
});

export const activeOpportunitySelector = selector({
  key: 'activeOpportunitySelector',
  get: ({ get }) => {
    const opportinityIndex = get(activeOpportunityIdAtom);
    const opportunities = get(activeOpportunitiesAtom);
    return opportunities.data?.find(opportunity => opportunity.id.value === opportinityIndex);
  },
});

const fetchOpportunity = opportunityId =>
  BobjectApi.request()
    .Opportunity()
    .getForm(opportunityId);

export const useActiveOpportunities = companyId => {
  const [opportunitiesState, setOpportunitiesState] = useRecoilState(activeOpportunitiesAtom);
  const selectedOpportunity = useRecoilValue(activeOpportunitySelector);
  const updateSelectedOpportunity = useSetRecoilState(activeOpportunityIdAtom);
  const resetActiveOpportunities = useResetRecoilState(activeOpportunitiesAtom);
  const resetSelectedActiveOpportunity = useResetRecoilState(activeOpportunityIdAtom);

  const updateActiveOpportunities = newOpportunities => {
    injectReferencesSearchProcess(newOpportunities);
    setOpportunitiesState({
      ...opportunitiesState,
      data: newOpportunities.contents,
      loaded: true,
    });
  };

  const updateSingleOpportunity = opportunityId => {
    setOpportunitiesState({
      ...opportunitiesState,
      loaded: false,
    });
    fetchOpportunity(opportunityId).then(response => {
      updateActiveOpportunities([response]);
    });
  };

  SubscriptionHooks.useBobjectSubscription(
    'Opportunity',
    {
      query: { OPPORTUNITY__COMPANY: [companyId] },
      formFields: true,
      pageSize: 50,
      injectReferences: true,
    },
    updateActiveOpportunities,
    () => {},
    !!companyId,
  );

  return {
    isLoaded: opportunitiesState.loaded,
    opportunities: opportunitiesState.data,
    resetActiveOpportunities,
    resetSelectedActiveOpportunity,
    selectedOpportunity,
    updateActiveOpportunities,
    updateSelectedOpportunity,
    updateSingleOpportunity,
  };
};
