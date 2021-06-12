// A custom hook that builds on useLocation to parse the query string for you.
import { useLocation } from 'react-router';

export const useQueryParams = () => new URLSearchParams(useLocation().search);

export const useQueryParam = name => {
  const queryParams = useQueryParams();
  return queryParams.get(name);
};
