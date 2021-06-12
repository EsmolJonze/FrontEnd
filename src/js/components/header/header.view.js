import React from 'react';
import PropTypes from 'prop-types';
import {
  Nav,
  Dropdown,
  Item,
  Divider,
  useVisible,
} from '@bloobirds-it/bloobirds-platform-component-library';
import {
  APP_CL_ACTIVITIES,
  APP_CL_COMPANIES,
  APP_CL_LEADS,
  APP_CL_LISTS,
  APP_CL_MEETINGS,
  APP_CL_TASKS,
  APP_CL_OPPORTUNITIES,
  APP_MANAGEMENT_USER,
  APP_TASKS,
  APP_DASHBOARD,
} from '../../app/_constants/routes';
import { useRouter } from '../../hooks';
import HeaderActions from './headerActions';
import HeaderCompanyBlock from './headerCompanyBlock';
import styles from './header.module.css';
import { useUserPermissions, useUserSettings } from '../userPermissions/hooks';

const Header = ({ displayHideSidebar }) => {
  const { dashboards: canSeeDashboards } = useUserPermissions();
  const router = useRouter();
  const settings = useUserSettings();
  const { ref, visible: isDropdownVisible, setVisible } = useVisible(false);

  const handleClick = () => {
    setVisible(!isDropdownVisible);
  };

  const handleClose = () => {
    setVisible(false);
  };

  const handleClickForRedirect = (url, e) => {
    router.push(url, { event: e });
    handleClick();
  };

  if (router.location.pathname.includes(APP_MANAGEMENT_USER)) {
    return null;
  }

  return (
    <header className={styles._container}>
      <HeaderCompanyBlock
        accountName={settings?.account.name || ''}
        toggleTaskSelector={displayHideSidebar}
      />
      <div data-test="headerBar-sectionsContainer" className={styles._tabWrapper}>
        <Nav
          iconLeft="gridSquares"
          color="lightBloobirds"
          active={[APP_TASKS].some(e => router.pathname.startsWith(e))}
          onClick={e => {
            router.push(APP_TASKS, { event: e });
            handleClose();
          }}
        >
          Tasks
        </Nav>
        <Dropdown
          ref={ref}
          visible={isDropdownVisible}
          arrow={false}
          anchor={
            <Nav
              iconLeft="list"
              iconRight={isDropdownVisible ? 'chevronUp' : 'chevronDown'}
              active={[
                APP_CL_TASKS,
                APP_CL_ACTIVITIES,
                APP_CL_MEETINGS,
                APP_CL_COMPANIES,
                APP_CL_LEADS,
                APP_CL_LISTS,
                APP_CL_OPPORTUNITIES,
              ].some(e => router.pathname.startsWith(e))}
              onClick={e => {
                handleClick(e);
              }}
            >
              Lists
            </Nav>
          }
        >
          <Item icon="list" onClick={(value, e) => handleClickForRedirect(APP_CL_LISTS, e)}>
            All saved lists
          </Item>
          <Divider />
          <Item
            icon="briefcase"
            onClick={(value, e) => {
              handleClickForRedirect(APP_CL_COMPANIES, e);
            }}
          >
            Companies
          </Item>
          <Item icon="people" onClick={(value, e) => handleClickForRedirect(APP_CL_LEADS, e)}>
            Leads
          </Item>
          <Item icon="calendar" onClick={(value, e) => handleClickForRedirect(APP_CL_MEETINGS, e)}>
            Meetings
          </Item>
          {settings?.account?.features.salesFeature && (
            <Item
              icon="fileOpportunity"
              onClick={(value, e) => handleClickForRedirect(APP_CL_OPPORTUNITIES, e)}
            >
              Opportunities
            </Item>
          )}
          <Item
            icon="gridSquares"
            onClick={(value, e) => handleClickForRedirect(APP_CL_ACTIVITIES, e)}
          >
            Activities
          </Item>
          <Item icon="check" onClick={(value, e) => handleClickForRedirect(APP_CL_TASKS, e)}>
            Tasks
          </Item>
        </Dropdown>
        {canSeeDashboards && (
          <Nav
            iconLeft="barchart"
            color="lightBloobirds"
            active={router.pathname.startsWith(APP_DASHBOARD)}
            onClick={() => {
              router.push(`${APP_DASHBOARD}`);
            }}
          >
            Dashboards
          </Nav>
        )}
      </div>
      <HeaderActions userName={settings?.user.name} />
    </header>
  );
};

Header.propTypes = {
  displayHideSidebar: PropTypes.func.isRequired,
};

export default Header;
