import { withStyles } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { cssVariables } from '../../../../../style/variables';
import classNames from 'clsx';
import { APP_TASKS_WELCOME, companyTaskUrl, leadUrl } from '../../../../_constants/routes';
import { withRouter } from 'react-router-dom';
import { bobjectModel } from '../../../../../misc/model/bobjectFieldsModel';
import { compareAsc, endOfDay, isAfter } from 'date-fns';
import { SubscriptionHooks } from '@bloobirds-it/bloobirds-platform-react-api-library';
import { injectReferencesSearchProcess } from '../../../../../misc/api/bobject';
import { useUserSettings } from '../../../../../components/userPermissions/hooks';
import { getDateRange } from '../../../../../utils/dates.utils';
import { Spinner } from '@bloobirds-it/bloobirds-platform-component-library';

const style = {
  root: {
    overflowY: 'scroll',
    backgroundColor: cssVariables.color.bloobirds.soft,
    zIndex: 1,
    width: 247,
    transition: 'width .4s ease',
    '& > *': {
      transform: 'translate(0px, 0px)',
      transition: 'transform 400ms cubic-bezier(0, 0, 0.2, 1) 0ms',
    },

    '&::-webkit-scrollbar': {
      width: '0',
    },
  },
  emptyListEmoji: {
    fontSize: 36,
  },
  transition: {
    width: 0,
    '& > *': {
      transform: 'translateX(-252px)',
    },
  },
  emptyList: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 236,
    color: cssVariables.color.white.natural,
  },
  taskAheadTitle: {
    display: 'block',
    color: cssVariables.color.white.natural,
    margin: '20px 16px 0',
    fontSize: 14,
    padding: '14px 0 0;',
  },
  loaderWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '40px',
  },
  loader: {
    color: 'white',
  },
};

const processTasks = filtering => bobjects => {
  if (!bobjects) {
    return [];
  }
  const tasks = bobjects
    .map(x => ({
      bobject: x,
      date: bobjectModel(x).find('TASK__SCHEDULED_DATE'),
    }))
    .filter(x => x?.date?.text !== undefined)
    .map(x => {
      let date = x.date.text;
      date = date.replace('Z', '');
      return { dateObj: new Date(date), ...x };
    })
    .filter(filtering);
  tasks.sort((a, b) => compareAsc(a.dateObj, b.dateObj));
  return tasks.map(x => x.bobject);
};

const getFutureTasks = processTasks(x => isAfter(x.dateObj, endOfDay(new Date())));
const getPresentTasks = processTasks(x => !isAfter(x.dateObj, endOfDay(new Date())));

const useTasks = (taskType, onNewTasks) => {
  const settings = useUserSettings();
  const taskRequest = React.useMemo(
    () => ({
      query: {
        TASK__ASSIGNED_TO: [settings?.user.id],
        TASK__SCHEDULED_DATE: getDateRange({
          startingDate: new Date(),
          pastRange: 90,
          futureRange: 5,
        }),
        TASK__STATUS: ['TASK__STATUS__TODO'],
        TASK__TASK_TYPE: taskType,
      },
      injectReferences: true,
      formFields: true,
      page: 0,
      pageSize: 5000,
    }),
    [settings, taskType],
  );
  SubscriptionHooks.useBobjectSubscription('Task', taskRequest, response => {
    injectReferencesSearchProcess(response);
    onNewTasks(response.contents);
  });
};
const TaskSideBar = ({ classes, display, Card, history, selectedCategory, cameFromDonePage }) => {
  const [bobjects, setBobjects] = useState(undefined);
  const [sSelectedCategory, setSelectedCategory] = useState();
  const [shouldLoadNextTaskUrl, setShouldLoadNextTaskUrl] = useState(false);
  useTasks(selectedCategory.taskType, setBobjects);
  const hasBobjects = bobjects !== undefined && bobjects.length > 0;
  const isLoading = bobjects === undefined;
  const futureTasks = getFutureTasks(bobjects);
  const presentTasks = getPresentTasks(bobjects);
  const sortedBobjects = [...presentTasks, ...futureTasks];
  useEffect(() => {
    if (shouldLoadNextTaskUrl && bobjects !== undefined) {
      if (!cameFromDonePage) {
        if (hasBobjects) {
          const taskModel = bobjectModel(sortedBobjects[0]);
          const companyField = taskModel.find('TASK__COMPANY');
          let thisTaskUrl;
          if (companyField.value !== undefined) {
            thisTaskUrl = companyTaskUrl(companyField.value, sortedBobjects[0]);
          } else {
            const leadField = taskModel.find('TASK__LEAD');
            thisTaskUrl = leadUrl(leadField.value);
          }
          if (thisTaskUrl) {
            history.push(thisTaskUrl);
          }
        }
      }
    }
  }, [bobjects]);
  useEffect(() => {
    if (sSelectedCategory !== selectedCategory) {
      setSelectedCategory(selectedCategory);
      setBobjects(undefined);
      setShouldLoadNextTaskUrl(true);
    }
  }, [sSelectedCategory, selectedCategory]);

  useEffect(() => {
    if (
      !cameFromDonePage &&
      !hasBobjects &&
      display &&
      !history.location.pathname.startsWith(APP_TASKS_WELCOME) &&
      selectedCategory &&
      !selectedCategory.route
    ) {
      history.push(APP_TASKS_WELCOME);
    }
  }, [cameFromDonePage, hasBobjects, display, history.location.pathname, selectedCategory]);

  return (
    <React.Fragment>
      {isLoading && (
        <div className={classes.loaderWrapper}>
          <Spinner name="loadingCircle" />
        </div>
      )}
      {!isLoading && !hasBobjects && (
        <div className={classes.emptyList}>
          <p>
            <span role="img" aria-label="Well done." className={classes.emptyListEmoji}>
              👏
            </span>
          </p>
          <p>All tasks in this category are completed</p>
        </div>
      )}
      {presentTasks !== undefined &&
        presentTasks.length > 0 &&
        presentTasks.map(bobject => (
          <Card bobject={bobject} key={`bobject-${bobject.id.objectId}`} />
        ))}
      {futureTasks !== undefined && futureTasks.length > 0 && (
        <React.Fragment>
          <span className={classes.taskAheadTitle}>Tasks for the next 3 days</span>
          {futureTasks.map(bobject => (
            <Card bobject={bobject} future />
          ))}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

const HideableTaskSideBar = props => {
  const { classes, display, selectedCategory } = props;
  return (
    <div
      className={classNames({
        [classes.root]: true,
        [classes.transition]: !display,
      })}
    >
      {display && selectedCategory && selectedCategory.taskType && <TaskSideBar {...props} />}
    </div>
  );
};
export default withRouter(withStyles(style)(HideableTaskSideBar));
