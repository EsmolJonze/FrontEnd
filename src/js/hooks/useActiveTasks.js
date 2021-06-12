import { atomFamily, useRecoilState } from 'recoil';
import { BobjectApi } from '../misc/api/bobject';

const activeTasksAtom = atomFamily({
  key: 'activeTasksAtom',
  default: {
    data: undefined,
    loaded: false,
    isFetching: false,
  },
});

const searchTask = query =>
  BobjectApi.request()
    .Task()
    .search({
      injectReferences: false,
      query,
      formFields: true,
      pageSize: 10,
    });

export const useActiveTasks = family => {
  const [tasksState, setTasksState] = useRecoilState(activeTasksAtom(family));

  const searchTaskByQuery = query => {
    if (!tasksState.isFetching) {
      setTasksState({ ...tasksState, isFetching: true, loaded: false });
      searchTask(query).then(response => {
        setTasksState({
          data: response.contents,
          loaded: true,
          isFetching: false,
        });
      });
    }
  };

  return {
    isFetching: tasksState.isFetching,
    isLoaded: tasksState.loaded,
    tasks: tasksState.data,
    searchTaskByQuery,
  };
};
