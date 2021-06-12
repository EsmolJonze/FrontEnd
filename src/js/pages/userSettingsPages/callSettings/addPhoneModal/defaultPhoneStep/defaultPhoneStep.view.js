import React, { useState } from 'react';
import {
  Button,
  Icon,
  ModalContent,
  ModalFooter,
  Text,
  Checkbox,
} from '@bloobirds-it/bloobirds-platform-component-library';
import { usePhoneConnections } from '../../../../../hooks/usePhoneConnections';
import styles from './defaultPhoneStep.module.css';

const DefaultPhoneStep = ({ handleClose, newConnection }) => {
  const [isDefaultChecked, setIsDefaultChecked] = useState(true);
  const { updateDefaultConnection } = usePhoneConnections();

  return (
    <>
      <ModalContent>
        <div className={styles._container}>
          <div className={styles._header__container}>
            <div className={styles._icon__container}>
              <Icon name="phone" size={48} color="melon" />
            </div>
            <div className={styles._divider} />
          </div>
          <div className={styles._content}>
            <div className={styles._text__container}>
              <Text color="peanut" size="m" weight="medium">
                {newConnection.phoneNumber} has been added!
              </Text>
            </div>
            <div className={styles._list__container}>
              <div className={styles._list_item}>
                <Icon name="check" color="melon" />
                <Text color="peanut" size="s">
                  You can now use this phone number to call leads
                </Text>
              </div>
              <div className={styles._list_item}>
                <Icon name="check" color="melon" />
                <Text color="peanut" size="s">
                  You can now call to (50) different countries
                </Text>
              </div>
              <div className={styles._list_item}>
                <Icon name="check" color="melon" />
                <Text color="peanut" size="s">
                  This number will never be shown to your leads - Your Bloobirds number is shown
                  instead
                </Text>
              </div>
            </div>
            <Checkbox
              size="small"
              defaultChecked={isDefaultChecked}
              onClick={status => setIsDefaultChecked(status)}
            >
              Set this phone number as my default selected option for calls
            </Checkbox>
          </div>
        </div>
      </ModalContent>
      <ModalFooter>
        <div className={styles._footer_button__wrapper}>
          <Button
            onClick={() => {
              if (isDefaultChecked) {
                updateDefaultConnection(newConnection.id);
              }
              handleClose();
            }}
          >
            Done
          </Button>
        </div>
      </ModalFooter>
    </>
  );
};

export default DefaultPhoneStep;
