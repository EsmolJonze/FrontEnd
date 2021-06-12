import React, { useState } from 'react';
import NoIntegrationPage from '../../../../layouts/integrationLayout/noIntegrationPage';
import { Input } from '@bloobirds-it/bloobirds-platform-component-library';
import { useForm } from 'react-hook-form';
import { useHubspotIntegration } from '../../../../hooks/useHubspotIntegration';

const HubspotNoIntegrationPage = () => {
  const { createIntegration, isSubmitting } = useHubspotIntegration();
  const [errorIntegration, handleError] = useState(false);
  const defaultValues = {
    apiKey: '',
  };
  const { register, handleSubmit, reset } = useForm({
    defaultValues,
  });

  const onSubmit = data => {
    createIntegration(data, integration => {
      if (integration.hasError) {
        handleError(true);
      } else {
        reset(defaultValues);
      }
    });
  };
  return (
    <NoIntegrationPage
      crm="HubSpot"
      link="https://support.bloobirds.com/hc/en-us/articles/360018547839-Set-up-Hubspot-connection-on-Bloobirds"
      defaultValues={defaultValues}
      onSubmit={handleSubmit(onSubmit)}
      handleError={handleError}
      error={errorIntegration}
      isSubmiting={isSubmitting}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="HubSpot API Key*"
          name="apiKey"
          innerRef={register({
            required: true,
          })}
          width="100%"
        />
      </form>
    </NoIntegrationPage>
  );
};
export default HubspotNoIntegrationPage;
