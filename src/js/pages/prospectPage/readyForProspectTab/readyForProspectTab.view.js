import React, { useEffect, useState } from 'react';
import TabLayout from '../../../layouts/subhomesLayout/tabLayout';
import UndoToast from '../../../components/undoToast';
import { filterComponent } from '../prospectFilters/prospectFilters.components';
import ProspectFilters from '../prospectFilters';
import { tasksLists, showList } from './readyForProspectTab.service';
import { PROSPECT_TAB } from '../prospectPage.constant';
import BobjectListGroup from '../../../components/bobjectList/bobjectListGroup';
import { useBobjectList } from '../../../contexts/bobjectList';
import { reducedOrderFilterSet } from '../prospectFilters/orderFilter/orderFilter.view';
import { useEntity } from '../../../hooks/entities/useEntity';
import { useTaskNavigation } from '../../../hooks/useTaskNavigation';
import InfoComponent from '../InfoComponent';
import { useUserSettings } from '../../../components/userPermissions/hooks';

const shownFilters = [
  filterComponent.orderFilter,
  filterComponent.sourceFilter,
  filterComponent.hideCompletedFilter,
];

const ReadyForProspectTab = () => {
  const { setTabSelected, state } = useBobjectList();
  const { addTasksToNavigate } = useTaskNavigation();
  const bobjectFields = useEntity('bobjectFields');
  const bobjectPicklistFieldValues = useEntity('bobjectPicklistFieldValues');
  const [list, setList] = useState(() => []);
  const settings = useUserSettings();

  useEffect(() => {
    if (bobjectFields && bobjectPicklistFieldValues) {
      setList(tasksLists(bobjectFields, bobjectPicklistFieldValues));
    } else {
      setList(() => []);
    }
  }, [bobjectFields, bobjectPicklistFieldValues]);

  useEffect(() => {
    setTabSelected(PROSPECT_TAB.ready);
  }, [setTabSelected]);

  useEffect(() => {
    addTasksToNavigate([...state.lists.startCadence.list]);
  }, [state.lists.startCadence]);

  if (
    !settings?.account?.features.timeZoneFeature &&
    reducedOrderFilterSet[1].value.field === 'COMPANY__TIME_ZONE'
  ) {
    reducedOrderFilterSet.splice(1, 1);
  }

  return (
    <>
      <TabLayout
        infoComponent={
          <InfoComponent
            title="Companies in status Ready to prospect, awaiting their 1st contact attempt."
            hasTaskNavigation
          />
        }
        contentLeft={
          <ProspectFilters shownFilters={shownFilters} orderItems={reducedOrderFilterSet} />
        }
        contentRight={<BobjectListGroup bobjectLists={list} showList={showList} />}
      />
      <UndoToast />
    </>
  );
};

export default ReadyForProspectTab;
