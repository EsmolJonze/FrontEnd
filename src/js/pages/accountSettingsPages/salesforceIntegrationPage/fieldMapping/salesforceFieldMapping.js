import React from 'react';
import FieldMapping from '../../../../layouts/integrationLayout/fieldMappingTab';

const SalesforceFieldMapping = () => {
  const link = 'https://support.bloobirds.com/hc/en-us/articles/360017740559';
  const mappings = [
    {
      name: 'ACTIVITY__SALESFORCE',
      bobjectType: 'Activity',
      accountTrigger: 'ACTIVITY__SALESFORCE',
      text: 'Sync Bloobirds activities with Salesforce tasks',
      title: 'Activity mapping',
    },
    {
      name: 'LEAD__SALESFORCE',
      bobjectType: 'Lead',
      accountTrigger: 'LEAD__SALESFORCE',
      text: 'Sync Bloobirds leads with Salesforce leads',
      title: 'Lead mapping',
    },
    {
      name: 'CONTACT__SALESFORCE',
      bobjectType: 'Lead',
      accountTrigger: 'LEAD__SALESFORCE',
      text: 'Sync Bloobirds leads with Salesforce contacts',
      title: 'Contact mapping',
    },
    {
      name: 'COMPANY__SALESFORCE',
      bobjectType: 'Company',
      accountTrigger: 'COMPANY__SALESFORCE',
      text: 'Sync Bloobirds companies with Salesforce accounts',
      title: 'Company mapping',
    },
    {
      name: 'MEETING__SALESFORCE',
      bobjectType: 'Activity',
      accountTrigger: 'MEETING__SALESFORCE',
      text: 'Sync Bloobirds meetings with Salesforce events',
      title: 'Meeting mapping',
    },
  ];
  const sobjectMap = {
    LEAD__SALESFORCE: 'Lead',
    CONTACT__SALESFORCE: 'Contact',
    ACTIVITY__SALESFORCE: 'Task',
    MEETING__SALESFORCE: 'Event',
    COMPANY__SALESFORCE: 'Account',
  };
  return (
    <FieldMapping
      crm="Salesforce"
      mappings={mappings}
      initMapping={mappings[0]}
      link={link}
      sobjectMap={sobjectMap}
    />
  );
};
export default SalesforceFieldMapping;
