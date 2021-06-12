import React, { useLayoutEffect, useEffect } from 'react';
import TabLayout from '../../../layouts/subhomesLayout/tabLayout';
import BobjectListGroup from '../../../components/bobjectList/bobjectListGroup';
import UndoToast from '../../../components/undoToast';
import { tasksLists, showList } from './activeProspectTab.service';
import { useBobjectList } from '../../../contexts/bobjectList';
import ProspectFilters from '../prospectFilters';
import { filterComponent } from '../prospectFilters/prospectFilters.components';
import { PROSPECT_TAB } from '../prospectPage.constant';
import InfoComponent from '../InfoComponent';
import { prospectingOrderFilterSet } from '../prospectFilters/orderFilter/orderFilter.view';
import { useTaskNavigation } from '../../../hooks/useTaskNavigation';
import { useUserSettings } from '../../../components/userPermissions/hooks';

const shownFilters = [
  filterComponent.orderFilter,
  filterComponent.dateFilter,
  filterComponent.sourceFilter,
  filterComponent.hideCompletedFilter,
];

const ActiveProspectTab = () => {
  const { setTabSelected, state } = useBobjectList();
  const { addTasksToNavigate } = useTaskNavigation();
  const settings = useUserSettings();

  useLayoutEffect(() => {
    setTabSelected(PROSPECT_TAB.cadence);
  }, [setTabSelected]);

  useEffect(() => {
    const tasksToNavigate = [];
    const dateFilter = state.filters.date.value;
    if (dateFilter.length === 0) {
      tasksToNavigate.push(...state.lists.overdue.list);
      tasksToNavigate.push(...state.lists.today.list);
    } else {
      if (dateFilter.includes('OVERDUE')) {
        tasksToNavigate.push(...state.lists.overdue.list);
      }
      if (dateFilter.includes('TODAY')) {
        tasksToNavigate.push(...state.lists.today.list);
      }
    }
    addTasksToNavigate(tasksToNavigate);
  }, [state.lists.overdue, state.lists.today, state.filters.date]);

  const tooltipText =
    'Scheduled cadence tasks for the next 7 days,\n' +
    'for companies in status On Prospection.\n' +
    'Tasks are ranked by order of priority.\n' +
    'note that overdue and future tasks cannot\n' +
    'be completed, only tasks scheduled today';

  return (
    <>
      <TabLayout
        infoComponent={
          <InfoComponent
            title="Companies with prospect cadence tasks for next 7 days"
            tooltipText={tooltipText}
            hasTaskNavigation
          />
        }
        contentLeft={
          <ProspectFilters shownFilters={shownFilters} orderItems={prospectingOrderFilterSet} />
        }
        contentRight={
          <BobjectListGroup
            bobjectLists={tasksLists(settings?.account?.features.salesFeature)}
            showList={showList}
          />
        }
      />
      <UndoToast />
    </>
  );
};

export default React.memo(ActiveProspectTab);
