import React, { Fragment, useEffect, useState, useRef } from 'react';
import { Table } from '@material-ui/core';
import RightPanelView from './rightPanel/rightPanel.view';
import ActionsPanel from './actionsPanel';
import TableBodyContainer from './tableBody.container';
import { PaginationRowSelector } from '../paginationCustom';
import { withWrappers } from '../../misc/utils';
import { useTableContext } from './context/bobjectTable.context';
import TableHead from './tableHead/TableHead';
import { saveEditActions } from './actionsPanel/saveEditButton/saveEditButton.types';
import styles from './bobjectTable.module.css';
import { getPluralBobjectName } from '../../utils/bobjects.utils';
import { useBobjectTable, useMediaQuery } from '../../hooks';
import TextWithEllipsis from './textWithEllipsis';

const BobjectTable = ({
  actionsRow,
  bobjectFields,
  bobjectType,
  emptyContentElement,
  errorContentElement,
  rowClick,
  showRightPanelActions,
  viewActions,
}) => {
  const {
    state: { total = 0 },
  } = useTableContext();

  const [contentEmpty, setContentEmpty] = useState(false);
  const [isContentError, setIsContentError] = useState(false);
  const {
    isEmptyFetch,
    query,
    sort,
    page,
    pageSize,
    direction,
    setPage,
    setPageSize,
    view: { id, name },
    viewType,
    editionMode,
  } = useBobjectTable();

  useEffect(() => {
    setContentEmpty(false);
  }, [query, page, pageSize]);

  const setContentIsEmpty = React.useCallback(() => setContentEmpty(true), [setContentEmpty]);
  const setContentIsNotEmpty = React.useCallback(() => setContentEmpty(false), [setContentEmpty]);
  const { isSmallDesktop } = useMediaQuery();

  const entityType = viewType === 'MEETINGS' ? 'Meeting' : bobjectType.name;
  const titleRef = useRef(null);

  return (
    <React.Fragment>
      <div className={styles._container} data-intercom="bobject-table">
        <Fragment>
          <div className={styles._header}>
            <div className={styles._header_left}>
              <TextWithEllipsis
                element={
                  <h2 className={styles._title} ref={titleRef}>
                    {editionMode === saveEditActions.SAVE && (!id || viewType === 'MEETINGS')
                      ? `New ${(name || getPluralBobjectName(entityType, 2)).toLowerCase()} list`
                      : name || getPluralBobjectName(entityType, 2)}
                  </h2>
                }
              />
              {!isSmallDesktop && (
                <div className={styles._counter__container}>
                  {`${total >= 10000 ? '+ 10000' : total} 
                    ${getPluralBobjectName(entityType, total).toLowerCase()}`}
                </div>
              )}
              <ActionsPanel editionMode={editionMode} viewActions={viewActions} />
            </div>
            <div className={styles._header_right}>
              <RightPanelView
                bobjectType={bobjectType}
                showRightPanelActions={showRightPanelActions}
              />
            </div>
          </div>
          <>
            <div
              className={
                contentEmpty || isContentError || isEmptyFetch ? styles._noDisplay : styles._box
              }
            >
              <Table className={styles._table}>
                <TableHead bobjectType={bobjectType} bobjectFields={bobjectFields} />
                <TableBodyContainer
                  bobjectFields={bobjectFields}
                  actionsRow={actionsRow}
                  bobjectType={bobjectType}
                  onHasNoContent={setContentIsEmpty}
                  onHasContent={setContentIsNotEmpty}
                  onHasError={setIsContentError}
                  query={query}
                  sort={sort}
                  page={page}
                  direction={direction}
                  pageSize={pageSize}
                  rowClick={rowClick}
                />
              </Table>
            </div>
            {contentEmpty && emptyContentElement}
            {(isContentError || isEmptyFetch) && errorContentElement}
          </>
        </Fragment>
      </div>
      <PaginationRowSelector
        changePage={(e, paginationPage) => {
          setPage(paginationPage);
        }}
        changePageRow={({ target: { value: targetValue } }) => {
          setPage(0);
          setPageSize(targetValue);
        }}
        elementsTotal={total}
        elementsPage={page}
        elementsPageSize={pageSize}
      />
    </React.Fragment>
  );
};

export const BobjectTableView = withWrappers({ router: true })(BobjectTable);
