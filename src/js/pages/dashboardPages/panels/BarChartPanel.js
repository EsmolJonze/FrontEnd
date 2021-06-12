import React from 'react';
import { BarChart } from '@bloobirds-it/bloobirds-platform-component-library/dist/charts';
import {
  preprocessRegularBarChartData,
  preprocessStackedBarChartData,
  isCustomColor,
} from '../utils/dataPreprocessors';
import { DataScope } from './shared/DataScope';
import { EmptyStatePanel } from './EmptyStatePanel';
import { useReportData } from './shared/useReportData';
import { useDashboard, useDrillDownModal } from '../../../hooks';
import { cssVariables } from '../../../style/variables';

const containsStacks = data => Object.keys(data[0] || []).some(key => key.match(/_stack|_group/));

export const BarChartPanel = ({ report, title, options }) => {
  const [data, response] = useReportData(report);
  const { groupBy } = useDashboard();
  const { setOpenDrillDown, updateDrillDown } = useDrillDownModal();
  const isStacked = containsStacks(data);

  const props = isStacked
    ? preprocessStackedBarChartData(report, data, options)
    : preprocessRegularBarChartData(report, data, options);

  if (data.length === 0) {
    return <EmptyStatePanel />;
  }
  const valuesInformation = response?.valuesInformation;
  const stackValuesInformation = response?.stackValuesInformation;

  const getDataKeyColor = (dataKey, index) =>
    props && valuesInformation[(props.points[index]?._label)]?.color !== 'None'
      ? valuesInformation[(props.points[index]?._label)]?.color
      : cssVariables.color.bloobirds.soft;

  const getDataKeyColorStack = dataKey =>
    props && valuesInformation[dataKey]?.color !== 'None'
      ? valuesInformation[dataKey]?.color
      : cssVariables.color.bloobirds.soft;

  const dataKeyColor = isStacked ? getDataKeyColorStack : getDataKeyColor;

  const drillDown = bar => {
    if (valuesInformation) {
      const localFilters = {};
      let nullField;
      let chartTitle = `${title} → ${bar._label || bar._label_group}`;
      if (groupBy && stackValuesInformation && Object.keys(stackValuesInformation).length !== 0) {
        chartTitle = `${title} → ${bar._label_group}`;
        const barInformation = stackValuesInformation[bar._label_group];
        if (bar._label_group === 'Null') {
          nullField = barInformation.fieldId;
        } else {
          localFilters[barInformation.fieldId] = [barInformation.valueId];
        }
      } else if (Object.keys(valuesInformation).length !== 0) {
        const barInformation = valuesInformation[bar._label];
        localFilters[barInformation.fieldId] = [barInformation.valueId];
      }

      if (!('None' in localFilters)) {
        setOpenDrillDown(true);
        updateDrillDown([report], chartTitle, localFilters, nullField, 10, 0);
      }
    }
  };

  return (
    <DataScope max={8} data={props.points}>
      {({ visibleData }) => (
        <BarChart
          {...props}
          points={visibleData}
          getDataKeyColor={isCustomColor(valuesInformation) ? dataKeyColor : undefined}
          onBarClick={response?.canDrillDown ? drillDown : undefined}
        />
      )}
    </DataScope>
  );
};
