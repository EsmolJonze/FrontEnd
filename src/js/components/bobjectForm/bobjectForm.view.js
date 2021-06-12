import React, { useEffect, useState } from 'react';
import {
  Button,
  Modal,
  ModalContent,
  ModalFooter,
} from '@bloobirds-it/bloobirds-platform-component-library';
import { FormContext, useForm } from 'react-hook-form';
import useConfirmDeleteModal from '../../hooks/useConfirmDeleteModal';
import { useBobjectFormVisibility, useBobjectForm, useActiveCompany } from '../../hooks';
import Section from './section';
import { useBobjectPermissions } from '../userPermissions/hooks';
import styles from './bobjectForm.module.css';
import BobjectFormSkeleton from './bobjectFormSkeleton';
import { getValueFromLogicRole } from '../../utils/bobjects.utils';
import { BobjectApi } from '../../misc/api/bobject';

const BobjectForm = () => {
  const { openDeleteModal } = useConfirmDeleteModal();
  const { closeBobjectForm } = useBobjectFormVisibility();
  const {
    sections,
    saveBobject,
    defaultValues,
    loading,
    mode,
    bobject,
    bobjectType,
  } = useBobjectForm();
  const { company } = useActiveCompany();
  const { checkPermissions } = useBobjectPermissions();
  const methods = useForm({ defaultValues });
  const [hasPermission, setHasPermissions] = useState(false);

  const hasCompany = !!company;
  const isCreating = mode === 'CREATE';
  const { isValid, submitCount, isSubmitting } = methods.formState;
  const canSave = (submitCount === 0 || isValid) && (isCreating || hasPermission || !hasCompany);

  useEffect(() => {
    if (hasCompany) {
      setHasPermissions(checkPermissions(company));
    } else if (bobjectType === 'Company') {
      setHasPermissions(checkPermissions(bobject));
    } else {
      const ownerCompanyId = getValueFromLogicRole(
        bobject,
        `${bobjectType.toUpperCase()}__COMPANY`,
      );
      if (ownerCompanyId) {
        BobjectApi.request()
          .Company()
          .getForm(ownerCompanyId.split('/')[2])
          .then(ownerCompany => {
            setHasPermissions(checkPermissions(ownerCompany));
          });
      }
    }
  }, []);

  return (
    <Modal
      open
      title={`${mode === 'EDIT' ? 'Edit' : 'Create'} ${bobjectType}`}
      onClose={closeBobjectForm}
    >
      <ModalContent>
        {loading ? (
          <BobjectFormSkeleton />
        ) : (
          <FormContext {...methods}>
            {sections.map(section => (
              <Section key={section.title} {...section} />
            ))}
          </FormContext>
        )}
      </ModalContent>
      <ModalFooter>
        <div className={styles._footer_buttons}>
          <Button disabled={isSubmitting} variant="tertiary" onClick={closeBobjectForm}>
            Cancel
          </Button>
          {mode === 'EDIT' && (
            <Button
              color="tomato"
              variant="tertiary"
              dataTest="bobjectFormDeleteButton"
              disabled={isSubmitting}
              onClick={() => {
                openDeleteModal(bobject);
                closeBobjectForm();
              }}
            >
              Delete
            </Button>
          )}
        </div>
        <Button
          disabled={!canSave || isSubmitting}
          dataTest="formSave"
          onClick={methods.handleSubmit(saveBobject)}
        >
          Save
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default BobjectForm;
