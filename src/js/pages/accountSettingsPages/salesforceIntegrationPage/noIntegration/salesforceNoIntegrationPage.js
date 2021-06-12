import React, { useState } from 'react';
import NoIntegrationPage from '../../../../layouts/integrationLayout/noIntegrationPage';
import { Input } from '@bloobirds-it/bloobirds-platform-component-library';
import { useSalesforceIntegration } from '../../../../hooks/useSalesforceIntegration';
import { useForm } from 'react-hook-form';

const SalesforceNoIntegrationPage = () => {
  const { createIntegration, isSubmitting } = useSalesforceIntegration();
  const [error, setError] = useState(false);

  const defaultValues = {
    inputClientId: '',
    inputInstanceHost: '',
    inputSalesforceUser: '',
  };
  const { register, handleSubmit, reset } = useForm({
    defaultValues,
  });
  const onSubmit = data => {
    createIntegration(data, integration => {
      if (integration.hasError) {
        setError(true);
      } else {
        reset(defaultValues);
      }
    });
  };
  return (
    <NoIntegrationPage
      crm="Salesforce"
      link="https://support.bloobirds.com/hc/en-us/articles/360017716300"
      defaultValues={defaultValues}
      onSubmit={handleSubmit(onSubmit)}
      handleError={setError}
      error={error}
      isSubmiting={isSubmitting}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="Salesforce Consumer Key*"
          name="inputClientId"
          innerRef={register({
            required: true,
          })}
          width="100%"
        />
        <Input
          placeholder="Salesforce User Email*"
          name="inputSalesforceUser"
          innerRef={register({
            required: true,
          })}
          width="100%"
        />
      </form>
    </NoIntegrationPage>
  );
};
export default SalesforceNoIntegrationPage;
