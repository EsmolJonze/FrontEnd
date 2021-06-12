import React from 'react';
import { Spinner, useToasts } from '@bloobirds-it/bloobirds-platform-component-library';
import QualifyingQuestionTemplateFormView from './qualifyingQuestionTemplateForm.view';
import { useQueryParam } from '../../../../hooks/useQueryParams';
import useQualifyingQuestion from '../../../../hooks/useQualifyingQuestion';
import { FORM_MODES, TEMPLATE_TYPES, typeToUrl } from '../../../../utils/templates.utils';
import { useRouter } from '../../../../hooks';

const QualifyingQuestionTemplateFormContainer = () => {
  const { history } = useRouter();
  const id = useQueryParam('id');
  const formMode = useQueryParam('mode');
  const { createToast } = useToasts();
  const { isLoading, qualifyingQuestion, saveQualifyingQuestion } = useQualifyingQuestion(id);

  if (formMode === FORM_MODES.EDITION && isLoading) {
    return <Spinner name="loadingCircle" />;
  }
  if (formMode === FORM_MODES.CLONE && isLoading) {
    return <Spinner name="loadingCircle" />;
  }

  const goBack = () => {
    history.push(typeToUrl(TEMPLATE_TYPES.QUALIFYING_QUESTION));
  };

  return (
    <QualifyingQuestionTemplateFormView
      existingQQ={qualifyingQuestion}
      mode={formMode}
      onCancel={goBack}
      onSave={async body => {
        try {
          await saveQualifyingQuestion(body);
          createToast({ type: 'success', message: 'Qualifying question saved successfully' });
          goBack();
        } catch (error) {
          if (error.response.status === 409) {
            createToast({
              type: 'error',
              message: `Qualifying question with name "${body.question}" already exists`,
            });
          } else {
            createToast({ type: 'error', message: 'Something went wrong' });
          }
        }
      }}
    />
  );
};

export default QualifyingQuestionTemplateFormContainer;
