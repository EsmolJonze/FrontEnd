import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  Button,
  Icon,
  Input,
  Item,
  ModalContent,
  ModalFooter,
  Select,
  Text,
  Flag,
  countries,
  Spinner,
  Callout,
} from '@bloobirds-it/bloobirds-platform-component-library';
import { usePhoneConnections } from '../../../../../hooks';
import { isValidPhone } from '../../../../../utils/phone.utils';
import styles from './addPhoneStep.module.css';

const AddPhoneStep = ({ handleClose, handleNextStep }) => {
  const { addNewConnection, connections } = usePhoneConnections();
  const { handleSubmit, control, errors, getValues, watch, formState } = useForm({
    defaultValues: {
      phonePrefix: '34',
      phoneNumber: '',
    },
  });

  const onSubmit = async data => {
    const { phonePrefix, phoneNumber } = data;
    const fullPhoneNumber = `+${phonePrefix} ${phoneNumber.replace(/\s/g, '')}`;
    const connection = await addNewConnection(fullPhoneNumber);
    handleNextStep(connection);
  };

  const phonePrefix = watch('phonePrefix');

  return (
    <>
      <ModalContent>
        <div>
          <div className={styles._header__container}>
            <div className={styles._icon__container}>
              <Icon name="phone" size={48} color="softPeanut" />
            </div>
            <div className={styles._divider} />
          </div>
          <div>
            <div className={styles._section__wrapper}>
              <div className={styles._text__container}>
                <Text color="peanut" size="m" weight="medium">
                  Enter your phone number
                </Text>
              </div>
              <div className={styles._phone_number__wrapper}>
                <Controller
                  name="phonePrefix"
                  control={control}
                  error={errors.phonePrefix?.message}
                  rules={{
                    validate: value => {
                      if (!value) {
                        return 'Prefix number cannot be empty';
                      }

                      if (value.length > 3) {
                        return 'Invalid prefix number';
                      }

                      return null;
                    },
                  }}
                  as={
                    <Select placeholder="Country" autocomplete>
                      {countries.map(({ code, name, phone }) => (
                        <Item
                          value={phone}
                          label={`${name} (${code}) ${phone}`}
                          right={
                            <Text size="xs" color="softPeanut">
                              {`+${phone}`}
                            </Text>
                          }
                          adornment={<Flag code={code} />}
                          key={code}
                        >
                          {`${name} (${code})`}
                        </Item>
                      ))}
                    </Select>
                  }
                />
                <Controller
                  name="phoneNumber"
                  control={control}
                  rules={{
                    validate: value => {
                      if (!value) {
                        return 'Phone number cannot be empty';
                      }

                      const fullPhoneNumber = `+${getValues().phonePrefix} ${value}`;

                      if (!isValidPhone(fullPhoneNumber)) {
                        return 'Invalid phone number';
                      }

                      if (
                        connections?.list.some(({ phoneNumber }) => phoneNumber === fullPhoneNumber)
                      ) {
                        return 'Phone number was already used';
                      }

                      return null;
                    },
                  }}
                  error={errors.phoneNumber?.message}
                  as={
                    <Input
                      adornment={
                        phonePrefix && <Text color="softPeanut" size="m">{`+${phonePrefix}`}</Text>
                      }
                      width="240"
                      onKeyPress={event => {
                        const keyCode = event.keyCode || event.which;
                        const keyValue = String.fromCharCode(keyCode);

                        if (/\+|-/.test(keyValue)) {
                          event.preventDefault();
                        }
                      }}
                    />
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles._callout_container}>
          <Callout>
            <span role="img" aria-label="hand pointing right">
              👉
            </span>
            <b> Make sure to deactivate your voicemail.</b> Outgoing calls will connect to your
            phone first before connecting to leads. If you have voice mail activate, the system
            could mistake this with you answering the call, and unwantedly continue connecting to
            the lead.
          </Callout>
        </div>
      </ModalContent>
      <ModalFooter>
        <Button variant="clear" onClick={handleClose}>
          Cancel
        </Button>
        <Button onClick={handleSubmit(onSubmit)} disabled={formState.isSubmitting}>
          {formState.isSubmitting ? <Spinner name="loadingCircle" size={12} /> : 'Save'}
        </Button>
      </ModalFooter>
    </>
  );
};

export default AddPhoneStep;
