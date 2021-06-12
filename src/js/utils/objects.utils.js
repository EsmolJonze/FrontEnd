import { isUndefined, pickBy, assign } from 'lodash';

export const sliceObject = (object, start, end) => {
  const objectKeys = Object.keys(object);
  const keys = objectKeys.splice(start, end);

  return keys.map(key => object[key]);
};

export const mergeRemovingUndefined = (...values) => {
  const undefinedKeys = values.flatMap(obj =>
    Object.keys(obj).filter(key => isUndefined(obj[key])),
  );

  return pickBy(assign({}, ...values), (value, key) => !undefinedKeys.includes(key));
};
