import React, { useMemo, useEffect } from 'react';
import { useMachine } from '@xstate/react';
import { Modal } from '@bloobirds-it/bloobirds-platform-component-library';
import {
  useActiveCompany,
  useActiveOpportunities,
  useAddToCalendar,
  useBobjectFormCreation,
  useCadenceControl,
  useContactFlow,
  useLeads,
  useOpportunity,
  useQueryParams,
  useRouter,
} from '../../hooks';
import { toCapitalize } from '../../utils/strings.utils';
import CallResult from './callResult';
import ChangeStatus from './changeStatus';
import NoteAndQQ from './noteAndQQ';
import ScheduleNextStep from './scheduleNextStep';
import { parseTimeToDatetime } from '../../utils/dates.utils';
import { CALL_RESULTS_LOGIC_ROLE } from '../../constants/callResult';
import { COMPANY_FIELDS_LOGIC_ROLE } from '../../constants/company';
import { LEAD_FIELDS_LOGIC_ROLE } from '../../constants/lead';
import { getFieldByLogicRole, getValueFromLogicRole } from '../../utils/bobjects.utils';
import { EVENTS, STEPS, stepsMachine } from './contactFlowModal.machine';
import OpportunityControl from './opportunityControl';
import { useUserSettings } from '../userPermissions/hooks';
import CallResultOpportunity from './callResultOpportunity';
import {
  OPPORTUNITY_FIELDS_LOGIC_ROLE,
  OPPORTUNITY_STATUS_LOGIC_ROLE,
} from '../../constants/opportunity';
import { isOpportunityPage } from '../../utils/pages.utils';
import { ACTIVITY_MODE, ACTIVITY_FIELDS_LOGIC_ROLE } from '../../constants/activity';
import { companyUrl } from '../../app/_constants/routes';
import { useMinimizableModals } from '../../hooks/emails/useMinimizableModals';
import { STEPS_PROPS } from './contactFlow.constants';

const OPPORTUNITY_CLOSED_STATUSES = [
  OPPORTUNITY_STATUS_LOGIC_ROLE.CLOSED_LOST,
  OPPORTUNITY_STATUS_LOGIC_ROLE.CLOSED_WON,
];
const isCorrectContact = logicRole => logicRole === CALL_RESULTS_LOGIC_ROLE.CORRECT_CONTACT;
const isApproach = logicRole => logicRole === CALL_RESULTS_LOGIC_ROLE.APPROACH;
const isGatekeeper = logicRole => logicRole === CALL_RESULTS_LOGIC_ROLE.GATEKEEPER;

const ContactFlowModal = ({ open, handleClose }) => {
  const queryParams = useQueryParams();
  const activityId = queryParams.get('showContactFlow');
  const { company } = useActiveCompany();
  const { pathname } = useRouter();
  const { setAddToCalendarState, openAddToCalendarModal } = useAddToCalendar();
  const { openAddActivity, openAddOpportunity } = useBobjectFormCreation();
  const settings = useUserSettings();
  const { openCadenceControl } = useCadenceControl();
  const { updateSelectedOpportunity, resetSelectedActiveOpportunity } = useActiveOpportunities();
  const { openMinimizableModal } = useMinimizableModals();
  const { updateSingleLead, leads, resetLeads } = useLeads('contactFlow');
  const { opportunity, getOpportunityById } = useOpportunity('contactFlow');

  const {
    activity,
    callResultStepData: { callResult },
    changeStatusStepData,
    scheduleStepData,
    initialStep,
    resetActivity,
    resetScheduleStepData,
    resetCallResultStepData,
    resetNoteStepData,
    resetChangeStatusStepData,
    resetInitialStep,
    resetTrigger,
    setActivityId,
    setPreviousStep,
  } = useContactFlow();
  const lead = leads[0];

  const hasLeads = !!lead;
  const isOpportunity = isOpportunityPage(pathname);

  const handleOpenMinimizableModal = type => {
    openMinimizableModal({
      type,
      mode: ACTIVITY_MODE.CREATE,
      company: {
        name: getValueFromLogicRole(company, COMPANY_FIELDS_LOGIC_ROLE.NAME),
        url: companyUrl(company),
        data: company,
      },
    });
  };

  const [{ value: step }, send] = useMachine(stepsMachine, {
    context: {
      handleClose,
      openAddActivity,
      handleOpenMinimizableModal,
      openAddOpportunity,
      hasSalesFeatureEnabled: settings?.account?.features.salesFeature,
      openCadenceControl,
      updateSelectedOpportunity,
      setPreviousStep,
    },
  });

  useEffect(() => {
    if (activity) {
      const leadId = getValueFromLogicRole(activity, ACTIVITY_FIELDS_LOGIC_ROLE.LEAD)?.split(
        '/',
      )[2];
      const opportunityId = getValueFromLogicRole(
        activity,
        ACTIVITY_FIELDS_LOGIC_ROLE.OPPORTUNITY,
      )?.split('/')[2];
      if (leadId && leadId !== 'undefined') {
        updateSingleLead(leadId);
      }
      if (opportunityId && opportunityId !== 'undefined') {
        getOpportunityById(opportunityId);
      }
    }
  }, [activity]);

  useEffect(() => {
    if (initialStep && send) {
      send(initialStep);
    }
  }, [send, initialStep]);

  useEffect(() => {
    if (!isOpportunity && !lead && !initialStep) {
      send(STEPS.CALL_RESULTS);
    }
  }, [isOpportunity, lead]);

  useEffect(() => {
    if (lead && send) {
      const leadOpportunityId = getFieldByLogicRole(lead, LEAD_FIELDS_LOGIC_ROLE.OPPORTUNITY)
        ?.value;

      const isOpportunityClosed = async () => {
        let isClosed = false;
        if (opportunity) {
          const opportunityStatus = getFieldByLogicRole(
            opportunity,
            OPPORTUNITY_FIELDS_LOGIC_ROLE.STATUS,
          )?.valueLogicRole;

          isClosed = OPPORTUNITY_CLOSED_STATUSES.includes(opportunityStatus);
        }

        return isClosed;
      };

      isOpportunityClosed().then(closed => {
        const data = !closed ? { leadOpportunityId } : {};

        send(EVENTS.SET_LEAD_OPPORTUNITY_ID, data);
      });
    }
  }, [send, lead, opportunity]);

  useEffect(
    () => () => {
      resetScheduleStepData();
      resetCallResultStepData();
      resetNoteStepData();
      resetChangeStatusStepData();
      resetActivity();
      resetLeads();
      resetInitialStep();
      resetTrigger();
      if (!isOpportunityPage(pathname)) {
        resetSelectedActiveOpportunity();
      }
    },
    [],
  );

  useEffect(() => {
    if (activityId) {
      setActivityId(activityId);
    }
  }, [activityId]);

  let otherProps = STEPS_PROPS[step];

  // TODO: Better way
  if (step === STEPS.SCHEDULE_NEXT_STEPS) {
    let status = company
      ? toCapitalize(changeStatusStepData?.companyStatus)
      : toCapitalize(changeStatusStepData?.leadStatus);

    if (!status) {
      status = getFieldByLogicRole(company, COMPANY_FIELDS_LOGIC_ROLE.STATUS)?.text;
    }

    otherProps = {
      ...otherProps,
      title: `Schedule next step for ${status} ${company ? 'company' : 'lead'}`,
    };
  }

  return useMemo(
    () =>
      step !== STEPS.INITIAL ? (
        <Modal open={open} onClose={handleClose} {...otherProps}>
          {step === STEPS.CALL_RESULTS_OPP && (
            <CallResultOpportunity
              handleNext={correctContact => {
                send(EVENTS.NEXT, {
                  isCorrectContact: correctContact,
                });
              }}
            />
          )}
          {step === STEPS.CALL_RESULTS && (
            <CallResult
              handleNext={selectedCallResult => {
                send(EVENTS.NEXT, { callResult: selectedCallResult });
              }}
            />
          )}
          {step === STEPS.NOTES_AND_QQ && (
            <NoteAndQQ
              hasQQ={
                (isCorrectContact(callResult?.logicRole) ||
                  isApproach(callResult?.logicRole) ||
                  isGatekeeper(callResult?.logicRole)) &&
                hasLeads
              }
              handleNext={() => send(EVENTS.NEXT)}
              handleBack={() => send(EVENTS.PREVIOUS)}
              isLastStep={!company && 'afterNoteStepValue' === 3} // TODO: This should also be handled by the state machine
            />
          )}
          {step === STEPS.CHANGE_STATUS && (
            <ChangeStatus
              handleNext={(companyStatus, leadStatus) => {
                send(EVENTS.NEXT, { companyStatus, leadStatus });
              }}
              handleClose={handleClose}
              handleSkip={() => {
                handleClose();
                openCadenceControl();
              }}
              handleBack={() => send(EVENTS.PREVIOUS)}
            />
          )}
          {step === STEPS.SCHEDULE_NEXT_STEPS && (
            <ScheduleNextStep
              handleClose={() => {
                const datetime =
                  scheduleStepData?.dateTime || parseTimeToDatetime(scheduleStepData?.time);

                setAddToCalendarState({
                  leadId: scheduleStepData?.lead.id.value,
                  dateTime: datetime,
                  title: scheduleStepData?.title,
                  companyId: company?.id?.value,
                });

                openAddToCalendarModal(true);

                handleClose();
              }}
              handleSkip={handleClose}
              handleBack={() => send(EVENTS.PREVIOUS)}
            />
          )}
          {step === STEPS.OPPORTUNITY_CONTROL && (
            <OpportunityControl
              handleBack={() => send(EVENTS.PREVIOUS)}
              handleClose={handleClose}
            />
          )}
        </Modal>
      ) : null,
    [open, step, scheduleStepData, callResult, changeStatusStepData],
  );
};

export default ContactFlowModal;
