import { atom, useRecoilState, useResetRecoilState } from 'recoil';
import { useActivity } from './useActivity';

const callResultStepAtom = atom({
  key: 'callResultStepAtom',
  default: {
    callResult: null,
    pitch: {
      done: null,
      template: null,
    },
    loaded: false,
  },
});

const noteStepAtom = atom({
  key: 'noteStepAtom',
  default: null,
});

const changeStatusStepAtom = atom({
  key: 'changeStatusStepAtom',
  default: {
    companyStatus: null,
    companyReasonToDiscard: null,
    leadStatus: null,
    leadReasonToDiscard: null,
  },
});

const contactFlowOpenAtom = atom({
  key: 'contactFlowOpenAtom',
  default: false,
});

const scheduleStepAtom = atom({
  key: 'scheduleStepAtom',
  default: {
    title: null,
    dateTime: null,
    lead: null,
    time: null,
  },
});

const initialStepAtom = atom({
  key: 'initialStepAtom',
  default: undefined,
});

const triggerAtom = atom({
  key: 'triggerAtom',
  default: undefined,
});

const useContactFlowVisibility = () => {
  const [contactFlowOpen, setContactFlowOpen] = useRecoilState(contactFlowOpenAtom);

  const openContactFlow = () => {
    if (!contactFlowOpen) {
      setContactFlowOpen(true);
    }
  };

  const closeContactFlow = () => {
    if (contactFlowOpen) {
      setContactFlowOpen(false);
    }
  };

  return {
    isOpen: contactFlowOpen,
    openContactFlow,
    closeContactFlow,
  };
};

export const useContactFlow = () => {
  const { isOpen, openContactFlow, closeContactFlow } = useContactFlowVisibility();
  const [scheduleStepData, setScheduleStepData] = useRecoilState(scheduleStepAtom);
  const [callResultStepData, setCallResultStepData] = useRecoilState(callResultStepAtom);
  const [noteStepData, setNoteStepData] = useRecoilState(noteStepAtom);
  const [changeStatusStepData, setChangeStatusStepData] = useRecoilState(changeStatusStepAtom);
  const [initialStep, setInitialStep] = useRecoilState(initialStepAtom);
  const [trigger, setTrigger] = useRecoilState(triggerAtom);
  const resetScheduleStepData = useResetRecoilState(scheduleStepAtom);
  const resetCallResultStepData = useResetRecoilState(callResultStepAtom);
  const resetNoteStepData = useResetRecoilState(noteStepAtom);
  const resetChangeStatusStepData = useResetRecoilState(changeStatusStepAtom);
  const resetInitialStep = useResetRecoilState(initialStepAtom);
  const resetTrigger = useResetRecoilState(triggerAtom);
  const {
    activity,
    setActivityWithId,
    updateActivity,
    resetActivity,
    reportedActivityResult,
  } = useActivity('contactFlow');

  const setActivityId = activityId => {
    setActivityWithId(activityId);
  };

  const openContactFlowModal = ({ trigger: triggerData = '', step = undefined } = {}) => {
    if (step) {
      setInitialStep(step);
    }

    if (triggerData) {
      setTrigger(triggerData);
    }

    openContactFlow();
  };

  return {
    activity,
    callResultStepData,
    changeStatusStepData,
    initialStep,
    isOpen,
    noteStepData,
    scheduleStepData,
    trigger,
    closeContactFlow,
    openContactFlow: openContactFlowModal,
    reportedActivityResult,
    resetActivity,
    resetCallResultStepData,
    resetChangeStatusStepData,
    resetInitialStep,
    resetNoteStepData,
    resetScheduleStepData,
    resetTrigger,
    setActivityId,
    setCallResultStepData,
    setChangeStatusStepData,
    setInitialStep,
    setNoteStepData,
    setScheduleStepData,
    setTrigger,
    updateActivity,
  };
};
