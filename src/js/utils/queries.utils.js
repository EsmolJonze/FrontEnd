export const transformQueryValues = queryValues => {
  if (
    queryValues[0] !== undefined &&
    queryValues[0].textValue &&
    queryValues[0].textValue !== '__MATCH_EMPTY_ROWS__'
  ) {
    return queryValues[0].textValue?.split(',');
  }
  return queryValues.map(value => value.bobjectPicklistValue);
};

export const generateQueryFromFilters = bobjectViewFilters =>
  bobjectViewFilters?.length > 0
    ? bobjectViewFilters.reduce(
        (prev, curr) => ({
          ...prev,
          [curr.id]: transformQueryValues(curr.values),
        }),
        {},
      )
    : {};
