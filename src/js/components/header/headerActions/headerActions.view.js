import React from 'react';
import PropTypes from 'prop-types';
import {
  Icon,
  Item,
  Dropdown,
  Tooltip,
  useVisible,
} from '@bloobirds-it/bloobirds-platform-component-library';
import {
  APP_MANAGEMENT_ACCOUNT_MESSAGING_QQ,
  APP_MANAGEMENT_USER,
} from '../../../app/_constants/routes';
import { useRouter } from '../../../hooks/useRouter';
import NotificationBell from './notificationBell';
import styles from './headerActions.module.css';
import { HelpButton } from './helpButton';
import { useTableContext } from '../../bobjectTable/context/bobjectTable.context';
import { bobjectTableActions } from '../../bobjectTable/context/bobjectTable.types';
import mixpanel from 'mixpanel-browser';

const HeaderActions = props => {
  const { logout, userName } = props;
  const router = useRouter();
  const { dispatch } = useTableContext();

  const { ref, visible, setVisible } = useVisible(false);

  const handleClick = () => {
    setVisible(!visible);
  };

  const handleClose = () => {
    if (visible) {
      setVisible(false);
    }
  };

  const resetTable = () => dispatch({ type: bobjectTableActions.BOBJECT_TABLE_RESET });

  const handleLogout = () => {
    router.history.replace({ search: '' });
    logout(resetTable);
    mixpanel.reset();
  };

  return (
    <div className={styles._container} onClick={handleClose}>
      <NotificationBell />
      <Dropdown
        ref={ref}
        arrow={false}
        visible={visible}
        anchor={
          <div
            className={styles._user_button}
            onClick={e => {
              handleClick(e);
            }}
            data-intercom="nav-action-user"
            data-test={'Header-userNameDropdown'}
          >
            <div className={styles._user_button_circle} />
            {userName}
            <div className={styles._user_button_icon_container}>
              <Icon name={visible ? 'chevronUp' : 'chevronDown'} size={16} color="verySoftPeanut" />
            </div>
          </div>
        }
      >
        <Item onClick={(value, e) => router.push(APP_MANAGEMENT_USER, { event: e })}>
          <span
            data-test={'Header-dropdownUserSettings'}
            data-intercom="nav-action-user-user-settings"
          >
            User Settings
          </span>
        </Item>
        <Item
          onClick={(value, e) => router.push(APP_MANAGEMENT_ACCOUNT_MESSAGING_QQ, { event: e })}
        >
          <span
            data-test={'Header-dropdownAccountSettings'}
            data-intercom="nav-action-user-account-settings"
          >
            Account Settings
          </span>
        </Item>
        <Item
          onClick={() => {
            window.open('https://admin.bloobirds.com/', '_blank');
          }}
        >
          Administration
        </Item>
        <Item onClick={handleLogout}>Log Out</Item>
      </Dropdown>
      <Tooltip title="Open Dashboards">
        <a
          className={styles._dashboard_button}
          target="_blank"
          rel="noopener noreferrer"
          href="https://reporting.bloobirds.com/superset/welcome"
        >
          <Icon name="barchart" color="peanut" />
        </a>
      </Tooltip>
      <HelpButton />
    </div>
  );
};

HeaderActions.propTypes = {
  logout: PropTypes.func.isRequired,
  userName: PropTypes.string,
};

HeaderActions.defaultProps = {
  userName: '',
};

export { HeaderActions };
