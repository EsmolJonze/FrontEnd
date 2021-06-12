/* eslint-disable */
import { atom, useRecoilState, useRecoilValue, selector } from 'recoil';
import { useBloobirdsApiStateContext } from '@bloobirds-it/bloobirds-platform-react-api-library';
import { useState } from 'react';
import { Rest } from '@bloobirds-it/bloobirds-platform-js-api-library';
import { useActiveUser } from './useActiveUser';
import { useUserSettingsReload } from '../components/userPermissions/hooks';
import { useToasts } from '@bloobirds-it/bloobirds-platform-component-library';
import { RestApi } from '../misc/api/rest';
import SessionManagerFactory from '../misc/session';

const fetchConnections = (userId, accountId) =>
  RestApi.search({
    entity: 'phoneForwardConnections',
    page: 0,
    query: {
      'account.id': accountId,
      'user.id': userId,
    },
  });

const phoneConnectionsAtom = atom({
  key: 'phoneConnections',
  default: selector({
    key: 'phoneConnectionsQuery',
    get: async () => {
      const response = await fetchConnections(
        SessionManagerFactory().getUser()?.id,
        SessionManagerFactory().getAccount()?.id,
      );
      const list = response._embedded.phoneForwardConnections;
      return { list, defaultConnection: list.find(connection => connection.defaultConnection) };
    },
  }),
});

const fetchPhones = userId => RestApi.search({ entity: '/users/' + userId + '/phoneNumbers' });

const phonesListAtom = atom({
  key: 'phonesList',
  default: selector({
    key: 'phonesListQuery',
    get: async () => {
      const response = await fetchPhones(SessionManagerFactory().getUser()?.id);
      return { phones: response._embedded.phoneNumbers };
    },
  }),
});

const submitDefaultConnection = (restApi, id, setDefault = true) =>
  restApi.service(Rest.ResourceNameEnum.phoneForwardConnections).partialUpdate(id, {
    defaultConnection: setDefault,
  });

const removeConnection = (restApi, connectionId) =>
  restApi.service(Rest.ResourceNameEnum.phoneForwardConnections).delete(connectionId);

const addConnection = (restApi, connection, userId, accountId) =>
  restApi.service(Rest.ResourceNameEnum.phoneForwardConnections).create({
    account: `/accounts/${accountId}`,
    user: `/users/${userId}`,
    ...connection,
  });

export const usePhoneConnections = () => {
  const { restApi } = useBloobirdsApiStateContext();
  const { activeUser, activeAccount } = useActiveUser();
  const { createToast } = useToasts();
  const [connections, setConnections] = useRecoilState(phoneConnectionsAtom);
  const phonesList = useRecoilValue(phonesListAtom);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const reloadSettings = useUserSettingsReload();

  const updateDefaultConnection = newDefaultConnection => {
    const onThen = () => {
      setIsSubmitting(false);
      setConnections({
        ...connections,
        defaultConnection: connections.list.find(
          connection => connection.id === newDefaultConnection,
        ).phoneNumber,
      });
      createToast({ type: 'success', message: 'Phone Connections updated!' });
    };

    setIsSubmitting(true);
    if (connections.defaultConnection) {
      submitDefaultConnection(
        restApi,
        connections.list.find(
          connection => connection.phoneNumber === connections.defaultConnection,
        ).id,
        false,
      ).then(() => submitDefaultConnection(restApi, newDefaultConnection).then(onThen));
    } else {
      submitDefaultConnection(restApi, newDefaultConnection).then(onThen);
    }
  };

  const disconnectConnection = (connectionId, onError) => {
    setIsSubmitting(true);
    const toDeleteNumber = connections.list.find(connection => connection.id === connectionId)
      .phoneNumber;
    const newDefaultConnection =
      toDeleteNumber === connections.defaultConnection ? undefined : connections.defaultConnection;
    if (toDeleteNumber === connections.defaultConnection) {
      restApi
        .service('users')
        .partialUpdate(activeUser.id, { incomingCallsForwarding: false })
        .then(() => {
          reloadSettings();
          createToast({ type: 'success', message: 'Phone Connection disconnected!' });
        });
    }
    removeConnection(restApi, connectionId)
      .then(() => {
        setIsSubmitting(false);
        setConnections({
          ...connections,
          list: connections.list.filter(connection => connection.id !== connectionId),
          defaultConnection: newDefaultConnection,
        });
      })
      .catch(() => onError());
  };

  const addNewConnection = phoneNumber => {
    setIsSubmitting(true);
    return addConnection(
      restApi,
      { phoneNumber, defaultConnection: false },
      activeUser.id,
      activeAccount.id,
    ).then(connection => {
      setConnections({ ...connections, list: [...connections.list, connection] });
      setIsSubmitting(false);
      return connection;
    });
  };

  return {
    connections,
    addNewConnection,
    disconnectConnection,
    updateDefaultConnection,
    isSubmitting,
    phonesList,
  };
};
