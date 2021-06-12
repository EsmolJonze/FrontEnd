import React from 'react';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';
import SideBar from './sidebar';
import Routes from './accountSettingsPages.routes';
import styles from './accountSettingsPage.module.css';

const AccountSettingsPage = () => {
  useDocumentTitle('Account Settings');
  return (
    <div className={styles._container}>
      <SideBar />
      <div className={styles._content__container}>
        <Routes />
      </div>
    </div>
  );
};

export default AccountSettingsPage;
