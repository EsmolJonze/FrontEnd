import { assign, Machine } from 'xstate';
import { CALL_RESULTS_LOGIC_ROLE } from '../../constants/callResult';
import { COMPANY_STATUS } from '../../constants/company';
import { LEAD_STATUS } from '../../constants/lead';

export const STEPS = Object.seal({
  INITIAL: 'INITIAL',
  CALL_RESULTS_OPP: 'CALL_RESULTS_OPP',
  CALL_RESULTS: 'CALL_RESULTS',
  NOTES_AND_QQ: 'NOTES_AND_QQ',
  CHANGE_STATUS: 'CHANGE_STATUS',
  SCHEDULE_NEXT_STEPS: 'SCHEDULE_NEXT_STEPS',
  OPPORTUNITY_CONTROL: 'OPPORTUNITY_CONTROL',
});

const canUseSalesFeatures = context => context.hasSalesFeatureEnabled;
const isCorrectContact = (context, event) =>
  context?.callResult === CALL_RESULTS_LOGIC_ROLE.CORRECT_CONTACT || event?.isCorrectContact;
const canCreateOpportunity = (context, event) =>
  (event.companyStatus === COMPANY_STATUS.ACCOUNT || event.leadStatus === LEAD_STATUS.CONTACT) &&
  canUseSalesFeatures(context);
const canStatusHaveNextStep = (context, event) => event.companyStatus === COMPANY_STATUS.NURTURING;
const isLeadDiscarded = (context, event) => event.leadStatus === LEAD_STATUS.DISCARDED;
const isLeadWithOpportunity = (context, event) =>
  !!event?.leadOpportunityId || context?.leadOpportunityId;
const canCreateMeeting = (context, event) =>
  event.companyStatus === COMPANY_STATUS.MEETING || event.leadStatus === LEAD_STATUS.MEETING;
const canOpenCadenceControl = (context, event) =>
  event.companyStatus === COMPANY_STATUS.CONTACTED ||
  event.companyStatus === COMPANY_STATUS.ENGAGED ||
  event.companyStatus === COMPANY_STATUS.ON_PROSPECTION;

const closeModals = context => context.handleClose();
const createMeeting = context => {
  context.handleClose();
  context.handleOpenMinimizableModal('Meeting');
};

const openCadenceControl = context => {
  context.handleClose();
  context.openCadenceControl();
};

const setSelectOpportunity = context => {
  context.updateSelectedOpportunity(context.leadOpportunityId);
};

export const EVENTS = Object.seal({
  NEXT: 'NEXT',
  PREVIOUS: 'PREVIOUS',
  SET_LEAD_OPPORTUNITY_ID: 'SET_LEAD_OPPORTUNITY_ID',
});

export const stepsMachine = Machine({
  id: 'contact_flow_steps',
  context: {
    callResult: null,
    isAccount: null,
    hasSalesFeatureEnabled: false,
    leadOpportunityId: null,
  },
  initial: STEPS.INITIAL,
  states: {
    [STEPS.INITIAL]: {
      on: {
        [EVENTS.SET_LEAD_OPPORTUNITY_ID]: [
          {
            cond: isLeadWithOpportunity,
            actions: assign({
              leadOpportunityId: (context, event) => event.leadOpportunityId,
            }),
            target: STEPS.CALL_RESULTS_OPP,
          },
          {
            target: STEPS.CALL_RESULTS,
          },
        ],
        [STEPS.CHANGE_STATUS]: STEPS.CHANGE_STATUS,
        [STEPS.CALL_RESULTS]: STEPS.CALL_RESULTS,
        [STEPS.CHANGE_STATUS]: STEPS.CHANGE_STATUS,
      },
    },
    [STEPS.CALL_RESULTS_OPP]: {
      on: {
        [EVENTS.NEXT]: [
          {
            target: STEPS.OPPORTUNITY_CONTROL,
            actions: [setSelectOpportunity],
            cond: isCorrectContact,
          },
          {
            actions: [setSelectOpportunity, openCadenceControl],
          },
        ],
      },
    },
    [STEPS.CALL_RESULTS]: {
      on: {
        [EVENTS.SET_LEAD_OPPORTUNITY_ID]: [
          {
            cond: isLeadWithOpportunity,
            actions: assign({
              leadOpportunityId: (context, event) => event.leadOpportunityId,
            }),
            target: STEPS.CALL_RESULTS_OPP,
          },
        ],
        [EVENTS.NEXT]: {
          target: STEPS.NOTES_AND_QQ,
          actions: assign({
            callResult: (context, event) => event.callResult,
          }),
        },
        [EVENTS.SET_LEAD_OPPORTUNITY_ID]: [
          {
            cond: isLeadWithOpportunity,
            actions: assign({
              leadOpportunityId: (context, event) => event.leadOpportunityId,
            }),
            target: STEPS.CALL_RESULTS_OPP,
          },
        ],
      },
    },
    [STEPS.NOTES_AND_QQ]: {
      on: {
        [EVENTS.NEXT]: [
          {
            target: STEPS.CHANGE_STATUS,
            cond: isCorrectContact,
          },
          {
            target: STEPS.SCHEDULE_NEXT_STEPS,
          },
        ],
        [EVENTS.PREVIOUS]: STEPS.CALL_RESULTS,
      },
    },
    [STEPS.CHANGE_STATUS]: {
      on: {
        [EVENTS.NEXT]: [
          {
            target: STEPS.OPPORTUNITY_CONTROL,
            cond: canCreateOpportunity,
          },
          {
            target: STEPS.SCHEDULE_NEXT_STEPS,
            cond: canStatusHaveNextStep,
          },
          {
            actions: [closeModals],
            cond: isLeadDiscarded,
          },
          {
            actions: [createMeeting],
            cond: canCreateMeeting,
          },
          {
            actions: [openCadenceControl],
            cond: canOpenCadenceControl,
          },
        ],
        [EVENTS.PREVIOUS]: STEPS.NOTES_AND_QQ,
      },
    },
    [STEPS.SCHEDULE_NEXT_STEPS]: {
      on: {
        [EVENTS.PREVIOUS]: [
          {
            target: STEPS.CHANGE_STATUS,
            cond: isCorrectContact,
          },
          {
            target: STEPS.NOTES_AND_QQ,
          },
        ],
      },
    },
    [STEPS.OPPORTUNITY_CONTROL]: {
      on: {
        [EVENTS.PREVIOUS]: [
          {
            target: STEPS.CALL_RESULTS_OPP,
            cond: isLeadWithOpportunity,
          },
          {
            target: STEPS.CHANGE_STATUS,
          },
        ],
      },
    },
  },
});
