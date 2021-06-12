import { queryToParams } from './urlQueryUtils';

const query =
  'columns=%5B%22j4T9VoKLUHTztYTJ%22%2C%22FcmjiKCiiwuJVfnn%22%2C%22lPEzNVWw74CXFNfa%22%2C%22bgRiVrFxilpRGX3h%22%2C%22m8TTnoxdoIkgWpDm%22%2C%22lRjgOR8CyRvZNH17%22%2C%22tURWBfUi9Nzh7Wax%22%2C%223c6f7a4db00f3226%22%5D&direction=ASC&pageSize=50&paginationPage=0&query=%7B%22FcmjiKCiiwuJVfnn%22%3A%5B%22kbXB5H9nlMy3YqFI%22%2C%22WtubxJeCMxY9VQK8%22%5D%7D';
test('given the search of an url it extracts its parameters and keeps them as a key value map', () => {
  const params = queryToParams(query);
  expect(
    !!params.columns &&
      !!params.direction &&
      !!params.pageSize &&
      !!params.paginationPage &&
      !!params.query,
  ).toBe(true);
});

test("if there is no = after each parameter's name, it fails to extract the parameter", () => {
  const query =
    'directionASC&pageSize=50&paginationPage=0&query=%7B%22FcmjiKCiiwuJVfnn%22%3A%5B%22kbXB5H9nlMy3YqFI%22%2C%22WtubxJeCMxY9VQK8%22%5D%7D';
  const params = queryToParams(query);
  expect(!!params.direction).toBe(false);
});
