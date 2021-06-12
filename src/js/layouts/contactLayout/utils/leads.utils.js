import { injectReferencesSearchProcess } from '../../../misc/api/bobject';

const stateSorting = {
  LEAD__STATUS__ENGAGED: 3,
  LEAD__STATUS__DELIVERED: 6,
  LEAD__STATUS__NEW: 7,
  LEAD__STATUS__CONTACTED: 4,
  LEAD__STATUS__CONTACT: 1,
  LEAD__STATUS__NURTURING: 8,
  LEAD__STATUS__MEETING: 2,
  LEAD__STATUS__DISCARDED: 9,
  LEAD__STATUS__ON_PROSPECTION: 5,
};

export const onNewLeads = setLeads => response => {
  injectReferencesSearchProcess(response);
  setLeads([
    ...response.contents.sort((a, b) => {
      const logicRoleA = a.fields.find(
        field => field.logicRole && field.logicRole === 'LEAD__STATUS',
      ).valueLogicRole;
      const logicRoleB = b.fields.find(
        field => field.logicRole && field.logicRole === 'LEAD__STATUS',
      ).valueLogicRole;
      if (logicRoleA !== logicRoleB) {
        return stateSorting[logicRoleA] > stateSorting[logicRoleB] ? 1 : -1;
      }
      const creationDateTimeA = a.fields.find(
        field => field.logicRole === 'LEAD__CREATION_DATETIME',
      ).value;
      const creationDateTimeB = b.fields.find(
        field => field.logicRole === 'LEAD__CREATION_DATETIME',
      ).value;
      return creationDateTimeA > creationDateTimeB ? 1 : -1;
    }),
  ]);
};
