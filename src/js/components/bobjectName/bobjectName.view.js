import React from 'react';
import { IconButton, Tooltip } from '@bloobirds-it/bloobirds-platform-component-library';
import { useHover, useBobjectDetails } from '../../hooks';
import classNames from 'clsx';
import { BOBJECT_TYPES } from '../../constants/bobject';
import styles from './bobjectName.module.css';
import { useBobjectFormVisibility } from '../../hooks/useBobjectForm';
import { ellipsis } from '../../utils/strings.utils';

const BobjectNameView = ({
  field,
  bobject,
  type,
  isLead = type === BOBJECT_TYPES.LEAD,
  isCompany = type === BOBJECT_TYPES.COMPANY,
  ellipsisChar,
}) => {
  const { openEditModal } = useBobjectFormVisibility();
  const [ref, isHover] = useHover();
  const { openBobjectDetails, setBobjectDetails } = useBobjectDetails();
  const textValue = field.value || `Untitled ${type}`;

  return (
    <Tooltip title={field.value} position="top" trigger="hover">
      <div className={styles._container} ref={ref}>
        <span
          data-test={`Dropdown-Name-${field.value}`}
          className={classNames(styles._name__text, {
            [styles._nameLead]: isLead,
            [styles._nameCompany]: isCompany,
          })}
          onClick={() => {
            setBobjectDetails({ bobject });
            openBobjectDetails();
          }}
        >
          {ellipsisChar ? ellipsis(textValue, ellipsisChar) : textValue}
        </span>
        {isHover && <IconButton name="edit" size={16} onClick={() => openEditModal({ bobject })} />}
      </div>
    </Tooltip>
  );
};

export default BobjectNameView;
