import React from 'react';
import { DateRangePicker, Tag, TagGroup } from '@bloobirds-it/bloobirds-platform-component-library';
import { useActiveActivitiesFilters } from '../../../hooks/useActiveActivities';
import styles from './activityFilters.module.css';

const ACTIVITY_FILTERS = [
  { label: 'Calls', value: 'ACTIVITY__TYPE__CALL' },
  { label: 'Emails', value: 'ACTIVITY__TYPE__EMAIL' },
  { label: 'Inbound', value: 'ACTIVITY__TYPE__INBOUND' },
  { label: 'LinkedIn', value: 'ACTIVITY__TYPE__LINKEDIN_MESSAGE' },
  { label: 'Meetings', value: 'ACTIVITY__TYPE__MEETING' },
  { label: 'Cadence', value: 'ACTIVITY__TYPE__CADENCE' },
  { label: 'Note', value: 'ACTIVITY__TYPE__NOTE' },
  { label: 'Updates', value: 'ACTIVITY__TYPE__STATUS' },
];

const DateFilters = () => {
  const { startDate, endDate, setDateFilter, resetDateFilter } = useActiveActivitiesFilters();

  const handleChange = newValue => {
    if (!newValue.start) {
      resetDateFilter();
    } else {
      setDateFilter({ startDate: newValue.start, endDate: newValue.end });
    }
  };

  return (
    <div className={styles._filter_date}>
      <DateRangePicker
        placeholder="Date range"
        value={{ start: startDate, end: endDate }}
        onChange={handleChange}
        dropdownProps={{ position: 'bottom-end', expand: false }}
      />
    </div>
  );
};

const TypeFilters = () => {
  const { typeFilter, setTypeFilter } = useActiveActivitiesFilters();
  return (
    <TagGroup value={typeFilter} onChange={setTypeFilter}>
      {ACTIVITY_FILTERS.map(filter => (
        <Tag key={filter.value} value={filter.value}>
          {filter.label}
        </Tag>
      ))}
    </TagGroup>
  );
};

const ActivityFilters = () => (
  <div className={styles._filters_container}>
    <TypeFilters />
    <DateFilters />
  </div>
);

export default ActivityFilters;
