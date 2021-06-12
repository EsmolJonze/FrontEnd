import { BobjectApi } from '../misc/api/bobject';
import { ServiceApi } from '../misc/api/service';
import useSWR from 'swr';

const fetchQualifyingQuestions = async (url, ...filters) =>
  ServiceApi.request({
    url,
    method: 'POST',
    body: {
      name: filters[0] || '',
      stage: filters[1],
      enabled: filters[2],
      segmentationValues: JSON.parse(filters[3]),
    },
    requestParams: {
      sort: 'updateDatetime,desc',
    },
  });

// TODO: Create backend endpoint in new QQ controller
const submitPartialQQUpdate = (
  qualifyingQuestionId,
  newQualifyingQuestionValue,
  qualifyingQuestionID,
) =>
  BobjectApi.request()
    .Lead()
    .partialSet({
      bobjectId: qualifyingQuestionId,
      data: {
        [qualifyingQuestionID]: newQualifyingQuestionValue,
      },
    });

export const useQualifyingQuestions = (filters = {}) => {
  const { name, enabled, stage = 'PROSPECT', segmentationValues = {} } = filters;
  const { data, error } = useSWR(
    ['/qualifyingQuestions/search', name, stage, enabled, JSON.stringify(segmentationValues)],
    fetchQualifyingQuestions,
  );

  const updateQualifyingQuestionValue = (
    qualifyingQuestionID,
    leadId,
    newQualifyingQuestionValue,
  ) => submitPartialQQUpdate(leadId, newQualifyingQuestionValue, qualifyingQuestionID);

  return {
    qualifyingQuestions: data || [],
    isLoading: !data && !error,
    updateQualifyingQuestionValue,
  };
};
