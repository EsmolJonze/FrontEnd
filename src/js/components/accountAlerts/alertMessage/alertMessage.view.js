import { Icon, Text } from '@bloobirds-it/bloobirds-platform-component-library';
import styles from './alertMessage.module.css';
import { formatDateAsText } from '../../../utils/dates.utils';
import React from 'react';

export const AlertMessage = ({ type, onMessageClick, options = {} }) => {
  switch (type) {
    case 'maintenanceMode':
      return (
        <Text size="s">
          {' '}
          ⚙️️ We are working on improvements on Bloobirds so we will be on maintenance mode until
          9pm, you can be updated in our&nbsp;
          <a
            className={styles.status_page_link}
            onClick={() => {
              window.open('https://status.bloobirds.com/', '_blank');
            }}
          >
            Status Page
          </a>
        </Text>
      );
    case 'nylasStopped':
      return (
        <Text size="s">
          {' '}
          ✉️ One of your Email accounts has been disconnected, you should go to&nbsp;
          <a className={styles._accounts_alert_link} onClick={onMessageClick}>
            Connections
          </a>
          &nbsp;and re-authenticate the account to be able to sync your emails.
        </Text>
      );
    case 'notInChrome':
      return (
        <Text size="s">
          {' '}
          ⚠️ For an optimal experience we recommend using Bloobirds with supported Google Chrome
          versions!
        </Text>
      );
    case 'userPaused':
      return (
        <div className={styles._pause_text_container}>
          <div className={styles._pause_icon}>
            <Icon name="pause" color="banana" />️
          </div>
          <Text size="s" inline>
            Paused cadences until{' '}
            <b>
              {formatDateAsText(
                new Date(
                  new Date(options.date).getTime() +
                    new Date(options.date).getTimezoneOffset() * 60000,
                ),
                'do MMMM',
              )}
            </b>
            . Go to&nbsp;
            <a className={styles._accounts_alert_link} onClick={onMessageClick}>
              Cadence Settings
            </a>
            &nbsp;and cancel your current pause cadence to continue.
          </Text>
        </div>
      );
    default:
      return null;
  }
};
