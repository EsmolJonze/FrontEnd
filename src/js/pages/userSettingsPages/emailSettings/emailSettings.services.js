import { ServiceApi } from '../../../misc/api/service';

export const fetchAndOpenNylasUrl = (provider = 'gmail') => {
  ServiceApi.request({
    url: '/nylas/generate-url',
    method: 'GET',
    requestParams: { provider },
  }).then(payload => {
    window.open(payload.url);
  });
};

export const fetchAndOpenLegacyUrl = () => {
  ServiceApi.request({
    url: '/service/gmail/connections/endpoint',
    method: 'GET',
  }).then(payload => {
    window.open(payload.endpoint);
  });
};
