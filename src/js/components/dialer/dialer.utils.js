import { CALL_STATE, DEVICE_STATE } from './dialer.constants';

export const isCallIncoming = state => state === CALL_STATE.CALL_INCOMING;
export const isCallIncomingToSDRPhone = state => state === CALL_STATE.CALL_FROM_PHONE_INCOMING;
export const isCallInCourse = state =>
  state === CALL_STATE.CALL_IN_COURSE || state === CALL_STATE.CALL_FROM_PHONE_IN_COURSE;
export const isCallEnded = state => state === CALL_STATE.CALL_ENDED;
export const isCallConnecting = state =>
  state === CALL_STATE.CALL_CONNECTING ||
  state === CALL_STATE.CALL_FROM_PHONE_CONNECTING_LEAD ||
  state === CALL_STATE.CALL_FROM_PHONE_CONNECTING_SDR;
export const isDeviceReady = state => state === DEVICE_STATE.DEVICE_READY;

export function isCallActive(dialerState) {
  return (
    isCallConnecting(dialerState) ||
    isCallInCourse(dialerState) ||
    isCallIncoming(dialerState) ||
    isCallIncomingToSDRPhone(dialerState) ||
    isCallEnded(dialerState)
  );
}
