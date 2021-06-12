import React, { useState } from 'react';
import {
  Card,
  CardRight,
  CardBody,
  CardHoverButtons,
  CardButton,
  CardLeft,
  Icon,
  Text,
  Spinner,
} from '@bloobirds-it/bloobirds-platform-component-library';
import styles from './pauseCadenceCard.module.css';
import { usePausePeriods, usePausePeriodsModal } from '../../../../hooks/usePausePeriods';
import { useActiveUser } from '../../../../hooks';
import { formatDateAsText } from '../../../../utils/dates.utils.js';

const PauseCadenceCard = ({ completed, ...period }) => {
  const { activeUser } = useActiveUser();
  const { cancelPeriod, isSubmitting } = usePausePeriods({ userId: activeUser.id });
  const [confirmation, setConfirmation] = useState(false);
  const { openEditPauseModal } = usePausePeriodsModal();

  return (
    <div className={styles._card__container}>
      <Card completed={completed} width={650}>
        <CardLeft>
          <Icon name="pauseOutlined" color={period.finished ? 'verySoftPeanut' : 'banana'} />
        </CardLeft>
        <CardBody>
          <Text ellipsis={52} size="s">
            {period.pauseName}
          </Text>
        </CardBody>
        <CardRight>
          <Text dataTest={'Text-pauseCadenceDates'} size="s" color="gray">
            From{' '}
            {formatDateAsText(
              new Date(
                new Date(period.startDate).getTime() +
                  new Date(period.startDate).getTimezoneOffset() * 60000,
              ),
              'dd MMMM yyyy',
            )}{' '}
            to{' '}
            {formatDateAsText(
              new Date(
                new Date(period.endDate).getTime() +
                  new Date(period.endDate).getTimezoneOffset() * 60000,
              ),
              'dd MMMM yyyy',
            )}
          </Text>
        </CardRight>
        <CardHoverButtons>
          <>
            <CardButton
              variant="secondary"
              onClick={() => openEditPauseModal(period)}
              disabled={completed}
            >
              Edit
            </CardButton>
            {!confirmation ? (
              <CardButton
                dataTest={'pauseCadenceCancel'}
                disabled={completed}
                onClick={() => setConfirmation(true)}
              >
                Cancel
              </CardButton>
            ) : (
              <CardButton
                dataTest={'pauseCadenceSure'}
                disabled={isSubmitting || completed}
                color="tangerine"
                onClick={() => cancelPeriod(period.id)}
              >
                {!isSubmitting ? <>Sure?</> : <Spinner name="loadingCircle" size={15} />}
              </CardButton>
            )}
          </>
        </CardHoverButtons>
      </Card>
    </div>
  );
};

export default PauseCadenceCard;
