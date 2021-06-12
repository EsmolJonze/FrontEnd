import React, { useEffect, useState } from 'react';
import {
  Button,
  ModalContent,
  ModalFooter,
  ModalSection,
  TextArea,
} from '@bloobirds-it/bloobirds-platform-component-library';
import { getFieldByLogicRole, getFieldById } from '../../../utils/bobjects.utils';
import {
  useActiveCompany,
  useContactFlow,
  useMessagingFilterOptions,
  useQualifyingQuestions,
  useLeads,
} from '../../../hooks';
import { ACTIVITY_FIELDS_LOGIC_ROLE } from '../../../constants/activity';
import styles from './noteAndQQ.module.css';
import QualifyingQuestion from '../../qualifyingQuestions/qualifyingQuestion/qualifyingQuestion';

const NoteAndQQ = ({ handleNext, handleBack, hasQQ, isLastStep }) => {
  const { activity, noteStepData, setNoteStepData, updateActivity } = useContactFlow();
  const { company } = useActiveCompany();
  const { leads } = useLeads('contactFlow');
  const stage = 'PROSPECT';
  const messagingFilters = useMessagingFilterOptions(stage);
  const [alreadySelected, setAlreadySelected] = useState(false);
  const [segmentationValues, setSegmentationValues] = useState({});
  const { qualifyingQuestions, updateQualifyingQuestionValue } = useQualifyingQuestions({
    enabled: true,
    stage,
    segmentationValues,
  });
  const lead = leads[0];

  useEffect(() => {
    if (activity && !noteStepData) {
      const noteField = getFieldByLogicRole(activity, ACTIVITY_FIELDS_LOGIC_ROLE.NOTE);

      setNoteStepData({
        value: noteField.text,
        fieldId: noteField.name,
      });
    }
  }, [activity]);

  useEffect(() => {
    if (!alreadySelected) {
      const newFiltersValue = {};
      messagingFilters.forEach(filter => {
        const companyField = getFieldById(company, filter.id)?.value;
        const leadField = getFieldById(lead, filter.id)?.value;
        const value = companyField || leadField;
        if (value) {
          newFiltersValue[filter.id] = [value];
        }
      });

      // Prevent qualifying question from updating the filters
      if (Object.keys(newFiltersValue).length !== 0) {
        setAlreadySelected(true);
      }

      setSegmentationValues(newFiltersValue);
    }
  }, [company, lead, messagingFilters.length]);

  const saveAndNext = () => {
    if (noteStepData?.value) {
      const data = {
        [ACTIVITY_FIELDS_LOGIC_ROLE.NOTE]: noteStepData?.value,
      };
      updateActivity(activity?.id.objectId, data);
    }
    handleNext();
  };

  const textarea = (
    <TextArea
      value={noteStepData?.value}
      rows="16"
      placeholder={!noteStepData?.value ? 'Add a note' : null}
      width="100%"
      onChange={value =>
        setNoteStepData({
          ...noteStepData,
          value,
        })
      }
    />
  );

  return (
    <>
      <ModalContent>
        <div className={styles._content__wrapper}>
          {hasQQ ? (
            <>
              <ModalSection size="l" title="How was the call?" icon="chat">
                <div className={styles._section__wrapper}>{textarea}</div>
              </ModalSection>
              <ModalSection size="l" title="Fill in the qualifying questions" icon="chat">
                <div className={styles._section__wrapper}>
                  {qualifyingQuestions.map(({ id, ...props }) => (
                    <QualifyingQuestion
                      {...props}
                      key={id}
                      value={getFieldById(lead, id)?.value}
                      onChange={value => {
                        updateQualifyingQuestionValue(id, lead.id.objectId, value);
                      }}
                    />
                  ))}
                </div>
              </ModalSection>
            </>
          ) : (
            <div className={styles._textarea__wrapper}>{textarea}</div>
          )}
        </div>
      </ModalContent>
      <ModalFooter>
        <Button variant="clear" onClick={handleBack}>
          Back
        </Button>
        <Button dataTest="formSave" onClick={saveAndNext}>
          {isLastStep ? 'Save' : 'Save and continue'}
        </Button>
      </ModalFooter>
    </>
  );
};

export default NoteAndQQ;
