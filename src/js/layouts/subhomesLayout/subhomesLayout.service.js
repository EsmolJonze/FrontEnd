const PROSPECTING_HIDE_INFO_KEY = 'PROSPECTING_HIDE_INFO_KEY';

export const setHideInfoInLocalStorage = hide => {
  localStorage.setItem(PROSPECTING_HIDE_INFO_KEY, hide);
};

export const getHideInfoInLocalStorage = () =>
  JSON.parse(localStorage.getItem(PROSPECTING_HIDE_INFO_KEY) || 'true');
