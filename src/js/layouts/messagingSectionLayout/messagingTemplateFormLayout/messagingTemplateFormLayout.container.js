import React from 'react';
import { useRouter } from '../../../hooks';
import { Spinner, useToasts } from '@bloobirds-it/bloobirds-platform-component-library';
import MessagingTemplateForm from './messagingTemplateForm';
import { FORM_MODES, typeToUrl } from '../../../utils/templates.utils';
import { useQueryParam } from '../../../hooks/useQueryParams';
import useMessagingTemplate from '../../../hooks/useMessagingTemplate';

const MessagingTemplateFormLayoutContainer = ({ formMode, templateType }) => {
  const { history } = useRouter();
  const templateId = useQueryParam('id');
  const fromUrl = useQueryParam('from');
  const mode = useQueryParam('mode');
  const { createToast } = useToasts();
  const {
    messagingTemplate,
    saveMessagingTemplate,
    deleteMessagingTemplate,
    isLoading,
  } = useMessagingTemplate(templateId);

  // TODO: When refactoring this use <Suspense /> instead
  if (formMode === FORM_MODES.EDITION && isLoading) {
    return <Spinner name="loadingCircle" />;
  }
  if (formMode === FORM_MODES.CLONE && isLoading) {
    return <Spinner name="loadingCircle" />;
  }
  const navigateBack = () => {
    history.push(fromUrl || typeToUrl(templateType));
  };

  return (
    <MessagingTemplateForm
      mode={mode}
      templateType={templateType}
      messagingTemplate={messagingTemplate}
      onSave={async newMessagingTemplate => {
        await saveMessagingTemplate(newMessagingTemplate);
        createToast({ type: 'success', message: 'Template saved successfully' });
        navigateBack();
      }}
      onDelete={async () => {
        await deleteMessagingTemplate(templateId);
        createToast({ type: 'success', message: 'Template deleted successfully' });
        navigateBack();
      }}
      onCancel={navigateBack}
    />
  );
};

export default MessagingTemplateFormLayoutContainer;
