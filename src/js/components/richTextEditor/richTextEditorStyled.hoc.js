import React from 'react';
import styles from './richTextEditor.module.css';
import classNames from 'clsx';
import { initialSlateObject } from './richTextEditor.utils';
import isEqual from 'lodash/isEqual';

export const withStyledContainer = Component =>
  React.forwardRef((props, ref) => {
    const filled = !isEqual(props.value, initialSlateObject);

    const classes = classNames(styles.container, {
      [styles.error]: props.error,
      [styles.filled]: filled,
      [styles.empty]: !filled,
      [styles.singleLine]: props.singleLine,
    });

    return (
      <div className={classes}>
        <fieldset className={styles.fieldset}>
          <legend className={`${styles.legend} ${!props.placeholder && styles.empty}`}>
            {props.placeholder || 'Hidden'}
          </legend>
          <div className={styles.content}>
            <Component {...props} ref={ref} />
          </div>
        </fieldset>
      </div>
    );
  });
