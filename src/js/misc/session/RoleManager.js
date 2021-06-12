const GLOBAL_ADMIN = 'GLOBAL_ADMIN';
const ACCOUNT_ADMIN = 'ACCOUNT_ADMIN';
const ACCOUNT_USER = 'ACCOUNT_USER';

const RoleManager = inputRoles => {
  const roles = inputRoles.slice();
  const hasRole = role => roles.indexOf(role) >= 0;
  return {
    hasAnyRole: () => roles.filter(role => hasRole(role)).length > 0,
    isGlobalAdmin: () => hasRole(GLOBAL_ADMIN),
    isAccountAdmin: () => hasRole(ACCOUNT_ADMIN),
    isAccountUser: () => hasRole(ACCOUNT_USER),
    getRoles: roles.slice(),
  };
};

export default RoleManager;
