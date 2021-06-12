import { SubscriptionHooks } from '@bloobirds-it/bloobirds-platform-react-api-library';

const EVENTS_TO_LISTEN = Object.seal({
  'twilio-initiated': 'callInitiated',
  'twilio-finished-before-connection': 'callFailed',
  'twilio-ringing': 'callRinging',
  'twilio-in-progress': 'callStarted',
  'twilio-completed': 'callCompleted',
  'twilio-busy': 'callCompleted',
  'twilio-no-answer': 'callCompleted',
  'twilio-failed': 'callCompleted',
});

export const useSetCallFromPhoneSubscriptions = (send, isPhoneForwardingActive) => {
  Object.keys(EVENTS_TO_LISTEN).forEach(event => {
    SubscriptionHooks.useWebsocketEventSubscription(event, () => send(EVENTS_TO_LISTEN[event]), {
      createSubscription: isPhoneForwardingActive,
    });
  });
};
