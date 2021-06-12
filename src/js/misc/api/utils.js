import { stringify } from 'query-string';
import SessionManagerFactory from '../session';

const SessionManager = SessionManagerFactory();

const buildOptions = (method, body, includeAuth, xlsxDownload, xlsxUpload) => {
  let headers = {
    'Access-Control-Allow-Headers': 'Authorization',
  };
  if (!xlsxUpload) {
    headers = {
      ...headers,
      'content-type': 'application/json',
    };
  }
  if (!xlsxDownload && !xlsxUpload) {
    headers = {
      ...headers,
      Accept: 'application/json',
    };
  }

  const ops = {
    headers,
    method,
    mode: 'cors',
  };

  if (!xlsxDownload && includeAuth) {
    ops.headers.Authorization = `Bearer ${SessionManager.getToken()}`;
  }
  if (xlsxUpload) {
    ops.body = body;
  } else if (body !== undefined) {
    ops.body = JSON.stringify(body);
  }
  return ops;
};

export const request = ({
  host,
  url,
  method,
  body,
  requestParams,
  failureAction,
  includeAuth = true,
  xlsxDownload,
  xlsxUpload,
}) => {
  let params = '';
  if (requestParams !== undefined && Object.keys(requestParams).length > 0) {
    params = `?${stringify(requestParams)}`;
  }
  const endpoint = `${host}${url}${params}`;
  const options = buildOptions(method, body, includeAuth, xlsxDownload, xlsxUpload);
  return fetch(endpoint, options).then(response => {
    if (response.status === 200 || response.status === 201) {
      return xlsxDownload ? response : response.json();
    }
    if (response.status === 202 || response.status === 204) {
      return response;
    }
    return Promise.reject({ type: failureAction, response });
  });
};
