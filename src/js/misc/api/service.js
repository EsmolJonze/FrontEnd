import { request } from './utils';
import { ApiHosts } from './ApiHosts';

export const ServiceApi = {
  request: props => request({ host: ApiHosts.webService.host(), ...props }),
};
