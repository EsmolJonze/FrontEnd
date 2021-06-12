import React, { useEffect } from 'react';
import FilterButton from './filterButton';
import TaskSideBar from './TaskSideBar';
import { DISPLAY_HIDE_SIDEBAR_LEFT } from '../../../../../actions/dictionary';
import { bobjectFieldsModel, bobjectModel } from '../../../../../misc/model/bobjectFieldsModel';
import {
  APP_TASKS_ADD_QC,
  APP_TASKS_ASSIGN_QC,
  APP_TASKS_INBOUND,
  APP_TASKS_PROSPECT,
  APP_TASKS_SALES,
} from '../../../../_constants/routes';
import TaskCard, { AddLeadTaskCard } from './TaskCard';
import { useTasks } from './feed.services';
import style from './feed.module.css';
import { isToday } from '../../../../../utils/dates.utils';
import { useDialerVisibility, useSalesTasksCount } from '../../../../../hooks';
import classnames from 'clsx';
import { v4 as generateRandomId } from 'uuid';
import { Skeleton } from '@bloobirds-it/bloobirds-platform-component-library';
import { useUserSettings } from '../../../../../components/userPermissions/hooks';

const prospectSubhomeFilter = task => {
  const taskModel = bobjectModel(task);
  const taskType = taskModel.find('TASK__TASK_TYPE').valueLogicRole;
  const taskDate = taskModel.find('TASK__SCHEDULED_DATE')?.text;
  const taskOverdue = taskModel.find('TASK__IS_LAST_OVERDUE')?.valueLogicRole;
  const taskStatus = taskModel.findByLogicRole('TASK__STATUS')?.valueLogicRole;
  if (
    taskType === 'PROSPECT_CADENCE' &&
    taskDate &&
    isToday(new Date(taskDate)) &&
    taskStatus === 'TASK__STATUS__TODO'
  ) {
    return true;
  }
  if (taskType === 'PROSPECT_CADENCE' && taskOverdue === 'TASK__IS_LAST_OVERDUE__YES') {
    return true;
  }
  if (taskType === 'START_CADENCE' && taskStatus === 'TASK__STATUS__TODO') {
    const company = taskModel.findByLogicRole('TASK__COMPANY').referencedBobject;
    const companyModel = bobjectFieldsModel(company.fields);
    const companyStatus = companyModel.findByLogicRole('COMPANY__STATUS')?.valueLogicRole;
    return companyStatus === 'COMPANY__STATUS__READY_TO_PROSPECT';
  }

  return false;
};
const categories = [
  {
    name: 'Inbound',
    taskCategory: 0,
    icon: 'arrowDownRight',
    color: {
      icon: 'peanut',
      root: 'lightestBloobirds',
    },
    card: TaskCard,
    counterIsInboundLeads: true,
    filter: () => false,
    route: APP_TASKS_INBOUND,
  },
  {
    name: 'Add QC',
    taskCategory: 1,
    icon: 'company',
    color: {
      icon: 'peanut',
      root: 'lightestBloobirds',
    },
    route: APP_TASKS_ADD_QC,
  },
  {
    name: 'Assign',
    taskCategory: 2,
    icon: 'send',
    color: {
      icon: 'tangerine',
      root: 'verySoftTangerine',
    },
    route: APP_TASKS_ASSIGN_QC,
  },
  {
    name: 'Add Leads',
    taskCategory: 3,
    icon: 'personArrow',
    color: {
      icon: 'banana',
      root: 'verySoftBanana',
    },
    card: AddLeadTaskCard,
    taskType: ['ADD_LEADS_TO_QC'],
    filter: task => {
      const taskModel = bobjectModel(task);
      const taskType = taskModel.find('TASK__TASK_TYPE').valueLogicRole;
      return taskType === 'ADD_LEADS_TO_QC';
    },
  },
  {
    name: 'Prospect',
    taskType: ['PROSPECT_CADENCE', 'START_CADENCE'],
    taskCategory: 5,
    icon: 'phone',
    counterIsProspect: true,
    color: {
      icon: 'grape',
      root: 'verySoftGrape',
    },
    route: APP_TASKS_PROSPECT,
    filter: prospectSubhomeFilter,
  },
  {
    name: 'Sales',
    taskType: ['PROSPECT_CADENCE', 'START_CADENCE'],
    taskCategory: 6,
    icon: 'fileOpportunity',
    counterIsSales: true,
    color: {
      icon: 'white',
      root: 'peanut',
      text: 'white',
    },
    route: APP_TASKS_SALES,
    filter: prospectSubhomeFilter,
  },
];

const TaskFeed = ({
  dispatch,
  displaySidebar,
  taskCount,
  selectedTaskCategory,
  cameFromDonePage,
  bobjectFields,
  bobjectPicklistFieldValues,
}) => {
  const settings = useUserSettings();
  const { isOpen } = useDialerVisibility();
  let salesTotalCount;
  if (settings?.account?.features.salesFeature) {
    const {
      onCadenceTodayCount,
      onCadenceOverdueCount,
      scheduledTodayCount,
      scheduledOverdueCount,
      meetingOverdueCount,
      meetingTodayCount,
    } = useSalesTasksCount({
      shouldCreateSubscription: true,
    });

    salesTotalCount = [
      onCadenceTodayCount,
      onCadenceOverdueCount,
      scheduledTodayCount,
      scheduledOverdueCount,
      meetingOverdueCount,
      meetingTodayCount,
    ].reduce((accumulator, currentValue) => accumulator + currentValue);
  }

  useTasks(bobjectFields, bobjectPicklistFieldValues, dispatch);

  const selectedCategory = categories.find(f => f.taskCategory === selectedTaskCategory);

  useEffect(() => {
    if (!selectedCategory || selectedCategory.route !== undefined) {
      if (displaySidebar) {
        dispatch({ type: DISPLAY_HIDE_SIDEBAR_LEFT });
      }
    }
  }, [selectedCategory, displaySidebar]);

  return (
    <div
      className={classnames({
        [style._container]: true,
        [style._no_show]: isOpen,
      })}
    >
      <div className={style._filter_sidebar_container}>
        {taskCount
          ? categories.map(category => (
              <FilterButton
                {...category}
                key={`filter-${category.name}`}
                salesTaskCount={salesTotalCount}
              />
            ))
          : [...Array(6)].map(() => (
              <div className={style._taskButton_skeleton__container} key={generateRandomId()}>
                <Skeleton variant="rect" height={64} width={64} />
              </div>
            ))}
      </div>
      {taskCount && selectedCategory && !selectedCategory.route && (
        <TaskSideBar
          display={displaySidebar}
          selectedCategory={selectedCategory}
          Card={selectedCategory ? selectedCategory.card : undefined}
          cameFromDonePage={cameFromDonePage}
        />
      )}
    </div>
  );
};

export default TaskFeed;
