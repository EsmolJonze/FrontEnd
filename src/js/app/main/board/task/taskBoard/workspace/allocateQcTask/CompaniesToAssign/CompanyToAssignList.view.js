import React from 'react';
import { SubTitle } from '../../../../../../../../components/titles';
import { Button, Checkbox, Fade, FormControlLabel, withStyles } from '@material-ui/core';
import { SubscriptionHooks } from '@bloobirds-it/bloobirds-platform-react-api-library';
import CircularProgress from '@material-ui/core/CircularProgress';
import { CompanyToAssign } from './CompanyToAssign';
import { cssVariables } from '../../../../../../../../style/variables';
import classNames from 'clsx';
import { FilterPanelSwitchButton } from '../../../../../../../../components/filter';
import { PaginationRowSelector } from '../../../../../../../../components/paginationCustom';
import PropTypes from 'prop-types';
import { Icon } from '@bloobirds-it/bloobirds-platform-component-library';

const style = {
  companyToAssignList: {
    flexGrow: '1',
    position: 'relative',
    overflowY: 'scroll',
    height: 'calc(100vh - 267px)',
  },
  companyToAssignListOutOfFocus: {
    opacity: 0.32,
  },
  companyToAssignListTransition: {
    transition: 'opacity 200ms',
  },
  listHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '12px',
  },
  listHeaderLeft: {
    display: 'flex',
  },
  listHeaderRight: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paginationIndicator: {
    color: cssVariables.color.gunmetal.light,
    fontSize: '13px',
    margin: 'auto',
    fontWeight: 'normal',
    lineHeight: '1.23',
    marginRight: '10px',
  },
  deselect: {
    color: cssVariables.color.bloobirds.natural,
    '&:hover': {
      backgroundColor: cssVariables.color.bloobirds.veryLight,
    },
  },
  deselectIcon: {
    fontSize: '20px',
    margin: '-1px 4px 0 0',
  },
  checkBox: {
    color: cssVariables.color.bloobirds.light,
  },
};

const ListHeader = props => {
  const {
    classes,
    query,
    selectAllToggle,
    isSelectedAll,
    isAnySelected,
    dispatchFiltersApply,
    deselectCompanies,
    isAnyDragged,
    companiesPage,
    companiesInPage,
    companiesPageSize,
    companiesTotal,
  } = props;

  const start = companiesPage * companiesPageSize + 1;
  const end = start - 1 + companiesInPage;

  return (
    <div className={classes.listHeader}>
      <div className={classes.listHeaderLeft}>
        <FormControlLabel
          control={
            <Checkbox
              checked={isSelectedAll}
              onChange={selectAllToggle(!isSelectedAll)}
              color="primary"
              className={classes.checkBox}
            />
          }
          label="Select All"
        />
        <Fade in={isAnySelected && !isSelectedAll && !isAnyDragged}>
          <Button onClick={deselectCompanies} color={'secondary'} className={classes.deselect}>
            <div className={classes.deselectIcon}>
              <Icon name="undoRevert" />
            </div>
            deselect
          </Button>
        </Fade>
      </div>
      <div className={classes.listHeaderRight}>
        <span className={classes.paginationIndicator}>
          {start}-{end} of {companiesTotal}
        </span>
        <FilterPanelSwitchButton
          query={query}
          delegateActionOnAccept={dispatchFiltersApply}
          bobjectType="Company"
        />
      </div>
    </div>
  );
};

ListHeader.propTypes = {
  classes: PropTypes.object,
  companiesInPage: PropTypes.number,
  companiesPage: PropTypes.number,
  companiesPageSize: PropTypes.number,
  companiesTotal: PropTypes.number,
  deselectCompanies: PropTypes.func,
  dispatchFiltersApply: PropTypes.func,
  isAnyDragged: PropTypes.bool,
  isAnySelected: PropTypes.bool,
  isSelectedAll: PropTypes.bool,
  query: PropTypes.object,
  selectAllToggle: PropTypes.func,
};

const CompanyToAssignList = props => {
  const {
    areCompaniesLoaded,
    changePage,
    changePageRow,
    classes,
    companies,
    companiesInPage,
    companiesPage,
    companiesPageSize,
    companiesTotal,
    deselectCompanies,
    dispatchFiltersApply,
    filtersDisplayed,
    isAnyDragged,
    isAnySelected,
    isSelectedAll,
    onLoaded,
    query,
    searchQuery,
    selectAllToggle,
  } = props;
  SubscriptionHooks.useBobjectSubscription('Company', searchQuery, onLoaded);

  return (
    <div className={classes.companyToAssignList}>
      <SubTitle text="COMPANY BACKLOG" />
      {!areCompaniesLoaded || !companies ? (
        <CircularProgress />
      ) : (
        <React.Fragment>
          <ListHeader
            classes={classes}
            deselectCompanies={deselectCompanies}
            dispatchFiltersApply={dispatchFiltersApply}
            isAnyDragged={isAnyDragged}
            isAnySelected={isAnySelected}
            isSelectedAll={isSelectedAll}
            query={query}
            selectAllToggle={selectAllToggle}
            companiesPage={companiesPage}
            companiesInPage={companiesInPage}
            companiesPageSize={companiesPageSize}
            companiesTotal={companiesTotal}
          />
          {companies.length === 0 ? (
            <span> There are no companies to assign </span>
          ) : (
            <div
              className={classNames({
                [classes.companyToAssignListTransition]: true,
                [classes.companyToAssignListOutOfFocus]: filtersDisplayed,
              })}
            >
              {companies.map((company, index) => (
                <CompanyToAssign key={company.id.value} company={company} index={index} />
              ))}
            </div>
          )}
          <PaginationRowSelector
            changePage={changePage}
            changePageRow={changePageRow}
            elementsTotal={companiesTotal}
            elementsPage={companiesPage}
            elementsPageSize={companiesPageSize}
          />
        </React.Fragment>
      )}
    </div>
  );
};

export const CompanyToAssignListView = withStyles(style)(CompanyToAssignList);

CompanyToAssignListView.propTypes = {
  areCompaniesLoaded: PropTypes.bool.isRequired,
  changePage: PropTypes.func,
  changePageRow: PropTypes.func,
  classes: PropTypes.object,
  companies: PropTypes.array,
  companiesInPage: PropTypes.number,
  companiesPage: PropTypes.number,
  companiesPageSize: PropTypes.number,
  companiesTotal: PropTypes.number,
  deselectCompanies: PropTypes.func,
  dispatchFiltersApply: PropTypes.func,
  filtersDisplayed: PropTypes.bool,
  isAnyDragged: PropTypes.bool,
  isAnySelected: PropTypes.bool,
  isSelectedAll: PropTypes.bool,
  onLoaded: PropTypes.func.isRequired,
  query: PropTypes.object,
  searchQuery: PropTypes.object.isRequired,
  selectAllToggle: PropTypes.func,
};
