import curry from 'lodash/curry';
import { RestApi } from '../../misc/api/rest';
import keyBy from 'lodash/keyBy';
import * as Sentry from '@sentry/react';
import { mutate } from 'swr';
import SessionManagerFactory from '../../misc/session';

const BASE_PAGE_SIZE = 1000;

const NOT_ACCOUNT_OWNED_ENTITIES = Object.seal({
  fieldTypes: true,
});

const CACHEABLE_ENTITIES = [
  'bobjectTypes',
  'fieldTypes',
  'bobjectFields',
  'bobjectPicklistFieldValues',
  'bobjectGlobalPicklists',
  'targetMarkets',
  'idealCustomerProfiles',
];

const CACHE_REGEX = /bb-app-[a-zA-Z0-9]{16}-cache-entity-.+/;

const CACHE_INTERVAL = 60 * 1000 * 60; // 60 * 1000 * 60;

const entityModel = entities => ({
  find: filter => Object.values(entities).find(filter),
  findBy: curry((field, value) =>
    Object.values(entities).find(entity => entity && entity[field] === value),
  ),
  filterBy: curry((field, value) =>
    Object.values(entities).filter(entity => entity && entity[field] === value),
  ),
  findByLogicRole: value =>
    Object.values(entities).find(entity => entity && entity.logicRole === value),
  filterByLogicRole: value =>
    Object.values(entities).filter(entity => entity && entity.logicRole === value),
  all: () => Object.values(entities),
  ids: () => Object.keys(entities),
  get: id => entities[id],
});

const cleanKeysOfOtherAccounts = accountId => {
  Object.keys(window.localStorage).forEach(key => {
    if (key.startsWith('bb-')) {
      const match = key.match(CACHE_REGEX);
      if (match && match[0] !== '') {
        if (!key.includes(accountId)) {
          localStorage.removeItem(key);
        }
      }
    }
  });
};

const generateKey = (entity, accountId) => `bb-app-${accountId}-cache-entity-${entity}`;

export const isEntityLocallyCached = entityType => CACHEABLE_ENTITIES.includes(entityType);

const loadFromStorage = (entityName, accountId) => {
  const locallyCachedEntity = localStorage.getItem(generateKey(entityName, accountId));
  if (locallyCachedEntity !== null) {
    const parsedEntity = JSON.parse(locallyCachedEntity);
    if (parsedEntity.cacheTimestamp + CACHE_INTERVAL > new Date().getTime()) {
      return parsedEntity;
    }
  }
  return null;
};

export const removeEntityFromStorage = (entityName, accountId) => {
  localStorage.removeItem(generateKey(entityName, accountId));
};

export const forceCacheRefresh = () => {
  CACHEABLE_ENTITIES.forEach(entity => {
    removeEntityFromStorage(entity, SessionManagerFactory().getAccount().id);
    mutate(`/entity/${entity}`).then(() => console.info(`${entity} reloaded`));
  });
};

const saveToStorage = (newEntities, accountId, entityType, fetchData) => {
  if (CACHEABLE_ENTITIES.includes(entityType)) {
    try {
      localStorage.setItem(
        generateKey(entityType, accountId),
        JSON.stringify({
          newEntities,
          cacheTimestamp: fetchData,
        }),
      );
    } catch (e) {
      Sentry.captureException(e, {
        tags: {
          module: 'useEntity',
        },
        extra: {
          origin: 'Saving entity to local storage',
        },
      });
    }
  }
};

const fetchEntities = (query, entityName, allData = []) =>
  RestApi.search({
    query,
    entity: entityName,
  }).then(data => {
    allData = [...allData, ...data._embedded[entityName]];
    if (data.page.totalPages > query.page + 1) {
      return fetchEntities(
        {
          ...query,
          page: query.page + 1,
        },
        entityName,
        allData,
      );
    }
    return allData;
  });

const isUpdateNeeded = lastFetchData =>
  lastFetchData + CACHE_INTERVAL < new Date().getTime() || lastFetchData === undefined;

export const loadEntity = async (accountId, entityName) => {
  const query = {
    size: BASE_PAGE_SIZE,
    page: 0,
    ...(!NOT_ACCOUNT_OWNED_ENTITIES[entityName] && { 'account.id': accountId }),
  };

  if (isEntityLocallyCached(entityName)) {
    cleanKeysOfOtherAccounts(accountId);
    const localEntity = loadFromStorage(entityName, accountId);
    if (localEntity && !isUpdateNeeded(localEntity?.cacheTimestamp)) {
      if (isUpdateNeeded(localEntity?.cacheTimestamp)) {
        fetchEntities(query, entityName).then(newEntities => {
          saveToStorage(newEntities, accountId, entityName, new Date().getTime());
        });
      }
      return {
        lastFetchData: localEntity.cacheTimestamp,
        entityModel: entityModel(keyBy(localEntity.newEntities, 'id')),
      };
    }
  }

  const newEntities = await fetchEntities(query, entityName);
  const fetchData = new Date().getTime();
  saveToStorage(newEntities, accountId, entityName, fetchData);
  const model = entityModel(keyBy(newEntities, 'id'));
  return {
    lastFetchData: fetchData,
    entityModel: model,
  };
};
