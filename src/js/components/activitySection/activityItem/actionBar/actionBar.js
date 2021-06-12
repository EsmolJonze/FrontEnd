import React from 'react';
import { Button } from '@bloobirds-it/bloobirds-platform-component-library';
import styles from './actionBar.css';
import { getValueFromLogicRole } from '../../../../utils/bobjects.utils';
import { EMAIL_MODE } from '../../../../constants/email';
import { useActiveCompany } from '../../../../hooks';
import { useMinimizableModals } from '../../../../hooks/emails/useMinimizableModals';
import { companyUrl } from '../../../../app/_constants/routes';
import {
  ACTIVITY_DIRECTION,
  ACTIVITY_FIELDS_LOGIC_ROLE,
  ACTIVITY_TYPES,
} from '../../../../constants/activity';
import { COMPANY_FIELDS_LOGIC_ROLE } from '../../../../constants/company';

const ActionBar = ({ bobject }) => {
  const { openMinimizableModal } = useMinimizableModals();
  const { company } = useActiveCompany();
  const activityType = getValueFromLogicRole(bobject, ACTIVITY_FIELDS_LOGIC_ROLE.TYPE, true);
  const activityDirection =
    activityType === ACTIVITY_TYPES.EMAIL
      ? getValueFromLogicRole(bobject, ACTIVITY_FIELDS_LOGIC_ROLE.DIRECTION, true)
      : undefined;

  const handleOpenEmailModal = () => {
    openMinimizableModal({
      type: 'Email',
      template: {
        body: '',
        subject: `RE: ${getValueFromLogicRole(
          bobject,
          ACTIVITY_FIELDS_LOGIC_ROLE.MESSAGE_SUBJECT,
          true,
        )}`,
      },
      mode: EMAIL_MODE.REPLY,
      activity: bobject,
      company: {
        name: getValueFromLogicRole(company, COMPANY_FIELDS_LOGIC_ROLE.NAME),
        url: companyUrl(company),
        data: company,
      },
    });
  };

  return (
    <div className={styles._edit_container}>
      {activityType === ACTIVITY_TYPES.EMAIL && (
        <div className={styles._reply__container}>
          <Button size="small" variant="primary" onClick={handleOpenEmailModal} iconLeft="reply">
            {activityDirection === ACTIVITY_DIRECTION.INCOMING
              ? 'Reply from BB'
              : 'Send another email'}
          </Button>
        </div>
      )}
    </div>
  );
};

export default ActionBar;
