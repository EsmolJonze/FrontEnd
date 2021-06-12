import {
  cleanStartEndWhiteSpaces,
  isHtml,
  parseLineBreak,
  stringToHTML,
  toCamelCase,
  toCapitalize,
} from './strings.utils';

test('properly removes start and end spaces from a word', () => {
  expect(cleanStartEndWhiteSpaces(' hola ')).toBe('hola');
});

test('properly sets an uncased text to camel case', () => {
  expect(toCamelCase('john doe the hidden')).toBe('johnDoeTheHidden');
});

test('properly sets an uncased text to uppercase', () => {
  expect(toCapitalize('john doe the hidden')).toBe('John Doe The Hidden');
});

test('properly sets an uncased text to sentence case', () => {
  expect(toCapitalize('john doe the hidden')).toBe('John Doe The Hidden');
});

test('an html snipped is detected as html', () => {
  const htmlSnippet =
    '<ul>\n' +
    '   <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>\n' +
    '   <li>Aliquam tincidunt mauris eu risus.</li>\n' +
    '   <li>Vestibulum auctor dapibus neque.</li>\n' +
    '</ul>';

  expect(isHtml(htmlSnippet)).toBe(true);
});

test('a non html snipped is not detected as html', () => {
  const nonHtmlSnippet = 'Lorem ipsum \n test';
  expect(isHtml(nonHtmlSnippet)).toBe(false);
});

test('parses properly strings to html', () => {
  expect(stringToHTML('Oh my string!')).toContainHTML(`<div>Oh my string!</div>`);
});

test('parses properly line breaks', () => {
  expect(parseLineBreak('Oh \n my \n string!')).toBe('Oh <br /> my <br /> string!');
});
