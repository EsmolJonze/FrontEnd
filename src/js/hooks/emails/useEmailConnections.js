import { atom, selector, useRecoilState } from 'recoil';
import { useBloobirdsApiStateContext } from '@bloobirds-it/bloobirds-platform-react-api-library';
import { useState } from 'react';
import { useToasts } from '@bloobirds-it/bloobirds-platform-component-library';
import { ServiceApi } from '../../misc/api/service';

const fetchConnections = () =>
  ServiceApi.request({
    url: '/nylas/connections',
    method: 'GET',
  });

const submitDefaultConnection = (webApi, body) =>
  webApi.request({
    url: '/nylas/account/default',
    method: 'PATCH',
    body,
  });

const removeConnection = (webApi, connectionId) => {
  const url = `/nylas/delete/${connectionId}`;

  webApi.request({
    url,
    method: 'POST',
  });
};

const emailConnections = atom({
  key: 'emailConnections',
  default: selector({
    key: 'emailConnectionQuery',
    get: async () => {
      const response = await fetchConnections();
      const defaultConnection = response.nylasTokens.find(connection => connection.default);

      return {
        list: response.nylasTokens,
        legacyList: response.googleTokens,
        defaultConnection: defaultConnection?.email,
        stoppedConnections: response.nylasTokens.filter(
          token => token.syncState === 'stopped' || token.syncState === 'invalid',
        ),
      };
    },
  }),
});

export const useEmailConnections = () => {
  const { webApi } = useBloobirdsApiStateContext();
  const [connections, setConnections] = useRecoilState(emailConnections);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { createToast } = useToasts();

  const updateDefaultConnection = newDefaultConnection => {
    setIsSubmitting(true);
    setConnections({ ...connections, defaultConnection: newDefaultConnection });
    createToast({ type: 'success', message: 'Your connection has been updated!' });
    submitDefaultConnection(webApi, { defaultEmail: newDefaultConnection }).then(() => {
      setIsSubmitting(false);
    });
  };

  const disconnectConnection = (connectionId, isNylas, onError) => {
    setIsSubmitting(true);
    const listName = isNylas ? 'list' : 'legacyList';
    setConnections({
      ...connections,
      [listName]: connections[listName].filter(connection => connection.id !== connectionId),
    });
    createToast({ type: 'success', message: 'Your connection has been removed!' });
    removeConnection(webApi, connectionId, isNylas)
      .then(() => {
        setIsSubmitting(false);
      })
      .catch(() => onError());
  };

  return {
    connections,
    disconnectConnection,
    updateDefaultConnection,
    isSubmitting,
    stoppedConnections: connections?.stoppedConnections,
  };
};
