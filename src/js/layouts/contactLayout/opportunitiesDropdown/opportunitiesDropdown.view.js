import React, { useMemo } from 'react';
import { useActiveOpportunities, useEntity, useRouter } from '../../../hooks';
import { getFieldByLogicRole, getValueFromLogicRole } from '../../../utils/bobjects.utils';
import { Label, Text } from '@bloobirds-it/bloobirds-platform-component-library';
import BobjectName from '../../../components/bobjectName';
import { BOBJECT_TYPES } from '../../../constants/bobject';
import { formatDateAsText } from '../../../utils/dates.utils';
import styles from './opportunitiesDropdown.module.css';
import { ellipsis } from '../../../utils/strings.utils';
import { opportunityUrl } from '../../../app/_constants/routes';

const CLOSED_OPPORTUNITY_LOGIC_ROLES = Object.seal({
  OPPORTUNITY__STATUS__CLOSED_WON: 'OPPORTUNITY__STATUS__CLOSED_WON',
  OPPORTUNITY__STATUS__CLOSED_LOST: 'OPPORTUNITY__STATUS__CLOSED_LOST',
});

const OpportunityCard = ({ opportunity, toggleDropdownVisibility }) => {
  const { history } = useRouter();
  const bobjectFields = useEntity('bobjectFields');

  const parsedOpportunity = useMemo(
    () => ({
      nameField: getFieldByLogicRole(opportunity, 'OPPORTUNITY__NAME'),
      amount: getValueFromLogicRole(opportunity, 'OPPORTUNITY__AMOUNT'),
      status: getFieldByLogicRole(opportunity, 'OPPORTUNITY__STATUS'),
      closeDate: getValueFromLogicRole(opportunity, 'OPPORTUNITY__CLOSE_DATE'),
      company: getFieldByLogicRole(opportunity, 'OPPORTUNITY__COMPANY'),
    }),
    [opportunity],
  );

  const amountFieldPrefix = useMemo(
    () => bobjectFields.findByLogicRole('OPPORTUNITY__AMOUNT')?.layoutNumberPrefix,
    [bobjectFields],
  );

  return (
    <div
      className={styles._card__container}
      onClick={() => {
        history.push(
          opportunityUrl(parsedOpportunity.company.value.split('/')[2], opportunity.id.objectId),
        );
        toggleDropdownVisibility();
      }}
    >
      <div className={styles._card__column}>
        <BobjectName
          field={parsedOpportunity.nameField}
          bobject={opportunity}
          type={BOBJECT_TYPES.LEAD}
          ellipsisChar={21}
        />
        <Text color="peanut" size="s" weight="bold">
          {parsedOpportunity.amount && `${amountFieldPrefix || '$'}${parsedOpportunity.amount}`}
        </Text>
      </div>
      <div className={styles._card__status}>
        {parsedOpportunity?.status.text && (
          <Label
            overrideStyle={{
              color: parsedOpportunity.status.valueTextColor,
              backgroundColor: parsedOpportunity.status.valueBackgroundColor,
              borderColor: parsedOpportunity.status.valueBackgroundColor,
            }}
          >
            {ellipsis(parsedOpportunity.status.text, 26)}
          </Label>
        )}
      </div>
      <Text color="peanut" size="xs">
        Closes {formatDateAsText(parsedOpportunity.closeDate)}
      </Text>
    </div>
  );
};

const OpportunitiesDropdown = ({ toggleVisibility }) => {
  const { opportunities } = useActiveOpportunities();
  const bobjectPicklistFieldValues = useEntity('bobjectPicklistFieldValues');

  const sortedOpportunities = useMemo(
    () =>
      opportunities.reduce(
        (res, opportunity) => {
          const field = getFieldByLogicRole(opportunity, 'OPPORTUNITY__STATUS');
          const valueStatusField = bobjectPicklistFieldValues?.get(field?.value);
          CLOSED_OPPORTUNITY_LOGIC_ROLES[(valueStatusField?.logicRole)]
            ? res.closed.push(opportunity)
            : res.open.push(opportunity);
          return res;
        },
        { closed: [], open: [] },
      ),
    [opportunities, bobjectPicklistFieldValues],
  );

  return (
    <div className={styles._dropdown__container}>
      {sortedOpportunities.open.length > 0 && (
        <>
          <div className={styles._header__container}>
            <Text uppercase size="s" color="softPeanut">
              Open Opportunities
            </Text>
          </div>
          {sortedOpportunities.open.map(opportunity => (
            <OpportunityCard
              opportunity={opportunity}
              toggleDropdownVisibility={toggleVisibility}
              key={opportunity.id.value}
            />
          ))}
        </>
      )}
      {sortedOpportunities.closed.length > 0 && (
        <>
          <div className={styles._header__container}>
            <Text uppercase size="s" color="softPeanut">
              Closed Opportunities
            </Text>
          </div>
          {sortedOpportunities.closed.map(opportunity => (
            <OpportunityCard
              opportunity={opportunity}
              toggleDropdownVisibility={toggleVisibility}
              key={opportunity.id.value}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default OpportunitiesDropdown;
