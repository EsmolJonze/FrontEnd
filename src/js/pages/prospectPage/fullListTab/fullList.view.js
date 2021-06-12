import React, { useEffect } from 'react';
import { FullListProspectCompanyTable } from '../../../components/bobjectTable';
import { PROSPECT_TAB } from '../prospectPage.constant';
import { useBobjectList } from '../../../contexts/bobjectList';

const FullListTab = () => {
  const { setTabSelected } = useBobjectList();

  useEffect(() => {
    setTabSelected(PROSPECT_TAB.fullList);
  }, [setTabSelected]);

  return <FullListProspectCompanyTable />;
};

export default FullListTab;
