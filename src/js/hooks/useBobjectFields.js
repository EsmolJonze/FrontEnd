import { ServiceApi } from '../misc/api/service';
import useSWR from 'swr';

const fetchBobjectFields = url =>
  ServiceApi.request({
    url,
    method: 'GET',
  });

export const useBobjectFields = bobjectType => {
  const { data } = useSWR(`/service/view/field/groups/${bobjectType}`, fetchBobjectFields);

  return data || {};
};
