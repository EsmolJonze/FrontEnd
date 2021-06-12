import React from 'react';
import {
  APP_CL_LEADS,
  APP_TASKS_ADD_QC,
  APP_TASKS_INBOUND,
} from '../../../../app/_constants/routes';
import { BOBJECT_TYPES } from '../../../../constants/bobject';
import ConnectedAddButton from './addButton.view';
import { useBobjectFormCreation } from '../../../../hooks';

const ConnectedAddButtonContainer = ({ bobjectType }) => {
  const { openAddCompany, openAddLead, openAddLeadWithoutCompany } = useBobjectFormCreation();

  const handleAddNew = (bobjectTypeName, location) => {
    const pathname = location.pathname;

    if (bobjectTypeName === BOBJECT_TYPES.COMPANY) {
      return openAddCompany();
    }
    if (
      pathname === APP_CL_LEADS ||
      pathname?.startsWith(APP_TASKS_INBOUND) ||
      pathname?.startsWith(APP_TASKS_ADD_QC)
    ) {
      return openAddLeadWithoutCompany();
    }
    return openAddLead();
  };
  return <ConnectedAddButton handleAddNew={handleAddNew} bobjectType={bobjectType} />;
};

export default ConnectedAddButtonContainer;
