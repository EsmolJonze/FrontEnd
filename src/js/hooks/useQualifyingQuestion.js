import useSWR from 'swr';
import { ServiceApi } from '../misc/api/service';

const fetchQualifyingQuestion = url =>
  ServiceApi.request({
    url,
    method: 'GET',
  });

const useQualifyingQuestion = id => {
  const { data, error, mutate } = useSWR(
    id ? `/qualifyingQuestions/${id}` : null,
    fetchQualifyingQuestion,
  );

  const saveQualifyingQuestion = async payload => {
    const singleQQEndpoint = `/qualifyingQuestions/${payload.id}`;
    await ServiceApi.request({
      url: payload.id ? singleQQEndpoint : '/qualifyingQuestions',
      method: payload.id ? 'PUT' : 'POST',
      body: payload,
    });
    await mutate();
  };

  return {
    saveQualifyingQuestion,
    qualifyingQuestion: data,
    isLoading: !data && !error,
  };
};

export default useQualifyingQuestion;
