import React, { useState } from 'react';
import {
  Text,
  Select,
  Item,
  Icon,
  Spinner,
  Tooltip,
} from '@bloobirds-it/bloobirds-platform-component-library';
import styles from './DashboardPanel.module.css';
import { useDashboard, useEntity } from '../../../hooks';
import { EmptyStatePanel } from '../panels/EmptyStatePanel';
import { BarChartPanel } from '../panels/BarChartPanel';
import { LineChartPanel } from '../panels/LineChartPanel';
import { TableChartPanel } from '../panels/TableChartPanel.js';
import { FunnelPanel } from '../panels/FunnelPanel.js';
import { useReportData } from '../panels/shared/useReportData';

const renderPanel = (panelDefinition, multiPanelIndex, isEmpty) => {
  const { type, report, title, timeColumnTitle, options = {} } = panelDefinition;

  if (isEmpty) {
    return <EmptyStatePanel />;
  }

  if (type === 'BarChartPanel') {
    return <BarChartPanel report={report} title={title} options={options} />;
  }

  if (type === 'LineChartPanel') {
    return <LineChartPanel report={report} options={options} />;
  }

  if (type === 'FunnelPanel') {
    return <FunnelPanel report={report} options={options} />;
  }

  if (type === 'TableChartPanel') {
    return <TableChartPanel report={report} timeColumnTitle={timeColumnTitle} />;
  }

  if (type === 'MultiPanel') {
    return <MultiPanel panelDefinition={panelDefinition} index={multiPanelIndex} />;
  }

  return (
    <pre
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      Unknown panel <strong>{type}</strong>
    </pre>
  );
};

const MultiPanel = ({ panelDefinition, index }) => {
  const currentPanelDefinition = panelDefinition.panels[index];

  return renderPanel(currentPanelDefinition);
};

const MultiPanelDropdown = ({ value, onChange, panels }) => (
  <div className={styles.multiPanelDropdownWrapper}>
    <Text size="xs" color="softPeanut">
      Show by
    </Text>
    <Select size="small" borderless value={value} onChange={onChange}>
      {panels.map((panel, index) => (
        <Item key={`${panel.report}_${panel.dropdownTitle}`} value={index}>
          {panel.dropdownTitle}
        </Item>
      ))}
    </Select>
  </div>
);

export const DashboardPanel = ({ panelDefinition }) => {
  const { title, information, disclaimer, report, type } = panelDefinition;
  const bobjectFields = useEntity('bobjectFields');
  const [multiPanelIndex, setMultiPanelIndex] = useState(0);
  const { dashboardData, groupBy } = useDashboard();
  const [data, response] = useReportData(
    type === 'MultiPanel' ? panelDefinition.panels[multiPanelIndex].report : report,
  );
  const { hasGrouped } = response;
  const { isFetching, isFetchingEvolution } = dashboardData;
  const isEmpty = data && data.length === 0;

  const shouldNotHavePadding =
    panelDefinition.type === 'MultiPanel' &&
    panelDefinition.panels[multiPanelIndex].type === 'TableChartPanel';

  const onMultiPanelChange = value => {
    setMultiPanelIndex(value);
  };

  const panelDisclaimer = () => {
    const groupByName = bobjectFields?.findBy('id', groupBy)?.reportingName;
    const groupText = groupBy && !hasGrouped ? `Chart cannot be grouped by ${groupByName}` : '';
    return disclaimer && groupText ? `${disclaimer}. ${groupText}` : disclaimer || groupText;
  };

  const disclaimers = panelDisclaimer();

  let content;

  if (isFetching || (isFetchingEvolution && (type === 'LineChartPanel' || type === 'MultiPanel'))) {
    content = (
      <div className={styles.spinnerWrapper}>
        <Spinner name="loadingCircle" />
      </div>
    );
  } else {
    content = renderPanel(panelDefinition, multiPanelIndex, isEmpty);
  }

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <div>
          <Text size="m" weight="medium" color="softPeanut">
            {title}
          </Text>
          {information && (
            <div className={styles.tooltipWrapper}>
              <Tooltip title={information} position="top">
                <Icon color="darkBloobirds" name="infoFilled" size={16} />
              </Tooltip>
            </div>
          )}
          {disclaimers && panelDefinition.type !== 'MultiPanel' && !isFetching && (
            <Text size="xs" color="peanut">
              {disclaimers}
            </Text>
          )}
          {panelDefinition.type === 'MultiPanel' && !isFetching && (
            <MultiPanelDropdown
              value={multiPanelIndex}
              onChange={onMultiPanelChange}
              panels={panelDefinition.panels}
            />
          )}
        </div>
      </div>
      <div className={styles.content}>
        {/**
         *
         * Recharts ResponsiveContainer is kinda weird. Using this workaround suggested here:
         *
         * https://github.com/recharts/recharts/issues/1767#issuecomment-598607012
         */}

        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          <div
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
              boxSizing: 'border-box',
              padding: shouldNotHavePadding ? 0 : 24,
            }}
          >
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};
