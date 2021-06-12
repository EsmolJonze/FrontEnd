import React, { useEffect, useLayoutEffect, useState } from 'react';
import TabLayout from '../../../layouts/subhomesLayout/tabLayout';
import UndoToast from '../../../components/undoToast';
import { filterComponent } from '../prospectFilters/prospectFilters.components';
import ProspectFilters from '../prospectFilters';
import { tasksLists, showList } from './nextStepsTab.service';
import { PROSPECT_TAB } from '../prospectPage.constant';
import BobjectListGroup from '../../../components/bobjectList/bobjectListGroup';
import { useBobjectList } from '../../../contexts/bobjectList';
import InfoComponent from '../InfoComponent';
import { useTaskNavigation } from '../../../hooks/useTaskNavigation';
import {
  scheduledAndMeetingsOrderSet,
  scheduledDateFilterItem,
} from '../prospectFilters/orderFilter/orderFilter.view';
import { useUserSettings } from '../../../components/userPermissions/hooks';
import { filtersNames } from '../prospectFilters/prospectFilters.constants';

const shownFilters = [
  filterComponent.orderFilter,
  filterComponent.dateFilter,
  filterComponent.sourceFilter,
  filterComponent.hideCompletedFilter,
];

const NextStepsTab = () => {
  const { setTabSelected, state, setFilter } = useBobjectList();
  const { addTasksToNavigate } = useTaskNavigation();
  const settings = useUserSettings();

  const [list, setList] = useState(() => []);

  useEffect(() => {
    if (settings) {
      setList(tasksLists(settings?.account?.features.salesFeature));
    } else {
      setList(() => []);
    }
  }, [settings]);

  useLayoutEffect(() => {
    setTabSelected(PROSPECT_TAB.scheduled);
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

  useEffect(() => {
    setFilter(filtersNames.sort)(scheduledDateFilterItem.value);
  }, []);

  return (
    <>
      <TabLayout
        infoComponent={
          <InfoComponent title="Companies with scheduled tasks for next 7 days" hasTaskNavigation />
        }
        contentLeft={
          <ProspectFilters shownFilters={shownFilters} orderItems={scheduledAndMeetingsOrderSet} />
        }
        contentRight={<BobjectListGroup bobjectLists={list} showList={showList} />}
      />
      <UndoToast />
    </>
  );
};

export default NextStepsTab;
