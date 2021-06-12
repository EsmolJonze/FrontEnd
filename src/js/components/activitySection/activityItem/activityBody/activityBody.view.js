import React from 'react';
import styles from './activityBody.module.css';
import { isHtml } from '../../../../utils/strings.utils';
import { Text } from '@bloobirds-it/bloobirds-platform-component-library';
import { getFieldByLogicRole, getTextFromLogicRole } from '../../../../utils/bobjects.utils';
import InboundFieldGrid from './inboundFieldGrid';
import TextMessage from './textMessage';
import HtmlMessage from './htmlMessage';
import OpportunityCardBody from './opportunityCardBody';
import {
  ACTIVITY_FIELDS_LOGIC_ROLE,
  TYPES_STATUS_VALUES_LOGIC_ROLE,
} from '../../../../constants/activity';
import {
  OPPORTUNITY_STATUS_LOGIC_ROLE,
  OPPORTUNITY_FIELDS_LOGIC_ROLE,
} from '../../../../constants/opportunity';

const opportunityFieldWithCard = [TYPES_STATUS_VALUES_LOGIC_ROLE.OPPORTUNITY_CREATED];

const Body = ({ bobject }) => {
  const type = getTextFromLogicRole(bobject, ACTIVITY_FIELDS_LOGIC_ROLE.TYPE);

  if (type === 'Inbound') {
    return <InboundFieldGrid bobject={bobject} />;
  }

  if (type === 'Status') {
    const statusField = getFieldByLogicRole(bobject, 'ACTIVITY__TYPE_STATUS')?.valueLogicRole;
    const opportunityField = getFieldByLogicRole(bobject, ACTIVITY_FIELDS_LOGIC_ROLE.OPPORTUNITY);
    const opportunity = opportunityField?.referencedBobject;
    const opportunityStatus = getFieldByLogicRole(
      opportunity,
      OPPORTUNITY_FIELDS_LOGIC_ROLE.STATUS,
    );
    let isClosed = false;
    if (
      statusField === TYPES_STATUS_VALUES_LOGIC_ROLE.OPPORTUNITY_STATUS_CHANGED &&
      (opportunityStatus?.valueLogicRole === OPPORTUNITY_STATUS_LOGIC_ROLE.CLOSED_LOST ||
        opportunityStatus?.valueLogicRole === OPPORTUNITY_STATUS_LOGIC_ROLE.CLOSED_WON)
    ) {
      isClosed = true;
    }

    if (opportunityFieldWithCard.includes(statusField) || isClosed) {
      return <OpportunityCardBody opportunity={opportunity} />;
    }
  }

  const message = getTextFromLogicRole(bobject, ACTIVITY_FIELDS_LOGIC_ROLE.MESSAGE_BODY);
  if (message) {
    const isHtmlMessage = isHtml(message);
    return isHtmlMessage ? <HtmlMessage value={message} /> : <TextMessage value={message} />;
  }

  return null;
};

const ActivityBody = ({ bobject }) => {
  const note = getTextFromLogicRole(bobject, ACTIVITY_FIELDS_LOGIC_ROLE.NOTE);
  return (
    <div className={styles._body}>
      <Body bobject={bobject} />
      {note && (
        <div className={styles._note_message}>
          <Text color="peanut" size="xs">
            Note: {note}
          </Text>
        </div>
      )}
    </div>
  );
};

export default ActivityBody;
