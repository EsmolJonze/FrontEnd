// @deprecated
import React from 'react';
import { withStyles } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import CircleWithText from './CircleWithText';
import CustomTooltip from '../CustomTooltip';
import { cssVariables } from '../../style/variables';
import styles from './BusinessAsset.module.css';
import { useEntity } from '../../hooks/entities/useEntity';

const BusinessAsset = ({ entityId, entityClass, classes, fontSize, size = 48, count }) => {
  const entities = useEntity(entityClass);
  const entity = entities ? entities.get(entityId) : undefined;
  if (entityId === undefined) {
    return (
      <div style={{ height: size || 46, width: size || 46 }}>
        <CircleWithText
          height={size}
          width={size}
          backgroundColor={cssVariables.color.gunmetal.light}
          shortName="?"
          fontSize={fontSize || 20}
        />
      </div>
    );
  }
  if (entity !== undefined) {
    return (
      <CustomTooltip title={entity.name} className={classes.tooltip}>
        <div className={styles.BusinessAsset_root} style={{ height: size - 2, width: size - 2 }}>
          <CircleWithText
            height={size}
            width={size}
            backgroundColor={entity.color}
            shortName={entity.shortname}
            fontSize={fontSize || 20}
          />
          {count !== undefined && (
            <div className={styles.BusinessAsset_counter}>
              <CircleWithText
                height={18}
                width={18}
                backgroundColor={cssVariables.color.white.natural}
                fontColor={cssVariables.color.bloobirds.natural}
                shortName={count}
                fontSize={12}
              />
            </div>
          )}
        </div>
      </CustomTooltip>
    );
  }
  return <Skeleton variant={'circle'} height={size} width={size} />;
};

export default withStyles({
  tooltip: {
    width: 48,
    height: 46,
  },
})(BusinessAsset);
