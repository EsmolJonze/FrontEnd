import isEqual from 'lodash/isEqual';

const defaultFilters = filters =>
  Object.values(filters).every(filter => isEqual(filter.value, filter.defaultValue));

const emptyLists = lists => lists.every(list => list.numElements === 0);

const getGroupState = (state, showList) => {
  let lists = Object.entries(state.lists)
    .map(([name, value]) => ({ name, ...value }))
    .filter(({ name }) => showList(name, state.lists, state.filters));

  if (lists.some(list => list.isLoaded === false)) {
    return 'lists';
  }

  if (emptyLists(lists) && !defaultFilters(state.filters)) {
    return 'clean';
  }

  lists = lists.filter(list => list.numElements !== 0);

  if (lists.length === 1 && lists[0].name === 'completed') {
    return 'empty';
  }

  if (lists.length === 0) {
    return 'empty';
  }

  return 'lists';
};

export default getGroupState;
