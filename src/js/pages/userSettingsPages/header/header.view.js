import React from 'react';
import { Icon, Text } from '@bloobirds-it/bloobirds-platform-component-library';
import styles from './header.module.css';
import { usePreviousUrl, useRouter } from '../../../hooks';
import { APP } from '../../../app/_constants/routes';

const Header = ({ title }) => {
  const { history } = useRouter();
  const { getPreviousUrl } = usePreviousUrl();
  const handleClick = () => {
    const previousUrl = getPreviousUrl();
    if (previousUrl !== '') {
      history.goBack();
    } else {
      history.push(APP);
    }
  };
  return (
    <header className={styles._header__container}>
      <a onClick={handleClick} className={styles._back__button}>
        <Icon name="arrowLeft" size="18" />
        <Text size="m" color="bloobirds" uppercase>
          Back
        </Text>
      </a>
      <div className={styles._title__container}>
        <Text size="m" color="peanut" weight="medium">
          {title}
        </Text>
      </div>
    </header>
  );
};

export default Header;
