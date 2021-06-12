import SessionManagerFactory from '../session';
import { jsonMarshalling, protobufMarshallingSearch } from './marshall';
import {
  getRelativeDateInterval,
  relativeDates,
  transformDate,
} from '../../components/filter/RelativeDates';
import { eachDayOfInterval } from 'date-fns';
import { ApiHosts } from './ApiHosts';

const TASK_BOBJECT_TYPE_NAME = 'Task';
const ACTIVITY_BOBJECT_TYPE_NAME = 'Activity';
const COMPANY_BOBJECT_TYPE_NAME = 'Company';
const LEAD_BOBJECT_TYPE_NAME = 'Lead';
const OPPORTUNITY_BOBJECT_TYPE_NAME = 'Opportunity';
const STATUS_CODE_ERROR = 'STATUS_CODE_ERROR';

const SessionManager = SessionManagerFactory();
const useProtobufMarshalling = true;

const LOGIC_ROLES_AUTO_COMPLETE = ['LEAD__NAME', 'COMPANY__NAME'];
const AUTOCOMPLETE__SEARCH = 'AUTOCOMPLETE__SEARCH';

const buildUrl = (bobjectType, bobjectId) => {
  let url = ApiHosts.bobjectService.host();
  url = `${url}/${SessionManager.getAccount().id}`;
  url = `${url}/${bobjectType}`;
  if (bobjectId !== undefined) {
    url = `${url}/${bobjectId}`;
  }
  return url;
};

const responseReader = marshalling => async response => {
  if ((response.status >= 200 && response.status < 300) || response.status === 409) {
    if (response.status === 204) {
      // no content http code.
      return undefined;
    }
    return { response, body: await marshalling.responseReader(response) };
  }
  // this rejection will be caught at the end of the block
  return Promise.reject({ type: STATUS_CODE_ERROR, status: response.status });
};

const responseUnmarshaller = marshalling => response => marshalling.unmarshallResponse(response);
const processInjectField = (response, field) => {
  if (field.type === 'REFERENCE') {
    if (
      field.referencedBobjectType !== undefined &&
      field.referencedBobjectType !== null &&
      field.text !== null &&
      field.text !== undefined &&
      response.referencedBobjects !== undefined &&
      response.referencedBobjects !== null
    ) {
      field.referencedBobject = response.referencedBobjects[field.text];
    } else {
      field.referencedBobject = undefined;
    }
  }
};
export const injectReferencesSearchProcess = response => {
  response.contents.forEach(bobject => {
    bobject.fields.forEach(field => processInjectField(response, field));
  });
  return response;
};
const injectReferencesGetProcess = response => {
  response.fields.forEach(field => processInjectField(response, field));
  return response;
};

const perform = ({ url, method, body, marshalling = jsonMarshalling, customPostProcess }) => {
  const options = {
    method,
    headers: new Headers({
      Accept: marshalling.header.accept,
      'Access-Control-Allow-Headers': 'Authorization, X-Protobuf-Message, X-Protobuf-Schema',
      'Content-Type': marshalling.header.contentType,
      Authorization: `Bearer ${SessionManager.getToken()}`,
    }),
    mode: 'cors',
  };
  if (body !== undefined) {
    options.body = marshalling.marshallRequest(body);
  }
  let response = fetch(url, options)
    .then(responseReader(marshalling))
    .then(responseUnmarshaller(marshalling));
  if (customPostProcess) {
    response = response.then(customPostProcess);
  }
  return response;
};

const isAutocompleteSearch = logicRole => LOGIC_ROLES_AUTO_COMPLETE.includes(logicRole);

const replaceNullsBy = (input, by) => {
  if (input && Array.isArray(input)) {
    return input
      .map(v => {
        if (v === null || v === undefined) {
          return by;
        }
        return v;
      })
      .filter(x => x !== '');
  }
  return input;
};

const replaceRelativeDates = input => {
  if (input) {
    if (Array.isArray(input) && input.length === 1) {
      const date = input[0];
      const relativeCandidate = relativeDates[date];
      if (relativeCandidate) {
        return eachDayOfInterval(getRelativeDateInterval(relativeCandidate)).map(x =>
          transformDate(x),
        );
      }
    }
  }
  return input;
};
const processQuery = (input, autoCompleteSearch) => {
  if (!(input instanceof Object) || Array.isArray(input)) {
    // normalise the input
    if (typeof input === 'string' || input instanceof String) {
      input = [input];
    }
    if (Array.isArray(input)) {
      input = {
        query: input,
        searchMode: autoCompleteSearch ? AUTOCOMPLETE__SEARCH : null,
      };
    }
    if (input === null || input === undefined) {
      input = { query: [] };
    }
  }
  input.query = replaceNullsBy(input.query, '__MATCH_EMPTY_ROWS__');
  input.query = replaceRelativeDates(input.query);
  if (input.query instanceof Object && !Array.isArray(input.query)) {
    // subquery case
    input.query = Object.keys(input.query)
      .map(x => ({ [x]: processQuery(input.query[x]) }))
      .reduce((x, y) => ({ ...x, ...y }), {});
  }
  return input;
};
export const preProcessSearchRequest = body => {
  if (typeof body.sort === 'string' && body.sort) {
    body.sort = [{ field: body.sort }];
  }
  body.sort = body.sort || [];
  const xQuery = body.query
    ? Object.keys(body.query)
        .map(x => ({ [x]: processQuery(body.query[x], isAutocompleteSearch(x)) }))
        .reduce((p, c) => ({ ...p, ...c }), {})
    : {};
  const newXQuery = {};
  return Object.keys(newXQuery).length
    ? { ...body, query: newXQuery }
    : { ...body, query: { ...xQuery, ...newXQuery } };
};

const typeRequestBuilder = bobjectType => ({
  get: bobjectId => perform({ url: `${buildUrl(bobjectType, bobjectId)}/raw`, method: 'GET' }),
  search: searchRequest =>
    perform({
      url: `${buildUrl(bobjectType)}/search${protobufMarshallingSearch ? '/protobuf' : ''}`,
      method: 'POST',
      body: preProcessSearchRequest(searchRequest),
      marshalling: useProtobufMarshalling ? protobufMarshallingSearch : jsonMarshalling,
      customPostProcess: injectReferencesSearchProcess,
    }),
  delete: bobjectId => perform({ url: buildUrl(bobjectType, bobjectId), method: 'DELETE' }),
  getForm: bobjectId =>
    perform({
      url: `${buildUrl(bobjectType, bobjectId)}/form`,
      method: 'GET',

      customPostProcess: injectReferencesGetProcess,
    }),
  create: data => perform({ url: buildUrl(bobjectType), method: 'POST', body: data }),
  bulkSet: bobjects =>
    perform({ url: `${buildUrl(bobjectType)}/bulk`, method: 'POST', body: bobjects }),
  bulkPartialSet: bobjects =>
    perform({ url: `${buildUrl(bobjectType)}/bulk`, method: 'PATCH', body: bobjects }),
  bulkPutSet: bobjects =>
    perform({ url: `${buildUrl(bobjectType)}/bulk`, method: 'PUT', body: bobjects }),
  set: ({ bobjectId, fields }) =>
    perform({ url: `${buildUrl(bobjectType, bobjectId)}/raw`, method: 'POST', body: fields }),
  partialSet: ({ bobjectId, data }) =>
    perform({
      url: `${buildUrl(bobjectType, bobjectId)}/raw`,
      method: 'PATCH',
      body: data,
    }),
  aggregation: aggregationRequest =>
    perform({
      url: `${buildUrl(bobjectType)}/aggregation`,
      method: 'POST',
      body: preProcessSearchRequest(aggregationRequest),
    }),
});

const BobjectApi = {
  request: () => ({
    bobjectType: bobjectType => typeRequestBuilder(bobjectType),
    Activity: () => typeRequestBuilder(ACTIVITY_BOBJECT_TYPE_NAME),
    Task: () => typeRequestBuilder(TASK_BOBJECT_TYPE_NAME),
    Company: () => typeRequestBuilder(COMPANY_BOBJECT_TYPE_NAME),
    Lead: () => typeRequestBuilder(LEAD_BOBJECT_TYPE_NAME),
    Opportunity: () => typeRequestBuilder(OPPORTUNITY_BOBJECT_TYPE_NAME),
  }),
};

export { BobjectApi };
