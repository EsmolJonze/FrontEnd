import React, { useEffect, useLayoutEffect, useState } from 'react';
import BobjectListGroup from '../../../components/bobjectList/bobjectListGroup';
import UndoToast from '../../../components/undoToast';
import { useBobjectList } from '../../../contexts/bobjectList';
import { useActiveUser, useTaskNavigation } from '../../../hooks';
import { salesOrderFilterSet } from '../../../layouts/subhomesLayout/prospectFilters/orderFilter/orderFilter.view';
import ProspectFilters from '../../../layouts/subhomesLayout/prospectFilters';
import TabLayout from '../../../layouts/subhomesLayout/tabLayout';
import InfoComponent from '../../../layouts/subhomesLayout/infoComponent';
import { filterComponent } from '../../../layouts/subhomesLayout/prospectFilters/prospectFilters.components';
import { tasksLists, showList } from './meetingsTab.service';
import { useUserSettings } from '../../../components/userPermissions/hooks';
import { SALES_TABS } from '../salesPage.constant';

const shownFilters = [
  filterComponent.orderFilter,
  filterComponent.dateFilter,
  filterComponent.opportunityStatusFilter,
  filterComponent.hideCompletedFilter,
];

const MeetingTab = () => {
  const { setTabSelected, state } = useBobjectList();
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
    setTabSelected(SALES_TABS.meeting);
  }, [setTabSelected]);

  useEffect(() => {
    addTasksToNavigate([...state.lists.overdue.list, ...state.lists.today.list]);
  }, [state.lists.overdue, state.lists.today]);

  return (
    <>
      <TabLayout
        infoComponent={
          <InfoComponent
            title="Companies with scheduled meetings for the next 7 days"
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

export default MeetingTab;
