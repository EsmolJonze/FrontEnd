import { atom, useRecoilState } from 'recoil';
import { isBefore, startOfDay } from 'date-fns';
import { useActiveCompany } from './useActiveCompany';
import { useActiveOpportunities } from './useActiveOpportunities';
import { COMPANY_FIELDS_LOGIC_ROLE, COMPANY_STATUS_LOGIC_ROLE } from '../constants/company';
import { BobjectApi } from '../misc/api/bobject';
import { OPPORTUNITY_FIELDS_LOGIC_ROLE } from '../constants/opportunity';

const restartCadencerOpenAtom = atom({
  key: 'restartCadencerOpen',
  default: false,
});

export const useRestartCadenceVisibility = () => {
  const [restartCadenceOpen, setRestartCadenceOpen] = useRecoilState(restartCadencerOpenAtom);

  const openRestartCadenceModal = () => {
    if (!restartCadenceOpen) {
      setRestartCadenceOpen(true);
    }
  };

  const closeRestartCadenceModal = () => {
    if (restartCadenceOpen) {
      setRestartCadenceOpen(false);
    }
  };

  return {
    isOpen: restartCadenceOpen,
    openRestartCadenceModal,
    closeRestartCadenceModal,
  };
};

const postRestartCadenceCompany = (company, fields) =>
  BobjectApi.request()
    .Company()
    .partialSet({
      bobjectId: company?.id.objectId,
      data: fields,
    });

const postRestartCadenceOpportunity = (opportunity, fields) =>
  BobjectApi.request()
    .Opportunity()
    .partialSet({
      bobjectId: opportunity?.id.objectId,
      data: fields,
    });

export const useRestartCadence = () => {
  const {
    openRestartCadenceModal,
    closeRestartCadenceModal,
    isOpen,
  } = useRestartCadenceVisibility();
  const { company } = useActiveCompany();
  const { selectedOpportunity } = useActiveOpportunities();

  const updateCadence = date => {
    const bobject = selectedOpportunity || company;
    const LOGIC_ROLES = selectedOpportunity
      ? OPPORTUNITY_FIELDS_LOGIC_ROLE
      : COMPANY_FIELDS_LOGIC_ROLE;

    const companyStatus = isBefore(date, startOfDay(new Date()))
      ? COMPANY_STATUS_LOGIC_ROLE.ON_PROSPECTION
      : COMPANY_STATUS_LOGIC_ROLE.READY_TO_PROSPECT;
    let fields = {
      [LOGIC_ROLES.START_CADENCE]: date,
      [LOGIC_ROLES.CADENCE_STOPPED]: `${LOGIC_ROLES.CADENCE_STOPPED}__NO`,
    };

    if (!selectedOpportunity) {
      fields = { ...fields, [LOGIC_ROLES.STATUS]: companyStatus };
    }

    if (!selectedOpportunity) {
      postRestartCadenceCompany(bobject, fields);
    } else {
      postRestartCadenceOpportunity(bobject, fields);
    }
  };

  return {
    isOpen,
    openRestartCadenceModal,
    closeRestartCadenceModal,
    updateCadence,
  };
};
