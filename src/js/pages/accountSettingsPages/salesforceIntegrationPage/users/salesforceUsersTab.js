import React, { useEffect, useState } from 'react';
import { Rest } from '@bloobirds-it/bloobirds-platform-js-api-library';
import { useBloobirdsApiStateContext } from '@bloobirds-it/bloobirds-platform-react-api-library';
import { useActiveUser } from '../../../../hooks';
import UsersTab from '../../../../layouts/integrationLayout/usersTabTemplate';
import { useSalesforceIntegration } from '../../../../hooks/useSalesforceIntegration';

const pageOptions = [10, 25, 50];

const SalesforceUsersTab = () => {
  const { restApi, webApi } = useBloobirdsApiStateContext();
  const [fetching, isFetching] = useState(false);
  const [salesforceUsers, setSalesforceUsers] = useState([]);
  const [bloobirdsUsers, setBloobirdsUsers] = useState([]);
  const { activeAccount } = useActiveUser();
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(pageOptions[0]);
  const [count, setCount] = useState(0);
  const [refreshUsers, setRefreshUsers] = useState(false);

  const usersMap = {
    userName: 'salesforceUserName',
    userMail: 'salesforceUserEmail',
    userCRMId: 'salesforceUserId',
    userId: 'bloobirdsUserId',
  };
  useEffect(() => {
    restApi
      .service('salesforceUsers')
      .search({
        page,
        size: pageSize,
        query: {
          accountId: activeAccount.id,
        },
      })
      .then(response => {
        setCount(response.page.totalElements);
        setSalesforceUsers(
          response?._embedded.salesforceUsers.sort((a, b) =>
            a.salesforceUserName > b.salesforceUserName ? 1 : -1,
          ),
        );
      });
    restApi
      .service(Rest.ResourceNameEnum.users)
      .search({
        query: {
          accountId: activeAccount.id,
        },
      })
      .then(response => {
        setBloobirdsUsers(response?._embedded.users);
      });
  }, [page, pageSize, refreshUsers]);
  const handleResyncUsers = () => {
    isFetching(true);
    webApi
      .request({
        url: '/service/salesforceUsers/updateUsers',
        method: 'POST',
      })
      .then(() => {
        setRefreshUsers(!refreshUsers);
        isFetching(false);
      });
  };
  const handleOnSelectChange = (bloobirdsId, salesforceUser) => {
    restApi
      .service('salesforceUsers')
      .partialUpdate(salesforceUser.id, { bloobirdsUserId: bloobirdsId });
  };
  const { activeIntegration } = useSalesforceIntegration();
  const onClickLink = salesforceUser => {
    const link = `${activeIntegration.instanceHost}/lightning/r/User/${
      salesforceUser.salesforceUserId
    }/view`;
    window.open(link, '_blank');
  };
  return (
    <>
      {salesforceUsers && (
        <UsersTab
          bloobirdsUsers={bloobirdsUsers}
          handleIntegrationUsers={setSalesforceUsers}
          integrationUsers={salesforceUsers}
          handleResyncUsers={handleResyncUsers}
          handleOnSelectChange={handleOnSelectChange}
          handleClickUser={onClickLink}
          fetching={fetching}
          sortingBy="salesforceUserName"
          crm="Salesforce"
          usersMap={usersMap}
          handlePage={setPage}
          handlePageSize={setPageSize}
          pageOptions={pageOptions}
          page={page}
          rowsPerPage={pageSize}
          count={count}
        />
      )}
    </>
  );
};
export default SalesforceUsersTab;
