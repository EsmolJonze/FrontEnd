import React, { useMemo } from 'react';
import InfoCardTemplate from '../infoCardTemplate';
import {
  COMPANY_FIELDS_LOGIC_ROLE,
  COMPANY_HIGH_PRIORITY_LOGIC_ROLE,
} from '../../../constants/company';
import { getFieldsByLogicRoles } from '../../../utils/bobjects.utils';
import { useEntity, useBobjectDetails } from '../../../hooks';
import { useBobjectFormVisibility } from '../../../hooks/useBobjectForm';

const {
  ASSIGNED_TO,
  ATTEMPTS_COUNT,
  ATTEMPTS_LAST_DAY,
  COUNTRY,
  HIGH_PRIORITY,
  LINKEDIN_URL,
  MR_RATING,
  NAME,
  SOURCE,
  STATUS,
  TARGET_MARKET,
  TOUCHES_COUNT,
  TOUCHES_LAST_DAY,
  WEBSITE,
} = COMPANY_FIELDS_LOGIC_ROLE;

const LOGIC_ROLES = {
  info: [ASSIGNED_TO, MR_RATING, NAME, STATUS, TARGET_MARKET, HIGH_PRIORITY],
  others: [
    ATTEMPTS_COUNT,
    ATTEMPTS_LAST_DAY,
    COUNTRY,
    LINKEDIN_URL,
    SOURCE,
    TOUCHES_COUNT,
    TOUCHES_LAST_DAY,
    WEBSITE,
  ],
};

const canHaveNoValue = [ATTEMPTS_LAST_DAY, TOUCHES_LAST_DAY];

const CompanyCard = ({ bobject }) => {
  const { openBobjectDetails, setBobjectDetails } = useBobjectDetails();
  const { openEditModal } = useBobjectFormVisibility();
  const fields =
    bobject && getFieldsByLogicRoles(bobject, [...LOGIC_ROLES.info, ...LOGIC_ROLES.others]);
  const {
    [MR_RATING]: mrRatingField = {},
    [TARGET_MARKET]: targetMarketField = {},
    [NAME]: companyNameField = {},
    [STATUS]: statusField = {},
    [ASSIGNED_TO]: assignToField = {},
    [HIGH_PRIORITY]: highPriorityField = {},
  } = fields || {};
  const targetMarkets = useEntity('targetMarkets');
  const targetMarketEntity = targetMarkets
    ? targetMarkets.get(targetMarketField?.value)
    : undefined;

  const otherFields = useMemo(
    () =>
      LOGIC_ROLES.others
        .filter(logicRole => fields[logicRole].value || canHaveNoValue.includes(logicRole))
        .map(logicRole => fields[logicRole]),
    [fields],
  );

  const isHighPriority = highPriorityField.valueLogicRole === COMPANY_HIGH_PRIORITY_LOGIC_ROLE.YES;

  return (
    <InfoCardTemplate
      assignTo={assignToField}
      mrRating={mrRatingField}
      name={companyNameField}
      status={statusField}
      targetMarket={targetMarketEntity}
      otherFields={otherFields}
      highPriority={isHighPriority}
      handleOnClickName={() => {
        setBobjectDetails({ bobject });
        openBobjectDetails();
      }}
      handleOnClickEdit={() => openEditModal({ bobject })}
    />
  );
};

export default CompanyCard;
