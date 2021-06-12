import React, { useState } from 'react';
import { Button, Icon, Text } from '@bloobirds-it/bloobirds-platform-component-library';
import { bobjectUrl } from '../../../app/_constants/routes';
import { formatDate } from '../../../utils/dates.utils';
import { BobjectFieldPill } from '../../filter/field/pill';
import CardItem from '../../cardItem';
import { extractDataForCard } from '../card.service';
import Name from '../name';
import styles from './company.module.css';
import { getTimezone } from '../../../constants/countryToTimeZone';
import CountryTooltip from '../countryTooltip';
import { useActiveLeads, useBobjectFormCreation, useRouter } from '../../../hooks';
import { isCompanyPage } from '../../../utils/pages.utils';
import { useBobjectFormVisibility } from '../../../hooks/useBobjectForm';

const CompanyCard = ({ bobject, setContextCompany }) => {
  const { openEditModal } = useBobjectFormVisibility();
  const { openAddTask } = useBobjectFormCreation();
  const { selectedLead } = useActiveLeads();
  const { history, pathname } = useRouter();
  const { company } = extractDataForCard({ bobject, isContactView: isCompanyPage(pathname) });
  const [hover, setHover] = useState(false);
  const dateLastAttempt = company.lastAttemptDate
    ? formatDate(company.lastAttemptDate, 'do, MMMM')
    : 'Never';
  const countryTimezone = getTimezone(company?.country);

  return (
    <div className={styles._container}>
      <CardItem
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        history={history}
        to={bobjectUrl(bobject)}
        contentLeft={
          <>
            <Name name={company.name} bobject={bobject} />
            <CountryTooltip country={company?.country} timezone={countryTimezone} />
            <div className={styles._company_source}>{company.source}</div>
            {company.status && (
              <div className={styles._company_status}>
                <BobjectFieldPill field={company.status} />
              </div>
            )}
            {company.highPriority && <Icon size="16" name="zap" color="banana" />}
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
                <Button variant="secondary" onClick={() => openEditModal({ bobject })} size="small">
                  UPDATE STATUS
                </Button>

                <Button
                  onClick={() => {
                    setContextCompany(bobject, () => {
                      openAddTask({ leadId: selectedLead?.id.value });
                    });
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

export default CompanyCard;
