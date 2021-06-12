import React, { useEffect } from 'react';
import TabLayout from '../../../layouts/subhomesLayout/tabLayout';
import ProspectFilters from '../../../layouts/subhomesLayout/prospectFilters';
import InfoComponent from '../../../layouts/subhomesLayout/infoComponent';
import { salesOrderFilterSet } from '../../../layouts/subhomesLayout/prospectFilters/orderFilter/orderFilter.view';
import { filterComponent } from '../../../layouts/subhomesLayout/prospectFilters/prospectFilters.components';
import { SALES_TABS } from '../salesPage.constant';
import BobjectListGroup from '../../../components/bobjectList/bobjectListGroup';
import { useBobjectList } from '../../../contexts/bobjectList';
import { getOpportunitiesList } from './inactiveTab.service';
import { useActiveUser } from '../../../hooks';

const shownFilters = [
  filterComponent.orderFilter,
  filterComponent.opportunityStatusFilter,
  filterComponent.hideCompletedFilter,
];

const InactiveTab = () => {
  const { activeUser } = useActiveUser();
  const { setTabSelected } = useBobjectList();
  const opportunitiesList = getOpportunitiesList(activeUser);

  useEffect(() => {
    setTabSelected(SALES_TABS.inactive);
  }, [setTabSelected]);

  return (
    <TabLayout
      infoComponent={
        <InfoComponent title={'Open opportunities that have no next steps programmed.'} />
      }
      contentLeft={<ProspectFilters shownFilters={shownFilters} orderItems={salesOrderFilterSet} />}
      contentRight={<BobjectListGroup bobjectLists={opportunitiesList} />}
    />
  );
};

export default InactiveTab;
