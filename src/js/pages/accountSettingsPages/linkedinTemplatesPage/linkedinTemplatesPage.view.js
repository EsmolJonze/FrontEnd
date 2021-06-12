import React from 'react';
import MessagingTemplatesLayout from '../../../layouts/messagingSectionLayout';
import { APP_MANAGEMENT_ACCOUNT_MESSAGING_LINKEDIN_FORM } from '../../../app/_constants/routes';
import { FORM_MODES, TEMPLATE_TYPES } from '../../../utils/templates.utils';
import MessagingTemplateCollection from '../../../layouts/messagingSectionLayout/messagingTemplateCollection';
import { TYPES } from '../../../constants/templates';
import { useRouter } from '../../../hooks';
import MessagingVisibilitySwitch from '../../../components/messagingTemplates/messagingVisibilitySwitch/messagingVisibilitySwitch';

const LinkedinTemplatesPage = () => {
  const { history } = useRouter();
  const config = {
    actionName: 'Create template',
    onClickAction: () =>
      history.push(`${APP_MANAGEMENT_ACCOUNT_MESSAGING_LINKEDIN_FORM}?mode=${FORM_MODES.CREATION}`),
    searchPlaceholder: 'Search',
  };

  return (
    <MessagingTemplatesLayout
      dataIntercom="account-settings-linkedin-template-page"
      body={<MessagingTemplateCollection templateType={TEMPLATE_TYPES.LINKEDIN} />}
      actions={<MessagingVisibilitySwitch />}
      type={TYPES.LINKEDIN}
      id="LINKEDIN_MESSAGING_TEMPLATES"
      title="Linkedin Templates"
      createConfig={config}
      pluralEntityName="Linkedin templates"
    />
  );
};

export default LinkedinTemplatesPage;
