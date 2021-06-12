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

export const DATE_FORMAT = 'yyyy-MM-dd';
