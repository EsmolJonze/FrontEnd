import { useUserSettings } from '../components/userPermissions/hooks';

const useIsSalesDashboardEnabled = () => {
  const settings = useUserSettings();
  return settings?.account?.features.salesDashboardFeature;
};

export default useIsSalesDashboardEnabled;
