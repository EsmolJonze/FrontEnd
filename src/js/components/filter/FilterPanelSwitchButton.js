import React, { useState } from 'react';
import { ALLOCATE_QC_TASK_FILTERS_ON } from '../../actions/dictionary';
import { withWrappers } from '../../misc/utils';
import { IconButton, Label } from '@bloobirds-it/bloobirds-platform-component-library';
import { cssVariables } from '../../style/variables';
import { ViewEditionContextProvider } from '../bobjectTable/viewEditionModal/viewEdition.context';
import ViewEditionModal from '../bobjectTable/viewEditionModal';
import { useQueryStringState } from '../../hooks';

const style = {
  root: {
    height: 24,
    fontSize: 13,
    padding: '2px 8px',
    '& p': {
      margin: '0 8px',
      height: 18,
      color: cssVariables.color.gunmetal.natural,
    },
  },
  icon: {
    fontSize: 12,
    '& > * ': {
      fill: cssVariables.color.gunmetal.natural,
    },
  },
};

const FilterPanelSwitchButton = ({ query, bobjectType, delegateActionOnAccept }) => {
  const [showViewEditionModal, openViewEditionModal] = useState(false);
  const [stateQuery, setQuery] = useQueryStringState(
    'query',
    query,
    string => (string ? JSON.parse(decodeURI(string.replace(/&/g, '##AND##'))) : string),
    q => JSON.stringify(q),
  );

  const handleSetQuery = newQuery => {
    setQuery(newQuery);
    delegateActionOnAccept(newQuery);
  };

  return (
    <>
      <IconButton name="filter" onClick={() => openViewEditionModal(true)} color="softPeanut">
        <span style={{ marginRight: '5px' }}>Filters</span>
        <Label size="small" color="bloobirds">
          {Object.keys(stateQuery).length}
        </Label>
      </IconButton>
      {showViewEditionModal && (
        <ViewEditionContextProvider
          query={stateQuery}
          setQuery={handleSetQuery}
          bobjectType={bobjectType}
        >
          <ViewEditionModal
            modalType={'filter'}
            handleCloseModal={() => openViewEditionModal(false)}
          />
        </ViewEditionContextProvider>
      )}
    </>
  );
};

const mapStateToProps = state => ({
  filtersDisplayed: state.components.filter.filtersDisplayed,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  filtersDisplaySwitch: () =>
    dispatch({
      type: ALLOCATE_QC_TASK_FILTERS_ON,
      bobjectType: ownProps.bobjectType,
      query: ownProps.query || {},
      sort: ownProps.sort,
      delegateActionOnAccept: ownProps.delegateActionOnAccept,
    }),
});

export default withWrappers({ style, mapStateToProps, mapDispatchToProps })(
  FilterPanelSwitchButton,
);
