import React, { useCallback, useLayoutEffect } from 'react';
import { subMonths } from 'date-fns';
import {
  Icon,
  Tab,
  TabGroup,
  Text,
  Tooltip,
} from '@bloobirds-it/bloobirds-platform-component-library';
import SubhomesLayout from '../../layouts/subhomesLayout';
import Calendar from './calendar';
import Metrics from './metrics';
import MetricsItem from './metrics/metricItem';
import ActiveProspectTab from './activeProspectTab';
import NextStepsTab from './nextStepsTab';
import MeetingsTab from './meetingsTab';
import InactiveProspectTab from './inactiveProspectTab';
import ReadyForProspectTab from './readyForProspectTab';
import FullListTab from './fullListTab';
import styles from './prospectPage.module.css';
import { useDocumentTitle, useQueryParams, useRouter, useEntity } from '../../hooks';
import {
  useActiveOnProspectTaskCount,
  useReadyToProspectCompanyCount,
  useNextStepCompanyCount,
  useMeetingCompanyCount,
  useNoScheduledTaskCount,
} from './prospectPage.service';
import { useTaskNavigation } from '../../hooks/useTaskNavigation';

const DEFAULT_TAB = 'On cadence';

const calendarTooltip =
  'For today the calendar shows the amount of overdue \n' +
  "and today's On Prospection tasks plus your Ready to \n" +
  'Prospect tasks. For days in the past it shows just the \n' +
  'amount of completed tasks. For days in the future \n' +
  'it shows the to-do On Prospection tasks.';
const statsTooltip =
  'Stats are showing the number of new companies you \n' +
  'started prospecting within the indicated time period.';

const CollapsableContent = () => {
  const today = new Date();
  return (
    <div className={styles._content}>
      <div className={styles._calendar}>
        <div className={styles._calendar_title}>
          <Text htmlTag="h4" size="xs" color="softPeanut" uppercase inline>
            TASK BOARD CALENDAR
          </Text>
          <Tooltip title={calendarTooltip} position="right">
            <Icon color="peanut" name="info" size={16} />
          </Tooltip>
        </div>
        <Calendar />
      </div>
      <div className={styles._metrics}>
        <div className={styles._metrics_title}>
          <Text htmlTag="h4" size="xs" color="softPeanut" uppercase inline>
            STATS PER
          </Text>
          <Tooltip title={statsTooltip} position="right">
            <Icon color="peanut" name="info" size={16} />
          </Tooltip>
        </div>
        <Metrics>
          <MetricsItem title="Outbound this month" date={today} source="OUTBOUND" />
          <MetricsItem title="Inbound this month" date={today} source="INBOUND" />
          <MetricsItem title="Outbound last month" date={subMonths(today, 1)} source="OUTBOUND" />
          <MetricsItem title="Inbound last month" date={subMonths(today, 1)} source="INBOUND" />
        </Metrics>
      </div>
    </div>
  );
};

const RoutedProspectPage = () => {
  const queryParams = useQueryParams();
  const tab = queryParams.get('tab') || DEFAULT_TAB;
  const { history } = useRouter();
  const changeTab = useCallback(newTab => {
    history.push({ search: `tab=${newTab}` });
  }, [history]);
  return <ProspectPage tab={tab} changeTab={changeTab} />;
};

const ProspectPage = ({ tab, changeTab }) => {
  useDocumentTitle('Prospect');
  const bobjectFields = useEntity('bobjectFields');
  const bobjectPicklistFieldValues = useEntity('bobjectPicklistFieldValues');
  const activeOnProspectTasksCount = useActiveOnProspectTaskCount();
  const { finishNavigation } = useTaskNavigation();
  const readyToProspectCompanyCount = useReadyToProspectCompanyCount(
    bobjectFields,
    bobjectPicklistFieldValues,
  );
  const nextStepsCompanyCount = useNextStepCompanyCount();
  const meetingsCompanyCount = useMeetingCompanyCount();
  const { count } = useNoScheduledTaskCount();

  useLayoutEffect(() => {
    finishNavigation();
  }, []);

  return (
    <SubhomesLayout
      id="subhomes"
      title="Prospect"
      collapsableContent={<CollapsableContent />}
      bodyContent={
        <div className={styles._page_content} data-intercom="prospecting-subhome-tabs">
          <TabGroup value={tab} onClick={changeTab} dataTest="prospect-status">
            <Tab
              name="Ready to prospect"
              extra={readyToProspectCompanyCount}
              dataTest="prospect-ready-to-prospect"
            >
              <ReadyForProspectTab />
            </Tab>
            <Tab
              name="On cadence"
              extra={activeOnProspectTasksCount}
              dataTest="prospect-on-cadence"
            >
              <ActiveProspectTab />
            </Tab>
            <Tab name="Scheduled" extra={nextStepsCompanyCount} dataTest="prospect-scheduled">
              <NextStepsTab />
            </Tab>
            <Tab
              name="Meeting reminders"
              extra={meetingsCompanyCount}
              dataTest="prospect-meeting-reminders"
            >
              <MeetingsTab />
            </Tab>
            <Tab name="Inactive" extra={count} dataTest="prospect-inactive">
              <InactiveProspectTab />
            </Tab>
            <Tab name="Full list of companies" dataTest="prospect-full-list">
              <FullListTab />
            </Tab>
          </TabGroup>
        </div>
      }
    />
  );
};

export default React.memo(RoutedProspectPage);
