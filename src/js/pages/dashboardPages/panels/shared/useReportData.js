import { useDashboard } from '../../../../hooks/useDashboard';

export const useReportData = report => {
  const { dashboardData } = useDashboard();

  const response = dashboardData?.data?.results[report];

  if (!response) {
    return [[], {}];
  }

  return [response.result, response];
};
