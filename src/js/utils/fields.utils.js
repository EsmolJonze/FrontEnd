import { parsePhoneNumberFromString } from 'libphonenumber-js';

export const formatPhoneNumber = (fields, validatedFields) => {
  const phoneId = Object.keys(validatedFields).filter(
    name => validatedFields[name].fieldType === 'Phone',
  )[0];

  if (fields[phoneId]) {
    fields[phoneId] = parsePhoneNumberFromString(fields[phoneId].replace(/^[0]+/, '+'))?.number;
  }
};
