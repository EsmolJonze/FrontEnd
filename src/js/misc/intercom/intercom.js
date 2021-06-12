import { servicesEnv } from '../api/ApiHosts';
import { useScript } from '../../hooks';
import { useUserSettings } from '../../components/userPermissions/hooks';

const appId = 'xo0jd4ph';

const buildIntercomSettings = settings => {
  if (settings) {
    return {
      app_id: appId,
      user_id: settings.user.id,
      email: settings.user.email,
      name: settings.user.name,
      employee_role: settings.user.employeeRole,
      user_type: settings.user.type,
      company: {
        company_id: settings.account.id,
        name: settings.account.name,
        account_type: settings.account.type,
      },
    };
  }
  return {};
};

const createUrl = settings => {
  if (appId && (servicesEnv === 'production' || servicesEnv === 'staging') && settings) {
    return `https://widget.intercom.io/widget/${appId}`;
  }
  return undefined;
};

export const useIntercom = () => {
  const settings = useUserSettings();
  const url = createUrl(settings);
  window.intercomSettings = buildIntercomSettings(settings);
  useScript(url);
};
