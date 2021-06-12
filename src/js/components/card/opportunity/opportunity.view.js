import React, { useState } from 'react';
import { Button, Icon, Text } from '@bloobirds-it/bloobirds-platform-component-library';
import { opportunityUrl } from '../../../app/_constants/routes';
import { formatDate } from '../../../utils/dates.utils';
import { BobjectFieldPill } from '../../filter/field/pill';
import CardItem from '../../cardItem';
import { extractDataForCard } from '../card.service';
import Name from '../name';
import styles from './opportunity.module.css';
import { useActiveLeads, useBobjectFormCreation, useRouter } from '../../../hooks';
import { BOBJECT_TYPES } from '../../../constants/bobject';

const OpportunityCard = ({ bobject }) => {
  const { openAddTask } = useBobjectFormCreation();
  const { selectedLead } = useActiveLeads();
  const { history } = useRouter();
  const { opportunity, company } = extractDataForCard({
    bobject,
    bobjectType: BOBJECT_TYPES.OPPORTUNITY,
  });
  const [hover, setHover] = useState(false);
  const dateLastAttempt = opportunity?.lastAttemptDate
    ? formatDate(opportunity?.lastAttemptDate, 'do, MMMM')
    : 'Never';

  return (
    <div className={styles._container}>
      <CardItem
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        history={history}
        to={opportunityUrl(company?.id, opportunity?.id)}
        contentLeft={
          <>
            <Name name={opportunity?.name} bobject={bobject} />
            {company && (
              <>
                <span className={styles._separator}>|</span>
                <Name name={company?.name} bobject={company?.bobject} />
              </>
            )}
            {opportunity?.status && (
              <div className={styles._company_status}>
                <BobjectFieldPill field={opportunity?.status} />
              </div>
            )}
            {company?.highPriority && <Icon size="16" name="zap" color="banana" />}
          </>
        }
        contentRight={
          <>
            {!hover && (
              <div className={styles._last_attempt_wrapper}>
                <Text size="s" color="softPeanut" inline align="right">
                  {`Last attempt ${dateLastAttempt}`}
                </Text>
              </div>
            )}
            {hover && (
              <div className={styles._right_buttons}>
                <Button
                  variant="secondary"
                  size="small"
                  onClick={event => {
                    event.preventDefault();
                    event.stopPropagation();
                    history.push(
                      `${opportunityUrl(company?.id, opportunity?.id)}?showCadenceControl`,
                    );
                  }}
                >
                  ASSIGN CADENCE
                </Button>

                <Button
                  onClick={() => {
                    openAddTask({ leadId: selectedLead?.id.value, opportunityId: opportunity?.id });
                  }}
                  size="small"
                >
                  ADD TASK
                </Button>
              </div>
            )}
          </>
        }
      />
    </div>
  );
};

export default OpportunityCard;
