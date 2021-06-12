import React, { useLayoutEffect, useEffect } from 'react';
import TabLayout from '../../../layouts/subhomesLayout/tabLayout';
import ProspectFilters from '../../../layouts/subhomesLayout/prospectFilters';
import { filterComponent } from '../../../layouts/subhomesLayout/prospectFilters/prospectFilters.components';
import { salesOrderFilterSet } from '../../../layouts/subhomesLayout/prospectFilters/orderFilter/orderFilter.view';
import InfoComponent from '../../../layouts/subhomesLayout/infoComponent';
import BobjectListGroup from '../../../components/bobjectList/bobjectListGroup';
import UndoToast from '../../../components/undoToast';
import { useUserSettings } from '../../../components/userPermissions/hooks';
import { useBobjectList } from '../../../contexts/bobjectList';
import { useTaskNavigation, useActiveUser } from '../../../hooks';
import { tasksLists, showList } from './onCadenceTab.service';
import { SALES_TABS } from '../salesPage.constant';

const shownFilters = [
  filterComponent.orderFilter,
  filterComponent.dateFilter,
  filterComponent.opportunityStatusFilter,
  filterComponent.hideCompletedFilter,
];

const OnCadenceTab = () => {
  const { setTabSelected, state } = useBobjectList();
  const { addTasksToNavigate } = useTaskNavigation();
  const settings = useUserSettings();
  const { activeUser } = useActiveUser();

  useLayoutEffect(() => {
    setTabSelected(SALES_TABS.cadence);
  }, [setTabSelected]);

  useEffect(() => {
    addTasksToNavigate([...state.lists.overdue.list, ...state.lists.today.list]);
  }, [state.lists.overdue, state.lists.today]);

  const tooltipText =
    'Scheduled cadence tasks for the next 7 days,\n' +
    'for opportunities with an ongoing cadence.\n' +
    'Note than overdue and future tasks cannot\n' +
    'be completed, only tasks scheduled for today';

  return (
    <>
      <TabLayout
        infoComponent={
          <InfoComponent
            title="Companies with sales cadence tasks for next 7 days"
            tooltipText={tooltipText}
            hasTaskNavigation
          />
        }
        contentLeft={
          <ProspectFilters shownFilters={shownFilters} orderItems={salesOrderFilterSet} />
        }
        contentRight={
          <BobjectListGroup
            bobjectLists={tasksLists(settings?.account?.features.salesFeature, activeUser)}
            showList={showList}
          />
        }
      />
      <UndoToast />
    </>
  );
};

export default React.memo(OnCadenceTab);
