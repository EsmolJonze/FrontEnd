import {
  filterObject,
  formatTimeDistance,
  isEmail,
  isUrl,
  makeUrl,
  naturalTextToCamelCase,
} from './utils';

test('given some filter action, it returns an object filtered by it', () => {
  expect(
    filterObject({ test1: 'today', test2: 'yesterday', 3: 'now' }, k => k.startsWith('t')),
  ).toStrictEqual({ test1: 'today', test2: 'yesterday' });
});

test('given some filter action, it returns an object filtered by it', () => {
  expect(
    filterObject({ test1: 'today', test2: 'yesterday', 3: 'now' }, (k, v) => v === 'now'),
  ).toStrictEqual({ 3: 'now' });
});

test('given a string it converts it into camel case', () => {
  expect(naturalTextToCamelCase('this is an example')).toStrictEqual('thisIsAnExample');
});

test('checks if the url provided meets the acceptance criteria', () => {
  const possibleUrl = [
    'htp://bloobirds.com',
    '0.0.0.0:3000',
    'http://something',
    'www.something,com',
    'http:/www.google.com',
  ];
  possibleUrl.forEach(url => expect(isUrl(url)).toBe(false));
});

test('checks if the emails have the correct format', () => {
  const emails = ['something@bloobirds.com', 'something@gmail.es', 'somethinG23@gmail.com'];
  emails.forEach(email => expect(isEmail(email)).toBe(true));
});

test('checks if emails have the correct format', () => {
  const emails = [
    'some;thing@bloobirds.com',
    'some:thing@gmail.es',
    'somethinghotmail.com',
    '@gmail.com',
  ];
  emails.forEach(email => expect(isEmail(email)).toBe(false));
});

test('adds http:// to an url if it does not have neither http nor https', () => {
  const withoutHttp = 'www.google.com';
  expect(makeUrl(withoutHttp)).toBe('http://www.google.com');
});

test('check if by providing a http url it maintains the url as original', () => {
  const withHttp = 'http://www.google.com';
  expect(makeUrl(withHttp)).toBe('http://www.google.com');
});

test('it displays the amount of time passed from the date provided until today', () => {
  [5, 10, 15, 23].forEach(day => {
    const today = new Date();
    expect(formatTimeDistance(new Date(today.setDate(today.getDate() - day)))).toBe(
      `${day} days ago`,
    );
  });
});
