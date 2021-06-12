import { useMemo } from 'react';
import { atom, useRecoilState, useRecoilValue, selector, useResetRecoilState } from 'recoil';
import { BobjectApi } from '../misc/api/bobject';
import { useRouter } from './useRouter';
import { companyUrl, opportunityUrl } from '../app/_constants/routes';
import { getFieldByLogicRole } from '../utils/bobjects.utils';
import { isSalesPage, isOpportunityPage } from '../utils/pages.utils';

const tasksToNavigateAtom = atom({
  key: 'tasksToNavigate',
  default: {
    collection: [],
    loading: false,
    hasTasks: false,
  },
});

const isEnabledAtom = atom({
  key: 'isNavigationEnabled',
  default: false,
});

const completedTasksAtom = atom({
  key: 'completedTasks',
  default: {},
});

const taskNavigationIndexAtom = atom({
  key: 'taskNavigationIndex',
  default: 0,
});

const taskNavigationItemSelector = selector({
  key: 'taskNavigationItemSelector',
  get: ({ get }) => {
    const { collection } = get(tasksToNavigateAtom);
    const index = get(taskNavigationIndexAtom);
    return collection[index];
  },
});

export const useTaskNavigation = () => {
  const [tasks, setTasks] = useRecoilState(tasksToNavigateAtom);
  const resetTasks = useResetRecoilState(tasksToNavigateAtom);
  const [isEnabled, setIsEnabled] = useRecoilState(isEnabledAtom);
  const resetIsEnabled = useResetRecoilState(isEnabledAtom);
  const [index, setIndex] = useRecoilState(taskNavigationIndexAtom);
  const resetIndex = useResetRecoilState(taskNavigationIndexAtom);
  const [completedTasks, setCompletedTasks] = useRecoilState(completedTasksAtom);
  const resetCompletedTasks = useResetRecoilState(completedTasksAtom);
  const selectedTask = useRecoilValue(taskNavigationItemSelector);
  const isFirst = index === 0;
  const isLast = index === tasks.collection.length - 1;
  const { history, pathname } = useRouter();

  const finishNavigation = () => {
    resetIsEnabled();
    resetTasks();
    resetIndex();
    resetCompletedTasks();
  };

  const changeIndex = newIndex => {
    if (newIndex !== index) {
      setIndex(newIndex);
      const taskCompanny = getFieldByLogicRole(tasks.collection[newIndex], 'TASK__COMPANY');
      let url = companyUrl(taskCompanny?.referencedBobject);

      if (isOpportunityPage(pathname)) {
        const taskOpportunity = getFieldByLogicRole(
          tasks.collection[newIndex],
          'TASK__OPPORTUNITY',
        );
        url = opportunityUrl(
          taskCompanny.referencedBobject?.id.objectId,
          taskOpportunity.referencedBobject?.id.objectId,
        );
      }
      history.replace(url);
    }
  };

  const nextTask = () => {
    changeIndex(isLast ? index : index + 1);
  };

  const previousTask = () => {
    changeIndex(isFirst ? index : index - 1);
  };

  const firstTask = () => {
    changeIndex(0);
  };

  const lastTask = () => {
    changeIndex(tasks.collection.length - 1);
  };

  const isTaskCompleted = () => !!completedTasks[selectedTask.id.objectId];

  const areAllTasksCompleted = useMemo(
    () => tasks.collection.every(task => !!completedTasks[task.id.objectId]),
    [completedTasks],
  );

  const loadTasks = async queries => {
    setTasks({ ...tasks, hasTasks: false, loading: true });
    const fetches = queries.map(query =>
      BobjectApi.request()
        .Task()
        .search({
          injectReferences: false,
          query,
          formFields: true,
          pageSize: 20,
        }),
    );
    const results = await Promise.all(fetches);
    const collection = results.flatMap(item => item.contents);
    setTasks({
      collection,
      hasTasks: collection.length > 0,
      loading: false,
    });
  };

  const addTasksToNavigate = newTasks => {
    setTasks({ ...tasks, collection: newTasks, hasTasks: newTasks.length > 0, loading: false });
  };

  const setTaskAsCompleted = id => {
    setCompletedTasks({ ...completedTasks, [id]: id });
  };

  const startNavigation = () => {
    setIsEnabled(true);
    const taskCompanny = getFieldByLogicRole(selectedTask, 'TASK__COMPANY');
    let url = companyUrl(taskCompanny?.referencedBobject);

    if (isSalesPage(pathname)) {
      const taskOpportunity = getFieldByLogicRole(selectedTask, 'TASK__OPPORTUNITY');
      url = opportunityUrl(
        taskCompanny.referencedBobject?.id.objectId,
        taskOpportunity.referencedBobject?.id.objectId,
      );
    }
    history.push(url);
  };

  return {
    addTasksToNavigate,
    areAllTasksCompleted,
    finishNavigation,
    firstTask,
    hasTasks: tasks.hasTasks,
    index,
    isFirst,
    isLast,
    isTaskCompleted,
    lastTask,
    loadTasks,
    loading: tasks.loading,
    nextTask,
    previousTask,
    selectedTask,
    setIsEnabled,
    setTaskAsCompleted,
    setTasks,
    shouldShowNavigation: isEnabled,
    startNavigation,
    tasks: tasks.collection,
  };
};
