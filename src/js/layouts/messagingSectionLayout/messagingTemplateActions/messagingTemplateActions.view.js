import React from 'react';
import { Button } from '@bloobirds-it/bloobirds-platform-component-library';
import styles from './messagingTemplateActions.module.css';
import MessagingSearchBar from '../../../components/messagingTemplates/messagingSearchBar/messagingSearchBar';

const MessagingTemplateActionsView = ({
  handleOnCreationClick,
  newEntityButtonName,
  searchPlaceholder,
  children,
}) => (
  <div className={styles._container}>
    <div className={styles._switchAction__container}>{children}</div>
    <div>
      <div className={styles._rightActions__container}>
        <MessagingSearchBar placeholder={searchPlaceholder} />
        <Button iconLeft="add" onClick={handleOnCreationClick}>
          {newEntityButtonName}
        </Button>
      </div>
    </div>
  </div>
);

export default MessagingTemplateActionsView;
