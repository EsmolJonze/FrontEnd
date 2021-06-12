import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import TablePagination from '@material-ui/core/TablePagination';
import { cssVariables } from '../../style/variables';
import { IconButton } from '@bloobirds-it/bloobirds-platform-component-library';

const style = {
  buttonsPagination: {
    flexShrink: 0,
    color: cssVariables.color.gunmetal.natural,
    marginLeft: '10px',
  },
};

const TablePaginationActions = withStyles(style)(props => {
  const { count, page, rowsPerPage, onChangePage, classes } = props;
  const lastPage = Math.ceil(count / rowsPerPage) - 1;
  const handleFirstPageButtonClick = event => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = event => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = event => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = event => {
    onChangePage(event, lastPage);
  };
  return (
    <div className={classes.buttonsPagination}>
      <IconButton
        color="softPeanut"
        name="chevronFirst"
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
      />
      <IconButton
        color="softPeanut"
        name="arrowLeft"
        onClick={handleBackButtonClick}
        disabled={page === 0}
      />
      <IconButton
        color="softPeanut"
        name="arrowRight"
        onClick={handleNextButtonClick}
        disabled={page >= lastPage}
      />
      <IconButton
        color="softPeanut"
        name="chevronLast"
        onClick={handleLastPageButtonClick}
        disabled={page >= lastPage}
      />
    </div>
  );
});

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

const PaginationRowSelector = props => {
  const { changePage, changePageRow, elementsTotal, elementsPage, elementsPageSize } = props;
  return (
    <TablePagination
      rowsPerPageOptions={[10, 25, 50, 100, 200]}
      colSpan={3}
      component="div"
      count={elementsTotal || 0}
      rowsPerPage={elementsPageSize}
      page={elementsPage}
      backIconButtonProps={{
        'aria-label': 'Previous Page',
      }}
      nextIconButtonProps={{
        'aria-label': 'Next Page',
      }}
      onChangePage={changePage}
      onChangeRowsPerPage={changePageRow}
      ActionsComponent={TablePaginationActions}
    />
  );
};

PaginationRowSelector.propTypes = {
  changePage: PropTypes.func,
  changePageRow: PropTypes.func,
  elementsPage: PropTypes.number,
  elementsPageSize: PropTypes.number,
  elementsTotal: PropTypes.number,
};

export { PaginationRowSelector };
