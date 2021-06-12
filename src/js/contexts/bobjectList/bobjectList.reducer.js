import prospectActions from './bobjectList.types';

const { SET_LIST, SET_FILTER, CLEAN_FILTERS, NEXT_PAGE } = prospectActions;

export default (state, action) => {
  const newState = { ...state };

  switch (action.type) {
    case SET_LIST:
      if (action?.payload?.contents) {
        newState.lists[action.listName] = {
          list: state.lists[action.listName].loadingPage
            ? [...state.lists[action.listName].list, ...action.payload.contents]
            : action.payload.contents,
          numElements: action.payload?.totalMatching,
          date: action?.date,
          page: action?.page,
          isLoaded: true,
          loadingPage: false,
        };

        newState.emptyLists = state.emptyLists && action?.payload?.totalMatching === 0;
      }

      break;
    case SET_FILTER:
      newState.filters = {
        ...state.filters,
      };

      newState.filters[action.filterName] = {
        ...state.filters[action.filterName],
        value: action.payload,
      };

      Object.keys(newState.lists).forEach(
        key => (newState.lists[key] = { ...newState.lists[key], page: undefined }),
      );
      break;
    case CLEAN_FILTERS:
      newState.filters = { ...state.filters };

      Object.keys(state.filters).forEach(key => {
        newState.filters[key].value = state.filters[key].defaultValue;
      });

      Object.keys(newState.lists).forEach(
        key =>
          (newState.lists[key] = {
            ...newState.lists[key],
            isLoaded: false,
            page: undefined,
          }),
      );
      break;
    case NEXT_PAGE:
      newState.lists[action.listName].page = state.lists[action.listName].page + 1;
      newState.lists[action.listName].loadingPage = true;
      break;
    default:
      throw new Error(`Action type ${action.type} not supported`);
  }

  return newState;
};
