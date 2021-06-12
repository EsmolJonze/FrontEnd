import { ServiceApi } from '../../misc/api/service';
import * as Twilio from 'twilio-client';

export const invokeFetchToken = () =>
  ServiceApi.request({
    url: '/service/twilio-auth/token',
    method: 'POST',
  })
    .then(data => data)
    .catch(() => console.info('TOKEN ERROR'));

export const deviceInit = token =>
  new Twilio.Device(token, {
    debug: true,
    enableRingingState: true,
    fakeLocalDTMF: true,
    codecPreferences: ['opus', 'pcmu'],
  });
