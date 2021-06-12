import styles from '../syncSettingsTab.module.css';
import {
  Checkbox,
  Icon,
  Item,
  MultiSelect,
  Select,
  Text,
} from '@bloobirds-it/bloobirds-platform-component-library';
import PropTypes from 'prop-types';
import React from 'react';

const LeadSyncSettings = ({
  accountLeadTrigger,
  accountTriggers,
  mappedLeadStatus,
  onChange,
  onChange1,
  onClick,
  standardTriggers,
  value,
  crm,
}) => (
  <div className={styles._children_lead_container}>
    {crm === 'Salesforce' && (
      <>
        <div className={styles._children_multiselect}>
          <Text color="peanut" size="m" weight="bold">
            When a Bloobirds lead is created or updated
          </Text>
          <Icon name="arrowRight" color="softPeanut" size="24" />
          {accountTriggers && standardTriggers && (
            <Select value={value} onChange={onChange}>
              <Item value={'alwaysCreateLead'}>Create lead in Salesforce</Item>
              <Item value={'alwaysCreateContact'}>Create contact in Salesforce</Item>
              <Item value={'createLeadOrContact'}>
                Create contact only if its company is in Salesforce, or else create lead
              </Item>
            </Select>
          )}
        </div>
        <div className={styles._children_text}>
          <Icon name="infoFilled" color="darkBloobirds" size="24" />
          <Text size="s" color="darkBloobirds">
            Deleting a lead in Bloobirds won't delete the corresponding lead/contact in Salesforce
          </Text>
        </div>
      </>
    )}
    <div className={styles._children_multiselect}>
      <Text color="peanut" size="m" weight="bold">
        {crm === 'Salesforce'
          ? 'Only create a lead/contact when lead status is'
          : 'Only create a contact when lead status is'}
      </Text>
      <Icon name="arrowRight" color="softPeanut" size="24" />
      {accountLeadTrigger && (
        <MultiSelect
          value={accountLeadTrigger.leadStatus}
          onChange={onChange1}
          placeholder="Select a lead status"
        >
          {mappedLeadStatus}
        </MultiSelect>
      )}
    </div>
    {accountLeadTrigger && crm === 'Salesforce' && (
      <div className={styles._children_lead_checkbox}>
        <Checkbox
          defaultChecked={accountLeadTrigger.searchExistingLead === true}
          onClick={onClick}
          expand
        >
          Don't create a lead/contact if it's already in Salesforce to avoid duplicates
        </Checkbox>
      </div>
    )}
  </div>
);

export default LeadSyncSettings;

LeadSyncSettings.propTypes = {
  accountLeadTrigger: PropTypes.any,
  accountTriggers: PropTypes.any,
  mappedLeadStatus: PropTypes.any,
  onChange: PropTypes.func,
  onChange1: PropTypes.func,
  onClick: PropTypes.func,
  standardTriggers: PropTypes.any,
  value: PropTypes.any,
};
