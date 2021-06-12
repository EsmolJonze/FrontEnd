import React from 'react';
import styles from './brandedButtons.module.css';
import { GoogleSvg } from '../../../assets/svg';

const GoogleSignIn = ({ onClick }) => (
  <div className={styles._google__button} onClick={onClick}>
    <div className={styles._icon}>
      <GoogleSvg />
    </div>
    <span className={styles._text}>Sign in with Google</span>
  </div>
);
export default GoogleSignIn;
