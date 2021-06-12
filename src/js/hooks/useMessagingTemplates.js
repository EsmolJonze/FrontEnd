import useSWR from 'swr';
import { ServiceApi } from '../misc/api/service';

const searchMessagingTemplates = (url, ...filters) =>
  ServiceApi.request({
    url,
    method: 'POST',
    body: {
      type: filters[0],
      stage: filters[1],
      visibility: filters[2],
      name: filters[3] || '',
      segmentationValues: JSON.parse(filters[4]),
    },
    requestParams: {
      sort: 'updateDatetime,desc',
    },
  });

export const useMessagingTemplates = filters => {
  const { segmentationValues, stage, type, name, visibility } = filters;

  const { data, error } = useSWR(
    [
      '/messagingTemplates/search',
      type,
      stage,
      visibility,
      name,
      JSON.stringify(segmentationValues),
    ],
    searchMessagingTemplates,
  );

  return {
    messagingTemplates: data || [],
    isLoading: !data && !error,
    isError: error,
  };
};
