import useSWR from 'swr';
import { ServiceApi } from '../misc/api/service';

const fetchMessagingTemplate = url =>
  ServiceApi.request({
    url,
    method: 'GET',
  });

const useMessagingTemplate = id => {
  const { data, error, mutate } = useSWR(
    id ? `/messagingTemplates/${id}` : null,
    fetchMessagingTemplate,
  );

  const saveMessagingTemplate = async payload => {
    const messagingTemplate = await ServiceApi.request({
      url: payload.id ? `/messagingTemplates/${payload.id}` : '/messagingTemplates',
      method: payload.id ? 'PUT' : 'POST',
      body: payload,
    });
    await mutate(messagingTemplate);
  };

  const deleteMessagingTemplate = async messagingTemplateId =>
    ServiceApi.request({ url: `/messagingTemplates/${messagingTemplateId}`, method: 'DELETE' });

  return {
    messagingTemplate: data,
    isLoading: !data && !error,
    saveMessagingTemplate,
    deleteMessagingTemplate,
  };
};

export default useMessagingTemplate;
