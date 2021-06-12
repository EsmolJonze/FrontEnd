import React from 'react';
import { useLocation } from 'react-router';
import { Button } from '@bloobirds-it/bloobirds-platform-component-library';
import styles from './messagingTemplateCollection.module.css';
import {
  APP_MANAGEMENT_ACCOUNT_MESSAGING_EMAIL_FORM,
  APP_MANAGEMENT_ACCOUNT_MESSAGING_LINKEDIN_FORM,
  APP_MANAGEMENT_ACCOUNT_MESSAGING_PITCH_FORM,
  APP_MANAGEMENT_ACCOUNT_MESSAGING_QQ_FORM,
} from '../../../app/_constants/routes';
import { TEMPLATE_TYPES } from '../../../utils/templates.utils';
import MessagingTemplateCard from '../messagingTemplateCard';
import EmailButton from '../../../components/emailButton';
import { copyToClipboard } from '../../../misc/utils';
import { convertHtmlToString } from '../../../utils/email.utils';
import { useRouter } from '../../../hooks';

const TEMPLATE_FORMS_ROUTES = Object.freeze({
  [TEMPLATE_TYPES.EMAIL]: APP_MANAGEMENT_ACCOUNT_MESSAGING_EMAIL_FORM,
  [TEMPLATE_TYPES.LINKEDIN]: APP_MANAGEMENT_ACCOUNT_MESSAGING_LINKEDIN_FORM,
  [TEMPLATE_TYPES.PITCH]: APP_MANAGEMENT_ACCOUNT_MESSAGING_PITCH_FORM,
  [TEMPLATE_TYPES.QUALIFYING_QUESTION]: APP_MANAGEMENT_ACCOUNT_MESSAGING_QQ_FORM,
});

const TEMPLATE_CARD_ACTIONS = {
  [TEMPLATE_TYPES.EMAIL]: template => (
    <>
      <EmailButton templateBody={template.content} templateSubject={template.subject} />
      <EmailButton
        templateBody={template.content}
        templateSubject={template.subject}
        templateId={template.id}
        isFromBB
      />
    </>
  ),
  [TEMPLATE_TYPES.LINKEDIN]: template => (
    <>
      <Button
        size="small"
        onClick={() => {
          let content = '';

          if (template.content) {
            content = template.content
              .replace(/<[/][^>]*>/g, '\n')
              .replace(/<[^>]*>/g, '')
              .replace(/&[a-z]*;/g, '');
          }
          copyToClipboard({ html: template.content, plain: content });
          window.open('https://www.linkedin.com/messaging');
        }}
        iconLeft="externalLink"
        uppercase
      >
        Open Linkedin
      </Button>
    </>
  ),
  [TEMPLATE_TYPES.PITCH]: () => <></>,
  [TEMPLATE_TYPES.QUALIFYING_QUESTION]: () => <></>,
};

const MessagingTemplateCollectionView = ({ templateCollection, templateType, type }) => {
  const { history } = useRouter();
  const location = useLocation();

  return (
    <div className={styles._container} data-intercom={`contact-view-messaging-${type}`}>
      {templateCollection.map(template => (
        <MessagingTemplateCard
          key={template.id}
          templateName={template.name}
          templateSubject={template.subject}
          enabled={template.enabled}
          type={type}
          templateBody={template.content || template.question}
          templateType={templateType}
          templateStatistics={template.templateStatistics}
          lastUpdated={template.updateDatetime}
          onClone={() =>
            history.push(
              `${TEMPLATE_FORMS_ROUTES[templateType]}?mode=CLONE&id=${template.id}&from=${
                location.pathname
              }`,
            )
          }
          onCopy={() => {
            const plainText = convertHtmlToString(template.content);
            copyToClipboard({ html: template.content, plain: plainText });
          }}
          onEdit={() =>
            history.push(
              `${TEMPLATE_FORMS_ROUTES[templateType]}?mode=EDITION&id=${template.id}&from=${
                location.pathname
              }`,
            )
          }
          actions={TEMPLATE_CARD_ACTIONS[templateType](template)}
        />
      ))}
    </div>
  );
};

MessagingTemplateCollectionView.defaultProps = {
  templateCollection: [],
  type: 'TEMPLATE_MANAGEMENT',
};

export default MessagingTemplateCollectionView;
