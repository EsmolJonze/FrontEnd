import React, { useEffect, useLayoutEffect, useMemo, useState } from 'react';
import {
  CircularBadge,
  Item,
  Select,
  Text,
  Tooltip,
} from '@bloobirds-it/bloobirds-platform-component-library';
import { Controller, useFormContext } from 'react-hook-form';
import { useUserSettings } from '../../../../../components/userPermissions/hooks';
import { getFieldByLogicRole, getValueFromLogicRole } from '../../../../../utils/bobjects.utils';
import { LEAD_FIELDS_LOGIC_ROLE, LEAD_STATUS_LOGIC_ROLE } from '../../../../../constants/lead';
import { OPPORTUNITY_FIELDS_LOGIC_ROLE } from '../../../../../constants/opportunity';
import { useEntity, useLeadReasons, usePicklistValues } from '../../../../../hooks';
import { ellipsis } from '../../../../../utils/strings.utils';
import styles from './leadCard.module.css';
import { LabelsDropdown } from '../../../../../components/labelsDropdown';
import { isDiscarded, isNurturing } from '../../../../../utils/lead.utils';

const LeadCard = ({ lead, opportunities }) => {
  const { control, setValue, watch } = useFormContext();
  const settings = useUserSettings();

  const salesFeatureEnabled = settings?.account?.features.salesFeature;
  const {
    leadReasons,
    resetLeadReasonList,
    updateLeadReasons,
    isLoaded: reasonsLoaded,
  } = useLeadReasons(`lead-${lead?.id.objectId}`);
  const idealCustomerProfiles = useEntity('idealCustomerProfiles');
  const leadStatuses = usePicklistValues({ picklistLogicRole: LEAD_FIELDS_LOGIC_ROLE.STATUS });
  const hasReasons = leadReasons?.list?.length > 0;
  const [leadICP, setLeadICP] = useState(
    idealCustomerProfiles?.get(getValueFromLogicRole(lead, LEAD_FIELDS_LOGIC_ROLE.ICP)),
  );
  const leadId = useMemo(() => lead?.id.objectId, [lead]);
  const leadStatus = useMemo(
    () => getFieldByLogicRole(lead, LEAD_FIELDS_LOGIC_ROLE.STATUS)?.valueLogicRole,
    [lead],
  );
  const leadName = useMemo(
    () => getFieldByLogicRole(lead, LEAD_FIELDS_LOGIC_ROLE.FULL_NAME)?.text,
    [lead],
  );
  const leadJobTitle = useMemo(
    () => getFieldByLogicRole(lead, LEAD_FIELDS_LOGIC_ROLE.JOB_TITLE)?.text,
    [lead],
  );
  const leadOpportunity = useMemo(
    () => getFieldByLogicRole(lead, LEAD_FIELDS_LOGIC_ROLE.OPPORTUNITY)?.value,
    [lead],
  );
  const leadReason = useMemo(() => {
    const status = leadStatus?.split('__')[2];
    return getFieldByLogicRole(lead, LEAD_FIELDS_LOGIC_ROLE[`${status}_REASONS`])?.value;
  }, [lead]);

  const watchStatusField = watch(`${leadId}.status`);
  const disabledReasons = !isDiscarded(watchStatusField) && !isNurturing(watchStatusField);

  useEffect(() => {
    setValue(
      `${leadId}.status`,
      getFieldByLogicRole(lead, LEAD_FIELDS_LOGIC_ROLE.STATUS)?.valueLogicRole,
    );
  }, []);

  useEffect(() => setValue(`${leadId}.opportunity`, leadOpportunity || 'none'), [leadOpportunity]);
  useEffect(() => setValue(`${leadId}.reason`, leadReason || 'not-apply'), [leadReason]);

  useLayoutEffect(() => {
    if (idealCustomerProfiles && !leadICP) {
      setLeadICP(
        idealCustomerProfiles.get(getValueFromLogicRole(lead, LEAD_FIELDS_LOGIC_ROLE.ICP)),
      );
    }
  }, [idealCustomerProfiles, leadICP]);

  useEffect(() => {
    if (!disabledReasons && !hasReasons && reasonsLoaded) {
      updateLeadReasons(leadStatus?.split('__')[2]);
    }
  }, [disabledReasons, hasReasons, reasonsLoaded]);

  useEffect(() => {
    if (
      [LEAD_STATUS_LOGIC_ROLE.DISCARDED, LEAD_STATUS_LOGIC_ROLE.NURTURING].includes(
        watchStatusField,
      )
    ) {
      if (leadReasons?.list?.length > 0 && (!leadReason || leadStatus !== watchStatusField)) {
        setValue(`${leadId}.reason`, leadReasons?.list[0]?.value);
      } else if (leadStatus === watchStatusField) {
        setValue(`${leadId}.reason`, leadReason);
      }
    } else {
      setValue(`${leadId}.reason`, 'not-apply');
    }
  }, [leadReasons, watchStatusField]);

  useEffect(() => () => resetLeadReasonList(), []);

  const leadStatusItems = useMemo(
    () =>
      leadStatuses
        .filter(status => status.enabled)
        .sort((a, b) => (a.ordering > b.ordering ? 1 : -1))
        .map(status => ({
          text: status?.value,
          styles: {
            backgroundColor: status?.backgroundColor,
            outlineColor: status?.outlineColor,
            textColor: status?.textColor,
          },
          id: status?.logicRole,
          ordering: status.ordering,
        })),
    [leadStatuses],
  );

  return (
    <div className={styles._container}>
      <div className={styles._column_1}>
        {leadICP ? (
          <Tooltip title="Lead name" trigger="hover" position="top">
            <CircularBadge
              size="medium"
              overrideStyle={{
                backgroundColor: leadICP?.color || 'var(--verySoftPeanut)',
                color: 'white',
              }}
            >
              {leadICP?.shortname || ''}
            </CircularBadge>
          </Tooltip>
        ) : (
          <CircularBadge
            size="medium"
            overrideStyle={{
              backgroundColor: 'var(--verySoftPeanut)',
              color: 'white',
              fontSize: 20,
            }}
          >
            ?
          </CircularBadge>
        )}
        <div className={styles._name__container}>
          <Text size="s">{ellipsis(leadName, 25)}</Text>
          <Text size="xs" color="softPeanut">
            {ellipsis(leadJobTitle, 27)}
          </Text>
        </div>
      </div>
      <div className={styles._column_2}>
        <div data-test="BaseInput-leadStatus" className={styles._lead_status}>
          {leadStatuses && (
            <Controller
              name={`${leadId}.status`}
              as={<LabelsDropdown items={leadStatusItems} width={175} />}
              onChange={([value]) => {
                if (isDiscarded(value) || isNurturing(value)) {
                  updateLeadReasons(value?.split('__')[2]);
                } else if (leadReasons?.list?.length > 0) {
                  resetLeadReasonList();
                }

                return value;
              }}
              control={control}
            />
          )}
        </div>
        {salesFeatureEnabled && (
          <div data-test="BaseInput-leadOpportunity" className={styles._opportunity_list}>
            <Controller
              name={`${leadId}.opportunity`}
              as={
                <Select size="small" borderless={false} width={180}>
                  {opportunities &&
                    opportunities.map(opportunity => {
                      const opportunityName = getFieldByLogicRole(
                        opportunity,
                        OPPORTUNITY_FIELDS_LOGIC_ROLE.NAME,
                      )?.text;
                      return (
                        <Item dataTest={opportunityName} value={opportunity?.id.value}>
                          {opportunityName}
                        </Item>
                      );
                    })}
                  <Item value="none">None</Item>
                </Select>
              }
              control={control}
            />
          </div>
        )}
        <div data-test="BaseInput-statusReason" className={styles._reasons_list}>
          <Controller
            name={`${leadId}.reason`}
            as={
              <Select
                dataTest="reasons"
                disabled={disabledReasons}
                size="small"
                borderless={false}
                width={218}
              >
                {hasReasons &&
                  leadReasons?.list.map(reason => (
                    <Item dataTest={reason.label} value={reason.value}>
                      {reason.label}
                    </Item>
                  ))}
                {!hasReasons && <Item value="not-apply">Does not apply for this lead status</Item>}
              </Select>
            }
            control={control}
          />
        </div>
      </div>
    </div>
  );
};

export default LeadCard;
