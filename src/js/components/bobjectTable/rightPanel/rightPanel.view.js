import React, { useState } from 'react';
import ViewEditionModal from '../viewEditionModal';
import { IconButton, Text } from '@bloobirds-it/bloobirds-platform-component-library';
import SearchFilter from './searchFilter';
import ConnectedAddButton from './addButton';
import { ViewEditionContextProvider } from '../viewEditionModal/viewEdition.context';
import ImportButton from './importButton';
import styles from './rightPanel.module.css';
import { useBobjectTable, useMediaQuery } from '../../../hooks';

const BOBJECT_WITH_IMPORT = ['Lead', 'Company', 'Activity', 'Opportunity'];
const BOBJECT_WITH_SEARCH = ['Lead', 'Company', 'Opportunity'];
const BOBJECT_WITH_ADD = ['Lead', 'Company'];

const RightPanelView = ({ bobjectType, showRightPanelActions = true }) => {
  const [showViewEditionModal, openViewEditionModal] = useState(false);
  const [modalType, setModalType] = useState();
  const { isSmallDesktop } = useMediaQuery();
  const bobjectTypeName = bobjectType?.name;
  const { query, setQuery, columns, setColumns } = useBobjectTable();

  return (
    <React.Fragment>
      <div className={styles._container}>
        <IconButton
          name="columns"
          color="softPeanut"
          dataTest="columnButton"
          onClick={() => {
            openViewEditionModal(true);
            setModalType('column');
          }}
        >
          {!isSmallDesktop && (
            <Text size="s" color="peanut">
              Columns
            </Text>
          )}
        </IconButton>
        <div className={styles._import_button_container}>
          <IconButton
            name="filter"
            color="softPeanut"
            dataTest="filterButton"
            onClick={() => {
              setModalType('filter');
              openViewEditionModal(true);
            }}
          >
            {!isSmallDesktop && (
              <Text size="s" color="peanut">
                Filters
              </Text>
            )}
          </IconButton>
        </div>
        {BOBJECT_WITH_SEARCH.includes(bobjectTypeName) && (
          <SearchFilter bobjectType={bobjectType} />
        )}
        {showRightPanelActions && BOBJECT_WITH_IMPORT.includes(bobjectTypeName) && <ImportButton />}
        {showRightPanelActions && BOBJECT_WITH_ADD.includes(bobjectTypeName) && (
          <ConnectedAddButton bobjectType={bobjectType} />
        )}
      </div>

      {showViewEditionModal && (
        <ViewEditionContextProvider
          query={query}
          setQuery={setQuery}
          columns={columns}
          setColumns={setColumns}
          bobjectType={bobjectTypeName}
        >
          <ViewEditionModal
            modalType={modalType}
            handleCloseModal={() => openViewEditionModal(false)}
          />
        </ViewEditionContextProvider>
      )}
    </React.Fragment>
  );
};

export default RightPanelView;
