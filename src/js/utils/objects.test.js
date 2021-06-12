import { sliceObject, mergeRemovingUndefined } from './objects.utils';

describe('sliceObject', () => {
  test('slices a key-value map starting at the start position index and ending at start + end - 1 position index', () => {
    const object = { test1: 'this', test2: 'is', test3: 'Sparta!', test4: '!!' };
    expect(sliceObject(object, 0, 4)).toStrictEqual(['this', 'is', 'Sparta!', '!!']);
  });

  test('', () => {
    const object = { test1: 'this', test2: 'is', test3: 'Sparta!', test4: '!!' };
    expect(sliceObject(object, 0, 2)).toStrictEqual(['this', 'is']);
  });

  test('', () => {
    const object = { test1: 'this', test2: 'is', test3: 'Sparta!', test4: '!!' };
    expect(sliceObject(object, 2, 2)).toStrictEqual(['Sparta!', '!!']);
  });

  test('', () => {
    const object = { test1: 'this', test2: 'is', test3: 'Sparta!', test4: '!!' };
    expect(sliceObject(object, 1, 1)).toStrictEqual(['is']);
  });
});

describe('mergeRemovingUndefined', () => {
  it('removes keys from undefined values', () => {
    const a = {
      foo: 'FOO',
      bar: 'BAR',
    };

    const b = {
      lol: 'LOL',
      bar: undefined,
    };

    const result = mergeRemovingUndefined(a, b);
    const expected = {
      foo: 'FOO',
      lol: 'LOL',
    };

    expect(result).toEqual(expected);
  });

  it('does not merge arrays', () => {
    const a = {
      items: ['a', 'b'],
    };

    const b = {
      items: ['b'],
    };

    const result = mergeRemovingUndefined(a, b);
    const expected = {
      items: ['b'],
    };

    expect(result).toEqual(expected);
  });
});
