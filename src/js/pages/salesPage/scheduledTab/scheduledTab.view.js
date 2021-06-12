import React, { useEffect, useLayoutEffect, useState } from 'react';
import TabLayout from '../../../layouts/subhomesLayout/tabLayout';
import { filterComponent } from '../../../layouts/subhomesLayout/prospectFilters/prospectFilters.components';
import { salesOrderFilterSet } from '../../../layouts/subhomesLayout/prospectFilters/orderFilter/orderFilter.view';
import ProspectFilters from '../../../layouts/subhomesLayout/prospectFilters';
import InfoComponent from '../../../layouts/subhomesLayout/infoComponent';
import UndoToast from '../../../components/undoToast';
import BobjectListGroup from '../../../components/bobjectList/bobjectListGroup';
import { useBobjectList } from '../../../contexts/bobjectList';
import { useUserSettings } from '../../../components/userPermissions/hooks';
import { useTaskNavigation, useActiveUser } from '../../../hooks';
import { SALES_TABS } from '../salesPage.constant';
import { tasksLists, showList } from './scheduledTab.service';

const shownFilters = [
  filterComponent.orderFilter,
  filterComponent.dateFilter,
  filterComponent.opportunityStatusFilter,
  filterComponent.hideCompletedFilter,
];

const ScheduledTab = () => {
  const { setTabSelected, state } = useBobjectList();
  const { addTasksToNavigate } = useTaskNavigation();
  const settings = useUserSettings();
  const { activeUser } = useActiveUser();

  const [list, setList] = useState(() => []);

  useEffect(() => {
    if (settings) {
      setList(tasksLists(settings?.account?.features.salesFeature, activeUser));
    } else {
      setList(() => []);
    }
  }, [settings]);

  useLayoutEffect(() => {
    setTabSelected(SALES_TABS.scheduled);
  }, [setTabSelected]);

  useEffect(() => {
    addTasksToNavigate([...state.lists.overdue.list, ...state.lists.today.list]);
  }, [state.lists.overdue, state.lists.today]);

  return (
    <>
      <TabLayout
        infoComponent={
          <InfoComponent
            title="Opportunities with sales next steps for next 7 days"
            hasTaskNavigation
          />
        }
        contentLeft={
          <ProspectFilters shownFilters={shownFilters} orderItems={salesOrderFilterSet} />
        }
        contentRight={<BobjectListGroup bobjectLists={list} showList={showList} />}
      />
      <UndoToast />
    </>
  );
};

export default ScheduledTab;
