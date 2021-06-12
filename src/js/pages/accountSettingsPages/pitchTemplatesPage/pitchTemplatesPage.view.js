import React from 'react';
import MessagingTemplatesLayout from '../../../layouts/messagingSectionLayout';
import MessagingTemplateCollection from '../../../layouts/messagingSectionLayout/messagingTemplateCollection';
import { APP_MANAGEMENT_ACCOUNT_MESSAGING_PITCH_FORM } from '../../../app/_constants/routes';
import { FORM_MODES, TEMPLATE_TYPES } from '../../../utils/templates.utils';
import { TYPES } from '../../../constants/templates';
import { useRouter } from '../../../hooks';
import MessagingVisibilitySwitch from '../../../components/messagingTemplates/messagingVisibilitySwitch/messagingVisibilitySwitch';

const PitchTemplatesPage = () => {
  const { history } = useRouter();

  const config = {
    actionName: 'Create template',
    onClickAction: () =>
      history.push(`${APP_MANAGEMENT_ACCOUNT_MESSAGING_PITCH_FORM}?mode=${FORM_MODES.CREATION}`),
    searchPlaceholder: 'Search',
  };

  return (
    <MessagingTemplatesLayout
      dataIntercom="account-settings-pitch-template-page"
      body={<MessagingTemplateCollection templateType={TEMPLATE_TYPES.PITCH} />}
      actions={<MessagingVisibilitySwitch />}
      type={TYPES.PITCH}
      id="PITCH_MESSAGING_TEMPLATES"
      title="Pitches & Snippets"
      createConfig={config}
      pluralEntityName="Pitch templates"
    />
  );
};

export default PitchTemplatesPage;
