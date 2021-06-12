import React, { useEffect } from 'react';
import {
  Button,
  ModalContent,
  ModalFooter,
  Skeleton,
  Text,
  useToasts,
} from '@bloobirds-it/bloobirds-platform-component-library';
import { useForm, FormContext } from 'react-hook-form';
import {
  useActiveCompany,
  useActiveOpportunities,
  useCadenceControl,
  useLeads,
} from '../../../../hooks';
import { useUserSettings } from '../../../../components/userPermissions/hooks';
import styles from './updateLeadStatuses.module.css';
import { BOBJECT_TYPES } from '../../../../constants/bobject';
import LeadCard from './leadCard';
import { STEPS } from '../cadenceControlModal.machine';
import { LEAD_FIELDS_LOGIC_ROLE } from '../../../../constants/lead';
import { isDiscarded, isNurturing } from '../../../../utils/lead.utils';

const UpdateLeadStatusesStep = ({ handleBack, handleSave }) => {
  const settings = useUserSettings();
  const { createToast } = useToasts();
  const { company: companyActive } = useActiveCompany();
  const { bobject, step } = useCadenceControl();
  const { opportunities } = useActiveOpportunities(companyActive?.id.value);
  const {
    leads,
    updateLeadsByCompany,
    updateLeadsByOpportunity,
    patchLead,
    resetLeads,
    isLoaded: isLeadsLoaded,
  } = useLeads('cadenceControl');
  const salesFeatureEnabled = settings?.account?.features.salesFeature;
  const hasPreviousStep = step !== STEPS.UPDATE_LEADS_STATUSES;
  const methods = useForm();

  useEffect(() => {
    if (bobject && bobject?.id.typeName === BOBJECT_TYPES.COMPANY) {
      updateLeadsByCompany(bobject?.id.value);
    } else if (bobject && bobject?.id.typeName === BOBJECT_TYPES.OPPORTUNITY) {
      updateLeadsByOpportunity(bobject?.id.value);
    }
  }, [bobject]);

  const onSubmit = async data => {
    if (data) {
      Object.keys(data).forEach(leadId => {
        const newData = {
          [LEAD_FIELDS_LOGIC_ROLE.STATUS]: data[leadId].status,
          [LEAD_FIELDS_LOGIC_ROLE.OPPORTUNITY]:
            data[leadId].opportunity !== 'none' ? data[leadId].opportunity : null,
        };

        if (isDiscarded(data[leadId].status)) {
          newData[LEAD_FIELDS_LOGIC_ROLE.DISCARDED_REASONS] = data[leadId].reason;
        } else if (isNurturing(data[leadId].status)) {
          newData[LEAD_FIELDS_LOGIC_ROLE.NURTURING_REASONS] = data[leadId].reason;
        }

        patchLead(leadId, newData).then(() =>
          createToast({ type: 'success', message: 'Changes successfully saved' }),
        );
      });
    }

    handleSave();
  };

  useEffect(() => () => resetLeads(), []);

  return (
    <FormContext {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <ModalContent>
          <div className={styles._section_title__wrapper}>
            <Text size="m" weight="medium" color="peanut">
              Review the status of all leads and whether they should be assigned to a cadence
            </Text>
          </div>
          <div className={styles._section__wrapper}>
            <div className={styles._table__header}>
              <div className={styles._column_1}>
                <Text color="softPeanut" size="s">
                  Lead name
                </Text>
              </div>
              <div className={styles._column_2}>
                <Text color="softPeanut" size="s">
                  Lead status
                </Text>
                {salesFeatureEnabled && (
                  <Text color="softPeanut" size="s">
                    Opportunity
                  </Text>
                )}
                <Text color="softPeanut" size="s">
                  Nurturing / Discarded reason
                </Text>
              </div>
            </div>
            <div className={styles._table__body}>
              <React.Suspense fallback={<Skeleton variant="rect" height={50} width="100%" />}>
                {isLeadsLoaded ? (
                  leads?.map(lead => (
                    <LeadCard key={lead?.id} lead={lead} opportunities={opportunities} />
                  ))
                ) : (
                  <Skeleton variant="rect" height={50} width="100%" />
                )}
              </React.Suspense>
            </div>
          </div>
        </ModalContent>
        <ModalFooter>
          <div className={styles._buttons__wrapper}>
            {hasPreviousStep && (
              <Button dataTest="formBack" variant="clear" onClick={handleBack}>
                Back
              </Button>
            )}
            <div className={styles._button_save_wrapper}>
              <Button dataTest="formSave" type="submit">
                Save
              </Button>
            </div>
          </div>
        </ModalFooter>
      </form>
    </FormContext>
  );
};

export default UpdateLeadStatusesStep;
