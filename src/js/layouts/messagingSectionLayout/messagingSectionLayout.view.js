import React from 'react';
import styles from './messagingSectionLayout.module.css';
import { Text } from '@bloobirds-it/bloobirds-platform-component-library';
import MessagingTemplateActions from './messagingTemplateActions';
import MessagingFilters from './messagingTemplateFilters/messagingFilters';

const MessagingSectionLayoutView = ({ body, id, title, createConfig, dataIntercom, actions }) => (
  <div className={styles._container} id={id} data-intercom={dataIntercom}>
    <div className={styles._info__container}>
      <div className={styles._header}>
        <div className={styles._title}>
          <Text htmlTag="h3" size="xl" color="peanut">
            {title}
          </Text>
        </div>
        <MessagingTemplateActions creationConfig={createConfig}>{actions}</MessagingTemplateActions>
      </div>
      <MessagingFilters />
    </div>
    <div className={styles._content__container}>{body}</div>
  </div>
);

export default MessagingSectionLayoutView;
