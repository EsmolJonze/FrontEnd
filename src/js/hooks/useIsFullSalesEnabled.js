import { useUserSettings } from '../components/userPermissions/hooks';

export const useIsFullSalesEnabled = () => {
  const settings = useUserSettings();
  return settings?.account.features.salesFeature;
};
