import React from 'react';
import {
  Button,
  Modal,
  ModalContent,
  ModalFooter,
  Text,
} from '@bloobirds-it/bloobirds-platform-component-library';
import styles from './ConfirmDeleteModal.module.css';
import { getFieldByLogicRole, getRelatedBobject } from '../../utils/bobjects.utils';
import { useBobjectDetailsVisibility, useRouter } from '../../hooks';
import useConfirmDeleteModal from '../../hooks/useConfirmDeleteModal';
import { bobjectFieldsModel } from '../../misc/model/bobjectFieldsModel';
import { BobjectApi } from '../../misc/api/bobject';
import { APP_CL_COMPANIES, companyUrl, APP_CL_LEADS } from '../../app/_constants/routes';
import { LEAD_FIELDS_LOGIC_ROLE } from '../../constants/lead';

const ConfirmDeleteModal = () => {
  const { history } = useRouter();
  const { bobject, isOpen, closeDeleteModal } = useConfirmDeleteModal();
  const { closeBobjectDetails } = useBobjectDetailsVisibility();

  if (!isOpen) return null;

  const bobjectId = bobject.id.objectId;
  const bobjectType = bobject.id.typeName;
  const model = bobjectFieldsModel(bobject.fields);
  const bobjectName = model.findByLogicRole(`${bobjectType.toUpperCase()}__NAME`)?.value;

  const handleDelete = async () => {
    await BobjectApi.request()
      .bobjectType(bobjectType)
      .delete(bobjectId);

    if (bobjectType === 'Company') {
      history.push(APP_CL_COMPANIES);
    } else if (bobjectType === 'Opportunity') {
      const company = getRelatedBobject(bobject, 'Company');
      history.push(companyUrl(company));
    } else if (bobjectType === 'Lead') {
      const companyLead = getFieldByLogicRole(bobject, LEAD_FIELDS_LOGIC_ROLE.COMPANY)?.text;

      if (!companyLead) {
        history.push(APP_CL_LEADS);
      }
    }

    closeBobjectDetails();
    closeDeleteModal();
  };

  return (
    <Modal width={600} title={`Delete ${bobjectType}`} open={isOpen} onClose={closeDeleteModal}>
      <ModalContent>
        <div className={styles._content}>
          <Text size="m">
            You're about to permanently delete the {bobjectType.toLowerCase()}
            {bobjectName && <b> {bobjectName}</b>}.
          </Text>
          <Text size="m">
            <b>This action cannot be undone</b>, are you sure you want to continue?
          </Text>
        </div>
      </ModalContent>
      <ModalFooter>
        <Button variant="tertiary" onClick={closeDeleteModal}>
          Cancel
        </Button>
        <Button
          variant="primary"
          color="tomato"
          dataTest="deleteModalDeleteButton"
          onClick={handleDelete}
        >
          Delete
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ConfirmDeleteModal;
