import { useTableContext } from '../context/bobjectTable.context';
import { queryToParams } from '../../../misc/urlQueryUtils';
import React, { useCallback } from 'react';
import { retrieveCustomViewFactory, viewResponseSuccessFactory } from '../bobjectTable.utils';
import {
  ALLOCATE_QC_TASK_FILTERS_CLEAN,
  BOBJECT_TABLE_UPDATE_PARTIAL_STATE,
} from '../../../actions/dictionary';
import { withWrappers } from '../../../misc/utils';
import EmptyTableView from './emptyTable.view';

const EmptyTableContainer = ({
  description,
  buttonText,
  history,
  requestedQuery,
  type,
  isError,
  location,
  cleanFilters,
  cleanStateQuery,
  resetContactTaskSearchQuery,
}) => {
  const { state, dispatch, setQuery } = useTableContext();
  const { viewModified: stateViewModified, query: stateQuery, search, viewType } = state;
  const { viewModified: urlViewModified, filters } = queryToParams(location.search);
  const viewModified = stateViewModified || Boolean(urlViewModified);

  const handleCleanFilters = useCallback(() => {
    if (viewType) {
      retrieveCustomViewFactory(payload => {
        history.push({ search: '' });
        cleanStateQuery();
        dispatch({ type: BOBJECT_TABLE_UPDATE_PARTIAL_STATE, search: undefined });
        viewResponseSuccessFactory(dispatch)(payload);
      })(viewType);
    } else {
      setQuery({});
      cleanFilters();
      resetContactTaskSearchQuery();
    }
  }, []);

  return (
    <EmptyTableView
      requestedQuery={requestedQuery}
      search={search}
      type={type}
      isError={isError}
      buttonText={buttonText}
      description={description}
      filters={filters}
      handleCleanFilters={handleCleanFilters}
      stateQuery={stateQuery}
      viewModified={viewModified}
    />
  );
};

const mapDispatchToProps = dispatch => ({
  cleanFilters: () => dispatch({ type: ALLOCATE_QC_TASK_FILTERS_CLEAN }),
});

export default withWrappers({
  mapDispatchToProps,
  router: true,
})(EmptyTableContainer);
