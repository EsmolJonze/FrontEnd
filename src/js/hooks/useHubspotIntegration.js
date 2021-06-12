import { useEffect, useState } from 'react';
import { atom, useRecoilState } from 'recoil';
import { useActiveUser } from './useActiveUser';
import { useBloobirdsApiStateContext } from '@bloobirds-it/bloobirds-platform-react-api-library';
import { useEntity } from './entities/useEntity';

const activeIntegrationAtom = atom({
  key: 'activeHubspotIntegration',
  default: {
    id: '',
    apiKey: '',
    isLoaded: false,
    hasError: false,
  },
});

export const useHubspotIntegration = () => {
  const [activeIntegration, setActiveIntegration] = useRecoilState(activeIntegrationAtom);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { activeAccount } = useActiveUser();
  const { webApi } = useBloobirdsApiStateContext();
  const integration = useEntity('integrationHubspots')?.all()[0];
  useEffect(() => {
    if (integration && activeAccount) {
      setActiveIntegration({
        ...activeIntegration,
        id: integration.id,
        apiKey: integration.legacyToken,
        isLoaded: true,
        hasError: false,
      });
    }
  }, [activeAccount, integration]);

  const createIntegration = (apiKey, handleError) => {
    setIsSubmitting(true);
    const requestParams = apiKey;
    webApi
      .request({
        url: '/hubspot/testIntegration',
        requestParams,
        method: 'GET',
      })
      .then(response => {
        if (response.status === 200) {
          setIsSubmitting(false);
          setActiveIntegration({
            apiKey,
            hasError: false,
            isLoaded: true,
          });
          handleError({ hasError: false });
        } else {
          handleError({ hasError: true });
          setActiveIntegration({
            ...activeIntegration,
            isLoaded: false,
            hasError: true,
          });

          setIsSubmitting(false);
        }
      });
  };
  const disconnectIntegration = () => {
    webApi
      .request({ url: '/hubspot/disconnectIntegration', method: 'GET' })
      .then(() => setActiveIntegration(activeIntegrationAtom));
  };

  return { activeIntegration, createIntegration, isSubmitting, disconnectIntegration };
};
