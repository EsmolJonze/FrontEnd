import React, { useState } from 'react';
import styles from './inboundFieldGrid.module.css';
import { Text } from '@bloobirds-it/bloobirds-platform-component-library';
import ShowMore from '../../showMore';

const InboundFieldGrid = ({ bobject }) => {
  const [showMore, setShowMore] = useState(false);

  const fields = bobject.fields
    .filter(field => field.inboundField)
    .sort((a, b) => a.ordering - b.ordering);

  if (!showMore && fields.length > 6) {
    fields.splice(6);
  }

  return (
    <div className={styles._field_wrapper}>
      <div className={styles._field_grid}>
        {fields.map(field => (
          <div className={styles._field_grid_item} key={field.label}>
            <Text size="xs" color="softPeanut">
              {field.label}
            </Text>
            <Text size="xs" color="peanut">
              {field.text}
            </Text>
          </div>
        ))}
      </div>
      <ShowMore value={showMore} onClick={setShowMore} />
    </div>
  );
};

export default InboundFieldGrid;
