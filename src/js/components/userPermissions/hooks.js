import { useContext, useMemo } from 'react';
import UserSettingsContext from './context';
import { USER_PERMISSIONS } from './constants';
import { useActiveUser } from '../../hooks/useActiveUser';
import { getValueFromLogicRole } from '../../utils/bobjects.utils';

const {
  EDIT_ALL,
  VIEW_ADD_LEADS_TAB,
  VIEW_ADD_QC_TAB,
  VIEW_ASSIGN_TAB,
  VIEW_INBOUND_TAB,
  VIEW_MEETING_TAB,
  VIEW_PROSPECT_TAB,
  VIEW_SCHEDULED_TAB,
  VIEW_DASHBOARDS_TAB,
  VIEW_SALES_TAB,
} = USER_PERMISSIONS;

export const useUserSettingsContext = () => useContext(UserSettingsContext);
export const useUserSettings = () => {
  const {
    state: { data: settings },
  } = useUserSettingsContext();

  return settings;
};

export const useUserSettingsReload = () => {
  const { reloadUserSettings } = useUserSettingsContext();
  return reloadUserSettings;
};

export const useUserPermissions = () => {
  const settings = useUserSettings();

  return useMemo(() => {
    const { user: { permissions: userPermissions } = {}, account: { features } = {} } =
      settings || {};

    return {
      inbound: userPermissions?.includes(VIEW_INBOUND_TAB),
      addQC: userPermissions?.includes(VIEW_ADD_QC_TAB),
      assign: userPermissions?.includes(VIEW_ASSIGN_TAB),
      addLeads: userPermissions?.includes(VIEW_ADD_LEADS_TAB),
      prospect: userPermissions?.includes(VIEW_PROSPECT_TAB),
      scheduled: userPermissions?.includes(VIEW_SCHEDULED_TAB),
      meeting: userPermissions?.includes(VIEW_MEETING_TAB),
      editAll: userPermissions?.includes(EDIT_ALL),
      sales: userPermissions?.includes(VIEW_SALES_TAB) && features?.salesFeature,
      dashboards: settings?.user.permissions.includes(VIEW_DASHBOARDS_TAB),
    };
  }, [settings]);
};

export const useBobjectPermissions = () => {
  const userPermissions = useUserPermissions();
  const { activeUser } = useActiveUser();

  const checkPermissions = bobject => {
    const author = getValueFromLogicRole(bobject, `${bobject?.id.typeName.toUpperCase()}__AUTHOR`);
    const assignee = getValueFromLogicRole(
      bobject,
      `${bobject?.id.typeName.toUpperCase()}__ASSIGNED_TO`,
    );
    const isTheAuthor = author === activeUser.id;
    return userPermissions.editAll || activeUser.id === assignee ? true : isTheAuthor;
  };

  return { checkPermissions };
};
