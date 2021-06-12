import { Commons } from '@bloobirds-it/bloobirds-platform-js-api-library';

export const callFromPhone = (webApi, connectionDetails) =>
  webApi.request({
    url: '/service/twilio/call/phone',
    method: Commons.HttpMethod.POST,
    body: {
      sdrPhone: connectionDetails.sdrPhone,
      leadPhone: connectionDetails.leadPhone,
      twilioPhone: connectionDetails.twilioPhone,
      companyId: connectionDetails.companyId,
      leadId: connectionDetails.leadId,
    },
  });
