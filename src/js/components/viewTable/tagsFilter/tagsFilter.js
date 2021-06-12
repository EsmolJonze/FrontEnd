import React, { useState } from 'react';
import { Text } from '@bloobirds-it/bloobirds-platform-component-library';
import { useViewTableContext } from '../context/viewTable.context';
import { viewTableActions } from '../context/viewTable.types';
import ListTag from '../../listTag';
import { sliceObject } from '../../../utils/objects.utils';
import styles from './tagsFilter.module.css';

const sortTags = (tagA, tagB) => {
  if (tagA.id === 'NO_TAG') {
    return -1;
  }
  if (tagB.id === 'NO_TAG') {
    return 1;
  }
  return tagA.value.toLowerCase() > tagB.value.toLowerCase() ? 1 : -1;
};

const MAX_TAGS = 20;
const TagsFilter = () => {
  const { state, dispatch } = useViewTableContext();
  const [expandTags, setExpandTags] = useState(false);
  const { tags } = state;

  const orderedTags = tags && Object.values(tags).sort(sortTags);
  const tagsLength = tags && Object.keys(tags).length;

  const tagClicked = ({ id: tagId }) => {
    tags[tagId].used = !tags[tagId].used;
    dispatch({ type: viewTableActions.VIEW_TABLE_SET_TAGS, payload: tags });
    dispatch({ type: viewTableActions.VIEW_TABLE_RELOAD_TRUE });
  };

  const isNeedToCollapse = tagsLength > MAX_TAGS;

  const tagsToRender =
    orderedTags &&
    (!isNeedToCollapse || expandTags
      ? Object.values(orderedTags)
      : sliceObject(orderedTags, 0, MAX_TAGS));

  const showMore = !expandTags && isNeedToCollapse;

  return (
    <div className={styles._container}>
      {tags &&
        tagsToRender.map(tag => (
          <span className={styles._tag__container} key={`tag-${tag.id}`} id={tag.id}>
            <ListTag active={tag.used} tag={tag} handleClick={tagClicked} type="filter" />
          </span>
        ))}
      {showMore && (
        <div
          className={styles._more_options__container}
          onClick={e => {
            e.stopPropagation();
            setExpandTags(true);
          }}
        >
          {tags && <Text color="bloobirds" size="m">{`+${tagsLength - MAX_TAGS}`}</Text>}
        </div>
      )}
    </div>
  );
};

export default TagsFilter;
