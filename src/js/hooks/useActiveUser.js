import { useEffect } from 'react';
import { atom, useRecoilState } from 'recoil';
import isEqual from 'lodash/isEqual';
import SessionManagerFactory from '../misc/session';

const SessionManager = SessionManagerFactory();

const activeUserAtom = atom({
  key: 'activeUser',
  default: null,
});

const activeAccountAtom = atom({
  key: 'activeAccount',
  default: null,
});

export const useActiveUser = () => {
  const [activeUser, setActiveUser] = useRecoilState(activeUserAtom);
  const [activeAccount, setActiveAccount] = useRecoilState(activeAccountAtom);

  const user = SessionManager.getUser();
  const account = SessionManager.getAccount();

  useEffect(() => {
    setActiveUser(user);
    setActiveAccount(account);
  }, [user.id, account.id]);

  const setUserActiveData = (userData, accountData) => {
    if (!userData || !isEqual(userData, activeUser)) {
      setActiveUser(userData);
    }
    if (!accountData || !isEqual(accountData, activeAccount)) {
      setActiveAccount(accountData);
    }
  };

  const getBobjectId = (objectId, bobjectType) => `${activeAccount?.id}/${bobjectType}/${objectId}`;

  return { activeUser, activeAccount, setUserActiveData, getBobjectId };
};
