import React, { useCallback, useMemo } from 'react';
import { TableBody } from './table/layout/tableBody.view';
import { useTableContext } from './context/bobjectTable.context';
import { addQueryParamsFromTypes } from './context/bobjectTable.utils';
import { bobjectTableActions } from './context/bobjectTable.types';
import { SubscriptionHooks } from '@bloobirds-it/bloobirds-platform-react-api-library';
import { injectReferencesSearchProcess, preProcessSearchRequest } from '../../misc/api/bobject';
import { useEntity } from '../../hooks/entities/useEntity';
import { useBobjectTable } from '../../hooks';
import { SkeletonTableBody } from './bobjectTableSkeleton/skeletonTable.view';

const TableBodyContainer = props => {
  const {
    bobjectFields,
    actionsRow,
    bobjectType,
    bobjects,
    onLoaded,
    onHasError,
    searchQuery,
  } = props;

  SubscriptionHooks.useBobjectSubscription(
    bobjectType.name,
    searchQuery,
    response => {
      injectReferencesSearchProcess(response);
      onLoaded(response);
    },
    () => onHasError(true),
  );

  return (
    <TableBody
      bobjects={bobjects}
      bobjectFields={bobjectFields}
      actionsRow={actionsRow}
      bobjectType={bobjectType}
      rowClick={props.rowClick}
    />
  );
};

const Wrapper = props => {
  const {
    bobjectFields,
    actionsRow,
    bobjectType,
    onHasNoContent = () => {},
    onHasContent = () => {},
    onHasError,
  } = props;
  const { dispatch, state } = useTableContext();
  const { bobjects } = state;

  const entityBobjectFields = useEntity('bobjectFields');
  const bobjectTypes = useEntity('bobjectTypes');
  const fieldTypes = useEntity('fieldTypes');

  const hasFields = fieldTypes !== undefined;
  const { query, sort, page, pageSize, direction, setPage } = useBobjectTable();

  const onLoaded = useCallback(payload => {
    dispatch({ type: bobjectTableActions.BOBJECT_TABLE_LOADED, payload });
    if (payload.totalMatching === 0) {
      onHasNoContent();
    }
    if (payload.totalMatching > 0) {
      onHasContent();
    }
    if (payload.totalMatching < page * pageSize) {
      setPage(Math.floor(payload.totalMatching / pageSize));
    }
  }, [onHasNoContent, onHasContent, dispatch, page, pageSize]);

  const searchQuery = useMemo(
    () =>
      preProcessSearchRequest({
        query: addQueryParamsFromTypes(
          query,
          bobjectType,
          entityBobjectFields,
          bobjectTypes,
          fieldTypes,
        ),
        sort: sort ? [{ field: sort, direction }] : [],
        formFields: true,
        page,
        pageSize,
        injectReferences: true,
      }),
    [
      bobjectType,
      query,
      sort,
      page,
      pageSize,
      direction,
      bobjectTypes,
      hasFields,
      entityBobjectFields,
      fieldTypes,
    ],
  );

  return searchQuery ? (
    <TableBodyContainer
      bobjectFields={bobjectFields}
      actionsRow={actionsRow}
      bobjectType={bobjectType}
      bobjects={bobjects}
      onLoaded={onLoaded}
      onHasError={onHasError}
      searchQuery={searchQuery}
    />
  ) : (
    <SkeletonTableBody bobjectFields={[...new Array(10).keys()]} />
  );
};

export default Wrapper;
