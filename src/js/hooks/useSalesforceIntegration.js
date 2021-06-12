import { useEffect, useState } from 'react';
import { atom, useRecoilState } from 'recoil';
import { useActiveUser } from './useActiveUser';
import { useBloobirdsApiStateContext } from '@bloobirds-it/bloobirds-platform-react-api-library';
import { useEntity } from './entities/useEntity';

const activeIntegrationAtom = atom({
  key: 'activeSalesforceIntegration',
  default: {
    id: '',
    clientId: '',
    instanceHost: '',
    salesforceUser: '',
    integrationId: '',
    hasError: false,
    isLoaded: false,
  },
});

export const useSalesforceIntegration = () => {
  const [activeIntegration, setActiveIntegration] = useRecoilState(activeIntegrationAtom);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { activeAccount } = useActiveUser();
  const { webApi } = useBloobirdsApiStateContext();
  const integration = useEntity('integrationSalesforces')?.all()[0];
  useEffect(() => {
    if (integration && activeAccount) {
      setActiveIntegration({
        ...activeIntegration,
        id: integration.id,
        clientId: integration.clientId,
        instanceHost: integration.instanceHost,
        salesforceUser: integration.salesforceUser,
        isLoaded: true,
        hasError: false,
      });
    }
  }, [activeAccount, integration]);

  const createIntegration = (
    { inputClientId, inputInstanceHost, inputSalesforceUser },
    handleError,
  ) => {
    setIsSubmitting(true);
    const bodyRequest = {
      clientId: inputClientId,
      instanceHost: inputInstanceHost,
      salesforceUser: inputSalesforceUser,
    };
    webApi
      .request({
        url: '/service/salesforceUsers/testIntegration',
        body: bodyRequest,
        method: 'POST',
      })
      .then(response => {
        if (response.status === 200) {
          setIsSubmitting(false);

          webApi
            .request({
              url: '/service/salesforceUsers/getUsers',
              method: 'POST',
            })
            .then(() => {
              setActiveIntegration({
                clientId: inputClientId,
                instanceHost: inputInstanceHost,
                salesforceUser: inputSalesforceUser,
                hasError: false,
                isLoaded: true,
              });
              handleError({ hasError: false });
            });
        } else {
          setIsSubmitting(false);
          setActiveIntegration({
            ...activeIntegration,
            isLoaded: false,
            hasError: true,
          });
          handleError({ hasError: true });
        }
        return response;
      });
  };
  const disconnectIntegration = () => {
    webApi
      .request({ url: '/service/salesforceUsers/disconnectIntegration', method: 'GET' })
      .then(() => setActiveIntegration(activeIntegrationAtom));
  };

  return { activeIntegration, createIntegration, isSubmitting, disconnectIntegration };
};
