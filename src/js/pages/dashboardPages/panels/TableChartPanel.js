import React from 'react';
import { TableChart } from '@bloobirds-it/bloobirds-platform-component-library/dist/charts';
import { preprocessTableChartData } from '../utils/dataPreprocessors';
import { formatRange } from '../utils/formatRange';
import { useDashboard } from '../../../hooks';
import { DataScope } from './shared/DataScope';
import { useReportData } from './shared/useReportData';

const renderCellContent = (row, label, interval) => {
  const value = row[label];

  if (label === '__timestamp') {
    return formatRange(value, interval);
  }

  return value;
};

export const TableChartPanel = ({ report, timeColumnTitle }) => {
  const [data] = useReportData(report);
  const { intervalFilter, dateRangeTypeFilter } = useDashboard();
  const { labels, rows } = preprocessTableChartData(data, dateRangeTypeFilter === 'all_time');
  const headerName = value =>
    value === '__timestamp' && timeColumnTitle ? timeColumnTitle : value;
  return (
    <>
      <DataScope data={rows} max={6}>
        {({ visibleData }) => (
          <TableChart>
            <thead>
              <tr>
                {labels.map(label => (
                  <th key={`${report}_${label}`}>{headerName(label)}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {visibleData.map(row => (
                <tr key={`${report}_${row.__timestamp}`}>
                  {labels.map(label => (
                    <td key={`${report}_${row.__timestamp}-${label}`}>
                      {renderCellContent(row, label, intervalFilter)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </TableChart>
        )}
      </DataScope>
    </>
  );
};
