import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState,
} from 'recoil';
import { BobjectApi } from '../misc/api/bobject';

const activeLeadsAtom = atom({
  key: 'activeLeadsAtom',
  default: {
    data: undefined,
    loaded: false,
    isFetching: false,
  },
});

const activeLeadIdAtom = atom({
  key: 'activeLeadIdAtom',
  default: undefined,
});

export const activeLeadSelector = selector({
  key: 'activeLeadSelector',
  get: ({ get }) => {
    const leadIndex = get(activeLeadIdAtom);
    const leads = get(activeLeadsAtom);
    return leads.data?.find(lead => lead.id.value === leadIndex);
  },
});

const fetchLead = leadId =>
  BobjectApi.request()
    .Lead()
    .getForm(leadId);

export const useActiveLeads = () => {
  const [leadsState, setLeadsState] = useRecoilState(activeLeadsAtom);
  const selectedLead = useRecoilValue(activeLeadSelector);
  const updateSelectedLead = useSetRecoilState(activeLeadIdAtom);
  const resetActiveLeads = useResetRecoilState(activeLeadsAtom);
  const resetSelectedLead = useResetRecoilState(activeLeadIdAtom);

  const updateActiveLeads = newLeads => {
    setLeadsState({
      ...leadsState,
      data: newLeads,
      loaded: true,
    });
  };

  const updateSingleLead = async (leadId, onError) => {
    setLeadsState({
      ...leadsState,
      loaded: false,
    });
    await fetchLead(leadId)
      .then(response => {
        updateActiveLeads([response]);
      })
      .catch(error => {
        onError(error);
      });
  };

  return {
    isLoaded: leadsState.loaded,
    leads: leadsState.data,
    resetActiveLeads,
    resetSelectedLead,
    selectedLead,
    updateActiveLeads,
    updateSelectedLead,
    updateSingleLead,
  };
};
