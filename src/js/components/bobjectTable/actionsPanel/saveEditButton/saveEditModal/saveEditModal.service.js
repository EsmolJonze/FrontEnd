import { ServiceApi } from '../../../../../misc/api/service';

const getSelectedColumns = columns =>
  columns.map(column => ({
    bobjectFieldId: column,
  }));

const getFilters = filters => {
  if (!filters) {
    return undefined;
  }
  return Object.getOwnPropertyNames(filters).map(key => {
    let values = filters[key];
    if (!Array.isArray(values) && values !== undefined && values !== null) {
      values = [values];
    }
    return {
      bobjectFieldId: key,
      values,
    };
  });
};

const getTags = tags => tags.map(tag => tag.value);

const makeBody = ({
  id,
  bobjectType,
  filter,
  columns,
  viewName,
  sort,
  viewVisibility,
  tags,
  sortDirection,
}) => ({
  id,
  type: bobjectType,
  filters: getFilters(filter),
  columns: getSelectedColumns(columns),
  name: viewName,
  sort,
  visibility: viewVisibility,
  tags: getTags(tags),
  sortDirection,
});

export const saveView = ({
  bobjectType,
  columns,
  filter,
  goToView,
  handleCloseModal,
  loadViewFromPayload,
  sort,
  sortDirection,
  tags,
  viewName,
  viewVisibility,
}) =>
  ServiceApi.request({
    url: '/service/view/bobjectview',
    method: 'POST',
    body: makeBody({
      bobjectType,
      columns,
      filter,
      sort,
      tags,
      viewName,
      viewVisibility,
      sortDirection,
    }),
  }).then(payload => {
    handleCloseModal();
    loadViewFromPayload(payload);
    goToView(payload.bobjectView.id);
  });

export const editView = ({
  bobjectType,
  columns,
  filter,
  handleCloseModal,
  loadViewFromPayload,
  sort,
  sortDirection,
  tags,
  id,
  viewName,
  viewVisibility,
  goToView,
}) =>
  ServiceApi.request({
    url: '/service/view/bobjectview',
    method: 'POST',
    body: makeBody({
      bobjectType,
      columns,
      filter,
      sort,
      tags,
      id,
      viewName,
      viewVisibility,
      sortDirection,
    }),
  }).then(payload => {
    handleCloseModal();
    loadViewFromPayload(payload);
    goToView(payload.bobjectView.id);
  });

export const deleteView = ({ id, history, handleCloseModal }) => {
  ServiceApi.request({
    url: `/service/view/bobjectview/${id}`,
    method: 'DELETE',
  }).then(() => {
    handleCloseModal();
    history.push('/app/cl/lists');
  });
};
