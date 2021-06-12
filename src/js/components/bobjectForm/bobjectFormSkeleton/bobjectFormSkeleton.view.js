import React from 'react';
import { Skeleton } from '@bloobirds-it/bloobirds-platform-component-library';
import styles from './bobjectFormSkeleton.module.css';

const Section = ({ numbers }) => (
  <section className={styles._section}>
    <header className={styles._header}>
      <Skeleton variant="circle" width={24} height={24} />
      <Skeleton variant="text" height={24} width="25%" />
    </header>
    <div className={styles._divider}>
      <Skeleton variant="rect" height={2} width="100%" />
    </div>
    <div className={styles._content}>
      {numbers.map(number =>
        number % 3 ? (
          <Skeleton variant="rect" height={36} width="100%" />
        ) : (
          <div style={{ gridColumn: '1 / 3' }}>
            <Skeleton variant="rect" height={36} width="100%" />
          </div>
        ),
      )}
    </div>
  </section>
);

const BobjectFormSkeleton = () => (
  <div>
    <Section numbers={[1, 2, 3, 4, 5]} />
    <Section numbers={[6, 7, 8]} />
    <Section numbers={[9, 10, 11, 12]} />
  </div>
);

export default BobjectFormSkeleton;
