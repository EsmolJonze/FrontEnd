import { useEffect } from 'react';
import { useOpportunity } from './useOpportunity';

export const useActiveOpportunity = opportunityID => {
  const {
    isFetching,
    isLoaded,
    opportunity,
    getOpportunityById,
    resetOpportunity,
    setOpportunity,
  } = useOpportunity('active_opportunity');

  useEffect(() => {
    if (opportunityID) {
      getOpportunityById(opportunityID);
    }
    return resetOpportunity();
  }, [opportunityID]);

  return {
    isFetching,
    isLoaded,
    opportunity,
    getOpportunityById,
    resetOpportunity,
    setOpportunity,
  };
};
