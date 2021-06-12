import React, { useState } from 'react';
import { Spinner, Tab, TabGroup, Text } from '@bloobirds-it/bloobirds-platform-component-library';
import { useDocumentTitle, useQueryParams, useDialerVisibility } from '../../hooks';
import { useUserSettings, useUserSettingsReload } from '../../components/userPermissions/hooks';
import PersonalDetails from './personalDetails';
import EmailSettings from './emailSettings';
import PasswordSettings from './passwordSettings';
import ConnectionsSettings from './cadenceSettings';
import CallSettings from './callSettings';
import LinkedinSettings from './linkedinSettings';
import Header from './header';
import styles from './userSettingsPages.module.css';

const TABS = Object.freeze({
  PERSONAL_DETAILS: 'General',
  EMAIL: 'Email',
  CALLS: 'Phone',
  LINKEDIN_EXTENSION: 'LinkedIn',
  CADENCE: 'Cadence',
  SECURITY: 'Security',
  CONNECTIONS: 'Connections',
});

const UserSettingsPage = () => {
  const params = useQueryParams();
  const [activeTab, setActiveTab] = useState(
    params.get('tab') ? TABS[params.get('tab')] : TABS.PERSONAL_DETAILS,
  );
  const settings = useUserSettings();
  const userSettingsReload = useUserSettingsReload();
  const isLoading = settings === undefined;
  const { isOpen } = useDialerVisibility();

  useDocumentTitle('User Settings');
  return (
    <div className={styles._page__container} data-intercom="user-settings-page">
      <Header title="Your personal settings" />
      <div className={styles._page__content}>
        <div className={styles._title__container}>
          <Text size="xl" color="softPeanut">
            Personal settings
          </Text>
        </div>
        <React.Suspense
          fallback={
            <div className={styles._spinner__container}>
              <Spinner name="loadingCircle" />
            </div>
          }
        >
          {!isLoading ? (
            <div className={isOpen ? styles._tabs__container_with_dialer : styles._tabs__container}>
              <TabGroup value={activeTab} onClick={tab => setActiveTab(tab)}>
                <Tab name="General">
                  <PersonalDetails
                    name={settings.user.name}
                    shortname={settings.user.shortname}
                    color={settings.user.color}
                    timezone={settings.user.timeZone}
                    onSubmit={userSettingsReload}
                  />
                </Tab>
                <Tab name="Email">
                  <EmailSettings email={settings.user.email} onSubmit={userSettingsReload} />
                </Tab>
                <Tab name="Phone">
                  <CallSettings handleChangeTab={tab => setActiveTab(tab)} />
                </Tab>
                <Tab name="LinkedIn">
                  <LinkedinSettings handleChangeTab={tab => setActiveTab(tab)} />
                </Tab>
                <Tab name="Cadence" dataTest={'UserSettings-CadenceTab'} extra="New">
                  <ConnectionsSettings />
                </Tab>
                <Tab name="Security">
                  <PasswordSettings
                    lastPasswordUpdate={settings.user.lastPasswordUpdate}
                    onSubmit={userSettingsReload}
                  />
                </Tab>
              </TabGroup>
            </div>
          ) : (
            <div className={styles._spinner__container}>
              <Spinner name="loadingCircle" />
            </div>
          )}
        </React.Suspense>
      </div>
    </div>
  );
};

export default UserSettingsPage;
