import React, { useState } from 'react';
import {
  Sidebar,
  SidebarItem,
  SidebarSection,
} from '@bloobirds-it/bloobirds-platform-component-library';
import {
  APP_MANAGEMENT_ACCOUNT_CONFIGURATION_INTEGRATION_HUBSPOT_TAB,
  APP_MANAGEMENT_ACCOUNT_CONFIGURATION_INTEGRATION_SALESFORCE_TAB,
  APP_MANAGEMENT_ACCOUNT_MESSAGING_EMAIL,
  APP_MANAGEMENT_ACCOUNT_MESSAGING_LINKEDIN,
  APP_MANAGEMENT_ACCOUNT_MESSAGING_PITCH,
  APP_MANAGEMENT_ACCOUNT_MESSAGING_PLAYBOOK,
  APP_MANAGEMENT_ACCOUNT_MESSAGING_QQ,
  APP_MANAGEMENT_ACCOUNT_PREFERENCES_NOTIFICATIONS,
} from '../../../app/_constants/routes';
import { useRouter } from '../../../hooks';
import { useUserPermissions } from '../../../components/userPermissions/hooks';
import SessionManagerFactory from '../../../misc/session';

const PAGES_ROUTES = {
  PITCHES: APP_MANAGEMENT_ACCOUNT_MESSAGING_PITCH,
  EMAIL: APP_MANAGEMENT_ACCOUNT_MESSAGING_EMAIL,
  LINKEDIN: APP_MANAGEMENT_ACCOUNT_MESSAGING_LINKEDIN,
  QQ: APP_MANAGEMENT_ACCOUNT_MESSAGING_QQ,
  PLAYBOOK: APP_MANAGEMENT_ACCOUNT_MESSAGING_PLAYBOOK,
  SALESFORCE: APP_MANAGEMENT_ACCOUNT_CONFIGURATION_INTEGRATION_SALESFORCE_TAB,
  HUBSPOT: APP_MANAGEMENT_ACCOUNT_CONFIGURATION_INTEGRATION_HUBSPOT_TAB,
  NOTIFICATIONS: APP_MANAGEMENT_ACCOUNT_PREFERENCES_NOTIFICATIONS,
};

const SideBarView = ({ resetData }) => {
  const { history, pathname } = useRouter();
  const permissions = useUserPermissions();
  const [currentPage, setCurrentPage] = useState(pathname || PAGES_ROUTES.QQ);
  const roleManager = SessionManagerFactory().getRoleManager();

  const handleClick = (to, reset = false) => {
    setCurrentPage(to);
    history.push(to);
    if (reset) {
      resetData();
    }
  };

  return (
    <Sidebar>
      <SidebarSection title="Messaging">
        <SidebarItem
          icon="alignLeft"
          onClick={() => handleClick(PAGES_ROUTES.PITCHES, true)}
          selected={currentPage === PAGES_ROUTES.PITCHES}
        >
          Pitches and snippets
        </SidebarItem>
        <SidebarItem
          icon="mail"
          onClick={() => handleClick(PAGES_ROUTES.EMAIL, true)}
          selected={currentPage === PAGES_ROUTES.EMAIL}
        >
          Email templates
        </SidebarItem>
        <SidebarItem
          icon="linkedin"
          onClick={() => handleClick(PAGES_ROUTES.LINKEDIN, true)}
          selected={currentPage === PAGES_ROUTES.LINKEDIN}
        >
          LinkedIn templates
        </SidebarItem>
        <SidebarItem
          icon="chatSupport"
          onClick={() => handleClick(PAGES_ROUTES.QQ, true)}
          selected={currentPage === PAGES_ROUTES.QQ}
        >
          Qualifying Questions
        </SidebarItem>
      </SidebarSection>
      {permissions.editAll && (
        <>
          <SidebarSection title="Integrations">
            <SidebarItem
              icon="salesforce"
              onClick={() => handleClick(PAGES_ROUTES.SALESFORCE)}
              selected={currentPage === PAGES_ROUTES.SALESFORCE}
            >
              Salesforce
            </SidebarItem>
            <SidebarItem
              icon="hubspot"
              onClick={() => handleClick(PAGES_ROUTES.HUBSPOT)}
              selected={currentPage === PAGES_ROUTES.HUBSPOT}
            >
              Hubspot
            </SidebarItem>
          </SidebarSection>
          {roleManager.isAccountAdmin() && (
            <SidebarSection title="Preferences">
              <SidebarItem
                icon="sliders"
                onClick={() => handleClick(PAGES_ROUTES.PLAYBOOK, true)}
                selected={currentPage === PAGES_ROUTES.PLAYBOOK}
              >
                Messaging segmentation
              </SidebarItem>
              <SidebarItem
                icon="bell"
                onClick={() => handleClick(PAGES_ROUTES.NOTIFICATIONS)}
                selected={currentPage === PAGES_ROUTES.NOTIFICATIONS}
              >
                Notifications
              </SidebarItem>
            </SidebarSection>
          )}
        </>
      )}
    </Sidebar>
  );
};

export default SideBarView;
