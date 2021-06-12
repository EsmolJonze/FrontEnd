import React from 'react';
import styles from './tasksTab.module.css';
import { tasksLists } from './tasksTab.service';
import { useBobjectList } from '../../contexts/bobjectList';
import { TagFilter } from '../filters';
import BobjectListGroup from '../bobjectList/bobjectListGroup';
import { useActiveCompany } from '../../hooks/useActiveCompany';
import { useActiveOpportunities } from '../../hooks';
import { useUserSettings } from '../userPermissions/hooks';

const taskFilters = [
  {
    value: 'ADD_LEADS_TO_QC',
    name: 'Add leads',
  },
  {
    value: 'START_CADENCE',
    name: 'Start cadence',
  },
  {
    value: 'PROSPECT_CADENCE',
    name: 'Prospect',
  },
  {
    value: 'NEXT_STEP',
    name: 'Scheduled',
  },
  {
    value: 'CONTACT_BEFORE_MEETING',
    name: 'Meeting',
  },
];

const TasksTab = ({ lead }) => {
  const { company } = useActiveCompany();
  const { selectedOpportunity } = useActiveOpportunities(company?.id.value);
  const { state, setFilter } = useBobjectList();
  const settings = useUserSettings();
  const lists = React.useMemo(
    () =>
      tasksLists(
        company?.id.value,
        lead,
        selectedOpportunity?.id.value,
        settings?.account?.features.salesFeature,
      ),
    [company?.id.value, lead, selectedOpportunity?.id.value],
  );

  return (
    <>
      <article className={styles._container}>
        <div className={styles._content}>
          <TagFilter
            value={state.filters.taskType.value}
            direction="horizontal"
            items={taskFilters}
            onChange={setFilter('taskType')}
          />
          <div className={styles._lists}>
            <BobjectListGroup bobjectLists={() => lists} />
          </div>
        </div>
      </article>
    </>
  );
};

export default TasksTab;
