import React, { useState, useEffect, useMemo } from 'react';
import {
  ChipGroup,
  ModalContent,
  Text,
  Chip,
  Select,
  Item,
  Button,
  ModalFooter,
} from '@bloobirds-it/bloobirds-platform-component-library';
import {
  useActiveOpportunities,
  useBobjectFormVisibility,
  useCadenceControl,
  useBobjectFormCreation,
} from '../../../hooks';
import styles from './opportunityControl.module.css';
import { getValueFromLogicRole } from '../../../utils/bobjects.utils';
import OpportunityDetails from '../../opportunityDetails';

const CONTROL_MODES = Object.seal({
  NEW: 'NEW',
  EDIT: 'EDIT',
});

const OpportunityControl = ({ handleBack, handleClose }) => {
  const [controlMode, setControlMode] = useState(CONTROL_MODES.NEW);
  const [selectedOpportunityId, setSelectedOpportunity] = useState(null);
  const { openAddOpportunity } = useBobjectFormCreation();
  const { openEditModal } = useBobjectFormVisibility();
  const {
    opportunities,
    selectedOpportunity: currentSelectedOpportunity,
  } = useActiveOpportunities();
  const { openCadenceControl } = useCadenceControl();

  const selectedOpportunity = useMemo(
    () => opportunities.find(opp => opp.id.value === selectedOpportunityId),
    [selectedOpportunityId],
  );

  useEffect(() => {
    if (controlMode === CONTROL_MODES.NEW) {
      setSelectedOpportunity(null);
    }
  }, [controlMode]);

  useEffect(() => {
    if (currentSelectedOpportunity) {
      setControlMode(CONTROL_MODES.EDIT);
      setSelectedOpportunity(currentSelectedOpportunity?.id.value);
    }
  }, [currentSelectedOpportunity]);

  const handleContinue = () => {
    handleClose();
    selectedOpportunity
      ? openEditModal({ bobject: selectedOpportunity, onSuccess: openCadenceControl })
      : openAddOpportunity({ onSuccess: openCadenceControl });
  };

  const handleSkip = () => {
    handleClose();
  };

  return (
    <>
      <ModalContent>
        <div className={styles._actionContainer}>
          <Text size="m" weight="medium">
            What do you want to do with your opportunities?
          </Text>
          <ChipGroup value={controlMode} onChange={setControlMode}>
            <Chip
              dataTest="contactFlowEditOpportunity"
              value={CONTROL_MODES.EDIT}
              disabled={opportunities.length === 0}
            >
              Edit an existing one
            </Chip>
            <Chip value={CONTROL_MODES.NEW}>Create a new one</Chip>
          </ChipGroup>
        </div>
        <div className={styles._opportunityContainer}>
          <Text size="m" weight="medium">
            Choose from your active opportunities to continue
          </Text>
          <Select
            dataTest="opportunityDropdown"
            defaultValue={selectedOpportunityId}
            value={selectedOpportunityId}
            onChange={setSelectedOpportunity}
            disabled={opportunities.length === 0 || controlMode === CONTROL_MODES.NEW}
            width="100%"
          >
            <Item value="">
              <em>None</em>
            </Item>
            {opportunities.map(opportunity => (
              <Item
                dataTest="opportunityDropdownName"
                value={opportunity.id.value}
                key={`opportunity-${opportunity.id.value}`}
              >
                {getValueFromLogicRole(opportunity, 'OPPORTUNITY__NAME')}
              </Item>
            ))}
          </Select>
          {selectedOpportunityId && (
            <div className={styles._selectedOpportunity__container}>
              <OpportunityDetails opportunity={selectedOpportunity} />
            </div>
          )}
        </div>
      </ModalContent>
      <ModalFooter>
        <div className={styles._buttons__wrapper}>
          <Button variant="clear" onClick={handleBack}>
            Back
          </Button>
          <div className={styles._forward__buttons}>
            <Button variant="secondary" onClick={handleSkip}>
              Skip
            </Button>
            <Button
              dataTest="formContinue"
              disabled={controlMode === CONTROL_MODES.EDIT && !selectedOpportunity}
              onClick={handleContinue}
            >
              Continue
            </Button>
          </div>
        </div>
      </ModalFooter>
    </>
  );
};

export default OpportunityControl;
