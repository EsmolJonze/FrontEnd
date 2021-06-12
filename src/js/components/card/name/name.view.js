import React from 'react';
import classnames from 'clsx';
import TextWithEllipsis from '../../textWithEllipsis';
import styles from './name.module.css';
import { useBobjectDetails } from '../../../hooks';

const Name = ({ bobject, name, isCompleted, isContactView = false }) => {
  const { setBobjectDetails, openBobjectDetails } = useBobjectDetails();

  return (
    <span
      data-test={`Span_${bobject?.id.typeName}_${name}`}
      className={classnames(styles._container, { [styles._is_complete]: isCompleted })}
      onClick={event => {
        setBobjectDetails({ bobject, showContactButton: !isContactView });
        openBobjectDetails();
        event.preventDefault();
        event.stopPropagation();
      }}
    >
      <TextWithEllipsis numChars={16}>{name}</TextWithEllipsis>
    </span>
  );
};

export default Name;
