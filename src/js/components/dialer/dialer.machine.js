import { Machine, assign } from 'xstate';
import { invokeFetchToken, deviceInit } from './dialer.actions';
import { CALL_STATE, DEVICE_STATE } from './dialer.constants';
import { publishEvent } from '../../misc/api/panopticon';

const ERROR_STATE = {
  target: DEVICE_STATE.DEVICE_ERRORED,
  actions: assign({
    errors: (context, event) => [...context.errors, event],
  }),
};

const RESET_DIALER = {
  target: DEVICE_STATE.DEVICE_READY,
  actions: assign({
    connection: () => null,
    warnings: () => [],
    message: () => null,
    leadConnected: () => null,
  }),
};

const DialerMachine = Machine(
  {
    id: 'dialer',
    initial: 'Token',
    context: {
      availablePhones: [],
      connection: null,
      device: null,
      errors: [],
      token: null,
      warnings: [],
      message: null,
      leadConnected: null,
      isIncomingCall: false,
      callSid: null,
    },
    on: {
      finish: RESET_DIALER,
      incoming: {
        actions: ['handleIncoming'],
      },
      setCallSid: {
        actions: assign({
          callSid: (context, event) => event.callSid,
        }),
      },
    },
    states: {
      // TODO: Put Token state into DEVICE_STATE
      Token: {
        entry: ['logEvent'],
        invoke: {
          id: 'fetch-token',
          src: invokeFetchToken,
          onDone: {
            target: DEVICE_STATE.DEVICE_INIT,
            actions: assign({
              token: (context, event) => event.data?.token,
              availablePhones: (context, event) => event.data?.phoneNumbers,
            }),
          },
        },
      },
      // TODO: Remove unnecessary middle step by using an async function (invokeFetchToken)
      [DEVICE_STATE.DEVICE_INIT]: {
        entry: ['logEvent'],
        on: {
          initDevice: {
            target: DEVICE_STATE.DEVICE_CONFIGURING,
          },
        },
      },
      [DEVICE_STATE.DEVICE_CONFIGURING]: {
        entry: [
          assign({
            device: context => deviceInit(context.token),
          }),
          'logEvent',
        ],
        on: {
          ready: DEVICE_STATE.DEVICE_READY,
        },
      },
      [DEVICE_STATE.DEVICE_READY]: {
        entry: [
          assign({
            connection: () => null,
            warnings: () => [],
            message: () => '',
            callSid: () => null,
            leadConnected: () => null,
            isIncomingCall: () => false,
            errors: () => [],
          }),
          'logEvent',
        ],
        on: {
          offline: {
            target: 'Token',
            actions: 'destroyDevice',
          },
          makeCall: {
            target: CALL_STATE.CALL_CONNECTING,
            actions: assign({
              connection: (context, event) => event.connection,
              callSid: (context, event) => event.connection.parameters.CallSid,
            }),
          },
          makeFromPhoneCall: [CALL_STATE.CALL_FROM_PHONE_CONNECTING_SDR],
          incoming: {
            target: CALL_STATE.CALL_INCOMING,
            actions: assign({
              connection: (context, event) => event.connection,
              callSid: (context, event) => event.connection.parameters.CallSid,
              isIncomingCall: () => true,
            }),
          },
          callInitiated: CALL_STATE.CALL_FROM_PHONE_INCOMING,
          callRinging: CALL_STATE.CALL_FROM_PHONE_INCOMING,
        },
      },
      [CALL_STATE.CALL_FROM_PHONE_CONNECTING_SDR]: {
        entry: ['logEvent'],
        on: {
          callInitiated: CALL_STATE.CALL_FROM_PHONE_CONNECTING_LEAD,
          callRinging: CALL_STATE.CALL_FROM_PHONE_CONNECTING_LEAD,
          callFailed: {
            target: CALL_STATE.CALL_ENDED,
            actions: assign({
              message: () => 'Call finished',
            }),
          },
        },
      },
      [CALL_STATE.CALL_FROM_PHONE_CONNECTING_LEAD]: {
        entry: ['logEvent'],
        on: {
          callStarted: CALL_STATE.CALL_FROM_PHONE_IN_COURSE,
          callCompleted: {
            target: CALL_STATE.CALL_ENDED,
          },
        },
      },
      [CALL_STATE.CALL_FROM_PHONE_INCOMING]: {
        entry: ['logEvent'],
        on: {
          callCompleted: CALL_STATE.CALL_ENDED,
        },
      },
      [CALL_STATE.CALL_FROM_PHONE_IN_COURSE]: {
        entry: ['logEvent'],
        on: {
          callCompleted: CALL_STATE.CALL_ENDED,
        },
      },
      [CALL_STATE.CALL_CONNECTING]: {
        id: CALL_STATE.CALL_CONNECTING,
        entry: ['logEvent'],
        on: {
          callRinging: {
            target: CALL_STATE.CALL_CONNECTING,
            actions: assign({
              leadConnected: () => true,
            }),
          },
          connect: CALL_STATE.CALL_IN_COURSE,
          disconnect: CALL_STATE.CALL_ENDED,
          error: ERROR_STATE,
          reject: CALL_STATE.CALL_ENDED,
          warning: {
            target: CALL_STATE.CALL_CONNECTING,
            actions: assign({
              warnings: (context, event) => [...context.warnings, event.warning],
            }),
          },
          'clear-warning': {
            target: CALL_STATE.CALL_CONNECTING,
            actions: assign({
              warnings: (context, event) =>
                context.warnings.filter(warning => warning !== event.warning),
            }),
          },
        },
      },
      [CALL_STATE.CALL_INCOMING]: {
        id: CALL_STATE.CALL_INCOMING,
        entry: ['logEvent'],
        on: {
          connect: CALL_STATE.CALL_IN_COURSE,
          hangup: CALL_STATE.CALL_ENDED,
          reject: CALL_STATE.CALL_ENDED, // This event occurs when the other person hangs up on us
          cancel: {
            target: CALL_STATE.CALL_ENDED,
            actions: assign({
              message: () => 'The caller hung up',
            }),
          },
          error: ERROR_STATE,
        },
      },
      [CALL_STATE.CALL_IN_COURSE]: {
        id: CALL_STATE.CALL_IN_COURSE,
        entry: ['logEvent'],
        on: {
          error: [
            {
              // Keep the call if token has expired but reset it for the next state
              cond: 'tokenExpired',
              actions: assign({
                token: () => null,
              }),
            },
            ERROR_STATE,
          ],
          disconnect: CALL_STATE.CALL_ENDED, // This event occurs when the other person hangs up on us and when we hang up
          reject: CALL_STATE.CALL_ENDED,
          warning: {
            target: CALL_STATE.CALL_IN_COURSE,
            actions: assign({
              warnings: (context, event) => [...context.warnings, event.warning],
            }),
          },
          'clear-warning': {
            target: CALL_STATE.CALL_IN_COURSE,
            actions: assign({
              warnings: (context, event) =>
                context.warnings.filter(warning => warning !== event.warning),
            }),
          },
        },
      },
      [CALL_STATE.CALL_ENDED]: {
        entry: ['logEvent'],
        always: [
          {
            // By default try transition to fetch the token if it expired while the call was in course
            target: 'Token',
            cond: 'tokenExpired',
          },
        ],
        on: {
          offline: {
            target: 'Token',
            actions: 'destroyDevice',
          },
          finish: RESET_DIALER,
          error: {
            target: DEVICE_STATE.DEVICE_ERRORED,
            actions: assign({
              errors: (context, event) => [...context.errors, event],
            }),
          },
        },
        after: {
          3000: { target: DEVICE_STATE.DEVICE_READY },
        },
      },
      [DEVICE_STATE.DEVICE_ERRORED]: {
        entry: ['logEvent'],
        after: {
          2000: { target: 'Token' },
        },
      },
    },
  },
  {
    actions: {
      handleIncoming: (context, event, meta) => {
        const state = meta.state.value;
        if (!(state === CALL_STATE.CALL_ENDED || state === DEVICE_STATE.DEVICE_READY)) {
          event.connection.reject();
        }
      },
      logEvent: (context, event, meta) => {
        publishEvent({
          action: meta.state.value,
          assetId: context?.callSid,
          asset: 'Call',
          payload: {
            context,
            event,
          },
        });
      },
      destroyDevice: context => context?.device.destroy(),
    },
    guards: {
      tokenExpired: (context, event) =>
        context?.token === null || event?.connection?.code === 31205,
    },
  },
);

export default DialerMachine;
