import React from 'react';
import MessagingTemplatesLayout from '../../../layouts/messagingSectionLayout';
import MessagingTemplateCollection from '../../../layouts/messagingSectionLayout/messagingTemplateCollection';
import {
  APP_MANAGEMENT_ACCOUNT_MESSAGING_QQ_FORM,
  APP_MANAGEMENT_ACCOUNT_MESSAGING_QQ_SCORES,
} from '../../../app/_constants/routes';
import { FORM_MODES, TEMPLATE_TYPES } from '../../../utils/templates.utils';
import { Link } from 'react-router-dom';
import { IconButton, Text } from '@bloobirds-it/bloobirds-platform-component-library';
import { useRouter } from '../../../hooks';
import { TYPES } from '../../../constants/templates';

const QualifyingQuestionTemplatesPage = () => {
  const { history } = useRouter();

  const config = {
    actionName: 'Create',
    onClickAction: () =>
      history.push(`${APP_MANAGEMENT_ACCOUNT_MESSAGING_QQ_FORM}?mode=${FORM_MODES.CREATION}`),
    searchPlaceholder: 'Search',
  };

  return (
    <MessagingTemplatesLayout
      dataIntercom="account-settings-qualifying-question-page"
      body={<MessagingTemplateCollection templateType={TEMPLATE_TYPES.QUALIFYING_QUESTION} />}
      type={TYPES.QUALIFYING_QUESTION}
      actions={
        <Link
          to={APP_MANAGEMENT_ACCOUNT_MESSAGING_QQ_SCORES}
          style={{ textDecoration: 'none', height: 24 }}
        >
          <IconButton name="settings">
            <Text color="bloobirds" decoration="none" size="s">
              Score rating settings
            </Text>
          </IconButton>
        </Link>
      }
      id="QQ_MESSAGING_TEMPLATES"
      title="Qualifying Questions"
      createConfig={config}
      pluralEntityName="Qualifying questions"
    />
  );
};

export default QualifyingQuestionTemplatesPage;
