import React from 'react';
import { Button } from '@bloobirds-it/bloobirds-platform-component-library';
import { APP_TASKS_WELCOME } from '../../app/_constants/routes';
import { NoPermissionSvg } from '../../../assets/svg';
import { useRouter } from '../../hooks';
import styles from './noPermissionsPage.module.css';

const NoPermissionsPage = () => {
  const { history } = useRouter();

  return (
    <div className={styles._wrapper}>
      <NoPermissionSvg className={styles._image} />
      <p className={styles._text}>
        Unfortunately, you are not allowed to access the page you've requested. It seems you don't
        have sufficient permissions.
      </p>
      <Button className={styles._button} onClick={() => history.push(APP_TASKS_WELCOME)}>
        Back to home
      </Button>
    </div>
  );
};

export default NoPermissionsPage;
