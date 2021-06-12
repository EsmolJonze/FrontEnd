import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { sha512 } from 'js-sha512';
import { ServiceApi } from '../../../misc/api/service';
import { Input, Button, Text, useToasts } from '@bloobirds-it/bloobirds-platform-component-library';
import styles from './passwordSettings.module.css';

const validate = ({ newPassword, oldPassword }) =>
  newPassword !== undefined &&
  newPassword !== null &&
  newPassword.length > 0 &&
  oldPassword !== undefined &&
  oldPassword !== null &&
  oldPassword.length > 0 &&
  oldPassword !== newPassword;

const EmailSettings = ({ lastPasswordUpdate, onSubmit }) => {
  const [inputOldPassword, setInputOldPassword] = useState('');
  const [inputNewPassword, setInputNewPassword] = useState('');
  const [validated, setValidated] = useState(
    validate({ newPassword: inputNewPassword, oldPassword: inputOldPassword }),
  );
  const [exec, setExec] = useState(false);
  const { createToast } = useToasts();
  useEffect(() => {
    const newValidated = validate({
      newPassword: inputNewPassword,
      oldPassword: inputOldPassword,
    });
    if (newValidated !== validated) {
      setValidated(newValidated);
    }
  }, [inputNewPassword, inputOldPassword]);
  useEffect(() => {
    if (exec) {
      setExec(false);
      ServiceApi.request({
        url: '/service/users/me/updatePassword',
        method: 'POST',
        body: { oldPassword: sha512(inputOldPassword), newPassword: sha512(inputNewPassword) },
      })
        .catch(() =>
          ServiceApi.request({
            url: '/service/users/me/updatePassword',
            method: 'POST',
            body: { oldPassword: inputOldPassword, newPassword: sha512(inputNewPassword) },
          }),
        )
        .then(() => {
          if (onSubmit) {
            onSubmit();
          }
          setInputOldPassword('');
          setInputNewPassword('');
          createToast({ type: 'success', message: 'Your password has been updated!' });
        })
        .catch(() => {
          setInputOldPassword('');
          setInputNewPassword('');
          createToast({ type: 'error', message: 'Your password is not correct!' });
        });
    }
  }, [exec]);
  const buttonSubmitDisabled = !validated;
  return (
    <div className={styles._container} data-intercom="user-settings-page-security">
      <div className={styles._content}>
        <div className={styles._sectionVertical}>
          <Text color="softPeanut" size="m" htmlTag="span">
            Change your password
          </Text>
          {lastPasswordUpdate && (
            <p>
              Your password was last changed on{' '}
              {format(lastPasswordUpdate, 'YYYY-MM-dd HH:mm:ss', {
                awareOfUnicodeTokens: true,
              })}
            </p>
          )}
          {!lastPasswordUpdate && (
            <Text color="darkGray" size="m" htmlTag="span" className={styles._info__text}>
              Your password was never changed.
            </Text>
          )}
          <Input
            width="100%"
            placeholder="Current Password"
            variant="outlined"
            type="password"
            value={inputOldPassword}
            onChange={value => setInputOldPassword(value)}
          />
          <Input
            width="100%"
            placeholder="New Password"
            variant="outlined"
            type="password"
            value={inputNewPassword}
            onChange={value => setInputNewPassword(value)}
          />
        </div>
        <Button
          disabled={buttonSubmitDisabled}
          onClick={() => {
            if (!buttonSubmitDisabled && !exec) {
              setExec(true);
            }
          }}
        >
          Change Password
        </Button>
      </div>
    </div>
  );
};

export default EmailSettings;
