import React from 'react';
import styles from './card.module.css';
import { Icon, Text } from '@bloobirds-it/bloobirds-platform-component-library';
import { Link } from 'react-router-dom';

const Card = ({ title, name, subtitle, message, link }) => (
  <section className={styles._container}>
    <Text color="softPeanut" size="m" uppercase>
      {title}
    </Text>
    <div className={styles._body}>
      {link ? (
        <Link to={link} className={styles._body_link}>
          <Text weight="medium" size="xl" color="bloobirds">
            {name}
          </Text>
          <Icon name="externalLink" />
        </Link>
      ) : (
        <Text weight="medium" size="xl" color="peanut">
          {name}
        </Text>
      )}
      {name !== subtitle && (
        <Text color="peanut" size="s">
          {subtitle}
        </Text>
      )}
    </div>
    <Text size="s" color="tangerine">
      {message}
    </Text>
  </section>
);

export default Card;
