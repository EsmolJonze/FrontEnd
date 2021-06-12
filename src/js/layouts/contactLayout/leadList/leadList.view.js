import React, { useEffect, useMemo, useState } from 'react';
import styles from './leadList.module.css';
import {
  useActiveCompany,
  useActiveLeads,
  useActiveOpportunities,
  useBobjectFormCreation,
  useCadenceControl,
  useContactView,
  useDialerVisibility,
  useLeads,
  useQueryParams,
  useRestartCadence,
  useRouter,
} from '../../../hooks';
import {
  Action,
  Button,
  Dropdown,
  IconButton,
  Item,
  Text,
  Tooltip,
  useVisible,
} from '@bloobirds-it/bloobirds-platform-component-library';
import LeadCard from './leadCard';
import { useBobjectPermissions, useUserSettings } from '../../../components/userPermissions/hooks';
import { SearchPeopleSvg } from '../../../../assets/svg';
import { BOBJECT_TYPES } from '../../../constants/bobject';
import AddQcToLeadModal from '../addQcToLeadModal';
import { STEPS } from '../cadenceControlModal/cadenceControlModal.machine';
import { getValueFromLogicRole } from '../../../utils/bobjects.utils';
import { companyUrl, opportunityUrl } from '../../../app/_constants/routes';
import { useMinimizableModals } from '../../../hooks/emails/useMinimizableModals';
import { isLeadPage } from '../../../utils/pages.utils';
import AddLeadToOpportunityModal from '../addLeadToOppModal';

const LeadTableActions = ({ bobjectType }) => {
  const { location } = useRouter();
  const { setActiveTabs, setTab, scrollToContactTabs } = useContactView();
  const { ref, visible, setVisible } = useVisible();
  const queryParams = useQueryParams();
  const { openDialer } = useDialerVisibility();
  const {
    openAddActivity,
    openAddLead,
    openAddLeadWithOpportunity,
    openAddOpportunity,
  } = useBobjectFormCreation();
  const { selectedLead, updateSelectedLead, leads } = useActiveLeads();
  const { company } = useActiveCompany();
  const settings = useUserSettings();
  const { openRestartCadenceModal } = useRestartCadence();
  const { selectedOpportunity } = useActiveOpportunities();
  const { checkPermissions } = useBobjectPermissions();
  const { openCadenceControl } = useCadenceControl();
  const { openMinimizableModal } = useMinimizableModals();
  const handleOpenModal = type => {
    openMinimizableModal({
      type,
      company: {
        name: getValueFromLogicRole(company, 'COMPANY__NAME'),
        url: companyUrl(company),
        data: company,
      },
      opportunity: selectedOpportunity && {
        name: getValueFromLogicRole(selectedOpportunity, 'OPPORTUNITY__NAME'),
        url: opportunityUrl(selectedOpportunity),
        data: selectedOpportunity,
      },
    });
  };

  const hasPermissions = useMemo(
    () => checkPermissions(bobjectType === BOBJECT_TYPES.COMPANY ? company : selectedOpportunity),
    [company, selectedOpportunity],
  );

  useEffect(() => {
    if (!selectedLead) {
      if (queryParams.has('leadId')) {
        updateSelectedLead(queryParams.get('leadId'));
      } else {
        updateSelectedLead(leads[0]?.id.value);
      }
    }
  }, [queryParams.toString()]);

  return (
    <div className={styles._actions__container}>
      {hasPermissions && (
        <>
          <Tooltip title="Call" position="top" trigger="hover">
            <Action
              icon="phone"
              color="melon"
              dataTest="callButton"
              onClick={() => {
                setTab('Messaging');
                openDialer();
                scrollToContactTabs();
              }}
            />
          </Tooltip>
          <Tooltip title="Email" position="top" trigger="hover">
            <Action
              icon="mail"
              color="tangerine"
              onClick={() => {
                setActiveTabs({
                  tab: 'Messaging',
                  subtab: 'Email Templates',
                });
                scrollToContactTabs();
              }}
            />
          </Tooltip>
          <Tooltip title="Linkedin" position="top" trigger="hover">
            <Action
              icon="linkedin"
              color="darkBloobirds"
              onClick={() => {
                setActiveTabs({
                  tab: 'Messaging',
                  subtab: 'Linkedin Templates',
                });
                scrollToContactTabs();
              }}
            />
          </Tooltip>
          <Tooltip title="Task" position="top" trigger="hover">
            <Action
              icon="taskAction"
              color="softBloobirds"
              onClick={() => {
                handleOpenModal('Task');
              }}
            />
          </Tooltip>
          <Tooltip title="Note" position="top" trigger="hover">
            <Action icon="noteAction" color="banana" onClick={() => handleOpenModal('Note')} />
          </Tooltip>
          <Tooltip title="Meeting" position="top" trigger="hover">
            <Action icon="calendar" color="tomato" onClick={() => handleOpenModal('Meeting')} />
          </Tooltip>
          {settings?.account?.features.salesFeature && bobjectType !== BOBJECT_TYPES.OPPORTUNITY && (
            <Tooltip title="Opportunity" position="top" trigger="hover">
              <Action
                icon="fileOpportunity"
                color="peanut"
                dataTest="opportunityButton"
                onClick={() => {
                  openAddOpportunity({ onSuccess: openCadenceControl });
                }}
              />
            </Tooltip>
          )}
          <Dropdown
            ref={ref}
            visible={visible}
            anchor={
              <IconButton
                name="moreOpenholes"
                color="softPeanut"
                dataTest="moreDropdown"
                onClick={() => setVisible(!visible)}
              />
            }
          >
            <Item
              onClick={() => {
                setVisible(!visible);
                openCadenceControl({ previousStep: false, step: STEPS.UPDATE_LEADS_STATUSES });
              }}
              dataTest="updateLeadStatusOption"
              icon="edit"
              disabled={leads.length === 0 || isLeadPage(location?.pathname)}
            >
              Update lead status
            </Item>
            <Item
              onClick={() => {
                setVisible(!visible);
                openAddActivity();
              }}
              dataTest="logActivityOption"
              icon="zap"
            >
              Log Activity
            </Item>
            <Item
              onClick={() => {
                openRestartCadenceModal();
                setVisible(!visible);
              }}
              icon="refresh"
            >
              Reschedule cadence
            </Item>
            <Item
              onClick={() => {
                setVisible(!visible);
                bobjectType === BOBJECT_TYPES.OPPORTUNITY
                  ? openAddLeadWithOpportunity(selectedOpportunity.id.value)
                  : openAddLead();
              }}
              icon="person"
            >
              New Lead
            </Item>
          </Dropdown>
        </>
      )}
    </div>
  );
};

function AddLeadButton(props) {
  return (
    <Button dataTest="formCreate" variant="clear" iconLeft="addCircle" onClick={props.onClick}>
      {props.bobjectType === BOBJECT_TYPES.OPPORTUNITY ? 'Add lead to this opp' : 'Add Lead'}
    </Button>
  );
}

const LeadList = ({ bobjectType }) => {
  const { leads } = useActiveLeads();
  const { openAddLead, openAddLeadWithOpportunity } = useBobjectFormCreation();
  const { selectedOpportunity } = useActiveOpportunities();
  const { company } = useActiveCompany();
  const { updateLeadsByCompany, leads: companyLeads } = useLeads('leadAssigment');
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openAddLeadToOpportunity, setOpenAddLeadToOpportunity] = useState(false);

  useEffect(() => {
    updateLeadsByCompany(company?.id.value);
  }, [company]);

  return (
    <div className={styles._container}>
      <div className={styles._title__container}>
        <Text size="s" color="softPeanut">
          {`Leads ${leads.length}`}
        </Text>
      </div>
      <div className={styles._cards__container}>
        {leads.length > 0 ? (
          <>
            {leads.map(lead => (
              <LeadCard
                lead={lead}
                key={lead.id.value}
                openAddQcToLeadModal={() => setOpenAddModal(true)}
              />
            ))}
            <AddLeadButton
              bobjectType={bobjectType}
              onClick={() =>
                bobjectType === BOBJECT_TYPES.OPPORTUNITY
                  ? setOpenAddLeadToOpportunity(true)
                  : openAddLead()
              }
            />
            <AddQcToLeadModal open={openAddModal} handleClose={() => setOpenAddModal(false)} />
          </>
        ) : (
          <div className={styles._withoutLeads__container}>
            <SearchPeopleSvg />
            <Text align="center" color="softPeanut">
              Still no leads added to this {bobjectType}, start adding the first one.{' '}
              <Text inline weight="bold" color="softPeanut">
                Keep in mind your ICPs!
              </Text>
            </Text>
            <AddLeadButton
              bobjectType={bobjectType}
              onClick={() => {
                if (bobjectType === BOBJECT_TYPES.OPPORTUNITY) {
                  if (companyLeads.length > 0) {
                    setOpenAddLeadToOpportunity(true);
                  } else {
                    openAddLeadWithOpportunity(selectedOpportunity.id.value);
                  }
                } else {
                  openAddLead();
                }
              }}
            />
          </div>
        )}
      </div>
      <LeadTableActions bobjectType={bobjectType} />
      {openAddLeadToOpportunity && (
        <AddLeadToOpportunityModal
          handleClose={() => setOpenAddLeadToOpportunity(false)}
          leads={leads}
        />
      )}
    </div>
  );
};

export default LeadList;
