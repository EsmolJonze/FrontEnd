import { LOGIN_GOTO_RECOVERY_START } from './dictionary';

const preventDefaultActionWrapper = type => e => {
  e.preventDefault();
  return {
    type,
  };
};

export const redirect = preventDefaultActionWrapper(LOGIN_GOTO_RECOVERY_START);
