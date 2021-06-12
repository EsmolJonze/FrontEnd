import React from 'react';
import { Button } from '@bloobirds-it/bloobirds-platform-component-library';
import { useUserSettings } from '../userPermissions/hooks';
import { createEmailLink } from '../../utils/email.utils';
import { EMAIL_MODE } from '../../constants/email';
import { useActiveCompany, useActiveLeads } from '../../hooks';
import { useMinimizableModals } from '../../hooks/emails/useMinimizableModals';
import { getValueFromLogicRole } from '../../utils/bobjects.utils';
import { companyUrl } from '../../app/_constants/routes';

const EmailButton = ({
  templateBody,
  templateSubject,
  templateId,
  isFromBB,
  availableVariables,
  isBlankEmail,
}) => {
  const settings = useUserSettings();
  const { openMinimizableModal } = useMinimizableModals();
  const { selectedLead: activeLead } = useActiveLeads();
  const type = settings?.settings.mailtoLinksType;
  const leadEmail = activeLead && getValueFromLogicRole(activeLead, 'LEAD__EMAIL', true);
  const toEmail = leadEmail ? [leadEmail] : [];
  const { company } = useActiveCompany();

  const handleOpenModal = () => {
    openMinimizableModal({
      type: 'Email',
      template: { body: templateBody, subject: templateSubject || '', id: templateId },
      mode: EMAIL_MODE.SEND,
      variables: availableVariables,
      company: {
        name: getValueFromLogicRole(company, 'COMPANY__NAME'),
        url: companyUrl(company),
      },
    });
  };

  return isFromBB ? (
    <>
      {isBlankEmail ? (
        <Button variant="primary" iconLeft="plus" onClick={handleOpenModal}>
          Create new Email
        </Button>
      ) : (
        <Button variant="primary" size="small" onClick={handleOpenModal}>
          Send from BB
        </Button>
      )}
    </>
  ) : (
    <Button
      variant="secondary"
      size="small"
      onClick={() => {
        window.open(
          createEmailLink({ type, toEmail, templateSubject, templateBody, availableVariables }),
        );
      }}
    >
      Send from Mail
    </Button>
  );
};

EmailButton.defaultProps = {
  isFromBB: false,
};

export default EmailButton;
