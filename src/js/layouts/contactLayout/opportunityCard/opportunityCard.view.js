import React from 'react';
import InfoCardTemplate from '../infoCardTemplate';
import { OPPORTUNITY_FIELDS_LOGIC_ROLE } from '../../../constants/opportunity';
import { COMPANY_FIELDS_LOGIC_ROLE } from '../../../constants/company';
import { BOBJECT_TYPES } from '../../../constants/bobject';
import {
  getFieldsByLogicRoles,
  getRelatedBobject,
  getFieldByLogicRole,
} from '../../../utils/bobjects.utils';
import {
  useBobjectDetails,
  useCadenceControl,
  useBobjectFormVisibility,
  useEntity,
} from '../../../hooks';

const {
  AMOUNT,
  ASSIGNED_TO,
  CLOSE_DATE,
  COMPANY,
  NAME,
  STATUS,
  STATUS__LAST_UPDATE,
  STATUS__CLOSED_WIN,
  CREATION_DATE,
  STATUS__CLOSED_LOST,
} = OPPORTUNITY_FIELDS_LOGIC_ROLE;

const logicRoles = {
  info: [NAME, STATUS, ASSIGNED_TO],
  others: [
    CLOSE_DATE,
    COMPANY,
    AMOUNT,
    STATUS__LAST_UPDATE,
    STATUS__CLOSED_WIN,
    CREATION_DATE,
    STATUS__CLOSED_LOST,
  ],
};

const OpportunityCard = ({ bobject }) => {
  const { openEditModal } = useBobjectFormVisibility();
  const { openBobjectDetails, setBobjectDetails } = useBobjectDetails();
  const { openCadenceControl } = useCadenceControl();
  const fields =
    bobject && getFieldsByLogicRoles(bobject, [...logicRoles.info, ...logicRoles.others]);

  const {
    [NAME]: opportunityNameField = {},
    [STATUS]: statusField = {},
    [ASSIGNED_TO]: assignToField = {},
  } = fields || {};
  const opportunityCompanyBobject = getRelatedBobject(bobject, BOBJECT_TYPES.COMPANY);
  const companyTargetMarketField =
    opportunityCompanyBobject &&
    getFieldByLogicRole(opportunityCompanyBobject, COMPANY_FIELDS_LOGIC_ROLE.TARGET_MARKET);
  const entities = useEntity('targetMarkets');
  const targetMarketEntity = entities ? entities.get(companyTargetMarketField?.value) : undefined;

  const otherFields = logicRoles.others
    .filter(logicRole => fields[logicRole]?.value)
    .map(logicRole => fields[logicRole]);

  return (
    <InfoCardTemplate
      assignTo={assignToField}
      name={opportunityNameField}
      status={statusField}
      targetMarket={targetMarketEntity}
      otherFields={otherFields}
      handleOnClickName={() => {
        setBobjectDetails({ bobject });
        openBobjectDetails();
      }}
      handleOnClickEdit={() => {
        openEditModal({ bobject, onSuccess: () => openCadenceControl() });
      }}
    />
  );
};

export default OpportunityCard;
