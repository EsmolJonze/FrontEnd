import React from 'react';
import MessagingTemplatesLayout from '../../../layouts/messagingSectionLayout';
import MessagingTemplateCollection from '../../../layouts/messagingSectionLayout/messagingTemplateCollection';
import { APP_MANAGEMENT_ACCOUNT_MESSAGING_EMAIL_FORM } from '../../../app/_constants/routes';
import { FORM_MODES, TEMPLATE_TYPES } from '../../../utils/templates.utils';
import { TYPES } from '../../../constants/templates';
import { useRouter } from '../../../hooks';
import MessagingVisibilitySwitch from '../../../components/messagingTemplates/messagingVisibilitySwitch/messagingVisibilitySwitch';

const EmailTemplatesPage = () => {
  const { history } = useRouter();
  const config = {
    actionName: 'Create template',
    onClickAction: () =>
      history.push(`${APP_MANAGEMENT_ACCOUNT_MESSAGING_EMAIL_FORM}?mode=${FORM_MODES.CREATION}`),
    searchPlaceholder: 'Search',
  };

  return (
    <MessagingTemplatesLayout
      dataIntercom="account-settings-email-template-page"
      body={<MessagingTemplateCollection templateType={TEMPLATE_TYPES.EMAIL} />}
      actions={<MessagingVisibilitySwitch />}
      type={TYPES.EMAIL}
      id="EMAIL_MESSAGING_TEMPLATES"
      title="Email Templates"
      createConfig={config}
      pluralEntityName="Email templates"
    />
  );
};

export default EmailTemplatesPage;
