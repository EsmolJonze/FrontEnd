import { useEffect } from 'react';
import { atom, useRecoilState, useResetRecoilState } from 'recoil';
import { useActiveCompany } from './useActiveCompany';
import { useActiveOpportunities } from './useActiveOpportunities';
import { useCompany } from './useCompany';
import { useOpportunity } from './useOpportunity';
import { useTargetMarket } from './useTargetMarket';
import { useUserSettings } from '../components/userPermissions/hooks';
import { COMPANY_FIELDS_LOGIC_ROLE, COMPANY_STATUS_LOGIC_ROLE } from '../constants/company';
import { OPPORTUNITY_FIELDS_LOGIC_ROLE } from '../constants/opportunity';
import { BOBJECT_TYPES } from '../constants/bobject';
import { getFieldByLogicRole } from '../utils/bobjects.utils';
import { isBefore, startOfDay } from 'date-fns';

const cadenceControlOpenAtom = atom({
  key: 'cadenceControlOpen',
  default: false,
});

const cadenceControlAtom = atom({
  key: 'cadenceControl',
  default: {
    data: {
      name: null,
      companyTargetMarket: null,
      currentCadenceName: null,
      currentStartDate: null,
      defaultCadence: null,
      nextStep: 'anything',
      previousStep: true,
    },
    bobjectData: null,
    isLoading: false,
    step: null,
  },
});

const useCadenceControlVisibility = () => {
  const [cadenceControlOpen, setCadenceControlOpen] = useRecoilState(cadenceControlOpenAtom);

  const openCadenceControlModal = () => {
    if (!cadenceControlOpen) {
      setCadenceControlOpen(true);
    }
  };

  const closeCadenceControlModal = () => {
    if (cadenceControlOpen) {
      setCadenceControlOpen(false);
    }
  };

  return {
    isOpen: cadenceControlOpen,
    openCadenceControlModal,
    closeCadenceControlModal,
  };
};

export const useCadenceControl = () => {
  const {
    closeCadenceControlModal,
    openCadenceControlModal,
    isOpen,
  } = useCadenceControlVisibility();
  const { selectedOpportunity } = useActiveOpportunities();
  const { company } = useActiveCompany();
  const [cadenceControl, setCadenceControl] = useRecoilState(cadenceControlAtom);
  const resetCadenceControl = useResetRecoilState(cadenceControlAtom);
  const companyTargetMarket =
    company && getFieldByLogicRole(company, COMPANY_FIELDS_LOGIC_ROLE.TARGET_MARKET).text;
  const targetMarketName = useTargetMarket(companyTargetMarket)?.name;
  const { updateCompany } = useCompany('cadence-control');
  const { getOpportunityById, updateOpportunity, opportunity, resetOpportunity } = useOpportunity(
    'cadence-control',
  );

  const getLogicRoles = bobjectData =>
    bobjectData?.id.typeName === BOBJECT_TYPES.OPPORTUNITY
      ? OPPORTUNITY_FIELDS_LOGIC_ROLE
      : COMPANY_FIELDS_LOGIC_ROLE;
  const bobject = selectedOpportunity || company;
  const settings = useUserSettings();

  useEffect(() => {
    const bobjectData = opportunity || bobject;
    const LOGIC_ROLES = getLogicRoles(bobjectData);
    if (bobjectData) {
      setCadenceControl({
        ...cadenceControl,
        data: {
          ...cadenceControl.data,
          name: getFieldByLogicRole(bobjectData, LOGIC_ROLES.NAME)?.text,
          currentCadenceName: getFieldByLogicRole(bobjectData, LOGIC_ROLES.CADENCE)?.text,
          currentStartDate: getFieldByLogicRole(bobjectData, LOGIC_ROLES.START_CADENCE)?.text,
          companyTargetMarket,
          defaultCadence:
            bobjectData?.id.typeName === BOBJECT_TYPES.OPPORTUNITY
              ? settings?.opportunityDefaultCadenceName
              : targetMarketName,
        },
        bobjectData,
        isLoading: false,
      });
    }
  }, [bobject, opportunity]);

  const openCadenceControl = ({ previousStep, bobjectData, step } = { previousStep: true }) => {
    if (!previousStep) {
      setCadenceControl({
        ...cadenceControl,
        data: {
          ...cadenceControl.data,
          previousStep,
        },
        step,
      });
    }
    if (bobjectData && bobjectData.typeName === BOBJECT_TYPES.OPPORTUNITY) {
      setCadenceControl({
        ...cadenceControl,
        isLoading: true,
      });
      getOpportunityById(bobjectData?.objectId);
    }
    openCadenceControlModal();
  };

  const updateCadenceControl = data => setCadenceControl({ ...cadenceControl, data });

  const updateCadence = data => {
    const bobjectToUpdate = cadenceControl.bobjectData;
    const bobjectId = bobjectToUpdate?.id?.objectId;

    if (bobjectToUpdate?.id.typeName === BOBJECT_TYPES.OPPORTUNITY) {
      updateOpportunity(bobjectId, data);
    } else {
      updateCompany(bobjectId, data);
    }
  };

  const stopCadence = callback => {
    const LOGIC_ROLES = getLogicRoles(cadenceControl.bobjectData);
    const data = {
      [LOGIC_ROLES.CADENCE_STOPPED]: `${LOGIC_ROLES.CADENCE_STOPPED}__YES`,
    };

    updateCadence(data);
    callback();
  };

  const saveCadence = (cadence, callback, date) => {
    const bobjectToUpdate = cadenceControl.bobjectData;
    const LOGIC_ROLES = getLogicRoles(cadenceControl.bobjectData);
    const data = {
      [LOGIC_ROLES.CADENCE]: cadence,
      [LOGIC_ROLES.START_CADENCE]: date,
      [LOGIC_ROLES.CADENCE_STOPPED]: `${LOGIC_ROLES.CADENCE_STOPPED}__NO`,
    };
    if (bobjectToUpdate?.id.typeName !== BOBJECT_TYPES.OPPORTUNITY) {
      data[LOGIC_ROLES.STATUS] = isBefore(date, startOfDay(new Date()))
        ? COMPANY_STATUS_LOGIC_ROLE.ON_PROSPECTION
        : COMPANY_STATUS_LOGIC_ROLE.READY_TO_PROSPECT;
    }

    updateCadence(data);
    callback();
  };

  const resetCadenceControlInfo = () => {
    resetCadenceControl();
    resetOpportunity();
  };

  const isAnOpportunity = () => {
    const bobjectDataInfo = cadenceControl.bobjectData;
    return bobjectDataInfo?.id.typeName === BOBJECT_TYPES.OPPORTUNITY;
  };

  return {
    bobject,
    cadenceControl: cadenceControl.data,
    isLoading: cadenceControl.isLoading,
    isOpen,
    isOpportunity: isAnOpportunity(),
    step: cadenceControl.step,
    closeCadenceControl: closeCadenceControlModal,
    openCadenceControl,
    resetCadenceControlInfo,
    saveCadence,
    stopCadence,
    updateCadenceControl,
  };
};
