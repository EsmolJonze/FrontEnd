import React, { useLayoutEffect, useMemo, useState } from 'react';
import {
  CircularBadge,
  Dropdown,
  Icon,
  IconButton,
  Item,
  Label,
  Text,
  Tooltip,
  useVisible,
} from '@bloobirds-it/bloobirds-platform-component-library';
import classNames from 'clsx';
import { getFieldByLogicRole, getValueFromLogicRole } from '../../../../utils/bobjects.utils';
import { useActiveLeads, useEntity, useQueryStringState } from '../../../../hooks';
import BobjectName from '../../../../components/bobjectName';
import { BOBJECT_TYPES } from '../../../../constants/bobject';
import { formatDateAsText } from '../../../../utils/dates.utils';
import { LEAD_FIELDS_LOGIC_ROLE } from '../../../../constants/lead';
import { OPPORTUNITY_FIELDS_LOGIC_ROLE } from '../../../../constants/opportunity';
import styles from './leadCard.module.css';

const FIELDS_TO_RENDER = Object.seal({
  attempts: {
    singular: 'Attempt',
    plural: 'Attempts',
    icon: 'check',
  },
  touches: {
    singular: 'Touch',
    plural: 'Touches',
    icon: 'checkDouble',
    color: 'verySoftBloobirds',
  },
  date: {
    icon: 'calendar',
  },
});

function LeadCardField({ value, fieldName }) {
  return (
    <div className={styles._field}>
      <Icon
        name={FIELDS_TO_RENDER[fieldName].icon}
        color={FIELDS_TO_RENDER[fieldName].color || 'softPeanut'}
        size={16}
      />
      <Text size="xs" color="peanut">
        {value}
      </Text>
    </div>
  );
}

const LeadCard = ({ lead, openAddQcToLeadModal }) => {
  const idealCustomerProfiles = useEntity('idealCustomerProfiles');
  const [leadICP, setLeadICP] = useState(
    idealCustomerProfiles?.get(getValueFromLogicRole(lead, LEAD_FIELDS_LOGIC_ROLE.ICP)),
  );
  const { ref, visible, setVisible } = useVisible(false);
  const { selectedLead, updateSelectedLead } = useActiveLeads();
  const [, setUrlLeadId] = useQueryStringState('leadId');

  useLayoutEffect(() => {
    if (idealCustomerProfiles && !leadICP) {
      setLeadICP(
        idealCustomerProfiles.get(getValueFromLogicRole(lead, LEAD_FIELDS_LOGIC_ROLE.ICP)),
      );
    }
  }, [idealCustomerProfiles, leadICP]);

  const numberOfAttempts = useMemo(
    () => getValueFromLogicRole(lead, LEAD_FIELDS_LOGIC_ROLE.ATTEMPTS_COUNT),
    [lead],
  );
  const numberOfTouches = useMemo(
    () => getValueFromLogicRole(lead, LEAD_FIELDS_LOGIC_ROLE.TOUCHES_COUNT),
    [lead],
  );
  const lastAttempt = useMemo(
    () => getValueFromLogicRole(lead, LEAD_FIELDS_LOGIC_ROLE.ATTEMPTS_LAST_DAY, true),
    [lead],
  );
  const lastTouch = useMemo(
    () => getValueFromLogicRole(lead, LEAD_FIELDS_LOGIC_ROLE.TOUCHES_LAST_DAY, true),
    [lead],
  );
  const leadStatus = useMemo(() => getFieldByLogicRole(lead, LEAD_FIELDS_LOGIC_ROLE.STATUS), [
    lead,
  ]);

  const leadName = useMemo(() => getFieldByLogicRole(lead, LEAD_FIELDS_LOGIC_ROLE.FULL_NAME), [
    lead,
  ]);
  const leadLinkedinRole = useMemo(
    () => getValueFromLogicRole(lead, LEAD_FIELDS_LOGIC_ROLE.LINKEDIN_JOB_TITLE, true),
    [lead],
  );
  const leadOpportunity = useMemo(
    () => getFieldByLogicRole(lead, LEAD_FIELDS_LOGIC_ROLE.OPPORTUNITY),
    [lead],
  );
  const opportunityName = useMemo(() => {
    let name;
    if (leadOpportunity?.value) {
      const opportunityBoject = leadOpportunity?.referencedBobject;
      name = getFieldByLogicRole(opportunityBoject, OPPORTUNITY_FIELDS_LOGIC_ROLE.NAME)?.value;
    }
    return name;
  }, [leadOpportunity]);

  return (
    <div
      className={classNames(styles._container, {
        [styles._container__selected]: selectedLead?.id.value === lead.id.value,
      })}
      onClick={() => {
        setUrlLeadId(lead.id.value);
        updateSelectedLead(lead.id.value);
      }}
    >
      {leadICP ? (
        <Tooltip title={leadICP.name} trigger="hover" position="top">
          <CircularBadge
            size="medium"
            overrideStyle={{
              backgroundColor: leadICP?.color || 'var(--verySoftPeanut)',
              color: 'white',
            }}
          >
            {leadICP?.shortname || ''}
          </CircularBadge>
        </Tooltip>
      ) : (
        <CircularBadge
          size="medium"
          overrideStyle={{
            backgroundColor: 'var(--verySoftPeanut)',
            color: 'white',
            fontSize: 20,
          }}
        >
          ?
        </CircularBadge>
      )}
      <div className={styles._name__container}>
        <BobjectName field={leadName} bobject={lead} type={BOBJECT_TYPES.LEAD} />
        <Text size="xs" color="softPeanut" ellipsis={50}>
          {leadLinkedinRole}
        </Text>
      </div>
      <div className={styles._counts__container}>
        <LeadCardField
          value={`${parseInt(numberOfAttempts, 10) || 0} ${
            numberOfAttempts === 1
              ? FIELDS_TO_RENDER.attempts.singular
              : FIELDS_TO_RENDER.attempts.plural
          }`}
          fieldName="attempts"
        />
        <LeadCardField
          value={`${parseInt(numberOfTouches, 10) || 0} ${
            numberOfTouches === 1
              ? FIELDS_TO_RENDER.touches.singular
              : FIELDS_TO_RENDER.touches.plural
          }`}
          fieldName="touches"
        />
      </div>
      <div className={styles._dates__container}>
        <LeadCardField value={`Last attempt ${formatDateAsText(lastAttempt)}`} fieldName="date" />
        <LeadCardField value={`Last touch ${formatDateAsText(lastTouch)}`} fieldName="date" />
      </div>
      {opportunityName && (
        <div className={styles._opportunity_container}>
          <Tooltip title={`Lead with opporutnity: ${opportunityName}`} position="top">
            <Icon name="fileOpportunity" size={18} />
          </Tooltip>
        </div>
      )}
      <div className={styles._status__container}>
        <Label
          dataTest={leadStatus.logicRole}
          overrideStyle={{
            backgroundColor: leadStatus.valueBackgroundColor,
            color: leadStatus.valueTextColor,
            borderColor: leadStatus.valueOutlineColor,
          }}
        >
          {leadStatus.text}
        </Label>
      </div>
      <Dropdown
        visible={visible}
        anchor={
          <IconButton
            name="moreOpenholesVertical"
            color="softPeanut"
            onClick={() => setVisible(!visible)}
          />
        }
      >
        <div ref={ref}>
          <Item onClick={openAddQcToLeadModal}>Assign to other company</Item>
        </div>
      </Dropdown>
    </div>
  );
};

export default LeadCard;
