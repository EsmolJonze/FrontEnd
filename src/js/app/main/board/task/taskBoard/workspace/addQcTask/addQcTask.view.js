import React, { useEffect } from 'react';
import { TabGroup, Tab } from '@bloobirds-it/bloobirds-platform-component-library';
import { AddQcCompanyTable, LeadTableWithNoQc } from '../../../../../../../components/bobjectTable';
import { TargetMarketTabs } from '../../../../../../../components/entityTabs/entityTabs.view';
import AddQcToLeadModal from '../../../../../../../layouts/contactLayout/addQcToLeadModal';
import styles from './addQcTask.module.css';
import { useRouter } from '../../../../../../../hooks';

const TABS = ['Companies to qualify', 'Leads without QC'];

const AddQcTask = props => {
  const {
    activeTab,
    modalAddQcOpen,
    handleResetView,
    changeTab,
    handleCloseModalAddQc,
    leadId,
  } = props;
  const { history, location } = useRouter();

  useEffect(() => {
    history.replace({ ...location, search: null });
  }, []);

  return (
    <div className={styles._container}>
      <TargetMarketTabs />
      <div className={styles._tab__container}>
        <TabGroup
          value={TABS[activeTab]}
          onClick={value => {
            const tabIndex = TABS.findIndex(tab => tab === value);
            history.replace({ ...location, search: null });
            changeTab(tabIndex);
          }}
        >
          <Tab iconLeft="briefcaseOutline" name="Companies to qualify">
            <AddQcCompanyTable companyStatus="COMPANY__STATUS__NEW" />
          </Tab>
          <Tab
            iconLeft="people"
            name="Leads without QC"
            dataTest="Leads without QC"
            onClick={handleResetView}
          >
            <LeadTableWithNoQc />
            <AddQcToLeadModal
              open={modalAddQcOpen}
              handleClose={handleCloseModalAddQc}
              leadId={leadId}
            />
          </Tab>
        </TabGroup>
      </div>
    </div>
  );
};

export default AddQcTask;
