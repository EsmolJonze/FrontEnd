import { atom, useRecoilState } from 'recoil';
import { ServiceApi } from '../misc/api/service';
import { useEffect } from 'react';

const accountUsersAtom = atom({
  key: 'accountUsersAtom',
  default: {
    data: undefined,
    loaded: false,
    isFetching: false,
  },
});

const fetchUsers = () =>
  ServiceApi.request({
    url: '/service/view/userSearch',
    requestParams: { taskLogicRole: 'ADD_LEADS_TO_QC' },
  });

export const useAccountUsers = () => {
  const [accountUsers, setAccountUsers] = useRecoilState(accountUsersAtom);

  useEffect(() => {
    if (!accountUsers.loaded && !accountUsers.isFetching) {
      fetchUsers().then(response => {
        setAccountUsers({
          data: response,
          loaded: true,
          isFetching: false,
        });
      });
    }
  }, []);

  const updateAccountUsers = () => {
    if (!accountUsers.isFetching) {
      setAccountUsers({ ...accountUsers, isFetching: true });
      fetchUsers().then(response => {
        setAccountUsers({
          data: response,
          loaded: true,
          isFetching: false,
        });
      });
    }
  };

  const getUserId = userId =>
    accountUsers.loaded && accountUsers.data?.find(user => user.id === userId);

  return {
    accountUsers,
    getUserId,
    updateAccountUsers,
  };
};
