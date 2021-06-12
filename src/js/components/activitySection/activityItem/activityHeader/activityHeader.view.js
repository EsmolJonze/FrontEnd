import React from 'react';
import styles from './activityHeader.module.css';
import { Button, Icon, IconButton, Text } from '@bloobirds-it/bloobirds-platform-component-library';
import ActionBar from '../actionBar';
import DateText from '../dateText';
import { getFieldByLogicRole, getTextFromLogicRole } from '../../../../utils/bobjects.utils';
import {
  createCallTitle,
  createEmailTitle,
  getLeadName,
  getActivityUserName,
} from '../activityItem.utils';
import { opportunityUrl as createOpportunityUrl } from '../../../../app/_constants/routes';
import {
  useActivity,
  useBobjectDetails,
  useContactFlow,
  useLeads,
  useMeetingResult,
  useRouter,
} from '../../../../hooks';
import { replaceVariables } from '../../../../utils/strings.utils';
import {
  OPPORTUNITY_FIELDS_LOGIC_ROLE,
  OPPORTUNITY_STATUS_LOGIC_ROLE,
} from '../../../../constants/opportunity';
import {
  ACTIVITY_DIRECTION,
  ACTIVITY_FIELDS_LOGIC_ROLE,
  ACTIVITY_TYPES_VALUES_LOGIC_ROLE,
  ACTIVITY_TYPES,
  CADENCE_TYPES_VALUES_LOGIC_ROLE,
  TYPES_STATUS_VALUES_LOGIC_ROLE,
} from '../../../../constants/activity';
import { STEPS } from '../../../contactFlowModal/contactFlowModal.machine';
import ContextMenu from '../contextMenu';

const OPPORTUNITY_ACTIVITY_TEXT = {
  [TYPES_STATUS_VALUES_LOGIC_ROLE.OPPORTUNITY_CREATED]:
    'Opportunity ##OPPORTUNITY_NAME## created with ##USER_NAME##',
  OPPORTUNITY_STATUS_CLOSED: 'Opportunity ##OPPORTUNITY_NAME## closed',
  [TYPES_STATUS_VALUES_LOGIC_ROLE.NEW_LEAD_ADDED_TO_OPPORTUNITY]:
    'Lead ##LEAD_NAME## added to Opportunity ##OPPORTUNITY_NAME##',
  [TYPES_STATUS_VALUES_LOGIC_ROLE.OPPORTUNITY_STATUS_CHANGED]:
    'Opportunity status changed to ##OPPORTUNITY_STATUS## ##OPPORTUNITY_NAME##',
  [TYPES_STATUS_VALUES_LOGIC_ROLE.OPPORTUNITY_ASSIGNED]:
    '##OPPORTUNITY_NAME## Opportunity assigned to ##ASSIGNED_TO##',
  [TYPES_STATUS_VALUES_LOGIC_ROLE.NEW_LEAD_CREATED]: 'New lead created ##LEAD_NAME##',
};

const CADENCE_ACTIVITY_TEXT = {
  [CADENCE_TYPES_VALUES_LOGIC_ROLE.RESCHEDULE]:
    '##USER_NAME## rescheduled the cadence: ##CADENCE_NAME##',
  [CADENCE_TYPES_VALUES_LOGIC_ROLE.CONFIGURE]:
    '##USER_NAME## configured the cadence: ##CADENCE_NAME##',
  [CADENCE_TYPES_VALUES_LOGIC_ROLE.STOPPED]: '##USER_NAME## stopped the cadence: ##CADENCE_NAME##',
  [CADENCE_TYPES_VALUES_LOGIC_ROLE.ENDED]: 'The cadence: ##CADENCE_NAME## has ended',
};

const MEETING_ACTIVITY_TEXT = {
  [ACTIVITY_TYPES_VALUES_LOGIC_ROLE.MEETING]: 'Meeting arranged ##LEAD_NAME##',
};

const CardIcon = ({ name, color, direction }) => {
  const iconDirection =
    direction === ACTIVITY_DIRECTION.INCOMING ? 'arrowDownLeft' : 'arrowTopRight';
  return (
    <div className={styles._icon}>
      <Icon name={name} color={color} />
      {direction && (
        <div className={styles._icon_direction}>
          <Icon name={iconDirection} color={color} size={16} />
        </div>
      )}
    </div>
  );
};

const LeadNameLink = ({ bobject, prefix }) => {
  const leadName = getLeadName(bobject);
  const { setBobjectDetails, openBobjectDetails } = useBobjectDetails();

  const handleLeadClick = () => {
    const leadField = getFieldByLogicRole(bobject, ACTIVITY_FIELDS_LOGIC_ROLE.LEAD);
    setBobjectDetails({ bobject: leadField?.referencedBobject, showContactButton: true });
    openBobjectDetails();
  };
  return leadName ? (
    <>
      {prefix && (
        <Text size="s" htmlTag="span">
          {prefix}
        </Text>
      )}
      <span className={styles._link_wrapper_ml} onClick={handleLeadClick}>
        <Text size="s" htmlTag="span" color="bloobirds">
          {leadName}
        </Text>
      </span>
    </>
  ) : null;
};

const CallActivityHeader = ({ bobject }) => {
  const direction = getTextFromLogicRole(bobject, ACTIVITY_FIELDS_LOGIC_ROLE.DIRECTION);
  const phone = getTextFromLogicRole(bobject, ACTIVITY_FIELDS_LOGIC_ROLE.CALL_LEAD_PHONE_NUMBER);
  const callResult = getTextFromLogicRole(bobject, ACTIVITY_FIELDS_LOGIC_ROLE.CALL_RESULT);
  const title = createCallTitle({ direction, phone });

  return (
    <>
      <CardIcon name="phone" color="melon" direction={direction} />
      <div className={styles._titles_container}>
        <p className={styles._main_title}>{title}</p>
        <LeadNameLink bobject={bobject} />
        <div className={styles._tag_status_container}>
          {callResult && <p className={styles._tag_status_text}>{callResult}</p>}
        </div>
      </div>
    </>
  );
};

const EmailActivityHeader = ({ bobject }) => {
  const direction = getTextFromLogicRole(bobject, ACTIVITY_FIELDS_LOGIC_ROLE.DIRECTION);
  const user = getTextFromLogicRole(bobject, ACTIVITY_FIELDS_LOGIC_ROLE.USER);
  const leadEmail = getTextFromLogicRole(bobject, ACTIVITY_FIELDS_LOGIC_ROLE.EMAIL_LEAD);
  const subjectEmail = getTextFromLogicRole(bobject, ACTIVITY_FIELDS_LOGIC_ROLE.MESSAGE_SUBJECT);
  const title = createEmailTitle({ direction, user, leadEmail, subjectEmail });

  return (
    <>
      <CardIcon name="mail" color="tangerine" direction={direction} />
      <div className={styles._titles_container}>
        <p className={styles._main_title}>{title}</p>
        <LeadNameLink bobject={bobject} />
      </div>
    </>
  );
};

const LinkedinActivityHeader = ({ bobject }) => {
  const direction = getTextFromLogicRole(bobject, ACTIVITY_FIELDS_LOGIC_ROLE.DIRECTION);
  const title = `LinkedIn message ${direction === 'Outgoing' ? 'sent' : 'received'}`;

  return (
    <>
      <CardIcon name="linkedin" color="bloobirds" direction={direction} />
      <div className={styles._titles_container}>
        <p className={styles._main_title}>{title}</p>

        <LeadNameLink bobject={bobject} />
      </div>
    </>
  );
};

const MeetingActivityHeader = ({ bobject }) => {
  const typeLogicRole = getFieldByLogicRole(bobject, ACTIVITY_FIELDS_LOGIC_ROLE.TYPE)
    ?.valueLogicRole;
  const headerText = replaceVariables(MEETING_ACTIVITY_TEXT[typeLogicRole], {
    LEAD_NAME: <LeadNameLink bobject={bobject} prefix="with" />,
  });

  return (
    <>
      <CardIcon name="calendar" color="tomato" />
      <div className={styles._titles_container}>
        <p className={styles._main_title}>
          <Text size="s" htmlTag="span" weight="bold">
            {headerText}
          </Text>
        </p>
      </div>
    </>
  );
};

const NoteActivityHeader = ({ bobject }) => (
  <>
    <CardIcon name="edit" color="banana" />
    <div className={styles._titles_container}>
      <p className={styles._main_title}>Note</p>
      <LeadNameLink bobject={bobject} />
    </div>
  </>
);

const CadenceActivityHeader = ({ bobject }) => {
  const cadenceName = getFieldByLogicRole(bobject, ACTIVITY_FIELDS_LOGIC_ROLE.CADENCE)?.text;
  const userName = getActivityUserName(bobject);
  const cadenceTypeLogicRole = getFieldByLogicRole(
    bobject,
    ACTIVITY_TYPES_VALUES_LOGIC_ROLE.CADENCE,
  )?.valueLogicRole;
  const text = CADENCE_ACTIVITY_TEXT[cadenceTypeLogicRole];
  const headerText = replaceVariables(text, {
    CADENCE_NAME: (
      <Text size="s" htmlTag="span">
        {cadenceName}
      </Text>
    ),
    USER_NAME: (
      <Text size="s" htmlTag="span">
        {userName}
      </Text>
    ),
  });

  return (
    <>
      <CardIcon name="cadence" color="peanut" />
      <div className={styles._titles_container}>
        <p className={styles._main_title}>
          <Text size="s" htmlTag="span" weight="bold">
            {headerText}
          </Text>
        </p>
      </div>
    </>
  );
};

const InboundActivityHeader = ({ bobject }) => {
  const inboundForm = getTextFromLogicRole(bobject, ACTIVITY_FIELDS_LOGIC_ROLE.INBOUND_FORM_NAME);
  const inboundFormName = inboundForm ? `from "${inboundForm}"` : '';
  const headerText = replaceVariables(
    'New Inbound activity submitted ##INBOUND_FORM## ##LEAD_NAME##',
    {
      INBOUND_FORM: (
        <Text size="s" htmlTag="span">
          {inboundFormName}
        </Text>
      ),
      LEAD_NAME: <LeadNameLink bobject={bobject} />,
    },
  );

  return (
    <>
      <CardIcon name="download" color="banana" />
      <div className={styles._titles_container}>
        <p className={styles._main_title}>
          <Text size="s" htmlTag="span" weight="bold">
            {headerText}
          </Text>
        </p>
      </div>
    </>
  );
};

const CompanyStatusActivityHeader = ({ bobject }) => {
  const title = getTextFromLogicRole(bobject, ACTIVITY_FIELDS_LOGIC_ROLE.STATUS_TITLE);

  return (
    <>
      <CardIcon name="company" color="darkGray" />
      <div className={styles._titles_container}>
        <p className={styles._main_title}>{title}</p>
        <LeadNameLink bobject={bobject} />
      </div>
    </>
  );
};

const OpportunityStatusActivityHeader = ({ bobject, opportunity }) => {
  const { history } = useRouter();
  const userName = getActivityUserName(bobject);
  const leadName = getLeadName(bobject);
  const opportunityName = getTextFromLogicRole(opportunity, OPPORTUNITY_FIELDS_LOGIC_ROLE.NAME);
  const opportunityStatus = getFieldByLogicRole(opportunity, OPPORTUNITY_FIELDS_LOGIC_ROLE.STATUS);
  const opportunityAssignedTo = getTextFromLogicRole(
    opportunity,
    OPPORTUNITY_FIELDS_LOGIC_ROLE.ASSIGNED_TO,
  );
  let typeStatus = getFieldByLogicRole(bobject, ACTIVITY_TYPES_VALUES_LOGIC_ROLE.STATUS)
    ?.valueLogicRole;
  const { setBobjectDetails, openBobjectDetails } = useBobjectDetails();

  if (
    typeStatus === TYPES_STATUS_VALUES_LOGIC_ROLE.OPPORTUNITY_STATUS_CHANGED &&
    (opportunityStatus?.valueLogicRole === OPPORTUNITY_STATUS_LOGIC_ROLE.CLOSED_LOST ||
      opportunityStatus?.valueLogicRole === OPPORTUNITY_STATUS_LOGIC_ROLE.CLOSED_WON)
  ) {
    typeStatus = 'OPPORTUNITY_STATUS_CLOSED';
  }

  const handleOpportunityClick = () => {
    const companyField = getFieldByLogicRole(opportunity, OPPORTUNITY_FIELDS_LOGIC_ROLE.COMPANY);
    const companyId = companyField.value.split('/')[2];
    const opportunityId = opportunity.id.objectId;
    const opportunityUrl = createOpportunityUrl(companyId, opportunityId);
    document.querySelector('#content').scroll({ top: 0, behavior: 'smooth' });
    history.push(opportunityUrl);
  };

  const handleLeadClick = () => {
    const leadField = getFieldByLogicRole(bobject, ACTIVITY_FIELDS_LOGIC_ROLE.LEAD);
    setBobjectDetails({ bobject: leadField?.referencedBobject, showContactButton: true });
    openBobjectDetails();
  };

  const title = replaceVariables(OPPORTUNITY_ACTIVITY_TEXT[typeStatus], {
    OPPORTUNITY_NAME: (
      <span className={styles._link_wrapper} onClick={handleOpportunityClick}>
        <Text size="s" htmlTag="span" color="bloobirds">
          {opportunityName}
        </Text>
      </span>
    ),
    OPPORTUNITY_STATUS: (
      <Text size="s" htmlTag="span">
        {opportunityStatus?.text}
      </Text>
    ),
    USER_NAME: (
      <Text size="s" htmlTag="span">
        {userName}
      </Text>
    ),
    LEAD_NAME: (
      <span className={styles._link_wrapper} onClick={handleLeadClick}>
        <Text size="s" htmlTag="span" color="bloobirds">
          {leadName}
        </Text>
      </span>
    ),
    ASSIGNED_TO: (
      <Text size="s" htmlTag="span">
        {opportunityAssignedTo}
      </Text>
    ),
  });

  return (
    <>
      <CardIcon name="fileOpportunity" color="darkGray" />
      <div className={styles._titles_container}>
        <p className={styles._main_title}>
          <Text size="s" htmlTag="span" weight="bold">
            {title}
          </Text>
        </p>
      </div>
    </>
  );
};

const LeftActivityHeader = ({ type, bobject }) => {
  if (type === ACTIVITY_TYPES.CALL) {
    return <CallActivityHeader bobject={bobject} />;
  }

  if (type === ACTIVITY_TYPES.EMAIL) {
    return <EmailActivityHeader bobject={bobject} />;
  }

  if (type === ACTIVITY_TYPES.LINKEDIN) {
    return <LinkedinActivityHeader bobject={bobject} />;
  }

  if (type === ACTIVITY_TYPES.MEETING) {
    return <MeetingActivityHeader bobject={bobject} />;
  }

  if (type === ACTIVITY_TYPES.NOTE) {
    return <NoteActivityHeader bobject={bobject} />;
  }

  if (type === ACTIVITY_TYPES.INBOUND) {
    return <InboundActivityHeader bobject={bobject} />;
  }

  if (type === ACTIVITY_TYPES.CADENCE) {
    return <CadenceActivityHeader bobject={bobject} />;
  }

  if (type === ACTIVITY_TYPES.STATUS) {
    const opportunityField = getFieldByLogicRole(bobject, ACTIVITY_FIELDS_LOGIC_ROLE.OPPORTUNITY);
    const activityTypeStatus = getFieldByLogicRole(bobject, ACTIVITY_TYPES_VALUES_LOGIC_ROLE.STATUS)
      ?.valueLogicRole;
    const opportunity = opportunityField?.referencedBobject;
    if (
      opportunity &&
      (activityTypeStatus.includes('OPPORTUNITY') ||
        activityTypeStatus === TYPES_STATUS_VALUES_LOGIC_ROLE.NEW_LEAD_CREATED)
    ) {
      return <OpportunityStatusActivityHeader bobject={bobject} opportunity={opportunity} />;
    }
    return <CompanyStatusActivityHeader bobject={bobject} />;
  }

  return null;
};

const ActivityHeader = ({ bobject, hovered }) => {
  const { openMeetingResult } = useMeetingResult();
  const { openContactFlow, setActivityId } = useContactFlow();
  const { updateSingleLead } = useLeads('contactFlow');
  const date = getTextFromLogicRole(bobject, ACTIVITY_FIELDS_LOGIC_ROLE.TIME);
  const type = getTextFromLogicRole(bobject, ACTIVITY_FIELDS_LOGIC_ROLE.TYPE);
  const isIncomingActivity =
    getTextFromLogicRole(bobject, ACTIVITY_FIELDS_LOGIC_ROLE.DIRECTION) ===
    ACTIVITY_DIRECTION.INCOMING;
  const isPinned = getTextFromLogicRole(bobject, ACTIVITY_FIELDS_LOGIC_ROLE.IS_PINNED) === 'Yes';
  const activityLead = getFieldByLogicRole(bobject, ACTIVITY_FIELDS_LOGIC_ROLE.LEAD)?.value;
  const cadenceTypeLogicRole = getFieldByLogicRole(
    bobject,
    ACTIVITY_TYPES_VALUES_LOGIC_ROLE.CADENCE,
  )?.valueLogicRole;
  const showActionBar = hovered && type !== ACTIVITY_TYPES.STATUS;
  const showReportResult =
    (isIncomingActivity && type !== ACTIVITY_TYPES.INBOUND) || type === ACTIVITY_TYPES.MEETING;
  const isReported = getTextFromLogicRole(bobject, ACTIVITY_FIELDS_LOGIC_ROLE.REPORTED) === 'Yes';
  const { setPinned } = useActivity('activityCard');

  const ReportedButton = () =>
    isReported ? (
      <div data-test="Icon-thumbsUp" className={styles._button_reported_container}>
        <IconButton name="thumbsUp" color="melon" size={16} />
      </div>
    ) : (
      <div className={styles._button_report_container}>
        <Button
          dataTest="resultReport"
          variant="secondary"
          size="small"
          iconLeft="thumbsUp"
          onClick={() => {
            if (type === ACTIVITY_TYPES.MEETING) {
              openMeetingResult(bobject?.id.objectId);
            } else {
              setActivityId(bobject?.id.objectId);
              updateSingleLead(activityLead?.split('/')[2]);

              openContactFlow({
                trigger: 'REPORT_RESULT',
                step: STEPS.CHANGE_STATUS,
              });
            }
          }}
        >
          Report result
        </Button>
      </div>
    );

  return (
    <header className={styles._header}>
      <div className={styles._header_left}>
        <LeftActivityHeader type={type} bobject={bobject} />
      </div>
      <div className={styles._header_right}>
        {showActionBar && <ActionBar bobject={bobject} />}
        {date && <DateText date={date} />}
        {showReportResult && <ReportedButton />}
        {type === ACTIVITY_TYPES.CADENCE &&
          cadenceTypeLogicRole === CADENCE_TYPES_VALUES_LOGIC_ROLE.ENDED && (
            <Button
              variant="secondary"
              size="small"
              onClick={() => {
                updateSingleLead(activityLead?.split('/')[2]);
                openContactFlow({
                  trigger: 'UPDATE_CADENCE',
                  step: STEPS.CHANGE_STATUS,
                });
              }}
            >
              Update
            </Button>
          )}
        {isPinned && (
          <div className={styles._button_pinned_container}>
            <IconButton
              name={'pin'}
              onClick={() => setPinned(bobject.id.objectId, isPinned, type)}
              color="softPeanut"
              size={20}
            />
          </div>
        )}
        {type !== ACTIVITY_TYPES.CADENCE && type !== ACTIVITY_TYPES.STATUS && (
          <ContextMenu bobject={bobject} />
        )}
      </div>
    </header>
  );
};

export default ActivityHeader;
