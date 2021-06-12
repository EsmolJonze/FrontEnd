import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  ALLOCATE_QC_TASK_ALLOCATE_QC_TRANSACTION_ON_LOAD,
  ALLOCATE_QC_TASK_APPLY_FILTERS,
  ALLOCATE_QC_TASK_CHANGE_PAGE,
  ALLOCATE_QC_TASK_PAGE_PER_ROW,
  ALLOCATE_QC_TASK_RESET_COMPANIES,
  ALLOCATE_QC_TASK_SELECT_COMPANIES_TOGGLE,
  COMPANIES_TO_ALLOCATE_LOAD_SUCCESS,
} from '../../../../../../../../actions/dictionary';
import CircularProgress from '@material-ui/core/CircularProgress';
import SessionManagerFactory from '../../../../../../../../misc/session';
import { CompanyToAssignListView } from './CompanyToAssignList.view';
import { preProcessSearchRequest } from '../../../../../../../../misc/api/bobject';
import { useEntity } from '../../../../../../../../hooks/entities/useEntity';
import { addQueryParamsFromTypes } from '../../../../../../../../components/bobjectTable/context/bobjectTable.utils';
import { BOBJECT_TYPES } from '../../../../../../../../constants/bobject';

const SessionManager = SessionManagerFactory();

const CompaniesToAssignContainer = props => {
  const {
    areCompaniesLoaded,
    changePage,
    changePageRow,
    assigneesLoaded,
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
    loadSession,
    onCompaniesAreLoaded,
    query,
    selectAllToggle,
    sort,
  } = props;

  const [searchQuery, setSearchQuery] = useState();
  const session = SessionManager.getAllocateQc();

  const entityBobjectFields = useEntity('bobjectFields');
  const bobjectTypes = useEntity('bobjectTypes');
  const fieldTypes = useEntity('fieldTypes');

  useEffect(() => {
    if (!areCompaniesLoaded && entityBobjectFields && bobjectTypes && fieldTypes) {
      setSearchQuery(
        preProcessSearchRequest({
          query: addQueryParamsFromTypes(
            query,
            bobjectTypes?.findBy('name')(BOBJECT_TYPES.COMPANY),
            entityBobjectFields,
            bobjectTypes,
            fieldTypes,
          ),
          formFields: true,
          sort,
          page: companiesPage,
          pageSize: companiesPageSize,
        }),
      );
    }
  }, [
    query,
    sort,
    companiesPage,
    companiesPageSize,
    areCompaniesLoaded,
    entityBobjectFields,
    bobjectTypes,
    fieldTypes,
  ]);

  useEffect(() => {
    if (session !== undefined && assigneesLoaded) {
      loadSession();
    }
  }, [session, assigneesLoaded]);

  return searchQuery ? (
    <CompanyToAssignListView
      areCompaniesLoaded
      changePage={changePage}
      changePageRow={changePageRow}
      companies={companies}
      companiesInPage={companiesInPage}
      companiesPage={companiesPage}
      companiesPageSize={companiesPageSize}
      companiesTotal={companiesTotal}
      deselectCompanies={deselectCompanies}
      dispatchFiltersApply={dispatchFiltersApply}
      filtersDisplayed={filtersDisplayed}
      isAnyDragged={isAnyDragged}
      isAnySelected={isAnySelected}
      isSelectedAll={isSelectedAll}
      onLoaded={onCompaniesAreLoaded}
      query={query}
      searchQuery={searchQuery}
      selectAllToggle={selectAllToggle}
      session={session}
    />
  ) : (
    <CircularProgress />
  );
};

const mapStateToProps = state => {
  const companies = state.taskWorkspace.board.allocateQcTask.companies;
  const d = {
    companies,
    areCompaniesLoaded: companies !== undefined,
    filtersDisplayed: state.components.filter.filtersDisplayed,
    companiesPage: state.taskWorkspace.board.allocateQcTask.companiesPage,
    companiesInPage: companies === undefined ? undefined : companies.length,
    companiesPageSize: state.taskWorkspace.board.allocateQcTask.companiesPageSize,
    companiesTotal: state.taskWorkspace.board.allocateQcTask.companiesTotal,
    isSelectedAll:
      state.taskWorkspace.board.allocateQcTask.selectableCompanies.every(sc => sc.selected) &&
      state.taskWorkspace.board.allocateQcTask.selectableCompanies.length > 0,
    isAnySelected: state.taskWorkspace.board.allocateQcTask.selectableCompanies.some(
      sc => sc.selected,
    ),
    isAnyDragged: state.taskWorkspace.board.allocateQcTask.selectableCompanies.some(
      sc => sc.dragged,
    ),
    isEmptyList: state.taskWorkspace.board.allocateQcTask.selectableCompanies > 0,
    assigneesLoaded: state.taskWorkspace.board.allocateQcTask.assignees !== undefined,
    query: state.taskWorkspace.board.allocateQcTask.query,
    sort: state.taskWorkspace.board.allocateQcTask.sort,
  };
  return d;
};

const mapDispatchToProps = dispatch => ({
  changePage: (e, page) => dispatch({ type: ALLOCATE_QC_TASK_CHANGE_PAGE, page }),
  changePageRow: e => dispatch({ type: ALLOCATE_QC_TASK_PAGE_PER_ROW, value: e.target.value }),
  selectAllToggle: condition => () =>
    dispatch({ type: ALLOCATE_QC_TASK_SELECT_COMPANIES_TOGGLE, selected: condition }),
  deselectCompanies: () => dispatch({ type: ALLOCATE_QC_TASK_SELECT_COMPANIES_TOGGLE }),
  resetData: () => dispatch({ type: ALLOCATE_QC_TASK_RESET_COMPANIES }),
  loadSession: () => dispatch({ type: ALLOCATE_QC_TASK_ALLOCATE_QC_TRANSACTION_ON_LOAD }),
  dispatchFiltersApply: (query, sort) =>
    dispatch({ type: ALLOCATE_QC_TASK_APPLY_FILTERS, query, sort }),
  onCompaniesAreLoaded: payload => dispatch({ type: COMPANIES_TO_ALLOCATE_LOAD_SUCCESS, payload }),
});

export const CompanyToAssignListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CompaniesToAssignContainer);
