import React, { useEffect } from 'react';
import { importActions } from '../../actions/dictionary/import';
import { importHistoryActions } from './stateManagement/actions';
import { useImportHistoryContext, ImportHistoryContextProvider } from './stateManagement/context';
import { searchRestApi } from './stateManagement/service';
import ImportHistory from './importHistory.view';
import { withWrappers } from '../../misc/utils';
import withContextProvider from '../withContextProvider';
import { useEntity } from '../../hooks/entities/useEntity';
import { useBloobirdsApiStateContext } from '@bloobirds-it/bloobirds-platform-react-api-library';
import debounce from 'lodash/debounce';

const ImportHistoryContainer = ({ history, showNewImport, newImportVisibility }) => {
  const {
    dispatch,
    state: { importsUpdated, imports, page, pageSize },
  } = useImportHistoryContext();

  const bobjectTypes = useEntity('bobjectTypes');
  const users = useEntity('users');
  const { webApi } = useBloobirdsApiStateContext();

  useEffect(() => {
    if (imports && bobjectTypes && users && !importsUpdated) {
      dispatch({
        type: importHistoryActions.IMPORT_HISTORY_TABLE_BUILD_IMPORTS,
        users,
        bobjectTypes,
      });
    }
  }, [imports, bobjectTypes, users, importsUpdated]);

  useEffect(() => {
    searchRestApi(dispatch, importHistoryActions.IMPORT_HISTORY_FETCH_IMPORTS);
  }, [newImportVisibility]);

  const handleSearch = debounce(textQuery => {
    searchRestApi(
      dispatch,
      importHistoryActions.IMPORT_HISTORY_FETCH_IMPORTS,
      page,
      pageSize,
      textQuery,
    );
  }, 500);

  const changePage = p => {
    searchRestApi(dispatch, importHistoryActions.IMPORT_HISTORY_FETCH_IMPORTS, p);
    dispatch({ type: importHistoryActions.IMPORT_HISTORY_TABLE_UPDATE_PAGE, payload: p });
  };
  const changePageRow = (value, p) => {
    searchRestApi(dispatch, importHistoryActions.IMPORT_HISTORY_FETCH_IMPORTS, p, value);
    dispatch({ type: importHistoryActions.IMPORT_HISTORY_TABLE_UPDATE_PAGE, payload: 0 });
    dispatch({
      type: importHistoryActions.IMPORT_HISTORY_TABLE_UPDATE_PAGE_SIZE,
      payload: value,
    });
  };

  const stopImport = importId => {
    webApi.request({
      url: `/service/import/history/stopImport/${importId}`,
      method: 'GET',
    });
  };

  return (
    <ImportHistory
      history={history}
      showNewImport={showNewImport}
      handleSearch={handleSearch}
      changePage={changePage}
      changePageRow={changePageRow}
      handleStopImport={stopImport}
    />
  );
};

const mapStateToProps = state => ({
  newImportVisibility: state.components.importHistory.newImportVisibility,
});

const mapDispatchToProps = dispatch => ({
  showNewImport: () =>
    dispatch({ type: importActions.NEW_IMPORT_VISIBILITY_CHANGE, visibility: true }),
});

export default withWrappers({
  router: true,
  mapStateToProps,
  mapDispatchToProps,
})(withContextProvider(ImportHistoryContextProvider, ImportHistoryContainer));
