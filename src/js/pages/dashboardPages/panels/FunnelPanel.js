import { BarChart } from '@bloobirds-it/bloobirds-platform-component-library/dist/charts';
import React from 'react';
import { EmptyStatePanel } from './EmptyStatePanel';
import { useReportData } from './shared/useReportData';

export const FunnelPanel = ({ report }) => {
  const [data] = useReportData(report);
  const areAllBarsEmpty = data.every(item => item.count === 0);

  if (areAllBarsEmpty) {
    return <EmptyStatePanel />;
  }

  return <BarChart groupKey="_label" dataKeys={['count']} points={data} showFunnel />;
};
