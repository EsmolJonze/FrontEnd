import { EVENTS, STEPS, stepsMachine } from './cadenceControlModal.machine';

it('should reach "Configure cadence" from "Next steps" when the event "NEXT" occurs after transitioning to "Configure cadence" with a Configure a new cadence', () => {
  const expectedValue = STEPS.CONFIGURE_CADENCE;
  const selectedStep = 'newCadence';
  const firstState = stepsMachine.transition(STEPS.NEXT_STEPS, { type: EVENTS.NEXT, selectedStep });
  const actualState = stepsMachine.transition(firstState, EVENTS.NEXT);
  expect(actualState.matches(expectedValue)).toBeTruthy();
});

it('should reach "Update lead status" from "Next steps" when the event "SKIP" occurs after transitioning to "Update lead status" when there are leads', () => {
  const expectedValue = STEPS.UPDATE_LEADS_STATUSES;
  const firstState = stepsMachine.transition(STEPS.UPDATE_LEADS_STATUSES, {
    type: EVENTS.SKIP,
    hasLeads: true,
  });
  const actualState = stepsMachine.transition(firstState, EVENTS.SKIP);
  expect(actualState.matches(expectedValue)).toBeTruthy();
});

it('should reach "Update lead status" from "Configure cadence" when the event "NEXT" occurs after transitioning to "Update lead status" when there are leads', () => {
  const expectedValue = STEPS.UPDATE_LEADS_STATUSES;
  const firstState = stepsMachine.transition(STEPS.CONFIGURE_CADENCE, {
    type: EVENTS.NEXT,
    hasLeads: true,
  });
  const actualState = stepsMachine.transition(firstState, EVENTS.NEXT);
  expect(actualState.matches(expectedValue)).toBeTruthy();
});

it('should reach "Next steps" from "Configure cadence" when the event "PREVIOUS" occurs', () => {
  const expectedValue = STEPS.NEXT_STEPS;
  const firstState = stepsMachine.transition(STEPS.CONFIGURE_CADENCE, { type: EVENTS.PREVIOUS });
  const actualState = stepsMachine.transition(firstState, EVENTS.PREVIOUS);
  expect(actualState.matches(expectedValue)).toBeTruthy();
});

it('should reach "Configure cadence" from "Update lead status" when the event "PREVIOUS" occurs', () => {
  const expectedValue = STEPS.CONFIGURE_CADENCE;
  const actualState = stepsMachine.transition(STEPS.UPDATE_LEADS_STATUSES, EVENTS.PREVIOUS);
  expect(actualState.matches(expectedValue)).toBeTruthy();
});

it('should reach "Configure cadence" from "Stop cadence" when the event "NEXT" occurs after transitioning to "Configure cadence" with a Configure a new cadence', () => {
  const expectedValue = STEPS.CONFIGURE_CADENCE;
  const selectedStep = 'newCadence';
  const firstState = stepsMachine.transition(STEPS.STOP_CADENCE, {
    type: EVENTS.NEXT,
    selectedStep,
  });
  const actualState = stepsMachine.transition(firstState, EVENTS.NEXT);
  expect(actualState.matches(expectedValue)).toBeTruthy();
});

it('should reach "Update lead status" from "Stop cadence" when the event "SKIP" occurs after transitioning to "Update lead status" when there are leads', () => {
  const expectedValue = STEPS.UPDATE_LEADS_STATUSES;
  const firstState = stepsMachine.transition(STEPS.UPDATE_LEADS_STATUSES, {
    type: EVENTS.SKIP,
    hasLeads: true,
  });
  const actualState = stepsMachine.transition(firstState, EVENTS.SKIP);
  expect(actualState.matches(expectedValue)).toBeTruthy();
});
