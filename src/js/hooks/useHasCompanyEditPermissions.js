import { useActiveCompany } from './useActiveCompany';
import { useBobjectPermissions, useUserPermissions } from '../components/userPermissions/hooks';

const useHasCompanyEditPermissions = () => {
  const { company } = useActiveCompany();
  const { checkPermissions } = useBobjectPermissions();
  const userPermissions = useUserPermissions();

  return userPermissions.editAll || (company && checkPermissions(company));
};

export default useHasCompanyEditPermissions;
