import React, { useEffect } from 'react';
import styles from './messagingFilters.module.css';
import { Item, Select } from '@bloobirds-it/bloobirds-platform-component-library';
import { useMessagingFilterOptions } from '../../../../hooks';
import { useIsFullSalesEnabled } from '../../../../hooks/useIsFullSalesEnabled';
import {
  useActiveMessagingSegmentationValuesFilter,
  useActiveMessagingStageFilter,
} from '../../../../hooks/useActiveMessagingFilters';

const MessagingFilters = () => {
  const [stage, setStage] = useActiveMessagingStageFilter();
  const {
    setOneSegmentationValue,
    resetActiveMessagingFilters,
  } = useActiveMessagingSegmentationValuesFilter();
  const messagingFilters = useMessagingFilterOptions(stage);
  const isFullSalesEnabled = useIsFullSalesEnabled();

  useEffect(() => {
    resetActiveMessagingFilters();
    setStage('PROSPECT');
  }, []);

  return (
    <div className={styles._container}>
      {isFullSalesEnabled && (
        <>
          <Select
            width="130px"
            size="small"
            value={stage}
            onChange={newState => {
              setStage(newState);
              resetActiveMessagingFilters();
            }}
          >
            <Item value="PROSPECT" key="prospect">
              Prospect stage
            </Item>
            <Item value="SALES" key="sales">
              Sales stage
            </Item>
          </Select>
          <div className={styles._separator} />
        </>
      )}
      {messagingFilters.map(filter => (
        <div key={filter.id} className={styles._filter__container}>
          <Select
            width="120px"
            placeholder={filter.label}
            size="small"
            onChange={value => setOneSegmentationValue(filter.id, value)}
          >
            <Item value="" key={filter.id}>
              All {filter.label}
            </Item>
            {filter.values?.map(filterValue => (
              <Item value={filterValue.id} key={filterValue.id}>
                {filterValue.name}
              </Item>
            ))}
          </Select>
        </div>
      ))}
    </div>
  );
};

export default MessagingFilters;
