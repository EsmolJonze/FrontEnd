import { LEAD_STATUS_LOGIC_ROLE } from '../constants/lead';

export const isDiscarded = status => status === LEAD_STATUS_LOGIC_ROLE.DISCARDED;
export const isNurturing = status => status === LEAD_STATUS_LOGIC_ROLE.NURTURING;
