import React from 'react';
import PropTypes from 'prop-types';
import ListTag from '../../../../../../listTag';
import styles from './listTagWrapper.module.css';

const ListTagWrapper = ({ tags, handleClick, type }) => (
  <>
    {tags &&
      tags.map((tag, index) => {
        const key = `tag-${tag.id || index}`;
        return (
          <div className={styles._tag__container} key={`tag-${key}`}>
            <ListTag handleClick={handleClick} tag={tag} type={type} />
          </div>
        );
      })}
  </>
);

ListTagWrapper.propTypes = {
  handleClick: PropTypes.func.isRequired,
  tags: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
};

export default ListTagWrapper;
