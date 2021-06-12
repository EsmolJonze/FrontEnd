import React from 'react';
import styles from './infoComponent.module.css';
import {
  Button,
  Icon,
  Spinner,
  Text,
  Tooltip,
} from '@bloobirds-it/bloobirds-platform-component-library';
import { useTaskNavigation } from '../../../hooks/useTaskNavigation';

const InfoComponent = ({ tooltipText, title, hasTaskNavigation = false }) => {
  const { loading, hasTasks, startNavigation } = useTaskNavigation();
  const extraProps = { iconLeft: loading || !hasTasks ? null : 'arrowRight' };

  return (
    <div className={styles._info_content}>
      <div className={styles._info_title}>
        <Text color="softPeanut">{title}</Text>
        <div className={styles._tooltip}>
          {tooltipText && (
            <Tooltip title={tooltipText} position="right">
              <Icon color="peanut" name="info" size={16} />
            </Tooltip>
          )}
        </div>
      </div>
      {hasTaskNavigation && (
        <div className={styles._startTasks__container}>
          <Button
            disabled={!hasTasks || loading}
            size="small"
            onClick={startNavigation}
            {...extraProps}
          >
            {loading && (
              <div className={styles._buttonSpinner}>
                <Spinner name="loadingCircle" size={14} />
              </div>
            )}
            Start tasks
          </Button>
        </div>
      )}
    </div>
  );
};

export default InfoComponent;
