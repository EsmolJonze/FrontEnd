import React, { useEffect, useMemo, useState } from 'react';
import { useActiveLeads, useActiveUser, useEntity, usePicklistValues } from '../../../hooks';
import { ACTIVITY_FIELDS_LOGIC_ROLE } from '../../../constants/activity';
import {
  TASK_FIELDS_LOGIC_ROLE,
  TASK_STATUS_VALUE_LOGIC_ROLE,
  TASK_TYPE,
} from '../../../constants/task';
import { useMinimizableModals } from '../../../hooks/emails/useMinimizableModals';
import MinimizableModal from './minimizableModal.view';
import { useBobjectPermissions } from '../../userPermissions/hooks';
import useBobjectFieldGroups from '../../../hooks/useBobjectFieldGroups';

const MinimizableModalContainer = ({ id, bobjectType, type }) => {
  const { activeUser } = useActiveUser();
  const { selectedLead } = useActiveLeads();
  const bobjectPicklistFieldValues = useEntity('bobjectPicklistFieldValues');
  const activityTypes = usePicklistValues({ picklistLogicRole: 'ACTIVITY__TYPE' });
  const taskStatuses = usePicklistValues({ picklistLogicRole: 'TASK__STATUS' });
  const { getMinimizableModalContext } = useMinimizableModals();
  const [loadingRelated, setLoadingRelated] = useState(true);
  const { opportunity, company, data: savedData } = getMinimizableModalContext(id);
  const [hasPermission, setHasPermissions] = useState(false);

  const { checkPermissions } = useBobjectPermissions();
  const options = { type };
  const { loading, sections } = useBobjectFieldGroups({ bobjectType, options });
  const sectionsForm = savedData?.sections || sections;

  const defaultValues = useMemo(() => {
    if (bobjectType === 'Activity') {
      return {
        [ACTIVITY_FIELDS_LOGIC_ROLE.LEAD]: selectedLead?.id.value,
        ACTIVITY__TYPE: activityTypes.find(activityType => activityType?.value === type)?.id,
        [ACTIVITY_FIELDS_LOGIC_ROLE.COMPANY]: company.data?.id?.value,
      };
    }
    if (bobjectType === 'Task') {
      return {
        [TASK_FIELDS_LOGIC_ROLE.LEAD]: selectedLead?.id.value,
      };
    }
    return {};
  }, [bobjectType]);

  const additionalValues = useMemo(() => {
    if (bobjectType === 'Activity') {
      return {
        [ACTIVITY_FIELDS_LOGIC_ROLE.OPPORTUNITY]: opportunity?.data?.id?.value,
        [ACTIVITY_FIELDS_LOGIC_ROLE.USER]: activeUser?.id,
      };
    }
    if (bobjectType === 'Task') {
      const nextStepId = bobjectPicklistFieldValues?.findByLogicRole(TASK_TYPE.NEXT_STEP)?.id;
      const todoStatusId = taskStatuses?.find(
        value => value.logicRole === TASK_STATUS_VALUE_LOGIC_ROLE.TODO,
      )?.id;
      return {
        [TASK_FIELDS_LOGIC_ROLE.ASSIGNED_TO]: activeUser?.id,
        [TASK_FIELDS_LOGIC_ROLE.COMPANY]: company?.data?.id?.value,
        [TASK_FIELDS_LOGIC_ROLE.TASK_TYPE]: nextStepId,
        [TASK_FIELDS_LOGIC_ROLE.STATUS]: todoStatusId,
        [TASK_FIELDS_LOGIC_ROLE.OPPORTUNITY]: opportunity?.data?.id?.value,
      };
    }
    return {};
  }, [bobjectType]);

  const defaultRelatedValues = useMemo(() => {
    if (type === 'Meeting') {
      if (company && sectionsForm?.length > 0) {
        const values = {};
        sectionsForm
          .filter(section => section.bobjectType === 'Company')
          .flatMap(sec => sec.fields)
          .forEach(field => {
            values[`${field.logicRole || field.name}_FROM_COMPANY`] =
              company.data.raw.contents[field.name];
          });
        setLoadingRelated(false);
        return values;
      }
      return {};
    }
    setLoadingRelated(false);
    return {};
  }, [sectionsForm, company, type]);

  useEffect(() => {
    setHasPermissions(checkPermissions(company.data));
  }, []);

  return (
    <>
      {!loadingRelated && (
        <MinimizableModal
          id={id}
          bobjectType={bobjectType}
          type={type}
          defaultValues={defaultValues}
          defaultRelatedValues={defaultRelatedValues}
          additionalValues={additionalValues}
          hasPermission={hasPermission}
          loading={loading}
          sectionsForm={sectionsForm}
          savedData={savedData}
        />
      )}
    </>
  );
};

export default MinimizableModalContainer;
