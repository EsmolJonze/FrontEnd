import Numeral from 'numeral';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import {
  formatDate,
  getDateFormated,
  isBeforeToday,
  formatDistance,
} from '../../../utils/dates.utils';

const addPrefixOrSuffix = (isPrefix, ext) => {
  if (!ext) {
    return '';
  }

  return isPrefix ? `${ext} ` : ` ${ext}`;
};

const formatNumber = (number, desiredFormat) => Numeral(number).format(desiredFormat || '0,0');

export const parseNumber = field =>
  `${addPrefixOrSuffix(true, field?.numberPrefix)}
    ${formatNumber(field.text, field?.numberFormat)}
    ${addPrefixOrSuffix(false, field?.numberSuffix)}`;

export const parseDate = field => {
  const { text: date, dateFormatAbsolute: absoluteFormat, dateFormatType } = field;

  if (!date || date === '') {
    return '';
  }

  const formatedDate = date && new Date(getDateFormated(date));
  const todayDate = new Date();
  const isRelativeDate = dateFormatType === 'RELATIVE';
  let dateText;

  if (isRelativeDate) {
    dateText = `${formatDistance(formatedDate, todayDate)} ${
      isBeforeToday(formatedDate) ? ' ago' : ' from now'
    }`;
  } else {
    dateText = formatDate(new Date(formatedDate), absoluteFormat || 'PPP');
  }

  return dateText;
};

export const parsePhone = field =>
  field?.text ? parsePhoneNumberFromString(field?.text)?.formatInternational() : '';
