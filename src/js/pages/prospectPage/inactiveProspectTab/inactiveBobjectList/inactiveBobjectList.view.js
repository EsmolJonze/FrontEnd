import React, { useState } from 'react';
import List from '../../../../components/list';
import Card from '../../../../components/card';
import { CARD_TYPES } from '../../../../constants/card';
import styles from './inactiveBobjectList.module.css';
import { Skeleton } from '@bloobirds-it/bloobirds-platform-component-library';
import EmptyList from '../../../../components/emptyList';

export const InactiveBobjectList = ({ bobjectLists, isLoaded }) => {
  const [pageSize, setPageSize] = useState(10);
  const handleShowMore = () => {
    setPageSize(pageSize + 10);
  };

  return (
    <div className={styles._content_right}>
      {isLoaded ? (
        <>
          {Array.isArray(bobjectLists) && bobjectLists.length > 0 ? (
            <List
              tooltip="In this list you will find the full list of your companies in pipeline without an scheduled task. Don't forget them!"
              title="Inactive Companies"
              totalItems={bobjectLists.length || 0}
              emptyMessage="No inactive companies"
              onShowMore={handleShowMore}
            >
              {bobjectLists.slice(0, pageSize).map(bobject => {
                const key = bobject?.id?.value;
                return <Card type={CARD_TYPES.COMPANY} key={key} bobject={bobject} />;
              })}
            </List>
          ) : (
            <EmptyList />
          )}
        </>
      ) : (
        <>
          <Skeleton variant="text" width="100%" />
          <Skeleton variant="rect" width="100%" height={60} />
          <Skeleton variant="rect" width="100%" height={60} />
        </>
      )}
    </div>
  );
};

export default InactiveBobjectList;
