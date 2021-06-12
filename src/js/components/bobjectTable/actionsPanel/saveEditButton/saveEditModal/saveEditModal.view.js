import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router';
import Modal from '@material-ui/core/Modal';
import {
  Button,
  IconButton,
  Input,
  Radio,
  RadioGroup,
  Tag,
  Text,
  useToasts,
} from '@bloobirds-it/bloobirds-platform-component-library';
import ListTag from '../../../../listTag';
import TagsModal from './tagsModal';
import { saveView, editView, deleteView } from './saveEditModal.service';
import { saveEditActions } from '../saveEditButton.types';
import styles from './saveEditModal.module.css';
import { changeLogicRolesToIds, excludedViewTypes } from '../../../context/bobjectTable.utils';
import { useBobjectTable, useRouter, useEntity } from '../../../../../hooks';

const findTag = (tagToSearch, tags) =>
  tags.some(tag => tag.value.toLowerCase() === tagToSearch.value.toLowerCase());

const SaveEditModal = ({ handleCloseModal, mode }) => {
  const {
    bobjectType,
    columns,
    direction,
    loadViewFromPayload,
    query,
    sort,
    view: { name, id, visibility, tags },
    viewType,
  } = useBobjectTable();
  const { history } = useRouter();
  const location = useLocation();
  const { createToast } = useToasts();
  const bobjectFields = useEntity('bobjectFields');
  const bobjectPicklistFieldValues = useEntity('bobjectPicklistFieldValues');

  const entityName = viewType === 'MEETINGS' ? 'meetings' : bobjectType;
  const [viewName, setViewName] = useState(
    name && viewType !== 'MEETINGS' ? name : `New ${entityName} list`,
  );
  const [viewVisibility, setViewVisibility] = useState(visibility || 'PUBLIC');
  const [selectedTags, setSelectedTags] = useState(tags);
  const [showTagsModal, openTagsModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const save =
    mode === saveEditActions.SAVE && (!id || excludedViewTypes[viewType]) ? saveView : editView;

  const removeTag = useCallback(tagToRemove => {
    setSelectedTags(selectedTags.filter(tag => tag.value !== tagToRemove.value));
  }, [selectedTags, setSelectedTags]);

  const addTag = useCallback(tagToAdd => {
    const isTagInList = findTag(tagToAdd, selectedTags);
    const listOfTags = !isTagInList ? [...selectedTags, tagToAdd] : [...selectedTags];

    setSelectedTags(listOfTags);
  }, [selectedTags, setSelectedTags]);

  const isDeletable = id && !excludedViewTypes[viewType];

  return (
    <Modal open onClose={handleCloseModal}>
      <div className={styles._container}>
        <div className={styles._header}>
          <div className={styles._title}>
            <Text size="xl" weight="regular">
              List details
            </Text>
          </div>
          <div className={styles._close_button}>
            <IconButton name="cross" onClick={handleCloseModal} color="bloobirds" size="40" />
          </div>
        </div>
        <div className={styles._content}>
          <div className={styles._list_name}>
            <Input
              placeholder="List name*"
              onChange={value => setViewName(value)}
              value={viewName}
              error={!viewName && 'Required'}
              width={300}
            />
          </div>
          <div className={styles._visibility}>
            <Text size="m" weight="regular" color="gray">
              Who can view and edit?
            </Text>
            <div className={styles._visibility_options}>
              <RadioGroup
                onChange={checkedValue => setViewVisibility(checkedValue)}
                value={viewVisibility}
              >
                <Radio value="PRIVATE" expand>
                  Only me
                </Radio>
                <Radio value="PUBLIC" expand>
                  Everyone
                </Radio>
              </RadioGroup>
            </div>
          </div>
          <div className={styles._tags_list}>
            <Text size="m" weight="regular" color="gray">
              Tags
            </Text>
            <div className={styles._tags_items}>
              <div className={styles._add_tag_button}>
                <Tag iconLeft="add" active onClick={() => openTagsModal(true)}>
                  Add tag
                </Tag>
              </div>
              {selectedTags &&
                selectedTags.map((tag, index) => {
                  const key = `tag-${tag.id || index}`;
                  return (
                    <div className={styles._tag__container} key={key}>
                      <ListTag handleClick={removeTag} tag={tag} />
                    </div>
                  );
                })}
            </div>
          </div>

          <div className={styles._footer}>
            <Button color="bloobirds" variant="tertiary" onClick={handleCloseModal}>
              Cancel
            </Button>
            {isDeletable && (
              <Button
                color="tomato"
                variant="tertiary"
                onClick={() => deleteView({ handleCloseModal, history, id })}
              >
                Delete list
              </Button>
            )}
            <Button
              variant="primary"
              disabled={isSubmitting}
              onClick={() => {
                setIsSubmitting(true);
                save({
                  bobjectType,
                  columns,
                  filter: changeLogicRolesToIds({
                    query,
                    bobjectFields,
                    bobjectPicklistFieldValues,
                  }),
                  goToView: newId => history.push(`${location.pathname}?viewId=${newId}`),
                  handleCloseModal,
                  loadViewFromPayload,
                  sort,
                  sortDirection: direction,
                  tags: selectedTags,
                  id,
                  viewName,
                  viewVisibility,
                }).finally(() => {
                  setIsSubmitting(false);
                  createToast({
                    type: 'success',
                    message: isDeletable ? 'List updated!' : 'List created!',
                  });
                });
              }}
            >
              SAVE
            </Button>
          </div>
        </div>
        <React.Suspense fallback={<div />}>
          {showTagsModal && (
            <TagsModal
              selectedTags={selectedTags}
              removeTag={removeTag}
              addTag={addTag}
              handleCloseModal={() => openTagsModal(false)}
            />
          )}
        </React.Suspense>
      </div>
    </Modal>
  );
};

SaveEditModal.propTypes = {
  handleCloseModal: PropTypes.func.isRequired,
};

export default SaveEditModal;
