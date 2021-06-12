import RoleManager from './RoleManager';

const SESSION_KEY = 'bb-app-session';

const setSession = sessionData => {
  localStorage.setItem(SESSION_KEY, JSON.stringify(sessionData));
};
const getSession = () => JSON.parse(localStorage.getItem(SESSION_KEY) || {});

const b64DecodeUnicode = str =>
  decodeURIComponent(
    Array.prototype.map
      .call(atob(str), c => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
      .join(''),
  );
const hasEmptySession = () => Object.getOwnPropertyNames(getSession()).length === 0;

const parseJwt = token => JSON.parse(b64DecodeUnicode(token.split('.')[1]));
/* set session if empty on startup */
if (localStorage.getItem(SESSION_KEY) === null) {
  setSession({});
}

const SessionManagerFactory = () => {
  const setToken = token => {
    const decoded = parseJwt(token);
    const session = getSession();
    session.context = {};
    session.context.token = token;
    session.context.decoded = decoded;
    session.context.user = { id: decoded.sub, name: decoded.userName };
    session.context.account = {
      id: decoded.account,
      name: decoded.accountName,
    };
    session.context.calls = {
      token: undefined,
    };
    setSession(session);
  };
  const getRootToken = () => getSession().token;
  const restoreToRootToken = () => {
    setToken(getRootToken());
  };
  const setRootToken = token => {
    const session = getSession();
    session.token = token;
    setSession(session);
    restoreToRootToken();
    return true;
  };
  const getUser = () => (!hasEmptySession() ? getSession().context.user : {});
  const getToken = () => getSession().context.token;
  const getRoles = () => {
    const claims = getSession().context.decoded;
    if (claims !== undefined) {
      return claims.userRoles || [];
    }
    return [];
  };
  const getRoleManager = () => RoleManager(getRoles());
  const setAccount = (accountId, accountName) => {
    const session = getSession();
    session.context.account = { id: accountId, name: accountName };
    setSession(session);
  };
  const getAccount = () => getSession().context.account;
  const hasToken = () => getToken() !== undefined;
  const cleanSession = () => {
    setSession({});
  };
  const isSwitchingToken = () => {
    const session = getSession();
    return session.token !== session.context.token;
  };

  const setAllocateQc = allocateQcSession => {
    const session = getSession();
    session.context.allocateQc = allocateQcSession;
    setSession(session);
  };

  const removeAllocateQc = allocateQcSession => {
    const session = getSession();
    session.context.allocateQc = allocateQcSession;
    setSession(session);
  };
  const clearAllocateQc = () => {
    const session = getSession();
    session.context.allocateQc = undefined;
    setSession(session);
  };
  const setCallData = (token, phoneNumbers, phoneNumberDefault) => {
    const session = getSession();
    session.context.calls = {
      token,
      phoneNumbers,
      phoneNumberDefault,
    };
    setSession(session);
  };

  const getCallData = () => getSession()?.context?.calls;

  const getAllocateQc = () => getSession().context.allocateQc;

  return {
    cleanSession,
    setRootToken,
    getRootToken,
    restoreToRootToken,
    isSwitchingToken,

    hasToken,
    getRoleManager,
    setAccount,
    getAccount,
    getUser,
    setToken,
    getToken,
    hasEmptySession,
    setAllocateQc,
    clearAllocateQc,
    getAllocateQc,
    removeAllocateQc,
    setCallData,
    getCallData,
  };
};

export default SessionManagerFactory;
