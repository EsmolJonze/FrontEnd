import { useUserSettings } from '../../components/userPermissions/hooks';
import { loadEntity } from './useEntity.utils';
import useSWR from 'swr';

export const useEntity = entityType => {
  const settings = useUserSettings();

  const { data } = useSWR(settings ? `/entity/${entityType}` : null, () =>
    loadEntity(settings.account.id, entityType),
  );

  return data?.entityModel;
};
