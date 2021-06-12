import React, { useMemo } from 'react';
import {
  getFieldByLogicRole,
  getValueFromLogicRole,
  getFieldByName,
} from '../../utils/bobjects.utils';
import styles from './opportunityDetails.module.css';
import { Label, Text } from '@bloobirds-it/bloobirds-platform-component-library';
import { useEntity } from '../../hooks';
import { ellipsis } from '../../utils/strings.utils';
import { formatDate } from '../../utils/dates.utils';

const OpportunityDetails = ({ opportunity }) => {
  const bobjectFields = useEntity('bobjectFields');
  // TODO: Extract useParsedOpportunity() and remove the clone
  const parsedOpportunity = useMemo(
    () => ({
      nameField: getFieldByLogicRole(opportunity, 'OPPORTUNITY__NAME'),
      amount: getValueFromLogicRole(opportunity, 'OPPORTUNITY__AMOUNT'),
      status: getFieldByLogicRole(opportunity, 'OPPORTUNITY__STATUS'),
      closeDate: getValueFromLogicRole(opportunity, 'OPPORTUNITY__CLOSE_DATE'),
      company: getFieldByLogicRole(opportunity, 'OPPORTUNITY__COMPANY'),
      type: getFieldByName(opportunity, 'Type'),
      creationDate: getValueFromLogicRole(opportunity, 'OPPORTUNITY__CREATION_DATETIME'),
    }),
    [opportunity],
  );

  const amountFieldPrefix = useMemo(
    () => bobjectFields.findByLogicRole('OPPORTUNITY__AMOUNT')?.layoutNumberPrefix,
    [bobjectFields],
  );

  return (
    <div className={styles._container}>
      <div className={styles._title__container}>
        <Text dataTest="Text-opportunityName" size="l" align="center">
          "{parsedOpportunity.nameField?.text}"
        </Text>
      </div>
      <div className={styles._content__container}>
        <div className={styles._tag__container}>
          <div className={styles._tag__content}>
            <Text dataTest="Text-opportunityAmount" weight="bold" align="center" size="xxxl">
              {`${amountFieldPrefix}${parseInt(parsedOpportunity?.amount, 10).toFixed(2)}`}
            </Text>
            <Text align="center" size="s" htmlTag="span">
              {parsedOpportunity.type}
            </Text>
          </div>
        </div>
        {parsedOpportunity.status.text && (
          <div className={styles._status__container}>
            <Label
              dataTest="opportunityStatus"
              overrideStyle={{
                color: parsedOpportunity?.status.valueTextColor,
                backgroundColor: parsedOpportunity?.status.valueBackgroundColor,
                borderColor: 'var(--white)',
              }}
            >
              {ellipsis(parsedOpportunity?.status.text, 26)}
            </Label>
          </div>
        )}
      </div>
      <div className={styles._creationDate__container}>
        <Text size="s" color="softPeanut">
          {`Created ${formatDate(
            new Date(parsedOpportunity?.creationDate),
            "MMM dd 'at' hh:mm OOO",
          )}`}
        </Text>
      </div>
    </div>
  );
};

export default OpportunityDetails;
