import { getDateRange } from './dates.utils';
import { TODAY_SCHEDULED_DATE } from '../constants/subhomes';

export const baseQuery = ({ otherFields, activeUser }) => ({
  aggregations: 'TASK__TASK_TYPE',
  otherFields,
  taskScheduledDate: getDateRange(TODAY_SCHEDULED_DATE),
  taskStatus: 'TASK__STATUS__TODO',
  taskType: ['PROSPECT_CADENCE'],
  userId: activeUser.id,
});

export const taskQuery = ({
  aggregations,
  otherFields,
  pageAndForm = false,
  taskScheduledDate,
  taskStatus,
  taskType,
  userId,
}) => {
  const query = {
    query: {
      TASK__ASSIGNED_TO: [userId],
      TASK__TASK_TYPE: taskType,
      TASK__STATUS: [taskStatus],
      TASK__SCHEDULED_DATE: taskScheduledDate,
      ...otherFields,
    },
  };
  if (pageAndForm) {
    query.injectReferences = true;
    query.formFields = true;
    query.page = 0;
    query.pageSize = 5000;
  }
  if (aggregations) query.aggregations = [aggregations];
  return { ...query };
};
