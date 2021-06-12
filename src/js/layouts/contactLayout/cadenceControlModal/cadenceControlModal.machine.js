import { Machine } from 'xstate';

export const STEPS = Object.seal({
  NEXT_STEPS: 'NEXT_STEPS',
  CONFIGURE_CADENCE: 'CONFIGURE_CADENCE',
  UPDATE_LEADS_STATUSES: 'UPDATE_LEADS_STATUSES',
  STOP_CADENCE: 'STOP_CADENCE',
});

const isConfigureNewCadence = (context, event) => event.selectedStep === 'newCadence';
const isDoAnytingElse = (context, event) => event.selectedStep === 'anything';
const isScheduleNextStep = (context, event) => event.selectedStep === 'nextStep';
const hasLeads = (context, event) => event.hasLeads;

const closeModals = context => context.handleClose();
const createNextStep = context => {
  context.handleClose();
  context.nextStep();
};

export const EVENTS = Object.seal({
  NEXT: 'NEXT',
  PREVIOUS: 'PREVIOUS',
  SKIP: 'SKIP',
});

export const stepsMachine = Machine({
  id: 'cadence_control_steps',
  context: { isAccount: null },
  initial: STEPS.NEXT_STEPS,
  states: {
    [STEPS.NEXT_STEPS]: {
      on: {
        [EVENTS.NEXT]: [
          {
            target: STEPS.CONFIGURE_CADENCE,
            cond: isConfigureNewCadence,
          },
          {
            actions: [closeModals],
            cond: isDoAnytingElse,
          },
          {
            actions: [createNextStep],
            cond: isScheduleNextStep,
          },
        ],
        [EVENTS.SKIP]: STEPS.UPDATE_LEADS_STATUSES,
        [STEPS.CONFIGURE_CADENCE]: STEPS.CONFIGURE_CADENCE,
        [STEPS.UPDATE_LEADS_STATUSES]: STEPS.UPDATE_LEADS_STATUSES,
      },
    },
    [STEPS.CONFIGURE_CADENCE]: {
      on: {
        [EVENTS.NEXT]: [
          {
            target: STEPS.UPDATE_LEADS_STATUSES,
            cond: hasLeads,
          },
          {
            actions: [closeModals],
          },
        ],
        [EVENTS.SKIP]: {
          actions: [closeModals],
        },
        [EVENTS.PREVIOUS]: STEPS.NEXT_STEPS,
      },
    },
    [STEPS.UPDATE_LEADS_STATUSES]: {
      on: {
        [EVENTS.PREVIOUS]: STEPS.CONFIGURE_CADENCE,
      },
    },
    [STEPS.STOP_CADENCE]: {
      on: {
        [EVENTS.NEXT]: [
          {
            target: STEPS.CONFIGURE_CADENCE,
            cond: isConfigureNewCadence,
          },
          {
            actions: [closeModals],
            cond: isDoAnytingElse,
          },
          {
            actions: [createNextStep],
            cond: isScheduleNextStep,
          },
        ],
        [EVENTS.SKIP]: STEPS.UPDATE_LEADS_STATUSES,
      },
    },
  },
});
