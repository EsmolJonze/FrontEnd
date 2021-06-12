import React, { useState } from 'react';
import {
  Button,
  Callout,
  Modal,
  ModalFooter,
  Text,
  useToasts,
} from '@bloobirds-it/bloobirds-platform-component-library';
import AutoCompleteSelect from '../../../app/main/board/task/taskBoard/workspace/addQcTask/AutoCompleteSelect';
import { useActiveLeads, useBobjectFormCreation, useRouter } from '../../../hooks';
import { getValueFromLogicRole } from '../../../utils/bobjects.utils';
import { BobjectApi } from '../../../misc/api/bobject';
import styles from './addQcToLeadModal.module.css';
import { companyIdUrl } from '../../../app/_constants/routes';

const AddQcToLeadModal = ({ open, handleClose, leadId }) => {
  const [companyId, setCompanyId] = useState(null);
  const { createToast } = useToasts();
  const { openAddCompanyAndAssign } = useBobjectFormCreation();
  const { selectedLead: activeLead } = useActiveLeads();
  const { history } = useRouter();
  const leadName = getValueFromLogicRole(activeLead, 'LEAD__NAME');

  const assignLeadToCompany = async () => {
    try {
      await BobjectApi.request()
        .Lead()
        .partialSet({
          bobjectId: activeLead?.id.objectId || leadId,
          data: {
            LEAD__COMPANY: companyId,
          },
        });
      createToast({ type: 'success', message: 'Lead added to an existing Qualified Company' });
      history.push(companyIdUrl(companyId));
    } catch (e) {
      createToast({ type: 'error', message: 'Something went wrong' });
    }
  };

  return (
    <Modal
      title={leadName ? `Assign ${leadName} to other company` : 'Assign lead to a company'}
      open={open}
      onClose={handleClose}
      width={700}
    >
      <div className={styles._content__wraper}>
        <div className={styles._info__wrapper}>
          <Callout icon="info" width="100%">
            <Text size="m">
              This will move all <strong>past activity</strong> related to the lead{' '}
              <strong>to the new company's activity feed </strong>
              (Calls, Emails, LinkedIn Messages, Notes and Meetings). All lead activity from now on
              will appear in the new company's activity feed.
            </Text>
          </Callout>
        </div>
        <div className={styles._autocomplete__wrapper}>
          <AutoCompleteSelect onCompanyIdChange={setCompanyId} companyId={companyId} />
        </div>
      </div>
      <ModalFooter>
        <div>
          <Button variant="clear" color="tomato" onClick={handleClose}>
            Cancel
          </Button>
        </div>
        <div className={styles._confirm__button}>
          <Button
            variant="secondary"
            onClick={() => {
              openAddCompanyAndAssign(activeLead?.id.objectId || (leadId && leadId));
              handleClose();
            }}
          >
            Create new QC
          </Button>
          <Button
            disabled={!companyId}
            onClick={() => {
              assignLeadToCompany();
              handleClose();
            }}
          >
            Assign
          </Button>
        </div>
      </ModalFooter>
    </Modal>
  );
};

export default AddQcToLeadModal;
