import React from 'react';
import { Button } from '@bloobirds-it/bloobirds-platform-component-library';
import styles from './messagingTemplateFooterActions.module.css';
import { useFormContext } from 'react-hook-form';
import { FORM_MODES, TEMPLATE_TYPES } from '../../../utils/templates.utils';

const MessagingTemplateFooterActions = ({ mode, type, onCancel, onDelete }) => {
  const { formState } = useFormContext();
  const saveCopy =
    type === TEMPLATE_TYPES.QUALIFYING_QUESTION ? 'Save Qualifying Question' : 'Save Template';
  return (
    <footer className={styles.footer}>
      {mode === FORM_MODES.EDITION && type !== TEMPLATE_TYPES.QUALIFYING_QUESTION ? (
        <Button
          type="button"
          disabled={formState.isSubmitting}
          onClick={onDelete}
          variant="tertiary"
          color="tomato"
        >
          Delete
        </Button>
      ) : (
        <div />
      )}
      <div className={styles.buttons}>
        <Button disabled={formState.isSubmitting} variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button disabled={formState.isSubmitting} type="submit" variant="primary">
          {mode === 'CLONE' ? 'Clone' : saveCopy}
        </Button>
      </div>
    </footer>
  );
};

export default MessagingTemplateFooterActions;
