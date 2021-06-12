import React from 'react';
import {
  ACCEPT_MQL,
  ACCEPT_MQL_AAA,
  ACCEPT_SAL,
  ADD_QC,
  DECLINE_MQL,
  DECLINE_SAL,
} from './actionsRow/actionsRowTypes';
import ViewBobjectTableContainer from './viewBobjectTable.container';
import BobjectTableContainer from './bobjectTable.container';
import {
  CompanyEmptyContent,
  LeadEmptyContent,
  LeadErrorContent,
  CompanyErrorContent,
} from './emptyTable';
import { useDocumentTitle } from '../../hooks';
import SessionManagerFactory from '../../misc/session';
import { COMPANY_STATUS_LOGIC_ROLE, COMPANY_FIELDS_LOGIC_ROLE } from '../../constants/company';

const SessionManager = SessionManagerFactory();

export const LeadTable = props => {
  useDocumentTitle('Leads');
  return (
    <ViewBobjectTableContainer
      title="Leads"
      bobjectType="Lead"
      emptyContentElement={<LeadEmptyContent requestedQuery={props.requestedQuery} />}
      errorContentElement={<LeadErrorContent />}
      newView={props.newView}
      {...props}
    />
  );
};

export const CompanyTable = props => {
  useDocumentTitle('Companies');
  return (
    <ViewBobjectTableContainer
      title="Companies"
      bobjectType="Company"
      emptyContentElement={<CompanyEmptyContent requestedQuery={props.requestedQuery} />}
      errorContentElement={<CompanyErrorContent />}
      newView={props.newView}
      {...props}
    />
  );
};

export const ActivityTable = props => {
  useDocumentTitle('Activities');
  return (
    <ViewBobjectTableContainer
      title="Activities"
      bobjectType="Activity"
      emptyContentElement={<CompanyEmptyContent requestedQuery={props.requestedQuery} />}
      errorContentElement={<CompanyErrorContent />}
      newView={props.newView}
      {...props}
      requestedQuery={{
        ACTIVITY__TABLE_VIEW_ITEM: ['ACTIVITY__TABLE_VIEW_ITEM__YES'],
      }}
    />
  );
};

export const MeetingTable = props => {
  useDocumentTitle('Meetings');
  return (
    <ViewBobjectTableContainer
      title="Meetings"
      viewType="MEETINGS"
      bobjectType="Activity"
      emptyContentElement={<CompanyEmptyContent requestedQuery={props.requestedQuery} />}
      errorContentElement={<CompanyErrorContent />}
      {...props}
    />
  );
};

export const TaskTable = props => {
  useDocumentTitle('Tasks');
  return (
    <ViewBobjectTableContainer
      title="Tasks"
      bobjectType="Task"
      emptyContentElement={<CompanyEmptyContent requestedQuery={props.requestedQuery} />}
      errorContentElement={<CompanyErrorContent />}
      newView={props.newView}
      {...props}
    />
  );
};

export const OpportunityTable = props => {
  useDocumentTitle('Opportunity');
  return (
    <ViewBobjectTableContainer
      title="Opportunity"
      bobjectType="Opportunity"
      emptyContentElement={<CompanyEmptyContent requestedQuery={props.requestedQuery} />}
      newView={props.newView}
      {...props}
    />
  );
};

export const SearchCompanyLeadsLeadTable = props => (
  <BobjectTableContainer
    title="Lead"
    bobjectType="Lead"
    emptyContentElement={<LeadEmptyContent requestedQuery={props.requestedQuery} />}
    errorContentElement={<LeadErrorContent />}
    columns={[
      'LEAD__FULL_NAME',
      'LEAD__LINKEDIN_JOB_TITLE',
      'LEAD__BUYING_ROLE',
      'LEAD__ICP',
      'LEAD__PHONE',
    ]}
    requestedQuery={{ LEAD__COMPANY: [props.companyId] }}
  />
);

export const FullListProspectCompanyTable = props => (
  <BobjectTableContainer
    title="Companies"
    bobjectType="Company"
    emptyContentElement={<CompanyEmptyContent requestedQuery={props.requestedQuery} />}
    errorContentElement={<CompanyErrorContent />}
    columns={[
      COMPANY_FIELDS_LOGIC_ROLE.NAME,
      COMPANY_FIELDS_LOGIC_ROLE.STATUS,
      COMPANY_FIELDS_LOGIC_ROLE.MR_RATING,
      COMPANY_FIELDS_LOGIC_ROLE.ATTEMPTS_COUNT,
      COMPANY_FIELDS_LOGIC_ROLE.START_CADENCE,
      COMPANY_FIELDS_LOGIC_ROLE.ATTEMPTS_LAST_DAY,
    ]}
    showRightPanelActions={false}
    requestedQuery={{
      COMPANY__STATUS: [
        COMPANY_STATUS_LOGIC_ROLE.ON_PROSPECTION,
        COMPANY_STATUS_LOGIC_ROLE.READY_TO_PROSPECT,
        COMPANY_STATUS_LOGIC_ROLE.ENGAGED,
        COMPANY_STATUS_LOGIC_ROLE.CONTACTED,
      ],
      COMPANY__ASSIGNED_TO: [SessionManager?.getUser()?.id],
    }}
  />
);

export const AddQcCompanyTable = props => (
  <BobjectTableContainer
    title=""
    bobjectType="Company"
    rowClick="openForm"
    emptyContentElement={<CompanyEmptyContent requestedQuery={props.requestedQuery} />}
    errorContentElement={<CompanyErrorContent />}
    requestedQuery={{ COMPANY__STATUS: [props.companyStatus] }}
  />
);

export const MqlLeadTable = props => (
  <BobjectTableContainer
    viewType={'MQL'}
    bobjectType={'Lead'}
    actionsRow={[ACCEPT_MQL_AAA, ACCEPT_MQL, DECLINE_MQL]}
    emptyContentElement={<CompanyEmptyContent />}
    errorContentElement={<CompanyErrorContent />}
    {...props}
  />
);

export const SalLeadTable = props => (
  <BobjectTableContainer
    viewType={'SAL'}
    bobjectType={'Lead'}
    actionsRow={[ACCEPT_SAL, DECLINE_SAL]}
    {...props}
    emptyContentElement={<CompanyEmptyContent />}
    errorContentElement={<CompanyErrorContent />}
  />
);

export const LeadTableWithNoQc = props => (
  <BobjectTableContainer
    viewType={'LEAD_WITHOUT_QC'}
    bobjectType={'Lead'}
    actionsRow={[ADD_QC]}
    emptyContentElement={<CompanyEmptyContent requestedQuery={props.requestedQuery} />}
    errorContentElement={<CompanyErrorContent />}
    {...props}
  />
);
