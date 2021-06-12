export const DEVICES_EVENT_TYPES = [
  'ready',
  'incoming',
  'connect',
  'disconnect',
  'error',
  'hangup',
  'offline',
];

export const CONNECTION_EVENT_TYPES = [
  'disconnect',
  'ignore',
  'hangup',
  'warning',
  'warning-cleared',
  'reject',
  'cancel',
  'ringing',
];

// TODO: Set proper warning events (and actually use them)
// export const WARNINGS_EVENTS = Object.freeze({
//   'high-rtt':
//     'Round-trip-time (RTT) is the measure of latency in the network. Higher latency can result in perceptible delays in audio.',
//   'low-mos':
//     'Mean Opinion Score (MOS) is a measure of the overall network conditions that affect call quality.',
//   'high-jitter':
//     'Jitter is the measure of variability at which packets arrive at the SDK sensors. High jitter can result in audio quality problems on the call, such as crackling and choppy audio.',
//   'high-packet-loss':
//     'Packet loss is measured as the percentage of packets that were sent but not received at the SDK sensors. High packet loss can result in choppy audio or a dropped call.',
// });

export const CALL_STATE = Object.freeze({
  CALL_INCOMING: 'CALL_INCOMING',
  CALL_IN_COURSE: 'CALL_IN_COURSE',
  CALL_ENDED: 'CALL_ENDED',
  CALL_CONNECTING: 'CALL_CONNECTING',
  CALL_FROM_PHONE_IN_COURSE: 'CALL_FROM_PHONE_IN_COURSE',
  CALL_FROM_PHONE_INCOMING: 'CALL_FROM_PHONE_INCOMING',
  CALL_FROM_PHONE_CONNECTING_LEAD: 'CALL_FROM_PHONE_CONNECTING_LEAD',
  CALL_FROM_PHONE_CONNECTING_SDR: 'CALL_FROM_PHONE_CONNECTING_SDR',
});

export const DEVICE_STATE = Object.freeze({
  DEVICE_INIT: 'DEVICE_INIT',
  DEVICE_CONFIGURING: 'DEVICE_CONFIGURING',
  DEVICE_READY: 'DEVICE_READY',
  DEVICE_ERRORED: 'DEVICE_ERRORED',
  DEVICE_TOKEN: 'Token',
});

export const CALL_STATE_MESSAGE = Object.freeze({
  CALL_INCOMING: 'Call Incoming...',
  CALL_IN_COURSE: 'Call in course',
  CALL_ENDED: 'Call Ended',
  CALL_CONNECTING: 'Connecting...',
  CALL_CONNECTING_LEAD: 'Calling lead...',
  CALL_FROM_PHONE_IN_COURSE: 'Call in course...',
  CALL_FROM_PHONE_INCOMING: 'You have an incoming call...',
  CALL_FROM_PHONE_CONNECTING_LEAD: 'Calling lead...',
  CALL_FROM_PHONE_CONNECTING_SDR: 'Calling your phone...',
});

export const ERROR_CODES = Object.freeze({
  '01000':
    'Something unexpected has happened. If this happens again, please contact Bloobirds for support.',
  10001: 'The call could not be started. Please check your Twilio account configuration and make sure you have enough funds there. If this problem persists, please contact Bloobirds for support.',
  10003: 'Incoming call rejected due to inactive account. This could be because your Twilio account lacks funds. If not, please contact customer support.',
  10004: 'The call was rejected because you reached the maximum limit of simultaneous calls available for your account.',
  13201: 'Call cannot be made because of lack of geolocation permissions. Please contact Bloobirds for support.',
  13224: 'This number appears to be invalid or Twilio does not support calling this number. This could happen because the country or area code is not correctly included.',
  13225: 'The number you are calling to is blocked by Twilio because it has a high-risk of fraud or due to regulatory reasons cannot be enabled by default.',
  13227: 'The number you are calling to is not enabled for your account. This could be because you misdialed the number.',
  13231: 'The connection was lost during the call. Please try again.',
  13247: 'Your caller ID appears to be invalid. Make sure the number you wish to call from was entered correctly.',
  14210: 'Error connecting to API. Please make sure that your endpoints are setup correctly to connect Twilio with Bloobirds.',
  14211: 'Error connecting to API. Please make sure that your endpoints are setup correctly to connect Twilio with Bloobirds.',
  14212: 'The phone number you entered is too short. It must be at least 1 character long.',
  14213: 'The phone number you entered is too long. It must be shorter than 64 characters.',
  14215: 'The provided ReservationSid (security identifier) is not valid. Please contact Bloobirds for support.',
  14217: 'The provided ReservationSid (security identifier) could not be found or has been canceled. Please contact Bloobirds for support.',
  14230: 'The provided WorkflowSid (security identifier) is not valid. Please contact Bloobirds for support.',
  14231: 'The provided Attributes is not in valid JSON format. Please contact Bloobirds for support.',
  14232: 'The provided Priority is not a valid integer. Please contact Bloobirds for support.',
  14233: 'The provided Timeout is not a valid integer. Please contact Bloobirds for support.',
  14236: 'The provided ReservationSid (security identifier) on the Conference TwiML is not valid. Please contact Bloobirds for support.',
  14237: 'The provided PostWorkActivitySid (security identifier) on the Conference TwiML is not a valid ActivitySid. Please contact Bloobirds for support.',
  15000: 'Your call could not be processed because of an internal Twilio error. Please contact Twilio if this error persists.',
  15002: 'There appears to be a network disruption between Twilio and your web server. Please try again.',
  21201: 'You seem to have tried to make a phone call without specifying what number to call to.',
  21202: 'You seem to have tried to make a phone call to a "premium" number, such as a toll line.',
  21203: 'You seem to have tried to make a phone call to an international phone number which is not currently supported.',
  21204: 'The call has already started.',
  21211: 'The number you are trying to call to does not appear to be a valid phone number. Make sure you include "+ country code", e.g. "+34".',
  21212: 'The number you are trying to call from does not appear to be a valid phone number or alphanumeric sender ID.',
  21213: 'You tried to make a phone call without specifying the number to call from. This is required for Twilio to know what caller ID to use for the phone call.',
  21215: 'You tried to make a phone call to a phone number that is not enabled for your account. Please make sure international calling permissions are enabled.',
  21216: 'The number you are calling to appears to be blocked by Twilio.',
  21217: 'The phone number does not appear to be valid. Please check the number and try again.',
  21220: 'You tried to do an ongoing-call action for a call that was not ongoing. Calls that have completed cannot be recorded or redirected.',
  21449: 'The number you tried to add as an outgoing caller ID to your account can already be used for calls and messages.',
  21454: 'Call delay must be an integer between 0 and 60, specifying the number of seconds to delay before initiating the validation call.',
  22001: 'The call timed out before the system could start the call.',
  22123: 'The number you are trying to verify cannot be reached, is invalid, or has been blocked.',
  31008: 'Call has been cancelled.',
  31205: 'The dialer went to sleep because this tab was inactive for a while. Try calling again, or refresh the page. If this error persists, please contact Bloobirds for support.',
  31208: "It appears you didn't allow access to your mic. If you did, make sure you are using Google Chrome. If the issue remains, please contact Bloobirds for support.",
  31481: 'The call no longer exists.',
  32017: 'The carrier blocked the call due to the number you are calling from. Please make sure you are using a valid number.',
  32203: 'The number you are calling to is blocked by Twilio. This could be because it has a high risk of fraud, or due to regulatory reasons cannot be enabled by default.',
  34002: 'The person you are calling appears to be busy.',
  34003: 'The person you are calling is not answering.',
  60214: "This call channel is not supported while Twilio's Verify Service has PSD2 enabled.",
});
