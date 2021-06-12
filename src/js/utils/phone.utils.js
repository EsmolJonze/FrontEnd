import { parsePhoneNumber } from 'libphonenumber-js';

export const isValidPhone = phone => {
  /* const regex = RegExp(/\+[0-9]{1,3}[ ]?[0-9]{8,12}/gi);
  return regex.test(phone); */
  try {
    const phoneParsed = parsePhoneNumber(phone);
    return phoneParsed.isValid();
  } catch (e) {
    return false;
  }
};
