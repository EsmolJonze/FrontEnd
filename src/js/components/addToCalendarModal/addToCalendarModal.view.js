import React, { useEffect, useMemo, useState } from 'react';
import {
  Modal,
  ModalContent,
  ModalFooter,
  Button,
  Text,
} from '@bloobirds-it/bloobirds-platform-component-library';
import { BobjectApi } from '../../misc/api/bobject';
import { useEntity, useAddToCalendar } from '../../hooks';
import { useUserSettings } from '../userPermissions/hooks';
import { getValueFromLogicRole } from '../../utils/bobjects.utils';
import { addMinutes, formatDate } from '../../utils/dates.utils';
import { buildCalendarLink } from './addToCalendarModal.utils';
import { methods } from './addToCalendarModal.constants';
import styles from './addToCalendarModal.module.css';

const getBobjectData = (entity, id) =>
  BobjectApi.request()
    .bobjectType(entity)
    .getForm(id);

const AddToCalendarModal = () => {
  const { closeAddToCalendarModal, addToCalendarState } = useAddToCalendar();
  const {
    leadId,
    companyId,
    title,
    dateTime,
    accountExecutiveId,
    bobjectType,
  } = addToCalendarState;
  const settings = useUserSettings();
  const isOutlook = settings?.settings.calendarLinksType !== 'GOOGLE_CALENDAR';
  const [lead, setLead] = useState();
  const [company, setCompany] = useState();
  const bobjectPicklistFieldValues = useEntity('bobjectPicklistFieldValues');
  const eventTitle = title || 'Untitled event';

  useEffect(() => {
    if (leadId && (!lead || lead.id.value !== leadId)) {
      getBobjectData('Lead', leadId.split('/')[2]).then(response => {
        setLead(response);
      });
    }
  }, [leadId, lead]);

  useEffect(() => {
    if (companyId && (!company || company?.id.value !== companyId)) {
      getBobjectData('Company', companyId.split('/')[2]).then(response => {
        setCompany(response);
      });
    }
  }, [companyId, company]);

  const name = useMemo(() => {
    if (lead) {
      return getValueFromLogicRole(lead, 'LEAD__FULL_NAME');
    }
    if (company) {
      return getValueFromLogicRole(company, 'COMPANY__NAME');
    }
    return '';
  }, [company, lead]);

  const url = useMemo(() => {
    const eventLeadName = name && ` with ${name}`;
    const calendarEventTitle = `${eventTitle}${eventLeadName}`;
    const leadEmail = getValueFromLogicRole(lead, 'LEAD__EMAIL');
    const guests = [];

    if (leadEmail && bobjectType === 'Activity') {
      guests.push(leadEmail);
    }
    if (accountExecutiveId && bobjectType === 'Activity') {
      guests.push(bobjectPicklistFieldValues.findBy('id')(accountExecutiveId).value);
    }

    return (
      dateTime &&
      buildCalendarLink(
        {
          title: calendarEventTitle,
          fromDate: dateTime,
          toDate: addMinutes(dateTime, 30),
          guests,
        },
        isOutlook ? methods.METHOD_OUTLOOK : methods.METHOD_GOOGLE,
      )
    );
  }, [name, title, dateTime, settings, lead]);

  const openLink = () => {
    window.open(url, '_blank');
    closeAddToCalendarModal();
  };

  return (
    <Modal title="Add to your calendar?" open onClose={closeAddToCalendarModal} width={500}>
      <ModalContent>
        <Text color="softPeanut" size="m" align="center">
          Book a 30-minute meeting in your calendar
        </Text>
        <div className={styles._main}>
          <div className={styles._calendar}>
            <header>
              <Text align="center" size="m" weight="bold" color="white">
                {formatDate(dateTime, 'MMM').toUpperCase()}
              </Text>
            </header>
            <div>
              <Text align="center" size="xxl" weight="bold" color="peanut">
                {dateTime?.getDate()}
              </Text>
              <Text align="center" size="s" color="peanut">
                {formatDate(dateTime, 'hh:mm a').toLowerCase()}
              </Text>
            </div>
          </div>
          <div className={styles._text}>
            <Text size="l" weight="bold" color="peanut">
              {eventTitle}
            </Text>
            {name && (
              <Text size="m" color="peanut">
                with {name}
              </Text>
            )}
          </div>
        </div>
      </ModalContent>
      <ModalFooter>
        <Button dataTest={'scheduleClose'} onClick={closeAddToCalendarModal} variant="tertiary">
          Close
        </Button>
        <Button onClick={openLink} variant="primary">
          Add to calendar
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default AddToCalendarModal;
