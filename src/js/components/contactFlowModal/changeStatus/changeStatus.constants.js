import { STEPS } from './changeStatus.machine';
import { LEAD_STATUS_LOGIC_ROLE } from '../../../constants/lead';

export const LEAD_STATUS_TEXTS = Object.freeze({
  [LEAD_STATUS_LOGIC_ROLE.CONTACT]: 'I need to create an opportunity or review an existing one',
  [LEAD_STATUS_LOGIC_ROLE.CONTACTED]:
    "I got in touch with the lead, but they aren't interested yet",
  [LEAD_STATUS_LOGIC_ROLE.DISCARDED]: 'I should stop contacting the lead and discard them',
  [LEAD_STATUS_LOGIC_ROLE.ENGAGED]: "I got in touch with the lead, they're interested!",
  [LEAD_STATUS_LOGIC_ROLE.MEETING]: 'The lead accepted a meeting, and I need to schedule it',
  [LEAD_STATUS_LOGIC_ROLE.NURTURING]:
    'I should stop contacting the lead and try again in the future',
  [LEAD_STATUS_LOGIC_ROLE.ON_PROSPECTION]:
    "I couldn't reach the lead yet and I want to keep trying",
});

export const COMPANY_STATUSES_WITH_MESSAGE = [
  STEPS.CONTACTED,
  STEPS.ENGAGED,
  STEPS.MEETING,
  STEPS.ACCOUNT,
  STEPS.DISCARDED,
  STEPS.NURTURING,
];

export const AVAILABLE_LEAD_STATUSES = Object.freeze({
  LEAD__STATUS__ON_PROSPECTION: 'LEAD__STATUS__ON_PROSPECTION',
  LEAD__STATUS__CONTACTED: 'LEAD__STATUS__CONTACTED',
  LEAD__STATUS__ENGAGED: 'LEAD__STATUS__ENGADED',
  LEAD__STATUS__MEETING: 'LEAD__STATUS__MEETING',
  LEAD__STATUS__CONTACT: 'LEAD__STATUS__CONTACT',
  LEAD__STATUS__NURTURING: 'LEAD__STATUS__NURTURING',
  LEAD__STATUS__DISCARDED: 'LEAD__STATUS__DISCARDED',
});

export const AVAILABLE_COMPANY_STATUSES = Object.freeze({
  COMPANY__STATUS__ON_PROSPECTION: 'COMPANY__STATUS__ON_PROSPECTION',
  COMPANY__STATUS__CONTACTED: 'COMPANY__STATUS__CONTACTED',
  COMPANY__STATUS__ENGAGED: 'COMPANY__STATUS__ENGADED',
  COMPANY__STATUS__MEETING: 'COMPANY__STATUS__MEETING',
  COMPANY__STATUS__ACCOUNT: 'COMPANY__STATUS__ACCOUNT',
  COMPANY__STATUS__NURTURING: 'COMPANY__STATUS__NURTURING',
  COMPANY__STATUS__DISCARDED: 'COMPANY__STATUS__DISCARDED',
});
