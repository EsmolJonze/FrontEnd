import { isValidPhone } from './phone.utils';

test('different country numbers are propelrly validated', () => {
  const phoneNumbers = [
    '+14163429562',
    '+35316877776',
    '+442030264621',
    '+34608405028',
    '+4350618-0',
    '+43506180',
  ];
  phoneNumbers.forEach(number => expect(isValidPhone(number)).toBe(true));
});

test('invalid phone numbers are properly rejected', () => {
  const phoneNumbers = ['+346067009003', '+34606700', '608405028'];
  phoneNumbers.forEach(number => expect(isValidPhone(number)).toBe(false));
});
