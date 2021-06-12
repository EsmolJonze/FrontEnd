import React, { Suspense } from 'react';
import { Spinner, Tab, TabGroup, Text } from '@bloobirds-it/bloobirds-platform-component-library';
import NoPermissionsPage from '../../noPermissionsPage';
import styles from './playbookSegmentation.module.css';
import TabLayout from './tabLayout';
import { useIsFullSalesEnabled } from '../../../hooks/useIsFullSalesEnabled';
import SessionManagerFactory from '../../../misc/session';

const PlaybookSegmentationPage = () => {
  const isFullSalesEnabled = useIsFullSalesEnabled();
  const roleManager = SessionManagerFactory().getRoleManager();

  if (!roleManager.isAccountAdmin()) {
    return <NoPermissionsPage />;
  }

  return (
    <Suspense fallback={<Spinner name="loadingCircle" />}>
      <div className={styles._container}>
        <Text htmlTag="h3" size="xl" color="peanut">
          Messaging segmentation
        </Text>
        {isFullSalesEnabled ? (
          <TabGroup>
            <Tab name="Prospect" active>
              <TabLayout stage="PROSPECT" />
            </Tab>
            <Tab name="Sales">
              <TabLayout stage="SALES" />
            </Tab>
          </TabGroup>
        ) : (
          <TabLayout stage="PROSPECT" />
        )}
      </div>
    </Suspense>
  );
};

export default PlaybookSegmentationPage;
