export const SALES_TABS = Object.freeze({
  cadence: 'ON_CADENCE',
  scheduled: 'SCHEDULED',
  inactive: 'INACTIVE',
  meeting: 'MEETING',
  fullList: 'FULL_LIST_COMPANIES',
});

const DEFAULT_SCHEDULED_DATE = {
  startingDate: new Date(),
  includeToday: true,
  futureRange: 0,
  pastRange: 0,
};

export const TODAY_SCHEDULED_DATE = DEFAULT_SCHEDULED_DATE;

export const OVERDUE_SCHEDULED_DATE = {
  ...DEFAULT_SCHEDULED_DATE,
  includeToday: false,
  pastRange: 60,
  futureRange: 0,
};

export const READY_SCHEDULED_DATE = {
  ...DEFAULT_SCHEDULED_DATE,
  pastRange: 365,
};
