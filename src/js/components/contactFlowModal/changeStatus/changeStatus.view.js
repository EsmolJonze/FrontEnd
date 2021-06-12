import React, { useEffect, useState } from 'react';
import { useMachine } from '@xstate/react';
import {
  Button,
  Callout,
  Icon,
  Item,
  Label,
  ModalContent,
  ModalFooter,
  ModalSection,
  Text,
  Select,
  Tooltip,
  Radio,
  RadioGroup,
} from '@bloobirds-it/bloobirds-platform-component-library';
import classnames from 'clsx';
import useSWR from 'swr';
import { BobjectApi } from '../../../misc/api/bobject';
import { ServiceApi } from '../../../misc/api/service';
import {
  useActiveCompany,
  useContactFlow,
  useLeads,
  usePicklistValues,
  useRouter,
} from '../../../hooks';
import { getValueFromLogicRole, getFieldByLogicRole } from '../../../utils/bobjects.utils';
import { isLeadPage } from '../../../utils/pages.utils';
import { LEAD_STATUS_LOGIC_ROLE, LEAD_FIELDS_LOGIC_ROLE } from '../../../constants/lead';
import { COMPANY_STATUS_LOGIC_ROLE, COMPANY_FIELDS_LOGIC_ROLE } from '../../../constants/company';
import { REPORTED_VALUES_LOGIC_ROLE } from '../../../constants/activity';
import CadenceIcon from '../../../../assets/cadence.svg';
import {
  AVAILABLE_COMPANY_STATUSES,
  AVAILABLE_LEAD_STATUSES,
  COMPANY_STATUSES_WITH_MESSAGE,
  LEAD_STATUS_TEXTS,
} from './changeStatus.constants';
import ChangeStatusMachine from './changeStatus.machine';
import { getValueFromDictionary } from './chageStatus.dictionary';
import styles from './changeStatus.module.css';

const updateEntity = (id, data, entity) =>
  BobjectApi.request()
    .bobjectType(entity)
    .partialSet({ bobjectId: id, data });

const fetcherReason = url =>
  ServiceApi.request({
    url,
    method: 'GET',
  });

const ChangeStatus = ({ handleBack, handleClose, handleNext, handleSkip }) => {
  const {
    changeStatusStepData,
    trigger,
    reportedActivityResult,
    setChangeStatusStepData,
  } = useContactFlow();
  const { data: companyReasons } = useSWR(
    '/service/view/field/statusReasons/Company',
    fetcherReason,
  );
  const { data: leadReasons } = useSWR('/service/view/field/statusReasons/Lead', fetcherReason);
  const { company } = useActiveCompany();
  const { location } = useRouter();
  const { leads } = useLeads('contactFlow');
  const [state, send] = useMachine(ChangeStatusMachine);
  const getStatusValues = (logicRole, availableStatus) => {
    const statusOrder = Object.keys(availableStatus);
    return usePicklistValues({
      picklistLogicRole: logicRole,
    })
      .filter(fieldStatus => !!availableStatus[fieldStatus.logicRole])
      .sort((a, b) => statusOrder.indexOf(a.logicRole) - statusOrder.indexOf(b.logicRole))
      .map(fieldStatus => ({
        name: fieldStatus.value,
        logicRole: fieldStatus.logicRole,
        backgroundColor: fieldStatus.backgroundColor,
        outlineColor: fieldStatus.outlineColor,
        textColor: fieldStatus.textColor,
      }));
  };

  const companyStatuses = getStatusValues(
    COMPANY_FIELDS_LOGIC_ROLE.STATUS,
    AVAILABLE_COMPANY_STATUSES,
  );
  const leadStatuses = getStatusValues(LEAD_FIELDS_LOGIC_ROLE.STATUS, AVAILABLE_LEAD_STATUSES);
  const [selectedLeadReasons, setSelectedLeadReasons] = useState();
  const [selectedCompanyReasons, setSelectedCompanyReasons] = useState();
  const leadName = getValueFromLogicRole(leads[0], LEAD_FIELDS_LOGIC_ROLE.FULL_NAME);
  const companyName = getValueFromLogicRole(company, COMPANY_FIELDS_LOGIC_ROLE.NAME);
  const hasCompany = !isLeadPage(location.pathname);
  const hasLead = !!leads[0];

  const { value: machineStatus } = state;
  const isReportResultTrigger = trigger === 'REPORT_RESULT' || trigger === 'UPDATE_CADENCE';
  const isNurturing =
    (hasLead && machineStatus.lead === 'nurturing') ||
    (hasCompany && machineStatus.company === 'nurturing');
  const isDiscarded = machineStatus.lead === 'discarded' || machineStatus.company === 'discarded';

  const changeStatus = (logicRole, entity) => {
    const newStatus = logicRole?.split('__')[2];

    send(`SET_${newStatus}_${entity}`);
  };

  const getLogicRoleFromMachineValue = (machineValue, entity) =>
    entity === 'company'
      ? COMPANY_STATUS_LOGIC_ROLE[machineValue]
      : LEAD_STATUS_LOGIC_ROLE[machineValue];

  useEffect(() => {
    const { leadStatus, companyStatus } = changeStatusStepData;
    const leadSelectedStatus = getFieldByLogicRole(leads[0], LEAD_FIELDS_LOGIC_ROLE.STATUS)
      ?.valueLogicRole;
    const companySelectedStatus = getFieldByLogicRole(company, COMPANY_FIELDS_LOGIC_ROLE.STATUS)
      ?.valueLogicRole;

    if (leadStatus || leadSelectedStatus) {
      const newLeadstatus = leadStatus
        ? `LEAD__STATUS__${leadStatus.toUpperCase()}`
        : leadSelectedStatus;
      changeStatus(newLeadstatus, 'LEAD');
    }
    if (companyStatus || companySelectedStatus) {
      const newCompanyStatus = companyStatus
        ? `COMPANY__STATUS__${companyStatus.toUpperCase()}`
        : companySelectedStatus;
      changeStatus(newCompanyStatus, 'COMPANY');
    }
  }, [leads[0], company]);

  useEffect(() => {
    const companyStatusLogicRole = getLogicRoleFromMachineValue(
      machineStatus.company.toUpperCase(),
      'company',
    );
    const leadStatusLogicRole = getLogicRoleFromMachineValue(
      machineStatus.lead.toUpperCase(),
      'lead',
    );

    if (
      companyStatusLogicRole === COMPANY_STATUS_LOGIC_ROLE.NURTURING ||
      companyStatusLogicRole === COMPANY_STATUS_LOGIC_ROLE.DISCARDED
    ) {
      const reasonsField = companyReasons?.find(
        f => f.logicRole === `COMPANY__${machineStatus.company?.toUpperCase()}_REASONS`,
      );
      if (reasonsField) {
        setSelectedCompanyReasons(reasonsField.fieldValues);
      }
    }
    if (
      leadStatusLogicRole === LEAD_STATUS_LOGIC_ROLE.NURTURING ||
      leadStatusLogicRole === LEAD_STATUS_LOGIC_ROLE.DISCARDED
    ) {
      const reasonsField = leadReasons?.find(
        f => f.logicRole === `LEAD__${machineStatus.lead?.toUpperCase()}_REASONS`,
      );
      if (reasonsField) {
        setSelectedLeadReasons(reasonsField.fieldValues);
      }
    }
  }, [machineStatus]);

  useEffect(() => {
    let companyReasonToDiscard;
    let leadReasonToDiscard;

    if (selectedCompanyReasons?.length > 0) {
      companyReasonToDiscard = {
        companyReasonToDiscard: selectedCompanyReasons[0],
      };
    }
    if (selectedLeadReasons?.length > 0) {
      leadReasonToDiscard = {
        leadReasonToDiscard: selectedLeadReasons[0],
      };
    }
    setChangeStatusStepData({
      ...changeStatusStepData,
      ...companyReasonToDiscard,
      ...leadReasonToDiscard,
    });
  }, [selectedCompanyReasons, selectedLeadReasons]);

  const save = (id, status, entity, reasonToDiscard) => {
    const prefix = `${entity.toUpperCase()}__STATUS`;
    let data = {
      [prefix]: `${prefix}__${status}`,
    };

    if (reasonToDiscard && (status === 'NURTURING' || status === 'DISCARDED')) {
      data = {
        ...data,
        [`${entity.toUpperCase()}__${status}_REASONS`]: reasonToDiscard.value,
      };
    }

    updateEntity(id, data, entity);
  };

  const saveAndClose = () => {
    const leadStatus = machineStatus.lead.toUpperCase();
    const companyStatus = machineStatus.company.toUpperCase();

    if (hasLead) {
      save(leads[0]?.id.objectId, leadStatus, 'Lead', changeStatusStepData.leadReasonToDiscard);
    }
    if (hasCompany) {
      save(
        company.id.objectId,
        companyStatus,
        'Company',
        changeStatusStepData.companyReasonToDiscard,
      );
    }

    if (trigger === 'REPORT_RESULT') {
      reportedActivityResult({ valueLogicRole: REPORTED_VALUES_LOGIC_ROLE.YES });
    }

    handleNext(companyStatus, leadStatus);
  };

  const leadStatusSelected = leadStatuses.find(
    leadStatus => leadStatus.logicRole === `LEAD__STATUS__${machineStatus.lead.toUpperCase()}`,
  );

  const renderSelectedStatus = (selectedStatus, statuses) => {
    const regex = new RegExp(`(.*)__${selectedStatus?.toUpperCase()}$`, 'g');
    const statusObj = statuses.find(status => status?.logicRole.match(regex));
    const style = {
      backgroundColor: statusObj?.backgroundColor,
      borderColor: statusObj?.outlineColor,
      color: statusObj?.textColor,
    };

    return <Label overrideStyle={style}>{selectedStatus.replace('_', ' ')}</Label>;
  };

  const leadInfoClasses = classnames({
    [styles._lead_info_container]: !hasCompany,
  });
  const titleWrapperClasses = classnames(styles._title__wrapper, {
    [styles._title__wrapper__centered]: !hasCompany,
  });

  return (
    <>
      <ModalContent>
        <ModalSection
          size="l"
          title={`Report call result for ${leadName || companyName} ${
            leadName && companyName ? `from ${companyName}` : ''
          }`}
        >
          <div className={styles._section__wrapper}>
            <div className={styles._content__wrapper}>
              {hasLead && (
                <div className={styles._change_lead_status__wrapper}>
                  <div className={leadInfoClasses}>
                    <div className={styles._name__wrapper}>
                      <Icon color="verySoftPeanut" name="person" />
                      <Text size="m" color="peanut">
                        {leadName}
                      </Text>
                    </div>
                    <div className={styles._currentStatus__wrapper}>
                      {renderSelectedStatus(machineStatus.lead, leadStatuses)}
                    </div>
                  </div>
                  <div className={styles._radios_list_status}>
                    <RadioGroup
                      value={leadStatusSelected}
                      onChange={selectedStatus => {
                        const logicRole = selectedStatus?.logicRole;
                        setChangeStatusStepData({
                          ...changeStatusStepData,
                          leadReasonToDiscard: null,
                          leadStatus: logicRole?.split('__')[2].toLowerCase(),
                        });

                        changeStatus(logicRole, 'LEAD');
                      }}
                    >
                      {leadStatuses.map(status => (
                        <Radio
                          dataTest={`lead-status-${status.name}`}
                          size="medium"
                          value={status}
                          key={`lead-status-${status.name}`}
                        >
                          {LEAD_STATUS_TEXTS[status.logicRole]}
                        </Radio>
                      ))}
                    </RadioGroup>
                  </div>
                </div>
              )}
              {hasCompany && (
                <div className={styles._change_company_status__wrapper}>
                  <div className={styles._name__wrapper}>
                    <Icon color="verySoftPeanut" name="company" />
                    <Text size="m" color="peanut">
                      {companyName}
                    </Text>
                  </div>
                  <div className={styles._currentStatus__wrapper}>
                    {renderSelectedStatus(machineStatus.company, companyStatuses)}
                  </div>
                  <div className={styles._list_status}>
                    {companyStatuses.map(status => {
                      const regex = new RegExp(machineStatus.company, 'gi');
                      const isSelected = status.logicRole.match(regex);
                      const style = {
                        backgroundColor: status.backgroundColor,
                        borderColor: status.outlineColor,
                        color: status.textColor,
                      };
                      const overrideStyle = isSelected ? { selectedStyle: style } : null;

                      return (
                        <Tooltip
                          key={`company-status-tooltip-${status.name}`}
                          title={getValueFromDictionary(status.logicRole)}
                          position="top"
                        >
                          <Label
                            value={status.logicRole}
                            dataTest={status.logicRole}
                            align="center"
                            inline={false}
                            key={`company-status-${status.name}`}
                            onClick={value => {
                              setChangeStatusStepData({
                                ...changeStatusStepData,
                                companyReasonToDiscard: null,
                                companyStatus: value?.split('__')[2].toLowerCase(),
                              });

                              changeStatus(value, 'COMPANY');
                            }}
                            selected={isSelected}
                            hoverStyle={style}
                            {...overrideStyle}
                          >
                            {status.name}
                          </Label>
                        </Tooltip>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
          {(isNurturing || isDiscarded) && (
            <div className={styles._section__wrapper}>
              <div className={titleWrapperClasses}>
                <Text size="m" weight="medium" color="peanut">
                  What is the reason for the change in status?
                </Text>
              </div>
              <div className={styles._content__wrapper}>
                {hasLead && (
                  <div className={styles._reason__wrapper}>
                    {(machineStatus.lead === 'nurturing' || machineStatus.lead === 'discarded') &&
                      selectedLeadReasons && (
                        <Select
                          value={
                            changeStatusStepData?.leadReasonToDiscard?.value ||
                            selectedLeadReasons[0]?.value
                          }
                          placeholder={`Lead ${machineStatus.lead.toLowerCase()} reason`}
                          width="100%"
                        >
                          {selectedLeadReasons.map(reason => (
                            <Item
                              key={`lead-reason-item-${reason.value}`}
                              value={reason.value}
                              onClick={() => {
                                setChangeStatusStepData({
                                  ...changeStatusStepData,
                                  leadReasonToDiscard: reason,
                                });
                              }}
                            >
                              {reason.label}
                            </Item>
                          ))}
                        </Select>
                      )}
                  </div>
                )}
                {hasCompany && (
                  <div className={styles._reason__wrapper}>
                    {(machineStatus.company === 'nurturing' ||
                      machineStatus.company === 'discarded') &&
                      selectedCompanyReasons && (
                        <Select
                          value={
                            changeStatusStepData?.companyReasonToDiscard?.value ||
                            selectedCompanyReasons[0]?.value
                          }
                          placeholder={`Company ${machineStatus.company.toLowerCase()} reason`}
                          width="100%"
                        >
                          {selectedCompanyReasons.map(reason => (
                            <Item
                              key={`company-reason-item-${reason.value}`}
                              value={reason.value}
                              onClick={() => {
                                setChangeStatusStepData({
                                  ...changeStatusStepData,
                                  companyReasonToDiscard: reason,
                                });
                              }}
                            >
                              {reason.label}
                            </Item>
                          ))}
                        </Select>
                      )}
                  </div>
                )}
              </div>
            </div>
          )}
          {COMPANY_STATUSES_WITH_MESSAGE.includes(machineStatus.company) && hasCompany && (
            <div className={styles._warning__wrapper}>
              <Callout variant="alert" image={CadenceIcon} width="100%">
                <b>The selected company status will stop the cadence.</b> All future communication
                needs to be scheduled manually and should be based on what you discussed during your
                call.
              </Callout>
            </div>
          )}
        </ModalSection>
      </ModalContent>
      <ModalFooter>
        <div className={styles._buttons__wrapper}>
          <Button variant="clear" onClick={isReportResultTrigger ? handleClose : handleBack}>
            {isReportResultTrigger ? 'Cancel' : 'Back '}
          </Button>
          {!isReportResultTrigger && (
            <Button variant="secondary" onClick={handleSkip}>
              Skip
            </Button>
          )}
          <Button dataTest="formSave" onClick={saveAndClose}>
            {machineStatus.company === 'discarded' ||
            (!hasCompany && machineStatus.lead === 'discarded')
              ? 'Save'
              : 'Save and continue'}
          </Button>
        </div>
      </ModalFooter>
    </>
  );
};

export default ChangeStatus;
