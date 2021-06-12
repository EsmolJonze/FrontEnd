import React, { Fragment, useEffect, useState } from 'react';
import styles from './viewTable.module.css';
import { Table } from '@material-ui/core';
import { request } from '../../misc/api/utils';
import { ApiHosts } from '../../misc/api/ApiHosts';
import TagsFilter from './tagsFilter/tagsFilter';
import TableHead from './ViewTableHead';
import ViewTableBody from './ViewTableBody';
import { Button, Text } from '@bloobirds-it/bloobirds-platform-component-library';
import bobjectTableStyle from '../bobjectTable/bobjectTable.module.css';
import { PaginationRowSelector } from '../paginationCustom';
import { useViewTableContext } from './context/viewTable.context';
import Fade from '@material-ui/core/Fade';
import SearchBar from '../searchBar';
import { viewTableActions } from './context/viewTable.types';
import { CreateListModal } from '../bobjectTable/createListModal';
import { useDocumentTitle } from '../../hooks';

const columns = [
  {
    key: 'name',
    header: 'list name',
  },
  {
    key: 'tags',
    header: 'tags',
  },
  {
    key: 'createdBy',
    header: 'created by',
  },
  {
    key: 'creationDateTime',
    header: 'creation datetime',
  },
  {
    key: 'updateDateTime',
    header: 'update datetime',
  },
  {
    key: 'visibility',
    header: 'visibility',
  },
];

const ViewTable = () => {
  const { state, dispatch } = useViewTableContext();
  const [timerId, setTimerId] = React.useState();
  const [searchValue, setSearchValue] = React.useState('');
  const [showCreateListModal, openCreateListModal] = useState(false);
  useDocumentTitle('Saved Lists');

  const { emptyContent, page, pageSize, totalElements, elements, tags, textQuery, reload } = state;

  useEffect(() => {
    let tagReq = tags
      ? Object.values(tags).reduce((acc, tag) => {
          if (tag.used) acc.push(tag.id);
          return acc;
        }, [])
      : null;
    if (tagReq && tagReq.length === 0) {
      tagReq = null;
    }
    request({
      host: ApiHosts.webService.host(),
      url: '/service/view/bobjectview/tags',
      requestParams: {
        tags: tagReq,
        textSearch: textQuery,
        page,
        pageSize,
      },
      method: 'GET',
      failureAction: () => {
        console.info('failed');
      },
    }).then(response => {
      dispatch({
        type: viewTableActions.VIEW_TABLE_ELEMENTS_LOADED,
        payload: response.views.map(r => {
          r.bobjectView.tags = r.bobjectView.tags.map(tag => tag.value);
          return r;
        }),
      });
      dispatch({
        type: viewTableActions.VIEW_TABLE_UPDATE_TOTAL_ELEMENTS,
        payload: response.totalElements,
      });
    });
  }, [page, pageSize, textQuery, reload]);

  useEffect(() => {
    request({
      host: ApiHosts.webService.host(),
      url: '/service/view/bobjectview/userTags',
      method: 'GET',
      failureAction: () => {
        console.info('failed');
      },
    }).then(r => {
      dispatch({
        type: viewTableActions.VIEW_TABLE_SET_TAGS,
        payload: r
          .map(tag => ({ value: tag.value, id: tag.id, used: false }))
          .reduce((acc, tag) => {
            acc.NO_TAG = { value: 'untagged', id: 'NO_TAG', used: false };
            acc[tag.id] = tag;
            return acc;
          }, {}),
      });
    });
  }, []);

  const handleSearch = React.useCallback(value => {
    setSearchValue(value);

    if (timerId) {
      clearTimeout(timerId);
    }
    const thisTimerId = setTimeout(() => {
      dispatch({ type: viewTableActions.VIEW_TABLE_UPDATE_SEARCH_TEXT, payload: value });
      dispatch({ type: viewTableActions.VIEW_TABLE_UPDATE_TEXT_QUERY });
      dispatch({ type: viewTableActions.VIEW_TABLE_RELOAD_TRUE });
    }, 1000);
    setTimerId(thisTimerId);
  }, [setTimerId, timerId]);

  const content = (
    <div className={bobjectTableStyle._box}>
      <Table
        className={emptyContent ? bobjectTableStyle._tableNoDisplay : bobjectTableStyle._table}
      >
        <TableHead columns={columns} />
        <ViewTableBody elements={elements} columns={columns} />
      </Table>
    </div>
  );

  const EmptyContent = () => {
    const handleCleanFilters = () => {
      setSearchValue('');
      dispatch({ type: viewTableActions.VIEW_TABLE_CLEAN_FILTERS });
    };

    const tagsSelected = tags && Object.values(tags).filter(tag => tag.used).length > 0;
    const noResultsByQuery = tagsSelected || textQuery;

    return (
      <div className={styles._emptyContentRoot}>
        {noResultsByQuery ? (
          <React.Fragment>
            <div className={styles._emptyContentDescription}>
              <Text size="xl" htmlTag="h2" color="peanut">
                No lists were found to the current filters
              </Text>
            </div>
            <p className={styles._emptyContentSubDescription}>Try modifying your search criteria</p>
            <Button onClick={handleCleanFilters} variant="primary">
              Clear Filters
            </Button>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <h2 className={styles._emptyContentDescription}>No lists found</h2>
            <p className={styles._emptyContentSubDescription}>You don't have any lists here yet</p>
          </React.Fragment>
        )}
      </div>
    );
  };

  return (
    <React.Fragment>
      <div className={bobjectTableStyle._container}>
        <Fade in>
          <Fragment>
            <div className={styles._header}>
              <div className={bobjectTableStyle._viewTableSubHeader}>
                <div className={bobjectTableStyle._title_container}>
                  <span className={styles._title}>All saved lists</span>
                </div>
                <div className={bobjectTableStyle._hasActions}>
                  <div className={bobjectTableStyle._searchBar__container}>
                    <SearchBar handleChange={handleSearch} value={searchValue} />
                  </div>
                  <Button
                    variant="primary"
                    style={{ height: 40, width: 134 }}
                    onClick={() => openCreateListModal(true)}
                  >
                    Create List
                  </Button>
                </div>
              </div>
              <TagsFilter />
            </div>
            {!emptyContent ? content : <EmptyContent />}
          </Fragment>
        </Fade>
      </div>
      <PaginationRowSelector
        changePage={(e, p) => {
          dispatch({ type: viewTableActions.VIEW_TABLE_UPDATE_PAGE, payload: p });
        }}
        changePageRow={e => {
          dispatch({ type: viewTableActions.VIEW_TABLE_UPDATE_PAGE, payload: 0 });
          dispatch({ type: viewTableActions.VIEW_TABLE_UPDATE_PAGE_SIZE, payload: e.target.value });
        }}
        elementsTotal={totalElements}
        elementsPage={page}
        elementsPageSize={pageSize}
      />
      {showCreateListModal && (
        <CreateListModal handleCloseModal={() => openCreateListModal(false)} />
      )}
    </React.Fragment>
  );
};

export default ViewTable;
