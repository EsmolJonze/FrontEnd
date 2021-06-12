import { useEntity } from './index';

export const useTimeZones = () => {
  const timeZones = useEntity('timeZoneGmts')?.all();

  return timeZones || [];
};
