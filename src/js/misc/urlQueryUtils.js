export const queryToParams = query =>
  query
    ? query
        .replace(/^\?/, '')
        .split('&')
        .map(entry =>
          entry
            .split('=')
            .reduce(
              (prev, current, index, array) =>
                index % 2 === 0
                  ? { ...prev, [current]: undefined }
                  : { ...prev, [array[index - 1]]: decodeURI(current).replace(/##AND##/g, '&') },
              {},
            ),
        )
        .reduce((prev, current) => ({ ...prev, ...current }), {})
    : {};

export const paramsToQuery = params => {
  params.query = params.query && params.query.replace(/&/g, '##AND##');

  return encodeURI(
    Object.entries(params)
      .filter(entry => entry[1])
      .reduce((prev, current) => `${prev}${current[0]}=${current[1]}&`, '')
      .replace(/&$/, ''),
  );
};

const generateQueryAndOverrideParamIfExists = (params, search) =>
  paramsToQuery({
    ...queryToParams(search),
    ...params,
  });

export const queryGenerator = (params, search) =>
  search ? generateQueryAndOverrideParamIfExists(params, search) : paramsToQuery(params);
