import React, { useEffect } from 'react';
import reducer from './reducer';
import { ServiceApi } from '../../misc/api/service';
import { PERMISSIONS_FETCH_DATA_ERROR, PERMISSIONS_FETCH_DATA_SUCCESS } from './actions';
import UserSettingsContext from './context';

export const UserPermissionContext = ({ children }) => {
  const [state, dispatch] = reducer();

  const reloadUserSettings = () => {
    ServiceApi.request({
      url: '/service/users/settings',
      method: 'GET',
    })
      .then(data => dispatch({ type: PERMISSIONS_FETCH_DATA_SUCCESS, data }))
      .catch(error => dispatch({ type: PERMISSIONS_FETCH_DATA_ERROR, error }));
  };
  useEffect(reloadUserSettings, []);

  return (
    <UserSettingsContext.Provider value={{ state, dispatch, reloadUserSettings }}>
      {children}
    </UserSettingsContext.Provider>
  );
};
