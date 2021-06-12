import React from 'react';
import styles from './opportunityCardBody.module.css';
import OpportunityDetails from '../../../../opportunityDetails';

const OpportunityCardBody = ({ opportunity }) => (
  <div className={styles._opportunity}>
    <OpportunityDetails opportunity={opportunity} />
  </div>
);

export default OpportunityCardBody;
