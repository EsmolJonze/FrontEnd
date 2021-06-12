import { atom, useRecoilState } from 'recoil';
import { ACTIVITY_FIELDS_LOGIC_ROLE } from '../constants/activity';
import { useActivity } from './useActivity';
import { usePicklistValues } from './usePicklistValues';

const meetingResultOpenAtom = atom({
  key: 'meetingResultOpenAtom',
  default: false,
});

export const useMeetingResultVisibility = () => {
  const [meetingResultOpen, setMeetingResultOpen] = useRecoilState(meetingResultOpenAtom);

  const openMeetingResultModal = () => {
    if (!meetingResultOpen) {
      setMeetingResultOpen(true);
    }
  };

  const closeMeetingResultModal = () => {
    if (meetingResultOpen) {
      setMeetingResultOpen(false);
    }
  };

  return {
    isOpen: meetingResultOpen,
    openMeetingResultModal,
    closeMeetingResultModal,
  };
};

export const useMeetingResult = () => {
  const { closeMeetingResultModal, openMeetingResultModal, isOpen } = useMeetingResultVisibility();
  const { activity, setActivityWithId, updateActivity, reportedActivityResult } = useActivity(
    'meetingResult',
  );
  const meetingResults = usePicklistValues({
    picklistLogicRole: ACTIVITY_FIELDS_LOGIC_ROLE.MEETING_RESULT,
  });

  const getEnabledMeetingResults = () => meetingResults.filter(result => result?.enabled);

  const openMeetingResult = activityId => {
    setActivityWithId(activityId);
    openMeetingResultModal();
  };

  return {
    activity,
    isOpen,
    meetingResults: getEnabledMeetingResults(),
    closeMeetingResult: closeMeetingResultModal,
    openMeetingResult,
    reportedActivityResult,
    updateActivity,
  };
};
