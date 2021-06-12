import React from 'react';
import { Text, Input, Button } from '@bloobirds-it/bloobirds-platform-component-library';
import {
  deserializeHtmlTemplate,
  serialize,
} from '../../../../components/richTextEditor/serializer/serializer';
import { isHtml } from '../../../../utils/strings.utils';
import { initialSlateObject } from '../../../../components/richTextEditor/richTextEditor.utils';
import { useForm, Controller, FormContext } from 'react-hook-form';
import { TEMPLATE_TYPES, TEMPLATE_TYPES_COPIES } from '../../../../utils/templates.utils';
import { switchDateFormat } from '../../../../misc/utils';
import SubjectEditor from '../subjectEditor';
import ContentEditor from '../contentEditor';
import MessagingSidebarSettings from '../messagingSidebarSettings';
import MessagingTemplateFooterActions from '../../../../components/messagingTemplates/messagingTemplateFooterActions/messagingTemplateFooterActions';
import styles from './messagingTemplateForm.module.css';

const MessagingTemplateForm = ({
  mode,
  templateType,
  messagingTemplate,
  onSave,
  onDelete,
  onCancel,
}) => {
  const defaultValues = {
    id: messagingTemplate?.id,
    name: messagingTemplate?.name,
    subject: messagingTemplate
      ? deserializeHtmlTemplate(
          isHtml(messagingTemplate.subject)
            ? messagingTemplate.subject
            : `<p>${messagingTemplate.subject}</p>`,
        )
      : initialSlateObject,
    content: messagingTemplate
      ? deserializeHtmlTemplate(messagingTemplate.content)
      : initialSlateObject,
    visibility: messagingTemplate ? messagingTemplate.visibility === 'PUBLIC' : true,
    stage: messagingTemplate?.stage || 'PROSPECT',
    segmentationValues: messagingTemplate?.segmentationValues || {},
  };

  const methods = useForm({ defaultValues });

  const onSubmit = async data => {
    const subject = templateType === TEMPLATE_TYPES.EMAIL ? data.subject : '';
    const templatePayload = {
      id: messagingTemplate?.id,
      name: data.name,
      subject: subject !== '' ? serialize({ children: subject }) : subject,
      content: serialize({ children: data.content }),
      visibility: data.visibility ? 'PUBLIC' : 'PRIVATE',
      type: templateType,
      stage: data.stage,
      segmentationValues: data.segmentationValues,
    };
    if (mode === 'CLONE') {
      await onSave({ ...templatePayload, id: undefined });
    } else {
      await onSave(templatePayload);
    }
  };

  return (
    <FormContext {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <main className={styles._content}>
          <div className={styles._editor}>
            <Button
              className={styles._back__button}
              onClick={onCancel}
              variant="clear"
              color="bloobirds"
              iconLeft="arrowLeft"
            >
              Back to the list
            </Button>
            <Text className={styles._title} color="softPeanut" size="xl" weight="medium">
              Configure {TEMPLATE_TYPES_COPIES[templateType]} template
            </Text>
            <div className={styles._form__row}>
              <Controller
                name="name"
                as={
                  <Input
                    width="100%"
                    error={methods.errors.name?.message}
                    placeholder="Template Name"
                  />
                }
                control={methods.control}
                rules={{ required: 'A name for the template is required' }}
              />
            </div>
            <Text color="peanut" size="m" weight="medium">
              Content
            </Text>
            {messagingTemplate?.updateDatetime && (
              <Text className={styles._update_subtitle} color="softPeanut" size="s">
                {switchDateFormat(messagingTemplate.updateDatetime)}
              </Text>
            )}
            {templateType === TEMPLATE_TYPES.EMAIL && <SubjectEditor />}
            <ContentEditor templateType={templateType} />
          </div>
          <MessagingSidebarSettings templateType={templateType} />
        </main>
        <MessagingTemplateFooterActions
          type={templateType}
          mode={mode}
          onCancel={onCancel}
          onDelete={onDelete}
        />
      </form>
    </FormContext>
  );
};

export default MessagingTemplateForm;
