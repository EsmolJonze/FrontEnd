import { withWrappers } from '../../misc/utils';
import React, { useEffect, useState } from 'react';
import { ConnectedBobjectTable } from './connectedBobjectTable';
import { contextWrapper } from './context/bobjectTable.context.provider';
import { useBobjectTable, useForceRerender, useRouter } from '../../hooks';
import { bobjectTableContextWrapper } from '../../hooks/tables/useBobjectTable';
import { useEntity } from '../../hooks/entities/useEntity';
import { SkeletonTableView } from './bobjectTableSkeleton/skeletonTable.view';

const BobjectTableContainer = props => {
  const {
    retrieveInboundView,
    viewType,
    customView,
    location,
    resetStateQuery,
    setViewAsSelected,
    bobjectType,
    ...remainingProps
  } = props;

  const { requestedQuery } = remainingProps;
  const [entitiesReady, setEntitiesReady] = useState(false);

  const entityBobjectFields = useEntity('bobjectFields');
  const bobjectTypes = useEntity('bobjectTypes');
  const fieldTypes = useEntity('fieldTypes');

  const {
    configureAsRawBobjectTable,
    isTableLoaded,
    setBobjectType,
    setViewType,
    updateQueryIfNeeded,
    view: { id },
  } = useBobjectTable();

  useEffect(() => {
    if (entityBobjectFields && bobjectTypes && fieldTypes) {
      setEntitiesReady(true);
    }
  }, [entityBobjectFields, fieldTypes, bobjectTypes]);

  useEffect(() => {
    if (bobjectType) {
      setBobjectType(bobjectType);
    }
  }, [bobjectType]);

  useEffect(() => {
    if (viewType && !id) {
      setViewType(viewType);
    } else if (!id) {
      configureAsRawBobjectTable();
    }
  }, [viewType, id]);

  useEffect(() => {
    if (requestedQuery && !id) {
      updateQueryIfNeeded(requestedQuery);
    }
  }, [requestedQuery]);

  return isTableLoaded && entitiesReady ? (
    <ConnectedBobjectTable bobjectType={bobjectType} {...remainingProps} />
  ) : (
    <SkeletonTableView />
  );
};

const WrappedBobjectTable = withWrappers({ router: true })(
  contextWrapper(bobjectTableContextWrapper(BobjectTableContainer)),
);

const BobjectTable = props => {
  const { location } = useRouter();
  const { forceRerender, id } = useForceRerender();
  useEffect(() => {
    if (location.search === '') {
      forceRerender();
    }
  }, [location.search]);
  return <WrappedBobjectTable {...props} key={id} />;
};

export default BobjectTable;
