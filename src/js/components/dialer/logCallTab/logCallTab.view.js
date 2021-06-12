import React, { useState } from 'react';
import { useHistory } from 'react-router';
import md5 from 'md5';
import classnames from 'clsx';
import { useQueryStringState } from '../../../hooks/queryStringState/useQueryStringState';
import {
  Button,
  Icon,
  IconButton,
  Input,
  Item,
  Section,
  Select,
  useToasts,
  useVisible,
} from '@bloobirds-it/bloobirds-platform-component-library';
import { useActiveCompany } from '../../../hooks';
import { getValueFromLogicRole, getFiledsByType } from '../../../utils/bobjects.utils';
import { isValidPhone } from '../../../utils/phone.utils';
import { companyUrl, leadUrl } from '../../../app/_constants/routes';
import { COMPANY_FIELDS_LOGIC_ROLE } from '../../../constants/company';
import { LEAD_FIELDS_LOGIC_ROLE } from '../../../constants/lead';
import { request } from '../../../misc/api/utils';
import { ApiHosts } from '../../../misc/api/ApiHosts';
import Keypad from '../keypad';
import styles from './logCallTab.module.css';

const LogCallTab = ({
  availablePhones = [],
  handleClose = () => {},
  leads,
  selectedConnectionPhone,
  selectedLead,
  setSelectedConnectionPhone,
  updateSelectedLead,
  inputPhoneNumber,
  setInputPhoneNumber,
}) => {
  const [callDirection, setCallDirection] = useState('OUTGOING');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { ref: keypadRef, visible: isKeypadVisible, setVisible: setIsKeypadVisible } = useVisible();
  const history = useHistory();
  const { company } = useActiveCompany();
  const companyPhoneNumbers = getFiledsByType(company, 'PHONE').filter(phone => !!phone.value);
  const leadPhoneNumbers = getFiledsByType(selectedLead, 'PHONE').filter(phone => !!phone.value);
  const [showContactFlow, setShowContactFlow] = useQueryStringState('showContactFlow');
  const selectedLeadName = getValueFromLogicRole(
    selectedLead,
    LEAD_FIELDS_LOGIC_ROLE.FULL_NAME,
    true,
  );
  const companyName = getValueFromLogicRole(company, COMPANY_FIELDS_LOGIC_ROLE.NAME);
  const [selectedUserPhone, setSelectedUserPhone] = useState(
    availablePhones?.length > 0 ? availablePhones[0] : 'no-twilio-phone',
  );
  const isButtonDisabled = !selectedUserPhone || !isValidPhone(inputPhoneNumber);
  const { createToast } = useToasts();

  const handleOnLogCall = () => {
    setIsSubmitting(true);
    request({
      host: ApiHosts.callService.host(),
      url: '/whiteLabel/call',
      body: {
        sdrPhone: selectedUserPhone,
        leadPhone: inputPhoneNumber,
        companyId: company?.id.value,
        leadId: selectedLead?.id.value,
        callDateTime: Date.now(),
        direction: callDirection,
        callSid: `BB${md5(`${selectedUserPhone}${inputPhoneNumber}${Date.now()}`)}`,
      },
      method: 'POST',
      failureAction: () => {
        console.info('failed');
      },
    }).then(response => {
      setIsSubmitting(false);
      const { activity } = response;
      createToast({ type: 'success', message: 'Call logged correctly' });
      if (!showContactFlow) {
        setShowContactFlow(activity?.objectId);
      }
      handleClose();
    });
  };

  const handleVisitContactView = () => {
    if (company) {
      history.push(companyUrl(company));
    } else if (selectedLead) {
      history.push(leadUrl(selectedLead));
    }
  };

  return (
    <div className={styles._container}>
      <div className={styles._input__container__link}>
        <Input
          placeholder="Company"
          value={companyName || 'Unknown company'}
          width="100%"
          inline
          darkMode
          disabled
        />
        <div className={styles._company_link} onClick={handleVisitContactView}>
          <Icon name="arrowRight" color="white" size={16} />
        </div>
      </div>
      <div className={styles._input__container}>
        <Select
          placeholder="Lead"
          width="100%"
          value={selectedLead?.id.value || 'unknownLead'}
          darkMode
          onChange={value => updateSelectedLead(value)}
          disabled={leads.length === 0}
        >
          {leads.length > 0 ? (
            leads.map(lead => (
              <Item value={lead.id.value} key={`lead-${lead.id.value}`}>
                {getValueFromLogicRole(lead, LEAD_FIELDS_LOGIC_ROLE.FULL_NAME, true)}
              </Item>
            ))
          ) : (
            <Item value="unknownLead">Unknown lead</Item>
          )}
        </Select>
      </div>
      <div className={styles._input__container}>
        <Select
          placeholder="Phone number"
          value={selectedConnectionPhone}
          onChange={value => {
            setInputPhoneNumber(value);
            setSelectedConnectionPhone(value);
          }}
          width="100%"
          darkMode
        >
          {leadPhoneNumbers.length > 0 && <Section icon="person">{selectedLeadName}</Section>}
          {leadPhoneNumbers.length > 0 &&
            leadPhoneNumbers.map(phone => (
              <Item key={`lead-phone-${phone.value}`} value={phone.value}>
                {phone.value}
              </Item>
            ))}
          {companyPhoneNumbers.length > 0 && <Section icon="company">{companyName}</Section>}
          {companyPhoneNumbers.length > 0 &&
            companyPhoneNumbers.map(phone => (
              <Item key={`company-phone-${phone.value}`} value={phone.value}>
                {phone.value}
              </Item>
            ))}
        </Select>
      </div>
      <div className={styles._phone__container}>
        <input
          className={styles._phone_number}
          value={inputPhoneNumber}
          onPaste={event => {
            setInputPhoneNumber(event.target.value.replace(/[^0-9, ^+]/g, ''));
          }}
          onChange={event => {
            setInputPhoneNumber(event.target.value);
          }}
          onKeyDown={event => {
            const { keyCode, key, ctrlKey, metaKey } = event;
            const allowCode = [187, 37, 39, 46, 8, 107];

            if ((ctrlKey || metaKey) && (key === 'c' || key === 'x' || key === 'v')) {
              return;
            }

            if (
              (keyCode < 48 || keyCode > 57) &&
              (keyCode < 96 || keyCode > 105) &&
              allowCode.indexOf(keyCode) === -1
            ) {
              event.preventDefault();
            }
          }}
        />
      </div>
      <div className={styles._input__container}>
        <Select
          placeholder="Your Bloobirds number"
          value={selectedUserPhone}
          width="100%"
          darkMode
          onChange={value => setSelectedUserPhone(value)}
        >
          {availablePhones && availablePhones.length > 0 ? (
            availablePhones.map(phone => (
              <Item key={`available-phone-${phone.value}`} value={phone}>
                {phone}
              </Item>
            ))
          ) : (
            <Item value="no-twilio-phone">Your account does not have an active phone number</Item>
          )}
        </Select>
      </div>
      <>
        <Select
          placeholder="Direction"
          size="medium"
          value={callDirection}
          width="100%"
          darkMode
          onChange={isOutgoing => setCallDirection(isOutgoing)}
        >
          <Item value="OUTGOING">Outgoing</Item>
          <Item value="INCOMING">Incoming</Item>
        </Select>
      </>
      <div className={styles._buttons__container}>
        <Keypad
          anchor={
            <IconButton
              name="dragAndDrop"
              color="white"
              onClick={() => setIsKeypadVisible(!isKeypadVisible)}
            />
          }
          handleClose={() => setIsKeypadVisible(!isKeypadVisible)}
          innerRef={keypadRef}
          handleKeyPress={value => {
            if (value === 'backspace') {
              setInputPhoneNumber(inputPhoneNumber.slice(0, -1));
              return null;
            }
            setInputPhoneNumber(`${inputPhoneNumber || ''}${value}`);
            return null;
          }}
          visible={isKeypadVisible}
        />
        <div
          className={classnames(styles._button__wrapper, {
            [styles._disabled]: isButtonDisabled || isSubmitting,
          })}
        >
          <Button
            color="extraCall"
            iconLeft="plus"
            variant="primary"
            onClick={handleOnLogCall}
            disabled={isButtonDisabled || isSubmitting}
          >
            LOG CALL MANUALLY
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LogCallTab;
