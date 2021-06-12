export const makeQueryFilters = ({ query: inputQuery, filters, bobjectFields }) => {
  const query = {};
  Object.keys(filters).forEach(f => {
    if (
      f !== 'sort' &&
      filters[f].logicRole &&
      filters[f].value &&
      ((Array.isArray(filters[f].value) && filters[f].value.length > 0) ||
        !Array.isArray(filters[f].value))
    ) {
      if (filters[f].subquery) {
        const bobjectField = bobjectFields?.findBy('logicRole')(filters[f].logicRole);
        const bobjectFieldSubquery = bobjectFields?.findBy('logicRole')(
          filters[f].subqueryLogicRole,
        );
        if (bobjectFieldSubquery && bobjectField) {
          const subquery = {};
          subquery[bobjectField.id] = { query: filters[f].value, searchMode: null };
          query[bobjectFieldSubquery.id] = { query: subquery, searchMode: 'SUBQUERY__SEARCH' };

          if (inputQuery[bobjectFieldSubquery.id]) {
            const concatenatedQueries = {
              ...query[bobjectFieldSubquery.id].query,
              ...inputQuery[bobjectFieldSubquery.id].query,
            };
            query[bobjectFieldSubquery.id].query = concatenatedQueries;
          }
        }
      } else {
        query[filters[f].logicRole] = filters[f].value;
      }
    }
  });
  return query;
};

export const makeSort = ({ sort, bobjectType }) => {
  let sorts;
  if (!sort.value.field.startsWith(bobjectType.toUpperCase()) && sort.subqueryLogicRole) {
    sorts = [
      { field: `${sort.subqueryLogicRole}/${sort.value.field}`, direction: sort.value.direction },
    ];
  } else {
    sorts = [
      {
        field: sort.value.field,
        direction: sort.value.direction,
      },
    ];
  }
  if (sort.secondOrdering) {
    sorts = [...sorts, sort.secondOrdering];
  }
  if (sort.tertiaryOrdering) {
    sorts = [...sorts, sort.tertiaryOrdering];
  }
  return sorts;
};
