import React, { useEffect, useState } from 'react';
import { useBobjectList } from '../../../contexts/bobjectList';
import getGroupState from './bobjectListGroup.util';
import BobjectList from '../index';
import bobjectListActions from '../../../contexts/bobjectList/bobjectList.types';
import ClearFilters from '../../clearFilters';
import EmptyList from '../../emptyList';
import styles from './bobjectListGroup.module.css';
import { useActiveUser } from '../../../hooks';

const { CLEAN_FILTERS } = bobjectListActions;

const BobjectListGroup = ({ bobjectLists, showList }) => {
  const { state, dispatch } = useBobjectList();
  const [lists, setLists] = useState([]);
  const { activeUser } = useActiveUser();

  useEffect(() => {
    if (Array.isArray(bobjectLists)) {
      setLists(bobjectLists);
    } else {
      setLists(bobjectLists());
    }
  }, [bobjectLists]);

  const groupState = getGroupState(state, showList);

  return (
    <div className={styles._content_right}>
      {groupState === 'empty' && <EmptyList />}
      {groupState === 'clean' && (
        <ClearFilters handleClear={() => dispatch({ type: CLEAN_FILTERS })} />
      )}
      {lists.map(
        list =>
          showList(list.name, state.lists, state.filters, activeUser) && (
            <BobjectList key={list.name} listInfo={list} />
          ),
      )}
    </div>
  );
};

BobjectListGroup.defaultProps = {
  showList: () => true,
};

export default BobjectListGroup;
