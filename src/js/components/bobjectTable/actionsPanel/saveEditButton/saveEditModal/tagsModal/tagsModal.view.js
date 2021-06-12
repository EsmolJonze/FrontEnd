import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Modal } from '@material-ui/core';
import { createOrFindTags, findExistingTags, findThisTag } from './tagsModal.service';
import styles from './tagsModal.module.css';
import ListTagWrapper from './listTagWrapper';
import { useEntity } from '../../../../../../hooks/entities/useEntity';
import { useBobjectTable } from '../../../../../../hooks';

const DEFAULT_TAGS = [
  {
    id: undefined,
    value: 'Quality and Control',
  },
  {
    id: undefined,
    value: 'Inbound',
  },
  {
    id: undefined,
    value: 'Liquidity',
  },
  {
    id: undefined,
    value: 'Insights',
  },
  {
    id: undefined,
    value: 'Results',
  },
];

const TagsModal = ({ handleCloseModal, selectedTags, addTag, removeTag }) => {
  const [findTag, setFindTag] = useState('');
  const {
    view: { tags: tagsState },
  } = useBobjectTable();
  const tagsEntity = useEntity('tags');
  let allTagsFiltered = tagsEntity && [...tagsEntity?.all()];

  const getDefaultTags = () => {
    let defaultTags = DEFAULT_TAGS;
    selectedTags.forEach(selectedTag => {
      defaultTags = defaultTags?.filter(tag => tag.value !== selectedTag.value);
    });

    return defaultTags;
  };
  const [shownTags, setShownTags] = useState(getDefaultTags());

  const onNewTagAddition = (tag, tagsToCheck) => {
    const newTag = createOrFindTags(tagsToCheck, tag);
    addTag(newTag);
    setFindTag('');
  };

  const onReset = () => {
    const defaultTags = getDefaultTags();
    setShownTags(defaultTags);
  };

  useEffect(() => {
    selectedTags.forEach(selectedTag => {
      allTagsFiltered = allTagsFiltered?.filter(tag => tag.id !== selectedTag.id);
    });
    const defaultTags = getDefaultTags();
    setShownTags(defaultTags);
  }, [selectedTags]);

  const textareaRef = useRef(null);

  useEffect(() => {
    const { current: textareaInput } = textareaRef;

    if (textareaInput) {
      textareaInput.focus();
    }
  });

  return (
    <Modal open onClose={handleCloseModal} BackdropProps={{ invisible: true }}>
      <div className={styles._container}>
        <div className={styles._header}>
          <textarea
            className={styles._search_tag}
            placeholder="Create or find a tag"
            ref={textareaRef}
            onChange={e => {
              const {
                target: { value },
              } = e;
              setFindTag(value);

              if (!value) {
                onReset();
                return;
              }

              const existingTags = findExistingTags(value, allTagsFiltered);
              const thisTag = findThisTag(value, allTagsFiltered);

              setShownTags(
                thisTag.length > 0 ? existingTags : existingTags.concat({ id: undefined, value }),
              );
            }}
            onKeyDown={e => {
              const {
                target: { value },
                shiftKey,
                keyCode,
              } = e;
              if (keyCode === 13 && shiftKey === false) {
                e.preventDefault();
                onNewTagAddition(value, tagsState);
              }
            }}
            value={findTag}
          />
        </div>
        <div className={styles._body}>
          <div className={styles._tags_selected_container}>
            <ListTagWrapper tags={selectedTags} handleClick={removeTag} />
          </div>
          {shownTags && shownTags.length > 0 && (
            <div className={styles._tags_suggestions}>
              <ListTagWrapper
                tags={shownTags}
                handleClick={tagClicked => {
                  onNewTagAddition(tagClicked.value, tagsState);
                }}
                type="add"
              />
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};

TagsModal.propTypes = {
  handleCloseModal: PropTypes.func.isRequired,
};

export default TagsModal;
