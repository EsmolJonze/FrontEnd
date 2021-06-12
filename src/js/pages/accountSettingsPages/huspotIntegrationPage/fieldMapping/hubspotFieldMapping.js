import React from 'react';
import FieldMapping from '../../../../layouts/integrationLayout/fieldMappingTab';

const HubspotFieldMapping = () => {
  const link = 'https://support.bloobirds.com/hc/en-us/articles/360018712399';
  const mappings = [
    {
      name: 'LEAD__HUBSPOT',
      bobjectType: 'Lead',
      accountTrigger: 'LEAD__HUBSPOT',
      text: 'Sync Bloobirds leads with HubSpot contacts',
      title: 'Contact mapping',
    },
    {
      name: 'COMPANY__HUBSPOT',
      bobjectType: 'Company',
      accountTrigger: 'COMPANY__HUBSPOT',
      text: 'Sync Bloobirds companies with HubSpot accounts',
      title: 'Company mapping',
    },
    {
      name: 'MEETING__HUBSPOT',
      bobjectType: 'Deal',
      accountTrigger: 'MEETING__HUBSPOT',
      text: 'Sync Bloobirds meetings with HubSpot events',
      title: 'Deal mapping',
    },
  ];
  const sobjectMap = {
    LEAD__HUBSPOT: 'Contact',
    CONTACT__HUBSPOT: 'Contact',
    ACTIVITY__HUBSPOT: 'Task',
    MEETING__HUBSPOT: 'Deal',
    COMPANY__HUBSPOT: 'Account',
  };
  return (
    <FieldMapping
      crm="Hubspot"
      mappings={mappings}
      initMapping={mappings[0]}
      link={link}
      sobjectMap={sobjectMap}
    />
  );
};
export default HubspotFieldMapping;
