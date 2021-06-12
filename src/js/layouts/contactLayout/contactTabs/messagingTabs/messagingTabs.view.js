import React from 'react';
import { TabGroup, Tab } from '@bloobirds-it/bloobirds-platform-component-library';
import styles from './messagingTabs.module.css';
import { useContactView } from '../../../../hooks';
import MessagingTab from './messagingTab';
import QualifyingQuestions from '../../../../components/qualifyingQuestions';

const TYPES = {
  PITCH: 'PITCH',
  EMAIL: 'EMAIL',
  LINKEDIN: 'LINKEDIN_MESSAGE',
  QUALIFYING_QUESTION: 'QUALIFYING_QUESTION',
};

const MessagingTabs = () => {
  const { subtab: activeSubtab, setSubtab } = useContactView();

  return (
    <article className={styles._container}>
      <div className={styles._wrapper}>
        <TabGroup
          value={activeSubtab}
          onClick={subtab => {
            setSubtab(subtab);
          }}
        >
          <Tab
            name="Pitches & Snippets"
            iconLeft="alignLeft"
            variant="secondary"
            color="softMelon"
            active={activeSubtab}
          >
            <MessagingTab type={TYPES.PITCH} />
          </Tab>
          <Tab name="Email Templates" iconLeft="mail" variant="secondary" color="softTangerine">
            <MessagingTab type={TYPES.EMAIL} />
          </Tab>
          <Tab name="Linkedin Templates" iconLeft="linkedin" variant="secondary" color="bloobirds">
            <MessagingTab type={TYPES.LINKEDIN} />
          </Tab>
          <Tab
            name="Qualifying Questions"
            iconLeft="chatSupport"
            variant="secondary"
            color="softBanana"
          >
            <QualifyingQuestions />
          </Tab>
        </TabGroup>
      </div>
    </article>
  );
};

export default MessagingTabs;
