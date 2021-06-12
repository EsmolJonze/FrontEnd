import { convertHtmlToString, createEmailLink, parseHtmlToEncodedString } from './email.utils';
import { EMAIL_TYPE } from '../constants/email';

const STATIC_VARIABLES = Object.seal({
  SDR: [
    {
      logicRole: 'USER__NAME',
      name: 'Name',
      value: 'Eudald',
    },
  ],
  lead: [
    {
      id: '0000000001',
      logicRole: 'LEAD__COMPANY',
      name: 'Company',
      value: 'Test Co.',
    },
  ],
});

const htmlBody =
  '<p>Test <variable type="0000000001" name="Company" group="lead">{Lead: Company}</variable></p><p>User <variable type="USER__NAME" name="Name" group="SDR">{SDR: Name}</variable></p>';

test('creates a gmail email link without loaded variables', () => {
  expect(
    createEmailLink({
      type: EMAIL_TYPE.GMAIL,
      toEmail: 'test@test.com',
      templateBody: htmlBody,
      templateSubject:
        '<p><variable type="USER__NAME" name="Name" group="SDR">{SDR: Name}</variable>EEEEEEEEEEEE <variable type="LEAD__COMPANY" name="Company" group="lead">{Lead: Company}</variable></p>',
    }),
  ).toBe(
    'https://mail.google.com/mail/?view=cm&fs=1&to=test%40test.com&su=%7BSDR%3A%20Name%7DEEEEEEEEEEEE%20%7BLead%3A%20Company%7D&body=Test%20%7BLead%3A%20Company%7D%0A%0AUser%20%7BSDR%3A%20Name%7D',
  );
});

test('converts html with variables to string with new lines', () => {
  expect(convertHtmlToString(htmlBody, STATIC_VARIABLES)).toBe('\nTest Test Co.\n\nUser Eudald\n');
});

test('converts html with variables to string without new lines', () => {
  expect(convertHtmlToString(htmlBody, STATIC_VARIABLES, false)).toBe('Test Test Co.User Eudald');
});

test('converts html to an escaped url valid string with new lines', () => {
  expect(parseHtmlToEncodedString(htmlBody, STATIC_VARIABLES)).toBe(
    'Test%20Test%20Co.%0A%0AUser%20Eudald',
  );
});

test('converts html to an escaped url valid string without new lines', () => {
  expect(parseHtmlToEncodedString(htmlBody, STATIC_VARIABLES, false)).toBe(
    'Test%20Test%20Co.User%20Eudald',
  );
});
