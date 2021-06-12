import React from 'react';
import { withRouter } from 'react-router-dom';
import { APP_TASKS_DONE } from '../../../../../../_constants/routes';
import { Button } from '@bloobirds-it/bloobirds-platform-component-library';

const Index = props => {
  const { children, disabled = false, onClick = () => {}, history } = {
    ...props,
  };
  const manageClick = () => {
    if (!disabled) {
      if (onClick !== undefined) {
        onClick();
      }
      history.push(APP_TASKS_DONE);
    }
  };

  return (
    <Button iconLeft="send" disabled={disabled} onClick={manageClick}>
      {children}
    </Button>
  );
};

export const CompleteButton = withRouter(Index);
