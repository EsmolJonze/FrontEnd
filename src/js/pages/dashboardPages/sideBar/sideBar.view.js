import React from 'react';
import {
  Sidebar,
  SidebarSection,
  SidebarItem,
} from '@bloobirds-it/bloobirds-platform-component-library';
import { useDashboard, useRouter } from '../../../hooks';
import useIsSalesDashboardEnabled from '../../../hooks/useIsSalesDashboardEnabled';
import { APP_DASHBOARD_PROSPECTING, APP_DASHBOARD_SALES } from '../../../app/_constants/routes';

const prospectingRoutes = [
  { icon: 'home', slug: 'overview', name: 'Overview' },
  { icon: 'gridSquares', slug: 'conversion_rates', name: 'Conversion Rates' },
];

const salesRoutes = [{ icon: 'home', slug: 'overview', name: 'Overview' }];

const SideBar = () => {
  const { history } = useRouter();
  const { dashboardData, setIsSideBarOpen } = useDashboard();
  const isSalesDashboardEnabled = useIsSalesDashboardEnabled();

  return (
    <Sidebar
      title="Dashboards"
      collapsed={!dashboardData?.isSideBarOpen}
      onCollapseChange={collapsed => setIsSideBarOpen(!collapsed)}
    >
      <SidebarSection title="Prospecting">
        {prospectingRoutes.map(({ icon, slug, name }) => {
          const sectionUrl = `${APP_DASHBOARD_PROSPECTING}/${slug}`;
          return (
            <SidebarItem
              icon={icon}
              selected={history.location.pathname.includes(sectionUrl)}
              onClick={() =>
                history.push({
                  pathname: sectionUrl,
                  search: history.location.search,
                })
              }
            >
              {name}
            </SidebarItem>
          );
        })}
      </SidebarSection>
      {isSalesDashboardEnabled && (
        <SidebarSection title="Sales">
          {salesRoutes.map(({ icon, slug, name }) => {
            const sectionUrl = `${APP_DASHBOARD_SALES}/${slug}`;
            return (
              <SidebarItem
                icon={icon}
                selected={history.location.pathname.includes(sectionUrl)}
                onClick={() => history.push(sectionUrl)}
              >
                {name}
              </SidebarItem>
            );
          })}
        </SidebarSection>
      )}
    </Sidebar>
  );
};

export default SideBar;
