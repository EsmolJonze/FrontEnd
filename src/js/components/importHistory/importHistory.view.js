import React from 'react';
import { Button, Text } from '@bloobirds-it/bloobirds-platform-component-library';
import Table from './table/importHistoryTable.view';
import { useImportHistoryContext } from './stateManagement/context';
import { PaginationRowSelector } from '../paginationCustom';
import SearchBar from '../searchBar';
import EmptyImports from './emptyImports';
import style from './importHistory.module.css';
import { usePreviousUrl, useRouter } from '../../hooks';
import { APP_CL_COMPANIES, APP_CL_IMPORT } from '../../app/_constants/routes';

const ImportHistory = ({
  showNewImport,
  handleSearch,
  changePage,
  changePageRow,
  handleStopImport,
}) => {
  const { history } = useRouter();
  const { getPreviousUrl } = usePreviousUrl();
  const {
    state: { totalElements, page, pageSize, imports },
  } = useImportHistoryContext();

  const counter = `${imports?.length ? imports.length : 0} Action${imports?.length > 1 ? 's' : ''}`;
  const handleClick = () => {
    const previousUrl = getPreviousUrl();
    if (previousUrl !== '' && previousUrl !== APP_CL_IMPORT) {
      history.goBack();
    } else {
      history.push(APP_CL_COMPANIES);
    }
  };
  return (
    <>
      <div>
        <div className={style._container}>
          <div className={style._header_wrapper}>
            <div className={style._backToList__container}>
              <Button onClick={handleClick} variant="clear" color="bloobirds" iconLeft="arrowLeft">
                Back
              </Button>
            </div>
            <div className={style._header_container}>
              <div className={style._header_panel_container}>
                <Text color="peanut" size="xl" htmlTag="h2">
                  History of bulk actions
                </Text>
                <div className={style._counter__container}>{counter}</div>
              </div>
              <div className={style._header_panel_container}>
                <div className={style._search_bar_container}>
                  <SearchBar handleChange={handleSearch} placeholder="Search by import name" />
                </div>
                <div>
                  <Button
                    iconLeft={'add'}
                    onClick={() => {
                      showNewImport();
                      history.push(APP_CL_IMPORT);
                    }}
                    expand
                  >
                    BULK ACTION
                  </Button>
                </div>
              </div>
            </div>
            {imports?.length ? <Table handleStopImport={handleStopImport} /> : <EmptyImports />}
          </div>
        </div>
        <PaginationRowSelector
          changePage={(e, p) => {
            changePage(p);
          }}
          changePageRow={e => {
            changePageRow(e.target.value);
          }}
          elementsTotal={totalElements}
          elementsPage={page}
          elementsPageSize={pageSize}
        />
      </div>
    </>
  );
};

export default ImportHistory;
