import React, { useCallback, useState } from 'react';
import {
  Icon,
  Text,
  Card,
  CardHoverButtons,
  CardBody,
  CardButton,
  CardLeft,
  CardRight,
} from '@bloobirds-it/bloobirds-platform-component-library';
import { useEmailConnections, usePhoneConnections } from '../../hooks';
import { formatDistance } from '../../utils/dates.utils';
import DisconnectModal from './disconnectModal';
import styles from './connectionCard.module.css';
import { GoogleSvg } from '../../../assets/svg';

const ConnectionCard = ({ data, isNylas, isDefault, type = 'email' }) => {
  const isEmail = type === 'email';
  const hookType = isEmail ? useEmailConnections : usePhoneConnections;
  const { updateDefaultConnection, disconnectConnection } = hookType();
  const [openModal, setOpenModal] = useState(false);
  const { createdAt, email, phoneNumber: phone, id: connectionId, syncState } = data;
  const isStopped = syncState === 'stopped' || syncState === 'invalid';
  const date =
    createdAt && isEmail
      ? new Date(
          createdAt.year,
          createdAt.monthValue - 1,
          createdAt.dayOfMonth,
          createdAt.hour,
          createdAt.minute,
          createdAt.second,
        )
      : new Date(data.creationDatetime);

  date.setHours(date.getHours() - new Date().getTimezoneOffset() / 60);

  const getConnectionIcon = useCallback(() => {
    const icon = !isNylas ? <GoogleSvg /> : <Icon name="mail" color="tangerine" />;

    return !isEmail ? <Icon name="phone" color="melon" /> : icon;
  }, [type]);
  return (
    <>
      <div className={styles._card__container}>
        <Card width={650}>
          <CardLeft>{getConnectionIcon()}</CardLeft>
          <CardBody>
            <Text size="s" color="peanut" inline>
              {isEmail ? email : phone}
            </Text>
            {isDefault && <Icon name="starChecked" color="softBanana" size={16} />}
          </CardBody>
          {isEmail && isStopped ? (
            <CardRight>
              <Text size="xs" color="softTomato" inline align="right">
                Requires to be reconnected
              </Text>
            </CardRight>
          ) : (
            <>
              {date && (
                <CardRight>
                  <Text size="s" color="softPeanut" inline align="right">
                    {`Added ${formatDistance(date, new Date())} ago`}
                  </Text>
                </CardRight>
              )}
            </>
          )}
          <CardHoverButtons>
            <CardButton
              variant="secondary"
              size="small"
              onClick={() => {
                const connection = isEmail ? email : connectionId;
                updateDefaultConnection(connection);
              }}
            >
              Set as default
            </CardButton>
            <CardButton size="small" onClick={() => setOpenModal(true)}>
              Disconnect
            </CardButton>
          </CardHoverButtons>
        </Card>
      </div>
      {openModal && (
        <DisconnectModal
          open
          type={type}
          handleClose={() => setOpenModal(false)}
          handleConfirm={() => disconnectConnection(connectionId, isNylas)}
          connection={isEmail ? email : phone}
        />
      )}
    </>
  );
};

export default ConnectionCard;
