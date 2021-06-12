import React, { useCallback, useEffect, useState } from 'react';
import { SubscriptionHooks } from '@bloobirds-it/bloobirds-platform-react-api-library';
import Skeleton from '@material-ui/lab/Skeleton';
import { useBobjectList } from '../../contexts/bobjectList';
import bobjectListActions from '../../contexts/bobjectList/bobjectList.types';
import { injectReferencesSearchProcess } from '../../misc/api/bobject';
import { toCapitalize } from '../../utils/strings.utils';
import { BOBJECT_TYPES } from '../../constants/bobject';
import Card from '../card';
import List from '../list';
import { makeSearchQuery } from './bobjecList.service';
import { useEntity } from '../../hooks/entities/useEntity';

const BobjectList = ({
  bobjectType,
  card: cardType,
  date,
  dataIntercom,
  emptyMessage,
  isCompleted,
  list,
  name: listName,
  nextPage,
  onLoaded,
  searchQuery,
  tabSelected,
  title,
  tooltip = '',
}) => {
  const { numElements, list: listCards, isLoaded } = list;

  const handleClickShowMore = nextPage(listName);

  searchQuery.forEach(query => {
    SubscriptionHooks.useBobjectSubscription(toCapitalize(bobjectType, true), query, response => {
      injectReferencesSearchProcess(response);
      onLoaded(response);
    });
  });

  return isLoaded ? (
    <List
      dataIntercom={dataIntercom}
      tooltip={tooltip}
      title={title}
      totalItems={numElements || 0}
      onShowMore={handleClickShowMore}
      date={date}
      emptyMessage={emptyMessage}
    >
      {listCards.length > 0 &&
        listCards.map(bobject => {
          const key = bobject.id.value;
          return (
            <Card
              type={cardType}
              key={key}
              bobject={bobject}
              isCompleted={isCompleted}
              tabSelected={tabSelected}
            />
          );
        })}
    </List>
  ) : (
    <>
      <Skeleton variant="text" width="100%" />
      <Skeleton variant="rect" width="100%" height={60} />
      <Skeleton variant="rect" width="100%" height={60} />
    </>
  );
};

const Wrapper = ({
  listInfo: {
    card,
    bobjectType,
    pageSize,
    date,
    emptyMessage,
    name: listName,
    query,
    mandatorySort,
    title,
    tooltip,
    dataIntercom,
  },
}) => {
  const { state, dispatch, tabSelected, nextPage } = useBobjectList();
  const bobjectFields = useEntity('bobjectFields');
  const [searchQuery, setSearchQuery] = useState(undefined);
  const { filters, lists } = state;
  const list = lists[listName];
  const page = list?.page || 0;

  const onLoaded = useCallback(response => {
    let dispatchProps = {
      type: bobjectListActions.SET_LIST,
      payload: response,
      date,
      page,
      listName,
    };

    if (bobjectType === BOBJECT_TYPES.COMPANY) {
      dispatchProps = {
        ...dispatchProps,
        date,
      };
    }

    dispatch(dispatchProps);
  }, [page, listName]);

  useEffect(() => {
    setSearchQuery(
      makeSearchQuery({
        query,
        filters,
        page,
        bobjectFields,
        bobjectType,
        pageSize,
        mandatorySort,
      }),
    );
  }, [query, filters, page]);

  return searchQuery ? (
    <BobjectList
      dataIntercom={dataIntercom}
      bobjectType={bobjectType}
      card={card}
      date={date}
      emptyMessage={emptyMessage}
      list={list}
      name={listName}
      nextPage={nextPage}
      onLoaded={onLoaded}
      query={query}
      searchQuery={searchQuery}
      tabSelected={tabSelected}
      title={title}
      tooltip={tooltip}
    />
  ) : null;
};

export default Wrapper;
