import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { BOBJECT_TYPES } from '../../../constants/bobject';
import ContactLayout from '../../../layouts/contactLayout';
import EmptyCard from '../../../layouts/contactLayout/emptyCard';
import { useActiveLeads, useActiveCompany, useActiveOpportunities } from '../../../hooks';

const LeadWithoutCompanyPage = () => {
  const params = useParams();
  const [error, setError] = useState(null);

  const { resetActiveCompany } = useActiveCompany();
  const { resetActiveOpportunities } = useActiveOpportunities();
  const { isLoaded: isLeadLoaded, updateSingleLead, selectedLead: lead } = useActiveLeads();

  useEffect(() => {
    updateSingleLead(params.id, res => {
      setError({ ...res, is400: res.status >= 400 && res.status < 500 });
    });
    resetActiveCompany();
    resetActiveOpportunities();
  }, []);

  return (
    <ContactLayout
      bobjectType={BOBJECT_TYPES.LEAD}
      id={params.id}
      isLoaded={isLeadLoaded}
      bobject={lead}
      InfoCard={EmptyCard}
      showCadence={false}
      error={error}
    />
  );
};

export default LeadWithoutCompanyPage;
