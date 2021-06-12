import React from 'react';
import {
  Button,
  Icon,
  Table,
  Text,
  TableHead,
  TableCell,
  TableBody,
  Spinner,
  Pagination,
} from '@bloobirds-it/bloobirds-platform-component-library';
import styles from './usersTab.module.css';
import PropTypes from 'prop-types';
import UserTabRow from './userTabRow/userTabRow';

const UsersTab = ({
  bloobirdsUsers,
  integrationUsers,
  handleResync,
  handleOnSelectChange,
  isDescending,
  descending,
  iconName,
  fetching,
  handleClickUser,
  crm,
  usersMap,
  handlePage,
  handlePageSize,
  pageOptions,
  page,
  rowsPerPage,
  count,
}) => (
  <div>
    <div className={styles._header}>
      <Icon name="people" size="24" />
      <Text size="l" color="peanut">
        {crm} users
      </Text>
      <Button
        variant="secondary"
        onClick={handleResync}
        iconLeft={!fetching && 'refresh'}
        size="small"
        uppercase
      >
        {fetching ? (
          <div style={{ width: '100%' }}>
            <Spinner size={14} name="loadingCircle" />
          </div>
        ) : (
          'resync'
        )}
      </Button>
    </div>
    <Text size="xs" color="softPeanut">
      Here you link {crm} users to Bloobirds users. Use the resync button to check for deleted and
      recently added users in {crm}
    </Text>
    <div className={styles._table}>
      <Table>
        <TableHead>
          <TableCell>
            <div className={styles._users_sort} onClick={() => isDescending(!descending)}>
              <Text size="xs" color="peanut" uppercase>
                {crm} user
              </Text>
              <Icon name={iconName} size="16" color="peanut" />
            </div>
          </TableCell>
          <TableCell>
            <Text size="xs" color="peanut" uppercase>
              {crm} user email
            </Text>
          </TableCell>
          <TableCell>
            <Text size="xs" color="peanut" uppercase>
              {crm} user id
            </Text>
          </TableCell>
          <TableCell>
            <Text size="xs" color="peanut" uppercase>
              bloobirds user
            </Text>
          </TableCell>
        </TableHead>
        <TableBody>
          {integrationUsers.map(salesforceUser => (
            <UserTabRow
              bloobirdsUsers={bloobirdsUsers}
              onClickLink={handleClickUser}
              crmUser={salesforceUser}
              handleOnSelectChange={handleOnSelectChange}
              usersMap={usersMap}
            />
          ))}
        </TableBody>
      </Table>
      <div className={styles._pagination}>
        <Pagination
          page={page}
          rowsPerPage={rowsPerPage}
          onChangePage={handlePage}
          rowsPerPageOptions={pageOptions}
          onChangeRowsPerPage={handlePageSize}
          count={count}
        />
      </div>
    </div>
  </div>
);

UsersTab.propTypes = {
  bloobirdsUsers: PropTypes.object,
  descending: PropTypes.bool,
  handleOnSelectChange: PropTypes.func,
  handleResync: PropTypes.func,
  iconName: PropTypes.string,
  integrationUsers: PropTypes.object,
  isDescending: PropTypes.func,
};
export default UsersTab;
