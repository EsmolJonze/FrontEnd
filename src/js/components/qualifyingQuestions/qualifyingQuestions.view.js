import React from 'react';
import { Text } from '@bloobirds-it/bloobirds-platform-component-library';
import { useActiveLeads, useQualifyingQuestions } from '../../hooks';
import styles from './qualifyingQuestions.module.css';
import { getFieldById } from '../../utils/bobjects.utils';
import useActiveMessagingFilters from '../../hooks/useActiveMessagingFilters';
import BannerPlaybook from '../../layouts/contactLayout/contactTabs/messagingTabs/messagingTab/bannerPlaybook';
import QualifyingQuestion from './qualifyingQuestion/qualifyingQuestion';
import useHasCompanyEditPermissions from '../../hooks/useHasCompanyEditPermissions';

const EmptyContainer = ({ children }) => (
  <div className={styles.emptyContainer}>
    <Text size="m" align="center" color="softPeanut">
      {children}
    </Text>
  </div>
);

const QualifyingQuestionsList = () => {
  const { selectedLead, leads } = useActiveLeads();
  const hasPermission = useHasCompanyEditPermissions();
  const filters = useActiveMessagingFilters();
  const { qualifyingQuestions, updateQualifyingQuestionValue } = useQualifyingQuestions({
    ...filters,
    enabled: true,
  });

  if (!leads.length) {
    return (
      <EmptyContainer>
        There has to be at least one lead created to see the qualifying questions.
      </EmptyContainer>
    );
  }

  if (!selectedLead) {
    return (
      <EmptyContainer>
        You should select one lead to answer the qualifying questions.
      </EmptyContainer>
    );
  }

  if (!qualifyingQuestions) {
    return (
      <EmptyContainer>There are no qualifying questions. Try another combination.</EmptyContainer>
    );
  }

  return (
    <div className={styles.qualifyingQuestionList}>
      {qualifyingQuestions.map(({ id, ...props }) => (
        <QualifyingQuestion
          {...props}
          disabled={!hasPermission}
          key={id}
          value={getFieldById(selectedLead, id)?.value}
          onChange={value => {
            updateQualifyingQuestionValue(id, selectedLead.id.objectId, value);
          }}
        />
      ))}
    </div>
  );
};

const QualifyingQuestions = () => (
  <section>
    <BannerPlaybook />
    <QualifyingQuestionsList />
  </section>
);

export default QualifyingQuestions;
