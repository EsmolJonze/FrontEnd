import React from 'react';
import styles from './linkedinSettings.module.css';
import { Text } from '@bloobirds-it/bloobirds-platform-component-library';
import { LogoSvg } from '../../../../assets/svg';

const CallSettings = () => (
  <div className={styles._container} data-intercom="user-settings-page-call">
    <div className={styles._content__box}>
      <div className={styles._logo__container}>
        <LogoSvg />
      </div>
      <div className={styles._text__box} />
      <div className={styles._heading__container}>
        <Text size="m" align="center">
          <Text size="m" weight="bold" inline>
            Bloobirds Capture plugin
          </Text>{' '}
          helps you prospect{' '}
          <Text size="m" weight="bold" inline>
            {' '}
            10x faster! 🚀
          </Text>
        </Text>
        <Text size="m" align="center">
          Research your prospects on LinkedIn and save them right into Bloobirds - with just a
          single click!
        </Text>
      </div>
      <span
        className={styles._download__link}
        onClick={() => {
          window.open(
            'https://chrome.google.com/webstore/detail/bloobirds/bfnmjliageccndnbpoadbigbnhicogbh',
          );
        }}
      >
        You can download the latest version here.
      </span>
      <Text color="peanut" size="s" align="center">
        For easy instructions on how to install and use the Bloobirds Capture plugin please see our{' '}
        <span
          className={styles._link}
          onClick={() => {
            window.open('https://support.bloobirds.com/hc/en-us/articles/360019542260', '_blank');
          }}
        >
          knowledge base.
        </span>
      </Text>
    </div>
  </div>
);

export default CallSettings;
