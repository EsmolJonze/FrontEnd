import { useEffect } from 'react';
import { atomFamily, useRecoilState } from 'recoil';
import { ServiceApi } from '../misc/api/service';

const leadReasonsAtom = atomFamily({
  key: 'leadReasonsAtom',
  default: {
    data: {
      resource: [],
      list: [],
    },
    loaded: false,
    isFetching: false,
  },
});

const fetchLeadReasonsList = () =>
  ServiceApi.request({
    url: '/service/view/field/statusReasons/Lead',
    method: 'GET',
  });

export const useLeadReasons = family => {
  const [leadReasons, setLeadReasons] = useRecoilState(leadReasonsAtom(family));

  useEffect(() => {
    if (!leadReasons.isLoaded) {
      setLeadReasons({ ...leadReasons, isFetching: true });
      fetchLeadReasonsList().then(response => {
        setLeadReasons({
          data: { ...leadReasons.data, resource: response },
          isLoaded: true,
          isFetching: false,
        });
      });
    }
  }, [leadReasons.isLoaded]);

  const resetLeadReasonList = () => setLeadReasons({ data: { ...leadReasons.data, list: [] } });

  const updateLeadReasons = statusName => {
    const reasonsField = leadReasons.data.resource.find(
      f => f.logicRole === `LEAD__${statusName?.toUpperCase()}_REASONS`,
    );
    if (reasonsField) {
      setLeadReasons({
        data: { ...leadReasons.data, list: reasonsField.fieldValues },
      });
    }
  };

  return {
    leadReasons: leadReasons.data,
    resetLeadReasonList,
    updateLeadReasons,
    isLoaded: leadReasons.isLoaded,
  };
};
