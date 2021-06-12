import { methods } from './addToCalendarModal.constants';
import { transformCalendarEventDate } from '../../utils/dates.utils';

const formatCalendarDate = (dateTime, method = methods.METHOD_GOOGLE) => {
  const isMethodGoogle = method === methods.METHOD_GOOGLE;
  const { year, month, hour, min, day } = transformCalendarEventDate(dateTime, isMethodGoogle);
  return isMethodGoogle
    ? `${year}${month}${day}T${hour}${min}00Z`
    : `${year}-${month}-${day}T${hour}:${min}:00`;
};

export const buildCalendarLink = (
  { title, fromDate, toDate, guests },
  method = methods.METHOD_GOOGLE,
) => {
  const fromString = formatCalendarDate(fromDate, method);
  const toString = formatCalendarDate(toDate, method);
  const encodedTitle = encodeURI(title);
  const guestList = Array.isArray(guests) && guests.length > 0 ? guests.join(',') : null;
  let params;

  const baseUrl =
    method === methods.METHOD_GOOGLE
      ? 'https://calendar.google.com/calendar/render'
      : 'https://outlook.office.com/owa/';

  if (method === methods.METHOD_GOOGLE) {
    params = `action=TEMPLATE&text=${encodedTitle}&dates=${fromString}/${toString}`;

    if (guestList) {
      params = `${params}&add=${guestList}`;
    }
  } else {
    params = `path=/calendar/action/compose&subject=${encodedTitle}&startdt=${fromString}&enddt=${toString}`;

    if (guestList) {
      params = `${params}&to=${guestList}`;
    }
  }

  return `${baseUrl}?${params}`;
};
