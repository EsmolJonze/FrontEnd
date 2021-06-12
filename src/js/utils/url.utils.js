export const openNewTab = (page, queryParams) => {
  let url = `${window.location.protocol}//${window.location.host}${page}`;
  const queryParamsParsed =
    queryParams && Object.keys(queryParams).map(key => `${key}=${queryParams[key]}`)[0];

  if (queryParamsParsed) {
    url = `${url}?${queryParamsParsed}`;
  }
  window.open(url, '_blank');
};

export function addHttpIfNeeded(url) {
  if (!/^https?:\/\//i.test(url)) {
    url = `http://${url}`;
  }
  return url;
}

export const addProtocol = url => {
  if (!url) {
    throw new Error('url parameter is required');
  }

  if (url.startsWith('https://') || url.startsWith('http://')) {
    return url;
  }
  return `http://${url}`;
};
