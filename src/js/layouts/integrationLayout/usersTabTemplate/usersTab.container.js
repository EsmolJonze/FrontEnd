import React, { useEffect, useState } from 'react';
import UsersTab from './usersTab.view';

const UsersTabContainer = ({
  integrationUsers,
  handleIntegrationUsers,
  bloobirdsUsers,
  handleResyncUsers,
  handleOnSelectChange,
  fetching,
  sortingBy,
  crm,
  usersMap,
  handleClickUser,
  handlePage,
  handlePageSize,
  pageOptions,
  page,
  rowsPerPage,
  count,
}) => {
  const [descending, isDescending] = useState(true);
  const [iconName, setIconName] = useState('arrowDown');

  useEffect(() => {
    if (descending) {
      handleIntegrationUsers(
        integrationUsers.sort((a, b) => (a[sortingBy] > b[sortingBy] ? 1 : -1)),
      );
      setIconName('arrowDown');
    } else {
      handleIntegrationUsers(
        integrationUsers.sort((a, b) => (a[sortingBy] < b[sortingBy] ? 1 : -1)),
      );
      setIconName('arrowUp');
    }
  }, [descending]);

  return (
    <UsersTab
      integrationUsers={integrationUsers}
      bloobirdsUsers={bloobirdsUsers}
      handleResync={handleResyncUsers}
      handleOnSelectChange={handleOnSelectChange}
      isDescending={isDescending}
      descending={descending}
      iconName={iconName}
      fetching={fetching}
      crm={crm}
      usersMap={usersMap}
      handleClickUser={handleClickUser}
      handlePage={handlePage}
      handlePageSize={handlePageSize}
      pageOptions={pageOptions}
      page={page}
      rowsPerPage={rowsPerPage}
      count={count}
    />
  );
};
export default UsersTabContainer;
