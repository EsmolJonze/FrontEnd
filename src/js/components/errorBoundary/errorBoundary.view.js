import React, { useState } from 'react';
import styles from './errorBoundary.module.css';
import * as Sentry from '@sentry/react';
import { Button, Text } from '@bloobirds-it/bloobirds-platform-component-library';
import { useRouter } from '../../hooks';

const Actions = ({ resetError }) => {
  const { history } = useRouter();
  return (
    <div className={styles.actions}>
      <Button
        onClick={() => {
          history.push('/');
          resetError();
        }}
      >
        Back to safety
      </Button>
      <Text>
        or email us to{' '}
        <Text htmlTag="span" color="bloobirds">
          <a
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:support@bloobirds.com"
          >
            support@bloobirds.com
          </a>
        </Text>
      </Text>
      <Text>
        or open a{' '}
        <Text htmlTag="span" color="bloobirds">
          <a
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
            href="https://bloobirds.atlassian.net/servicedesk/customer/portal/2"
          >
            support request
          </a>
        </Text>
        .
      </Text>
    </div>
  );
};

const Fallback = ({ error, componentStack, resetError }) => {
  const [showError, setShowError] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {showError ? (
          <>
            <pre>Name: {error.name}</pre>
            <pre>Message: {error.message}</pre>
            <pre>{componentStack}</pre>
          </>
        ) : (
          <>
            <Text htmlTag="h1" size="xxxl" color="bloobirds">
              Ooops!
            </Text>
            <Text htmlTag="h2" size="l">
              Well, this is unexpected...
            </Text>
            <div className={styles.text}>
              <Text size="m">
                An error has occurred and we are working to fix the problem! We will be up and
                running shortly.
              </Text>
              <Text size="m">In the meantime here is what you can do:</Text>
            </div>
            <Actions resetError={resetError} />
          </>
        )}
      </div>
      <div className={styles.footer}>
        <Button expand variant="tertiary" onClick={() => setShowError(!showError)}>
          Show Error
        </Button>
      </div>
    </div>
  );
};

const ErrorBoundary = ({ children }) => (
  <Sentry.ErrorBoundary fallback={props => <Fallback {...props} />}>
    {children}
  </Sentry.ErrorBoundary>
);

export default ErrorBoundary;
