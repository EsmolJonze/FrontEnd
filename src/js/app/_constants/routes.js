import { BOBJECT_TYPES } from '../../constants/bobject';

export const HOME = '/';
export const TERMS_AND_CONDITIONS = '/master-subscription-agreement';
export const PRIVACY_POLICY = '/privacy-policy';
export const LOGIN = '/login';

export const EXTERNAL_ACTION = '/externalAction';
export const EXTERNAL_ACTION_VALIDATE_EMAIL = `${EXTERNAL_ACTION}/validateEmail`;
export const EXTERNAL_ACTION_RESET_PASSWORD = `${EXTERNAL_ACTION}/resetPassword`;
export const EXTERNAL_ACTION_REQUEST_RESET_PASSWORD = `${EXTERNAL_ACTION}/requestResetPassword`;
export const EXTERNAL_ACTION_SIGN_AS = `${EXTERNAL_ACTION}/signAs`;

export const APP = '/app';
export const APP_TASKS = `${APP}/tasks`;
export const APP_TASKS_ADD_QC = `${APP_TASKS}/addQc`;
export const APP_TASKS_INBOUND = `${APP_TASKS}/inbound`;
export const APP_TASKS_INBOUND_MQL = `${APP_TASKS_INBOUND}/mql`;
export const APP_TASKS_INBOUND_SAL = `${APP_TASKS_INBOUND}/sal`;
export const APP_TASKS_ASSIGN_QC = `${APP_TASKS}/assignQc`;
export const APP_TASKS_DONE = `${APP_TASKS}/done`;
export const APP_TASKS_WELCOME = `${APP_TASKS}/welcome`;
export const APP_TASKS_TASK = `${APP_TASKS}/:id`;
export const APP_TASKS_PROSPECT = `${APP_TASKS}/prospect`;
export const APP_TASKS_SALES = `${APP_TASKS}/sales`;

export const APP_CL = `${APP}/cl`;
export const APP_CL_LEADS = `${APP_CL}/leads`;
export const APP_CL_COMPANIES = `${APP_CL}/companies`;
export const APP_CL_OPPORTUNITIES = `${APP_CL}/opportunities`;
export const APP_CL_IMPORT = `${APP_CL}/import`;
export const APP_CL_IMPORT_HISTORY = `${APP_CL}/import/history`;
export const APP_CL_ACTIVITIES = `${APP_CL}/activities`;
export const APP_CL_TASKS = `${APP_CL}/tasks`;
export const APP_CL_LISTS = `${APP_CL}/lists`;
export const APP_CL_MEETINGS = `${APP_CL}/meetings`;
export const APP_CL_COMPANIES_NEW_VIEW = `${APP_CL_COMPANIES}?newView=true`;
export const APP_CL_LEADS_NEW_VIEW = `${APP_CL_LEADS}?newView=true`;
export const APP_CL_ACTIVITIES_NEW_VIEW = `${APP_CL_ACTIVITIES}?newView=true`;
export const APP_CL_OPPORTUNITIES_NEW_VIEW = `${APP_CL_OPPORTUNITIES}?newView=true`;
export const APP_CL_TASKS_NEW_VIEW = `${APP_CL_TASKS}?newView=true`;
export const APP_CL_COMPANIES_COMPANY = `${APP_CL_COMPANIES}/:id`;
export const APP_CL_COMPANIES_COMPANY_TASK = `${APP_CL_COMPANIES}/:id/tasks/:id`;
export const APP_CL_COMPANIES_COMPANY_OPPORTUNITY = `${APP_CL_COMPANIES}/:id/opportunities/:opportunityId`;
export const APP_CL_LEADS_LEAD = `${APP_CL_LEADS}/:id`;
export const APP_CL_OPPORTUNITIES_OPPORTUNITY = `${APP_CL_OPPORTUNITIES}/:id`;

export const APP_DASHBOARD = `${APP}/dashboards`;
export const APP_DASHBOARD_PROSPECTING = `${APP_DASHBOARD}/prospecting`;
export const APP_DASHBOARD_SALES = `${APP_DASHBOARD}/sales`;
export const APP_DASHBOARD_PROSPECTING_SECTION = `${APP_DASHBOARD_PROSPECTING}/:slug`;
export const APP_DASHBOARD_SALES_SECTION = `${APP_DASHBOARD_SALES}/:slug`;

export const APP_MANAGEMENT = `${APP}/management`;
export const APP_MANAGEMENT_USER = `${APP_MANAGEMENT}/user`;
export const APP_MANAGEMENT_ACCOUNT = `${APP_MANAGEMENT}/account`;

export const APP_MANAGEMENT_ACCOUNT_CONFIGURATION = `${APP_MANAGEMENT_ACCOUNT}/configuration`;
export const APP_MANAGEMENT_ACCOUNT_CONFIGURATION_INTEGRATION_SALESFORCE = `${APP_MANAGEMENT_ACCOUNT_CONFIGURATION}/salesforce`;
export const APP_MANAGEMENT_ACCOUNT_CONFIGURATION_INTEGRATION_SALESFORCE_TAB = `${APP_MANAGEMENT_ACCOUNT_CONFIGURATION}/salesforce/:tab`;
export const APP_MANAGEMENT_ACCOUNT_CONFIGURATION_INTEGRATION_SALESFORCE_CONNECT = `${APP_MANAGEMENT_ACCOUNT_CONFIGURATION}/salesforce/connect`;
export const APP_MANAGEMENT_ACCOUNT_CONFIGURATION_INTEGRATION_SALESFORCE_SYNC_SETTINGS = `${APP_MANAGEMENT_ACCOUNT_CONFIGURATION}/salesforce/settings`;
export const APP_MANAGEMENT_ACCOUNT_CONFIGURATION_INTEGRATION_SALESFORCE_SYNC_STATUS = `${APP_MANAGEMENT_ACCOUNT_CONFIGURATION}/salesforce/sync`;
export const APP_MANAGEMENT_ACCOUNT_CONFIGURATION_INTEGRATION_SALESFORCE_USERS = `${APP_MANAGEMENT_ACCOUNT_CONFIGURATION}/salesforce/users`;
export const APP_MANAGEMENT_ACCOUNT_CONFIGURATION_INTEGRATION_SALESFORCE_MAPPING = `${APP_MANAGEMENT_ACCOUNT_CONFIGURATION}/salesforce/mapping`;

export const APP_MANAGEMENT_ACCOUNT_CONFIGURATION_INTEGRATION_HUBSPOT_TAB = `${APP_MANAGEMENT_ACCOUNT_CONFIGURATION}/hubspot/:tab`;
export const APP_MANAGEMENT_ACCOUNT_CONFIGURATION_INTEGRATION_HUBSPOT_CONNECT = `${APP_MANAGEMENT_ACCOUNT_CONFIGURATION}/hubspot/connect`;
export const APP_MANAGEMENT_ACCOUNT_CONFIGURATION_INTEGRATION_HUBSPOT_SYNC_SETTINGS = `${APP_MANAGEMENT_ACCOUNT_CONFIGURATION}/hubspot/settings`;
export const APP_MANAGEMENT_ACCOUNT_CONFIGURATION_INTEGRATION_HUBSPOT_SYNC_STATUS = `${APP_MANAGEMENT_ACCOUNT_CONFIGURATION}/hubspot/sync`;
export const APP_MANAGEMENT_ACCOUNT_CONFIGURATION_INTEGRATION_HUBSPOT_USERS = `${APP_MANAGEMENT_ACCOUNT_CONFIGURATION}/hubspot/users`;
export const APP_MANAGEMENT_ACCOUNT_CONFIGURATION_INTEGRATION_HUBSPOT_MAPPING = `${APP_MANAGEMENT_ACCOUNT_CONFIGURATION}/hubspot/mapping`;

export const APP_MANAGEMENT_ACCOUNT_PREFERENCES = `${APP_MANAGEMENT_ACCOUNT}/preferences`;

export const APP_MANAGEMENT_ACCOUNT_PREFERENCES_NOTIFICATIONS = `${APP_MANAGEMENT_ACCOUNT_PREFERENCES}/notifications`;

export const APP_MANAGEMENT_ACCOUNT_MESSAGING = `${APP_MANAGEMENT_ACCOUNT}/messaging`;
export const APP_MANAGEMENT_ACCOUNT_MESSAGING_PITCH = `${APP_MANAGEMENT_ACCOUNT_MESSAGING}/pitch`;
export const APP_MANAGEMENT_ACCOUNT_MESSAGING_EMAIL = `${APP_MANAGEMENT_ACCOUNT_MESSAGING}/email`;
export const APP_MANAGEMENT_ACCOUNT_MESSAGING_LINKEDIN = `${APP_MANAGEMENT_ACCOUNT_MESSAGING}/linkedin`;
export const APP_MANAGEMENT_ACCOUNT_MESSAGING_QQ = `${APP_MANAGEMENT_ACCOUNT_MESSAGING}/qq`;
export const APP_MANAGEMENT_ACCOUNT_MESSAGING_PLAYBOOK = `${APP_MANAGEMENT_ACCOUNT_MESSAGING}/playbook`;

export const APP_MANAGEMENT_ACCOUNT_MESSAGING_EMAIL_FORM = `${APP_MANAGEMENT_ACCOUNT_MESSAGING_EMAIL}/form`;
export const APP_MANAGEMENT_ACCOUNT_MESSAGING_LINKEDIN_FORM = `${APP_MANAGEMENT_ACCOUNT_MESSAGING_LINKEDIN}/form`;
export const APP_MANAGEMENT_ACCOUNT_MESSAGING_PITCH_FORM = `${APP_MANAGEMENT_ACCOUNT_MESSAGING_PITCH}/form`;
export const APP_MANAGEMENT_ACCOUNT_MESSAGING_QQ_FORM = `${APP_MANAGEMENT_ACCOUNT_MESSAGING_QQ}/form`;

export const APP_MANAGEMENT_ACCOUNT_MESSAGING_QQ_SCORES = `${APP_MANAGEMENT_ACCOUNT_MESSAGING_QQ}/scores`;

// TODO: Find usage and replace by new ones above
export const APP_MANAGEMENT_ACCOUNT_MESSAGING_EMAIL_NEW = `${APP_MANAGEMENT_ACCOUNT_MESSAGING_EMAIL}/new`;
export const APP_MANAGEMENT_ACCOUNT_MESSAGING_LINKEDIN_NEW = `${APP_MANAGEMENT_ACCOUNT_MESSAGING_LINKEDIN}/new`;
export const APP_MANAGEMENT_ACCOUNT_MESSAGING_PITCH_NEW = `${APP_MANAGEMENT_ACCOUNT_MESSAGING_PITCH}/new`;

export const APP_MANAGEMENT_ACCOUNT_MESSAGING_QQ_NEW = `${APP_MANAGEMENT_ACCOUNT_MESSAGING_QQ}/new`;
export const APP_MANAGEMENT_ACCOUNT_MESSAGING_QQ_ONE = `${APP_MANAGEMENT_ACCOUNT_MESSAGING_QQ}/:id`;

export const qqEditUrl = qqId => `${APP_MANAGEMENT_ACCOUNT_MESSAGING_QQ}/${qqId}/edit`;
export const qqCloneUrl = qqId => `${APP_MANAGEMENT_ACCOUNT_MESSAGING_QQ}/${qqId}/clone`;
export const emailEditUrl = messagingId =>
  `${APP_MANAGEMENT_ACCOUNT_MESSAGING_EMAIL}/${messagingId}/edit`;
export const emailCloneUrl = messagingId =>
  `${APP_MANAGEMENT_ACCOUNT_MESSAGING_EMAIL}/${messagingId}/clone`;
export const linkedinEditUrl = messagingId =>
  `${APP_MANAGEMENT_ACCOUNT_MESSAGING_LINKEDIN}/${messagingId}/edit`;
export const linkedinCloneUrl = messagingId =>
  `${APP_MANAGEMENT_ACCOUNT_MESSAGING_LINKEDIN}/${messagingId}/clone`;
export const pitchEditUrl = messagingId =>
  `${APP_MANAGEMENT_ACCOUNT_MESSAGING_PITCH}/${messagingId}/edit`;
export const pitchCloneUrl = messagingId =>
  `${APP_MANAGEMENT_ACCOUNT_MESSAGING_PITCH}/${messagingId}/clone`;

export const taskUrl = task => `${APP_TASKS}/${task.id.objectId}`;

export const activityUrl = activity => `${APP_CL_ACTIVITIES}/${activity.id.objectId}`;

export const companyUrl = company => {
  if (company) {
    return `${APP_CL_COMPANIES}/${company.id.objectId}`;
  }
  return APP_CL_COMPANIES;
};

export const companyIdUrl = companyId => {
  if (companyId.indexOf('/') > 0) {
    companyId = companyId.split('/')[2];
  }
  return `${APP_CL_COMPANIES}/${companyId}`;
};

export const opportunityUrl = (companyId, opportunityId) =>
  `${APP_CL_COMPANIES}/${companyId}/opportunities/${opportunityId}`;

export const companyTaskUrl = (companyId, taskId) => {
  if (companyId.indexOf('/') > 0) {
    companyId = companyId.split('/')[2];
  }
  return `${APP_CL_COMPANIES}/${companyId}/tasks/${taskId.id.objectId}`;
};
export const leadTaskUrl = (leadId, taskId) => {
  if (leadId.indexOf('/') > 0) {
    leadId = leadId.split('/')[2];
  }
  return `${APP_CL_LEADS}/${leadId}/tasks/${taskId.id.objectId}`;
};
export const leadUrl = (lead, company) => {
  if (typeof lead === 'string') {
    if (lead.indexOf('/') > 0) {
      lead = lead.split('/')[2];
    }
    return `${APP_CL_LEADS}/${lead}`;
  }
  if (company?.id?.objectId) {
    return `${APP_CL_COMPANIES}/${company?.id?.objectId}?leadId=${lead?.id?.value}`;
  }
  return `${APP_CL_LEADS}/${lead.id.objectId}`;
};

export const bobjectUrl = (bobject, referencedBobject = {}) => {
  const { id: { typeName: bobjectType } = {} } = bobject || {};

  if (bobjectType === BOBJECT_TYPES.COMPANY) {
    return companyUrl(bobject);
  }
  if (bobjectType === BOBJECT_TYPES.LEAD) {
    return leadUrl(bobject, referencedBobject);
  }
  if (bobjectType === BOBJECT_TYPES.TASK) {
    return taskUrl(bobject);
  }
  if (bobjectType === BOBJECT_TYPES.ACTIVITY) {
    return activityUrl(bobject);
  }
  if (bobjectType === BOBJECT_TYPES.OPPORTUNITY) {
    return opportunityUrl(referencedBobject?.id.objectId, bobject?.id.objectId);
  }
  throw new Error(`Cannot generate url of bobject type ${bobjectType}`);
};
