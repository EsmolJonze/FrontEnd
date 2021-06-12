const tooltipDictionary = Object.freeze({
  LEAD__STATUS__CONTACTED: 'Used for when you got in touch with the lead',
  LEAD__STATUS__ENGAGED:
    'Used for when the lead is interested and has answered the qualifying questions',
  LEAD__STATUS__MEETING:
    'Used for when you have scheduled a meeting between the lead and the Account Executive',
  LEAD__STATUS__NURTURING:
    'Used for when you were not able to contact the lead within the cadence period but you want to try again later',
  LEAD__STATUS__DISCARDED:
    'Used for when the lead is not a suitable contact to continue prospecting with',
  COMPANY__STATUS__CONTACTED:
    'Used for when you have a correct contact. You got in touch with the right person',
  COMPANY__STATUS__ENGAGED:
    'Used for when one of the leads has the status Engaged. The company status then changes accordingly.',
  COMPANY__STATUS__MEETING:
    'Used for when you schedule a meeting between a lead and the Account Executive',
  COMPANY__STATUS__NURTURING:
    'Used for when it has not been possible to contact any lead within the cadence period. This will set all leads within the company to Nurturing status as well.',
  COMPANY__STATUS__DISCARDED:
    'Used for when the qualifying questions indicate the company is not a potential client. This will set all leads within the company to Discarded status as well',
  DEFAULT_TEXT:
    'The lead and company status are closely related, therefore \n' +
    'depending on the selected lead status the company status \n' +
    'may change as well',
  HEADER_TEXT:
    'The lead and company status are closely related, therefore \n' +
    'depending on the selected lead status the company status \n' +
    'may change as well',
});

export function getValueFromDictionary(key) {
  if (tooltipDictionary.hasOwnProperty(key)) {
    return tooltipDictionary[key];
  }
  // default text
  return tooltipDictionary.HEADER_TEXT;
}
