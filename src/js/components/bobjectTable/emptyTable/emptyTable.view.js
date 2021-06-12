import React from 'react';
import PropTypes from 'prop-types';
import styles from './emptyTable.module.css';
import { SearchData } from '../../../../assets/svg';
import Button from '@material-ui/core/Button';
import { Text } from '@bloobirds-it/bloobirds-platform-component-library';
import ErrorPage from '../../../pages/errorPage';

// TODO: Move this function to a utils or use isEqual from lodash instead
const equalObj = (a, b) =>
  [...new Set([...Object.keys(a), ...Object.keys(b)])].reduce(
    (prev, current) =>
      Boolean(a[current]) && Boolean(b[current]) && a[current] === b[current] && prev,
    true,
  );

const NoData = () => (
  <div className={styles._empty_data__container}>
    <SearchData className={styles._empty_data__icon} />
    <Text color="softPeanut">No results can be found! Try something else?</Text>
  </div>
);

const NoDataByQuery = ({ description, handleCleanFilters, buttonText }) => (
  <React.Fragment>
    <h2>{description}</h2>
    <p>Try modifying your search criteria</p>
    <Button onClick={handleCleanFilters} variant="outlined" color="primary">
      {buttonText}
    </Button>
  </React.Fragment>
);

const EmptyTableView = ({
  filters,
  stateQuery,
  requestedQuery,
  viewModified,
  search,
  description,
  handleCleanFilters,
  buttonText,
  type,
  isError = false,
}) => {
  const query = { ...JSON.parse(filters || '{}'), ...stateQuery };
  const noResultsByQuery = requestedQuery
    ? query && Object.keys(query).length && !equalObj(query, requestedQuery)
    : query && Object.keys(query).length && (viewModified || search);

  return isError ? (
    <ErrorPage
      action={{
        name: 'Refresh',
        handleClick: () => window.location.reload(),
        icon: 'refresh',
      }}
      showSupport
    >
      <Text color="softPeanut" align="center">
        Oops! We couldn't find your {type}. Please contact Support if this problem persists.
      </Text>
    </ErrorPage>
  ) : (
    <div className={styles._container}>
      {noResultsByQuery ? (
        <NoDataByQuery
          description={description}
          handleCleanFilters={handleCleanFilters}
          buttonText={buttonText}
        />
      ) : (
        <NoData type={type} />
      )}
    </div>
  );
};

EmptyTableView.propTypes = {
  buttonText: PropTypes.string,
  description: PropTypes.string,
  filters: PropTypes.string,
  handleCleanFilters: PropTypes.func,
  requestedQuery: PropTypes.object,
  search: PropTypes.any,
  stateQuery: PropTypes.any,
  type: PropTypes.any,
  viewModified: PropTypes.any,
};

export default EmptyTableView;
