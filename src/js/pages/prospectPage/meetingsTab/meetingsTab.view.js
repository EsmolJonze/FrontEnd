import React, { useEffect, useLayoutEffect, useState } from 'react';
import TabLayout from '../../../layouts/subhomesLayout/tabLayout';
import UndoToast from '../../../components/undoToast';
import { filterComponent } from '../prospectFilters/prospectFilters.components';
import ProspectFilters from '../prospectFilters';
import { tasksLists, showList } from './meetingsTab.service';
import { PROSPECT_TAB } from '../prospectPage.constant';
import BobjectListGroup from '../../../components/bobjectList/bobjectListGroup';
import { useBobjectList } from '../../../contexts/bobjectList';
import { useUserSettings } from '../../../components/userPermissions/hooks';
import {
  scheduledAndMeetingsOrderSet,
  scheduledDateFilterItem,
} from '../prospectFilters/orderFilter/orderFilter.view';
import { useActiveUser } from '../../../hooks';
import InfoComponent from '../InfoComponent';
import { useTaskNavigation } from '../../../hooks/useTaskNavigation';
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
  const { activeUser } = useActiveUser();
  const settings = useUserSettings();

  const [list, setList] = useState(() => []);

  useEffect(() => {
    if (activeUser) {
      setList(tasksLists(settings?.account?.features.salesFeature, activeUser));
    } else {
      setList(() => []);
    }
  }, [activeUser]);

  useLayoutEffect(() => {
    setTabSelected(PROSPECT_TAB.meeting);
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
          <InfoComponent title="Meeting reminders for the next 7 days" hasTaskNavigation />
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
