import React from 'react';
import { useQueryParams } from '../../../../hooks/useQueryParams';
import MessagingTemplateFormLayout from '../../../../layouts/messagingSectionLayout/messagingTemplateFormLayout';
import { TEMPLATE_TYPES } from '../../../../utils/templates.utils';

const LinkedinTemplateFormContainer = () => {
  const queryParams = useQueryParams();

  return (
    <MessagingTemplateFormLayout
      templateType={TEMPLATE_TYPES.LINKEDIN}
      formMode={queryParams.get('mode')}
    />
  );
};

export default LinkedinTemplateFormContainer;
