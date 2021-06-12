import React from 'react';
import { LineChart } from '@bloobirds-it/bloobirds-platform-component-library/dist/charts';
import { preprocessLineChartData, isCustomColor } from '../utils/dataPreprocessors';
import { useDashboard } from '../../../hooks';
import { formatRange } from '../utils/formatRange';
import { useReportData } from './shared/useReportData';
import { cssVariables } from '../../../style/variables';

export const LineChartPanel = ({ report }) => {
  const [data, response] = useReportData(report);
  const { intervalFilter, dateRangeEndFilter, dateRangeTypeFilter } = useDashboard();
  const preprocessedData = preprocessLineChartData(
    data,
    report,
    dateRangeTypeFilter === 'all_time',
  );

  if (preprocessedData.points.length === 0) {
    return null;
  }

  const customInformation = response?.valuesInformation;

  const getDataKeyColor = dataKey =>
    customInformation[dataKey]?.color !== 'None'
      ? customInformation[dataKey]?.color
      : cssVariables.color.bloobirds.soft;

  return (
    <LineChart
      {...preprocessedData}
      getGroupLabel={value => formatRange(value, intervalFilter, dateRangeEndFilter || Date.now())}
      getDataKeyColor={isCustomColor(customInformation) ? getDataKeyColor : undefined}
    />
  );
};
