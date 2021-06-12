import React, { useEffect, useMemo } from 'react';
import { BobjectTableView as BobjectTable } from '../bobjectTable.view';
import {
  getShownBobjectFields,
  getColumnsOrderedByListOrdering,
} from '../context/bobjectTable.utils';
import { useEntity } from '../../../hooks/entities/useEntity';
import { useBobjectTable } from '../../../hooks';
import { SkeletonTableView } from '../bobjectTableSkeleton/skeletonTable.view';

const parseColumnsOrderBasicBobjectViews = (columns, bobjectFields) =>
  getColumnsOrderedByListOrdering(columns, bobjectFields);

const ConnectedBobjectTable = ({
  actionsRow,
  bobjectType,
  emptyContentElement,
  errorContentElement,
  rowClick,
  viewActions,
  showRightPanelActions,
  requestedQuery,
}) => {
  const bobjectFields = useEntity('bobjectFields');
  const bobjectTypeEntity = useEntity('bobjectTypes')?.findBy('name')(bobjectType);

  const {
    columns,
    initialStateColumns,
    initialStateQuery,
    isEmptyFetch,
    query,
    setColumns,
    setInitialStateColumns,
    setInitialStateQuery,
    view: { id: viewId },
    viewType,
  } = useBobjectTable();

  const defaultSetOfColumns = useMemo(
    () =>
      parseColumnsOrderBasicBobjectViews(
        bobjectFields
          ?.all()
          .filter(
            field =>
              field.bobjectType === bobjectTypeEntity?.id &&
              field.enabled &&
              field.tableLayoutDefault,
          )
          .map(field => field.id),
        bobjectFields,
      ),
    [bobjectTypeEntity, bobjectFields],
  );

  useEffect(() => {
    if (!viewType && !viewId) {
      if (!columns) {
        setColumns(defaultSetOfColumns);
        setInitialStateColumns(defaultSetOfColumns);
      } else if (!initialStateColumns) {
        setInitialStateColumns(defaultSetOfColumns);
      }
    }
  }, [columns, initialStateColumns]);

  useEffect(() => {
    if (!viewType && !viewId && !initialStateQuery) {
      setInitialStateQuery(requestedQuery || {});
    }
  }, [query, initialStateQuery]);

  const shownBobjectFields = getShownBobjectFields(columns, bobjectFields);

  if ((shownBobjectFields || isEmptyFetch) && bobjectTypeEntity) {
    return (
      <BobjectTable
        actionsRow={actionsRow}
        bobjectFields={shownBobjectFields}
        bobjectType={bobjectTypeEntity}
        emptyContentElement={emptyContentElement}
        errorContentElement={errorContentElement}
        rowClick={rowClick}
        viewActions={viewActions}
        showRightPanelActions={showRightPanelActions}
      />
    );
  }
  return <SkeletonTableView />;
};

export default ConnectedBobjectTable;
