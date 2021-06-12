import React from 'react';
import { Text } from '@bloobirds-it/bloobirds-platform-component-library';
import styles from './messagingTemplateSidebar.module.css';

export const MessagingTemplateSidebar = ({ children }) => (
  <aside className={styles.sidebar}>{children}</aside>
);

export const MessagingTemplateSidebarSection = ({ title, description, children, hidden }) => (
  <section className={styles.section} style={{ display: hidden ? 'none' : undefined }}>
    <header className={styles.header}>
      <Text size="s" color="softPeanut" weight="medium" uppercase>
        {title}
      </Text>
      {description && (
        <Text className={styles.description} size="xs" color="softPeanut">
          {description}
        </Text>
      )}
    </header>
    {children}
  </section>
);
