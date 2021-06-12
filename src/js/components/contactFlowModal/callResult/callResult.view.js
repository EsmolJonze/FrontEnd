import React, { useEffect, useState } from 'react';
import { v4 as generateRandomId } from 'uuid';
import useSWR from 'swr';
import {
  Button,
  Chip,
  ChipGroup,
  Item,
  Label,
  ModalContent,
  ModalFooter,
  ModalSection,
  Select,
  Text,
  Spinner,
} from '@bloobirds-it/bloobirds-platform-component-library';
import { getFieldByLogicRole } from '../../../utils/bobjects.utils';
import { ServiceApi } from '../../../misc/api/service';
import { useContactFlow, useQueryParams, usePicklistValues } from '../../../hooks';
import { useNotificationDelete } from '../../../hooks/useNotifications';
import {
  ACTIVITY_FIELDS_LOGIC_ROLE,
  CALL_RESULTS_LOGIC_ROLE,
  PITCH_DONE_VALUES_LOGIC_ROLE,
} from '../../../constants/activity';
import { filterCallResults } from '../contactFlow.utils';
import styles from './callResult.module.css';

const fetcher = url =>
  ServiceApi.request({
    url,
    method: 'POST',
    body: {
      type: 'PITCH',
      segmentationValues: {},
    },
    requestParams: {
      sort: 'name,asc',
    },
  });

const CallResult = ({ handleNext }) => {
  const callResultsPicklistValues = usePicklistValues({
    picklistLogicRole: ACTIVITY_FIELDS_LOGIC_ROLE.CALL_RESULT,
  });
  const pitchDonePicklistValues = usePicklistValues({
    picklistLogicRole: ACTIVITY_FIELDS_LOGIC_ROLE.PITCH_DONE,
  })?.sort((a, b) => (a.value < b.value ? -1 : 1));
  const [callResults, setCallResults] = useState([]);
  const { data: availablePitches } = useSWR('/messagingTemplates/search', fetcher);
  const { activity, callResultStepData, setCallResultStepData, updateActivity } = useContactFlow();
  const queryParams = useQueryParams();
  const notificationId = queryParams.get('notificationId');
  const activityId = queryParams.get('showContactFlow');
  const removeNotification = useNotificationDelete();

  useEffect(() => {
    if (callResultsPicklistValues.length > 0 && callResults.length === 0) {
      setCallResults(filterCallResults(callResultsPicklistValues));
    }
  }, [callResultsPicklistValues]);

  useEffect(() => {
    if (activity && !callResultStepData.loaded) {
      const callResultField = getFieldByLogicRole(activity, ACTIVITY_FIELDS_LOGIC_ROLE.CALL_RESULT);
      const pitchField = getFieldByLogicRole(activity, ACTIVITY_FIELDS_LOGIC_ROLE.PITCH);
      const pitchDoneField = getFieldByLogicRole(activity, ACTIVITY_FIELDS_LOGIC_ROLE.PITCH_DONE);
      const isCorrectContact =
        callResultField.valueLogicRole === CALL_RESULTS_LOGIC_ROLE.CORRECT_CONTACT;

      setCallResultStepData({
        ...callResultStepData,
        callResult: {
          fieldId: callResultField.name,
          value: callResultField.value,
          logicRole: callResultField.valueLogicRole,
          isCorrectContact,
        },
        pitch: {
          done: pitchDonePicklistValues.find(pitch => pitch?.id === pitchDoneField?.value),
          template: pitchField.value,
        },
        loaded: true,
      });
    }
  }, [activity]);

  const resetPitch = {
    done: null,
    template: null,
  };

  const saveAndNext = () => {
    const data = {
      [ACTIVITY_FIELDS_LOGIC_ROLE.CALL_RESULT]: callResultStepData?.callResult.logicRole,
      [ACTIVITY_FIELDS_LOGIC_ROLE.PITCH]: callResultStepData?.pitch.template,
      [ACTIVITY_FIELDS_LOGIC_ROLE.PITCH_DONE]: callResultStepData?.pitch.done?.id,
    };

    if (activityId) {
      updateActivity(activityId, data);
    }
    if (notificationId) {
      removeNotification(notificationId);
    }
    handleNext(callResultStepData?.callResult.logicRole);
  };

  const findPitchDoneNo = pitches =>
    pitches.find(pitch => pitch.logicRole === PITCH_DONE_VALUES_LOGIC_ROLE.NO);

  const isPitchNo = pitch => findPitchDoneNo(pitchDonePicklistValues)?.id === pitch.id;

  return (
    <>
      <ModalContent>
        <ModalSection size="l" title="You just made a phone call" icon="phone">
          <div className={styles._section__wrapper}>
            <div className={styles._section_title__wrapper}>
              <Text size="m" weight="medium" color="peanut">
                What is the call result?*
              </Text>
            </div>
            <div className={styles._labels__wrapper}>
              {callResults.length ? (
                callResults.map(result => (
                  <div
                    className={styles._label__content}
                    key={`call-result-${result.logicRole || generateRandomId()}`}
                  >
                    <Label
                      key={result.logicRole}
                      value={result.logicRole}
                      dataTest={result.logicRole}
                      uppercase={false}
                      inline={false}
                      align="center"
                      onClick={() => {
                        setCallResultStepData({
                          ...callResultStepData,
                          callResult: result,
                          pitch: result.isCorrectContact
                            ? {
                                done: findPitchDoneNo(pitchDonePicklistValues),
                                template: null,
                              }
                            : resetPitch,
                        });
                      }}
                      selected={result.logicRole === callResultStepData?.callResult?.logicRole}
                    >
                      {result.value}
                    </Label>
                  </div>
                ))
              ) : (
                <Spinner name="loadingCircle" />
              )}
            </div>
          </div>
          {callResultStepData.callResult?.isCorrectContact && (
            <div className={styles._section__wrapper}>
              <div className={styles._section_title__wrapper}>
                <Text size="m" weight="medium" color="peanut">
                  Did you get to pitch?
                </Text>
              </div>
              <div className={styles._pitch__wrapper}>
                <div className={styles._chips__wrapper}>
                  <ChipGroup
                    value={callResultStepData.pitch?.done}
                    onChange={value => {
                      setCallResultStepData({
                        ...callResultStepData,
                        pitch: isPitchNo(value)
                          ? { template: null, done: value }
                          : { ...callResultStepData.pitch, done: value },
                      });
                    }}
                  >
                    {pitchDonePicklistValues?.map(pitchDone => (
                      <Chip key={`pitch-done-${pitchDone?.id}`} value={pitchDone}>
                        {pitchDone?.value}
                      </Chip>
                    ))}
                  </ChipGroup>
                </div>

                {callResultStepData.pitch?.done?.logicRole === PITCH_DONE_VALUES_LOGIC_ROLE.YES && (
                  <div className={styles._pitch_select__wrapper}>
                    <Select
                      value={callResultStepData.pitch.template}
                      placeholder="Pitch / Snippet used"
                      width="100%"
                      onChange={value =>
                        setCallResultStepData({
                          ...callResultStepData,
                          pitch: { ...callResultStepData.pitch, template: value },
                        })
                      }
                    >
                      {availablePitches?.map(pitchItem => (
                        <Item key={pitchItem.id} value={pitchItem.id}>
                          {pitchItem.name}
                        </Item>
                      ))}
                    </Select>
                  </div>
                )}
              </div>
            </div>
          )}
        </ModalSection>
      </ModalContent>
      <ModalFooter>
        <div className={styles._buttons__wrapper}>
          <Button
            dataTest="formSave"
            onClick={saveAndNext}
            disabled={!callResultStepData.callResult?.logicRole}
          >
            SAVE AND CONTINUE
          </Button>
        </div>
      </ModalFooter>
    </>
  );
};

export default CallResult;
