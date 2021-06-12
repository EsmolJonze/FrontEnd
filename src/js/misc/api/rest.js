import { request } from './utils';
import { ApiHosts } from './ApiHosts';

const restRequest = props =>
  request({
    host: ApiHosts.restService.host(),
    includeAuth: true,
    ...props,
  });
export const RestApi = {
  search: ({ query = {}, entity, searchEndpoint }) =>
    restRequest({
      url: `/${entity}${searchEndpoint ? `/search/${searchEndpoint}` : ''}`,
      method: 'get',
      requestParams: query,
    }),
  patch: ({ entity, id, body }) =>
    restRequest({
      url: `/${entity}/${id}`,
      method: 'PATCH',
      body,
    }),
};
