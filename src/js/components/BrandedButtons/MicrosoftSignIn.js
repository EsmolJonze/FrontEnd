import React from 'react';
import styles from './brandedButtons.module.css';
import { MicrosoftSvg } from '../../../assets/svg';

const MicrosoftSignIn = ({ onClick }) => (
  <div className={styles._ms__button} onClick={onClick}>
    <div className={styles._icon}>
      <MicrosoftSvg />
    </div>
    <span className={styles._text}>Sign in with Outlook</span>
  </div>
);
export default MicrosoftSignIn;
