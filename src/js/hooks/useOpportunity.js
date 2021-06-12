import { atomFamily, useRecoilState } from 'recoil';
import { BobjectApi } from '../misc/api/bobject';

const opportunityAtom = atomFamily({
  key: 'opportunityAtom',
  default: {
    data: undefined,
    loaded: false,
    isFetching: false,
  },
});

const fetchOpportunity = opportunityId =>
  BobjectApi.request()
    .Opportunity()
    .getForm(opportunityId);

// TODO: Use the new bobjectApi
const updateOpportunity = (companyId, data) =>
  BobjectApi.request()
    .bobjectType('Opportunity')
    .partialSet({ bobjectId: companyId, data });

export const useOpportunity = family => {
  const [opportunity, setOpportunity] = useRecoilState(opportunityAtom(family));
  const resetOpportunity = () =>
    setOpportunity({
      data: undefined,
      loaded: false,
      isFetching: false,
    });

  const getOpportunityById = opportunityId => {
    if (!opportunity.isFetching) {
      setOpportunity({ ...opportunity, isFetching: true, loaded: false });
      fetchOpportunity(opportunityId).then(response => {
        setOpportunity({
          data: response,
          loaded: true,
          isFetching: false,
        });
      });
    }
  };

  const setOpportunityData = data => {
    setOpportunity({
      data,
      loaded: true,
      isFetching: false,
    });
  };

  return {
    isFetching: opportunity.isFetching,
    isLoaded: opportunity.loaded,
    opportunity: opportunity.data,
    getOpportunityById,
    setOpportunity: setOpportunityData,
    updateOpportunity,
    resetOpportunity,
  };
};
