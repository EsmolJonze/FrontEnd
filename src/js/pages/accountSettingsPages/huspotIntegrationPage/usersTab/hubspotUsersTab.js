import React, { useEffect, useState } from 'react';
import { Rest } from '@bloobirds-it/bloobirds-platform-js-api-library';
import { useBloobirdsApiStateContext } from '@bloobirds-it/bloobirds-platform-react-api-library';
import { useActiveUser } from '../../../../hooks';
import UsersTab from '../../../../layouts/integrationLayout/usersTabTemplate';

const pageOptions = [10, 25, 50];

const HubspotUsersTab = () => {
  const { restApi, webApi } = useBloobirdsApiStateContext();
  const [fetching, handleFetching] = useState(false);
  const [refreshUsers, setRefreshUsers] = useState(true);
  const [hubspotUsers, setHubspotUsers] = useState([]);
  const [bloobirdsUsers, setBloobirdsUsers] = useState([]);
  const { activeAccount } = useActiveUser();
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(pageOptions[0]);
  const [count, setCount] = useState(0);

  const usersMap = {
    userName: 'firstName',
    userSurname: 'lastName',
    userMail: 'email',
    userCRMId: 'hubspotUserId',
    userId: 'user',
  };
  useEffect(() => setRefreshUsers(true), [page, pageSize]);
  useEffect(() => {
    if (refreshUsers && !fetching) {
      restApi
        .service('hubspotUsers')
        .search({
          page,
          size: pageSize,
          query: {
            accountId: activeAccount.id,
          },
        })
        .then(response => {
          setCount(response.page.totalElements);
          setHubspotUsers(
            response?._embedded.hubspotUsers.sort((a, b) =>
              a.salesforceUserName > b.salesforceUserName ? 1 : -1,
            ),
          );
          setRefreshUsers(false);
        });
    }
  }, [refreshUsers]);
  useEffect(() => {
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
  }, []);
  const handleResyncUsers = () => {
    handleFetching(true);
    webApi
      .request({
        url: '/service/hubspot/users/update',
        method: 'POST',
      })
      .then(response => {
        handleFetching(false);
        setHubspotUsers(response);
      });
  };
  const handleOnSelectChange = (bloobirdsId, hubspotUser) => {
    restApi
      .service('hubspotUsers')
      .partialUpdate(hubspotUser.id, { user: `/users/${bloobirdsId}` });
  };
  const hubspotAccountId = () =>
    webApi.request({
      url: '/hubspot/portalId',
      method: 'GET',
    });

  const onClickLink = async user => {
    const id = await hubspotAccountId();
    const link = `https://app.hubspot.com/settings/${id}/users/editUser/${user.hubspotUserId}`;
    window.open(link, '_blank');
  };
  return (
    <>
      {hubspotUsers && bloobirdsUsers && (
        <UsersTab
          bloobirdsUsers={bloobirdsUsers}
          handleIntegrationUsers={setHubspotUsers}
          integrationUsers={hubspotUsers.sort((a, b) => (a.firstName > b.firstName ? 1 : -1))}
          handleResyncUsers={handleResyncUsers}
          handleOnSelectChange={handleOnSelectChange}
          handleClickUser={onClickLink}
          fetching={fetching}
          sortingBy="firstName"
          crm="HubSpot"
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
export default HubspotUsersTab;
