import { useMemo } from 'react';
import { useParams, useLocation, useHistory, useRouteMatch } from 'react-router-dom';
import queryString from 'query-string';
import { usePreviousUrl } from './usePreviousUrl';

export function useRouter() {
  const params = useParams();
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();
  const { setPreviousUrl } = usePreviousUrl();

  const customHistoryPush = (path, options = {}) => {
    if (options.event && (options.event.ctrlKey || options.event.metaKey)) {
      window.open(path, '_blank');
    } else {
      setPreviousUrl(location.pathname + location.search);
      history.push(path, options.state);
    }
  };

  const customHistoryReplace = (path, state) => {
    setPreviousUrl(location.pathname + location.search);
    history.replace(path, state);
  };

  // Return our custom router object
  // Memoize so that a new object is only returned if something changes
  return useMemo(
    () => ({
      push: customHistoryPush,
      replace: customHistoryReplace,
      pathname: location.pathname,
      query: {
        ...queryString.parse(location.search),
        ...params,
      },
      match,
      location,
      history: { ...history, push: customHistoryPush, replace: customHistoryReplace },
    }),
    [params, match, location, history],
  );
}
