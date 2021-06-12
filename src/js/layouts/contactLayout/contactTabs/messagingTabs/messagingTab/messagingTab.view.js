import React, { useEffect } from 'react';
import { Text } from '@bloobirds-it/bloobirds-platform-component-library';
import styles from './messagingTab.module.css';
import { toSentenceCase } from '../../../../../utils/strings.utils';
import EmailButton from '../../../../../components/emailButton';
import { TEMPLATE_TYPES } from '../../../../../utils/templates.utils';
import MessagingTemplateCollection from '../../../../messagingSectionLayout/messagingTemplateCollection/messagingTemplateCollection.container';
import BannerPlaybook from './bannerPlaybook';
import MessagingSearchBar from '../../../../../components/messagingTemplates/messagingSearchBar/messagingSearchBar';
import MessagingVisibilitySwitch from '../../../../../components/messagingTemplates/messagingVisibilitySwitch/messagingVisibilitySwitch';

const MessagingTab = ({ setType, setVersion, type }) => {
  useEffect(() => {
    setType(type);
    setVersion('CONTACT');
  }, [type]);

  const name = toSentenceCase(type);

  return (
    <div>
      <BannerPlaybook />
      <header className={styles.header}>
        <Text className={styles.title} htmlTag="h4" size="l" color="peanut">
          {name} templates
        </Text>
        <div className={styles.actions}>
          <MessagingVisibilitySwitch />
          <MessagingSearchBar placeholder="Search" />
        </div>
        {name === 'Email' && (
          <div className={styles.emailButton}>
            <EmailButton isFromBB templateBody="" isBlankEmail />
          </div>
        )}
      </header>
      <MessagingTemplateCollection type="CONTACT_VIEW" templateType={TEMPLATE_TYPES[type]} />
    </div>
  );
};

export default MessagingTab;
