import React, { useEffect, useState } from 'react';
import {
  Button,
  Chip,
  ChipGroup,
  ModalContent,
  ModalFooter,
  ModalSection,
  Text,
  TextArea,
} from '@bloobirds-it/bloobirds-platform-component-library';
import { getFieldByLogicRole } from '../../../utils/bobjects.utils';
import { useContactFlow, usePicklistValues, useQueryParams } from '../../../hooks';
import { ACTIVITY_FIELDS_LOGIC_ROLE } from '../../../constants/activity';
import { CALL_RESULTS_LOGIC_ROLE } from '../../../constants/callResult';
import { filterCallResults } from '../contactFlow.utils';
import { useNotificationDelete } from '../../../hooks/useNotifications';
import styles from './callResultOpportunity.module.css';

const isCorrectContact = logicRole => logicRole === CALL_RESULTS_LOGIC_ROLE.CORRECT_CONTACT;

const CallResultOpportunity = ({ handleNext }) => {
  const [callResults, setCallResults] = useState([]);
  const callResultsPicklistValues = usePicklistValues({
    picklistLogicRole: ACTIVITY_FIELDS_LOGIC_ROLE.CALL_RESULT,
  });
  const {
    activity,
    callResultStepData,
    noteStepData,
    setCallResultStepData,
    setNoteStepData,
    updateActivity,
  } = useContactFlow();
  const queryParams = useQueryParams();
  const notificationId = queryParams.get('notificationId');
  const activityId = queryParams.get('showContactFlow');
  const correctContact = callResults.find(
    result => result.logicRole === CALL_RESULTS_LOGIC_ROLE.CORRECT_CONTACT,
  );
  const noAnswer = callResults.find(
    result => result.logicRole === CALL_RESULTS_LOGIC_ROLE.NO_ANSWER,
  );
  const removeNotification = useNotificationDelete();

  useEffect(() => {
    if (activity && !noteStepData) {
      const noteField = getFieldByLogicRole(activity, ACTIVITY_FIELDS_LOGIC_ROLE.NOTE);

      setNoteStepData({
        value: noteField?.text,
        fieldId: noteField?.name,
      });
    }
  }, [activity]);

  useEffect(() => {
    if (!callResultStepData.callResult?.logicRole) {
      setCallResultStepData({
        ...callResultStepData,
        callResult: noAnswer,
      });
    }
  }, [callResultStepData?.callResult]);

  useEffect(() => {
    if (callResultsPicklistValues.length > 0 && callResults.length === 0) {
      setCallResults(filterCallResults(callResultsPicklistValues));
    }
  }, [callResultsPicklistValues]);

  const saveAndNext = () => {
    const data = {
      [ACTIVITY_FIELDS_LOGIC_ROLE.CALL_RESULT]: callResultStepData?.callResult.logicRole,
      [ACTIVITY_FIELDS_LOGIC_ROLE.NOTE]: noteStepData?.value,
    };

    if (activityId) {
      updateActivity(activityId, data);
    }
    if (notificationId) {
      removeNotification(notificationId);
    }
    handleNext(isCorrectContact(callResultStepData?.callResult?.logicRole));
  };

  return (
    <>
      <ModalContent>
        <ModalSection size="l" title="You just made a phone call" icon="phone">
          <div className={styles._section__wrapper}>
            <div className={styles._section_title__wrapper}>
              <Text dataTest="Text-ModalText" size="m" weight="medium" color="peanut">
                Have you been able to contact?*
              </Text>
            </div>
            <ChipGroup
              value={isCorrectContact(callResultStepData?.callResult?.logicRole) ? 'yes' : 'no'}
              onChange={value => {
                setCallResultStepData({
                  ...callResultStepData,
                  callResult: value === 'yes' ? correctContact : noAnswer,
                });
              }}
            >
              <Chip dataTest="YES" value="yes">
                YES
              </Chip>
              <Chip dataTest="NO" value="no">
                NO
              </Chip>
            </ChipGroup>
          </div>
          <div className={styles._section__wrapper}>
            <div className={styles._section_title__wrapper}>
              <Text size="m" weight="medium" color="peanut">
                Do you want to add any information?
              </Text>
            </div>
            <TextArea
              rows="4"
              placeholder="Add a note..."
              width="100%"
              onChange={value =>
                setNoteStepData({
                  ...noteStepData,
                  value,
                })
              }
            />
          </div>
        </ModalSection>
      </ModalContent>
      <ModalFooter>
        <div className={styles._buttons__wrapper}>
          <Button
            dataTest="formNext"
            onClick={saveAndNext}
            disabled={!callResultStepData.callResult?.logicRole}
          >
            NEXT
          </Button>
        </div>
      </ModalFooter>
    </>
  );
};

export default CallResultOpportunity;
