import React, { useEffect, useState } from 'react';
import {
  Button,
  Label,
  Modal,
  ModalContent,
  ModalFooter,
  ModalSection,
  Text,
  useToasts,
} from '@bloobirds-it/bloobirds-platform-component-library';
import { getFieldByLogicRole, getValueFromLogicRole } from '../../utils/bobjects.utils';
import { LEAD_FIELDS_LOGIC_ROLE } from '../../constants/lead';
import { useActiveLeads, useMeetingResult } from '../../hooks';
import styles from './meetingResult.module.css';
import { ACTIVITY_FIELDS_LOGIC_ROLE, REPORTED_VALUES_LOGIC_ROLE } from '../../constants/activity';

const MeetingResult = ({ handleClose }) => {
  const [selectedMeetingResult, setSelectedMeetingResult] = useState();
  const { createToast } = useToasts();
  const { selectedLead } = useActiveLeads();
  const {
    activity,
    meetingResults,
    closeMeetingResult,
    reportedActivityResult,
    updateActivity,
  } = useMeetingResult();
  const activityMeetingResult = getFieldByLogicRole(
    activity,
    ACTIVITY_FIELDS_LOGIC_ROLE.MEETING_RESULT,
  );
  const leadName = getValueFromLogicRole(selectedLead, LEAD_FIELDS_LOGIC_ROLE.FULL_NAME);
  const disabledButton = !(
    selectedMeetingResult && activityMeetingResult?.value !== selectedMeetingResult
  );

  useEffect(() => {
    if (activityMeetingResult) {
      setSelectedMeetingResult(activityMeetingResult?.value);
    }
  }, [activityMeetingResult]);

  const saveMeetingResult = () => {
    const data = {
      [ACTIVITY_FIELDS_LOGIC_ROLE.MEETING_RESULT]: selectedMeetingResult,
    };

    updateActivity(activity?.id.objectId, data).then(() => {
      reportedActivityResult({
        valueLogicRole: REPORTED_VALUES_LOGIC_ROLE.YES,
        activityId: activity?.id.objectId,
      });
      closeMeetingResult();
      createToast({ type: 'success', message: 'Activity updated!' });
    });
  };

  return (
    <Modal open title="Report meeting result" onClose={handleClose}>
      <ModalContent>
        <ModalSection
          size="l"
          title={`You just finished a meeting with ${leadName}`}
          icon="calendar"
        >
          <div className={styles._section__wrapper}>
            <div className={styles._section_title__wrapper}>
              <Text size="m" weight="medium" color="peanut">
                What is the meeting result?*
              </Text>
            </div>
          </div>
          <div className={styles._labels__wrapper}>
            <div className={styles._label__content}>
              {meetingResults &&
                meetingResults.map(result => (
                  <Label
                    dataTest={result?.value}
                    uppercase={false}
                    inline={false}
                    align="center"
                    key={`meeting-status-${result?.value}`}
                    selected={selectedMeetingResult === result?.id}
                    onClick={() => setSelectedMeetingResult(result?.id)}
                  >
                    {result?.value}
                  </Label>
                ))}
            </div>
          </div>
        </ModalSection>
      </ModalContent>
      <ModalFooter>
        <div className={styles._buttons__wrapper}>
          <Button variant="clear" onClick={handleClose}>
            Cancel
          </Button>
          <Button dataTest={'formSave'} disabled={disabledButton} onClick={saveMeetingResult}>
            SAVE AND CONTINUE
          </Button>
        </div>
      </ModalFooter>
    </Modal>
  );
};

export default MeetingResult;
