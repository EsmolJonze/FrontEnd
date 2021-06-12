import { addHttpIfNeeded } from './url.utils';

test('adds http to an url without protocol', () => {
  expect(addHttpIfNeeded('bloobirds.com')).toBe('http://bloobirds.com');
});

test('does not add http to an url with https protocol', () => {
  expect(addHttpIfNeeded('https://bloobirds.com')).toBe('https://bloobirds.com');
});

test('does not add http to an url with http protocol', () => {
  expect(addHttpIfNeeded('http://bloobirds.com')).toBe('http://bloobirds.com');
});
