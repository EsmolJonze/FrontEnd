import React from 'react';
import MessagingTemplateCollectionView from './messagingTemplateCollection.view';
import { Spinner } from '@bloobirds-it/bloobirds-platform-component-library';
import useActiveMessagingFilters from '../../../hooks/useActiveMessagingFilters';
import { useMessagingTemplates } from '../../../hooks/useMessagingTemplates';
import { TEMPLATE_TYPES } from '../../../utils/templates.utils';
import { useQualifyingQuestions } from '../../../hooks';

const MessagingTemplateCollection = ({ templateType, type }) => {
  const filters = useActiveMessagingFilters();
  const { messagingTemplates, isLoading } = useMessagingTemplates({
    ...filters,
    type: templateType,
  });

  if (isLoading) {
    return <Spinner name="loadingCircle" />;
  }

  return (
    <MessagingTemplateCollectionView
      templateCollection={messagingTemplates}
      templateType={templateType}
      type={type}
    />
  );
};

const QualifyingQuestionCollection = ({ templateType, type }) => {
  const filters = useActiveMessagingFilters();
  const { qualifyingQuestions, isLoading } = useQualifyingQuestions(filters);

  if (isLoading) {
    return <Spinner name="loadingCircle" />;
  }

  return (
    <MessagingTemplateCollectionView
      templateCollection={qualifyingQuestions}
      templateType={templateType}
      type={type}
    />
  );
};

// TODO: Rename type to "viewType" or remove it when refactor
const MessagingTemplateCollectionContainer = ({ templateType, type }) => {
  if (templateType === TEMPLATE_TYPES.QUALIFYING_QUESTION) {
    return <QualifyingQuestionCollection templateType={templateType} type={type} />;
  }
  return <MessagingTemplateCollection templateType={templateType} type={type} />;
};

export default MessagingTemplateCollectionContainer;
