import { useBloobirdsApiStateContext } from '@bloobirds-it/bloobirds-platform-react-api-library';
import { sortBy } from 'lodash';
import { ServiceApi } from '../misc/api/service';
import useSWR from 'swr';

const fetchSegmentations = async (url, stage) => {
  const response = await ServiceApi.request({
    url: '/segmentations',
    method: 'GET',
    requestParams: {
      stage,
    },
  });
  return sortBy(response, 'ordering');
};

export const useSegmentation = stage => {
  const { webApi } = useBloobirdsApiStateContext();
  const { data: segmentations, mutate, error } = useSWR(
    ['/segmentations', stage],
    fetchSegmentations,
  );

  const updateSegmentations = async body => {
    await webApi.request({
      url: '/segmentations',
      method: 'PUT',
      body,
    });
    await mutate();
  };

  return {
    updateSegmentations,
    segmentations: segmentations || [],
    isLoading: !segmentations && !error,
  };
};
