import React from 'react';
import {
  Button,
  Icon,
  IconButton,
  Modal,
  ModalFooter,
  Text,
} from '@bloobirds-it/bloobirds-platform-component-library';
import { useMinimizableModals } from '../../../hooks/emails/useMinimizableModals';
import styles from './minimizableModal.module.css';
import { useBobjectForm, usePicklistValues, useRouter } from '../../../hooks';
import Section from '../../bobjectForm/section';
import BobjectFormSkeleton from '../../bobjectForm/bobjectFormSkeleton';
import { FormContext, useForm } from 'react-hook-form';
import omit from 'lodash/omit';
import keys from 'lodash/keys';

const MinimizableModal = ({
  id,
  bobjectType,
  type,
  defaultValues,
  defaultRelatedValues,
  additionalValues,
  hasPermission,
  loading,
  sectionsForm,
  savedData,
}) => {
  const { history } = useRouter();
  const { getMinimizableModalContext, openConfirmModal } = useMinimizableModals();
  const { closeModal, company, isOpen, minimize } = getMinimizableModalContext(id);
  const defaultValuesToUse = savedData?.values || { ...defaultValues, ...defaultRelatedValues };
  const methods = useForm({ defaultValues: defaultValuesToUse });
  const { basicSaveBobject } = useBobjectForm();
  const hasCompany = !!company;
  const { isValid, submitCount, isSubmitting } = methods.formState;
  const canSave = (submitCount === 0 || isValid) && (hasPermission || !hasCompany);
  const activityTypes = usePicklistValues({ picklistLogicRole: 'ACTIVITY__TYPE' });

  const onSubmit = async () => {
    const extraDefaultValues = omit(defaultValuesToUse, keys(methods.getValues()));
    const valuesToUse = {
      ...methods.getValues(),
      ...extraDefaultValues,
    };
    const activityTypeToSend = bobjectType === 'Activity' && {
      ACTIVITY__TYPE: activityTypes.find(activityType => activityType?.value === type)?.id,
    };
    const valuesToSend = { ...valuesToUse, ...activityTypeToSend };
    await basicSaveBobject(valuesToSend, additionalValues, 'CREATE', bobjectType, {
      type,
      company,
    });
    closeModal();
  };

  const handleMinimize = () => {
    const activityTypeToSend = bobjectType === 'Activity' && {
      ACTIVITY__TYPE: activityTypes.find(activityType => activityType?.value === type)?.id,
    };
    const values = {
      ...methods.getValues(),
      ...defaultValues,
      ...activityTypeToSend,
    };
    minimize({ values, sections: sectionsForm, company });
  };

  const handleRedirect = () => {
    history.push(company.url);
    handleMinimize();
  };

  return (
    <Modal open={isOpen} onClose={() => closeModal(id)}>
      <div className={styles._header__container}>
        <div className={styles._header__info}>
          <div className={styles._header_companyName} onClick={handleRedirect}>
            <Icon name="company" />
            <Text size="m" weight="regular" htmlTag="span" color="bloobirds">
              {company.name}
            </Text>
            <Icon name="externalLink" size={20} color="bloobirds" />
          </div>
          <Text size="s" weight="medium">
            New {type}
          </Text>
        </div>
        <div>
          <IconButton name="minus" size={20} onClick={handleMinimize} />
          <IconButton name="cross" size={24} onClick={() => closeModal(id)} />
        </div>
      </div>
      <div className={styles._container}>
        {loading ? (
          <BobjectFormSkeleton />
        ) : (
          <FormContext {...methods}>
            {sectionsForm.map(section => (
              <Section
                key={section.title}
                {...section}
                hideActivityType
                isRequiredBeforeMeeting={section.title === 'Required information to close Meeting'}
              />
            ))}
          </FormContext>
        )}
      </div>
      <ModalFooter>
        <div className={styles._footer__container}>
          <div className={styles._footerActions__container}>
            <span>
              <Button
                disabled={isSubmitting}
                variant="clear"
                color="bloobirds"
                onClick={() => openConfirmModal(id)}
              >
                Cancel
              </Button>
            </span>
            <span>
              <Button
                dataTest="formSave"
                onClick={methods.handleSubmit(onSubmit)}
                disabled={isSubmitting || !canSave}
              >
                Save
              </Button>
            </span>
          </div>
        </div>
      </ModalFooter>
    </Modal>
  );
};

export default MinimizableModal;
