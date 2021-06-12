import React, { useEffect, useState } from 'react';
import {
  Button,
  Chip,
  ChipGroup,
  Item,
  Modal,
  ModalContent,
  ModalFooter,
  Select,
  Text,
  useToasts,
} from '@bloobirds-it/bloobirds-platform-component-library';
import { getValueFromLogicRole } from '../../../utils/bobjects.utils';
import { LEAD_FIELDS_LOGIC_ROLE } from '../../../constants/lead';
import {
  useActiveCompany,
  useActiveLeads,
  useActiveOpportunities,
  useBobjectFormCreation,
  useLeads,
} from '../../../hooks';
import styles from './addLeadToOppModal.module.css';

const ASSIGMENT_MODES = Object.seal({
  NEW: 'NEW',
  EDIT: 'EDIT',
});

const AddLeadToOpportunityModal = ({ handleClose, leads: opportunityLeads = [] }) => {
  const { createToast } = useToasts();
  const { openAddLeadWithOpportunity } = useBobjectFormCreation();
  const { selectedOpportunity } = useActiveOpportunities();
  const { company } = useActiveCompany();
  const { selectedLead } = useActiveLeads();
  const { patchLead, updateLeadsByCompany, isLoaded, leads } = useLeads('leadAssigment');
  const [assigmentMode, setAssigmentMode] = useState(ASSIGMENT_MODES.NEW);
  const [selectedLeadId, setSelectedLeadId] = useState();
  const [filteredLeads, setFilteredLeads] = useState([]);

  const existsLead = leadId => opportunityLeads.find(oppLead => oppLead?.id.value === leadId);

  const handleContinue = () => {
    if (assigmentMode === ASSIGMENT_MODES.NEW) {
      openAddLeadWithOpportunity(selectedOpportunity.id.value);
    } else {
      const newData = {
        [LEAD_FIELDS_LOGIC_ROLE.OPPORTUNITY]: selectedOpportunity?.id.value,
      };
      patchLead(selectedLeadId, newData).then(() =>
        createToast({ type: 'success', message: 'Changes successfully saved' }),
      );
    }
    handleClose();
  };

  useEffect(() => {
    updateLeadsByCompany(company?.id.value);
  }, [company]);

  useEffect(() => {
    setFilteredLeads(leads?.filter(lead => !existsLead(lead?.id.value)));
  }, [leads]);

  useEffect(() => {
    if (assigmentMode === ASSIGMENT_MODES.NEW) {
      setSelectedLeadId(null);
    } else {
      setSelectedLeadId(selectedLead?.id.objectId);
    }
  }, [assigmentMode]);

  return (
    <Modal open onClose={handleClose} title="Lead assigment">
      <ModalContent>
        <div className={styles._actionContainer}>
          <Text size="m" weight="medium">
            What lead do you want to assign to this opportunity?
          </Text>
          <ChipGroup value={assigmentMode} onChange={value => value && setAssigmentMode(value)}>
            <Chip dataTest="leadFlow-editLead" value={ASSIGMENT_MODES.EDIT}>
              Edit an existing one
            </Chip>
            <Chip dataTest="leadFlow-newLead" value={ASSIGMENT_MODES.NEW}>
              Create a new one
            </Chip>
          </ChipGroup>
        </div>
        <div className={styles._leadContainer}>
          <Text size="m" weight="medium">
            Choose from your existing leads to continue
          </Text>
          <Select
            placeholder="Lead name*"
            dataTest="leadFlow-leadDropdown"
            defaultValue={selectedLeadId}
            value={selectedLeadId}
            onChange={setSelectedLeadId}
            disabled={leads?.length === 0 || assigmentMode === ASSIGMENT_MODES.NEW}
            width="100%"
          >
            <Item value="">
              <em>None</em>
            </Item>
            {isLoaded &&
              filteredLeads?.map(lead => (
                <Item
                  dataTest="leadFlow-leadDropdownName"
                  value={lead?.id.objectId}
                  key={`lead-${lead.id.value}`}
                >
                  {getValueFromLogicRole(lead, LEAD_FIELDS_LOGIC_ROLE.FULL_NAME)}
                </Item>
              ))}
          </Select>
        </div>
      </ModalContent>
      <ModalFooter>
        <div className={styles._buttons__wrapper}>
          <Button variant="clear" onClick={handleClose}>
            Cancel
          </Button>
          <div className={styles._forward__buttons}>
            <Button
              dataTest="leadFlow-continueButton"
              disabled={assigmentMode === ASSIGMENT_MODES.EDIT && !selectedLeadId}
              onClick={handleContinue}
            >
              Continue
            </Button>
          </div>
        </div>
      </ModalFooter>
    </Modal>
  );
};

export default AddLeadToOpportunityModal;
