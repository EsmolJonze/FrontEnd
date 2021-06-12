import { differenceInDays } from 'date-fns';

const units = ['day', 'week', 'month', 'quarter', 'year'];

const getUnitFromType = type => type.replace(/^(this_|to)/, '');

const handleCustomRange = ({ interval, start, end }) => {
  const ellapsedDays = differenceInDays(end, start) + 1;

  return (
    (interval === 'day' && ellapsedDays >= 1) ||
    (interval === 'week' && ellapsedDays >= 14) ||
    (interval === 'month' && ellapsedDays >= 60) ||
    (interval === 'quarter' && ellapsedDays >= 180) ||
    (interval === 'year' && ellapsedDays >= 700)
  );
};

export const isIntervalSelectable = ({ interval, type, start, end }) => {
  if (type === 'custom') {
    return handleCustomRange({ interval, start, end });
  }
  if (type === 'all_time') {
    return units.indexOf(interval) > 1;
  }
  return units.indexOf(interval) <= units.indexOf(getUnitFromType(type));
};
