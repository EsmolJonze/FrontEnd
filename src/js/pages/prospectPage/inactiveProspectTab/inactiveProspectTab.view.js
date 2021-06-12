import React, { useEffect } from 'react';
import TabLayout from '../../../layouts/subhomesLayout/tabLayout';
import { filterComponent } from '../prospectFilters/prospectFilters.components';
import ProspectFilters from '../prospectFilters';
import { PROSPECT_TAB } from '../prospectPage.constant';
import { useBobjectList } from '../../../contexts/bobjectList';
import InfoComponent from '../InfoComponent';
import { useInactiveTab } from '../../../hooks/useInactiveTab';
import { InactiveBobjectList } from './inactiveBobjectList/inactiveBobjectList.view';

const shownFilters = [
  filterComponent.orderFilter,
  filterComponent.sourceFilter,
  filterComponent.statusFilter,
];

const InactiveProspectTab = () => {
  const { setTabSelected } = useBobjectList();
  const { missingCompanies, isLoaded } = useInactiveTab();

  useEffect(() => {
    setTabSelected(PROSPECT_TAB.inactive);
  }, [setTabSelected]);

  const tooltipText =
    'Companies in pipeline\n' +
    'that have no scheduled tasks.\n' +
    'Schedule a new task or update the\n' +
    'company status to Nurturing or Discarded.';

  return (
    <TabLayout
      infoComponent={
        <InfoComponent
          title={'Companies in pipeline that have no scheduled tasks.'}
          tooltipText={tooltipText}
        />
      }
      contentLeft={<ProspectFilters shownFilters={shownFilters} />}
      contentRight={<InactiveBobjectList bobjectLists={missingCompanies} isLoaded={isLoaded} />}
    />
  );
};

export default InactiveProspectTab;
