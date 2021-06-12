import React from 'react';
import { Errors } from '../../../assets/svg';
import styles from './errorPage.module.css';
import { Button } from '@bloobirds-it/bloobirds-platform-component-library';

const ErrorPage = ({ children, action, showSupport }) => (
  <div className={styles._error_page__container}>
    <div className={styles._error_page__content}>
      <div>
        <Errors className={styles._error_page__icon} />
      </div>
      <div className={styles._error_page__message}>{children}</div>
      <div className={styles._error_page__actions}>
        <Button iconLeft={action.icon} onClick={action.handleClick}>
          {action.name}
        </Button>
        {showSupport && (
          <Button
            variant="clear"
            onClick={() =>
              window.open('https://support.bloobirds.com/hc/en-us/requests/new', '_blank')
            }
          >
            Contact support
          </Button>
        )}
      </div>
    </div>
  </div>
);

export default ErrorPage;
