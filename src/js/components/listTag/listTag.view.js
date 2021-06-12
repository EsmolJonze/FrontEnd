import React from 'react';
import PropTypes from 'prop-types';
import { Tag, Tooltip } from '@bloobirds-it/bloobirds-platform-component-library';
import { ellipsis } from '../../utils/strings.utils';

const MAX_LENGTH = 12;

const ListTag = ({ active = false, handleClick, tag, type }) => {
  if (!tag) {
    return null;
  }
  let tagProps = {
    active: false,
    iconLeft: 'cross',
    onClickLeft: () => handleClick(tag),
  };

  if (type === 'add') {
    tagProps = {
      active: true,
      iconLeft: 'add',
      onClick: () => handleClick(tag),
    };
  } else if (type === 'filter') {
    tagProps = {
      active,
      onClick: () => handleClick(tag),
    };
  }

  const { value: text = '' } = tag;
  const contentWithEllipsis = (
    <Tooltip title={text.toUpperCase()} position="top">
      <Tag {...tagProps}>{ellipsis(text, MAX_LENGTH)}</Tag>
    </Tooltip>
  );
  const contentWithoutEllipsis = <Tag {...tagProps}>{text}</Tag>;
  const needsEllipsis = text && text.length > MAX_LENGTH;

  return needsEllipsis ? contentWithEllipsis : contentWithoutEllipsis;
};

ListTag.propTypes = {
  handleClick: PropTypes.func,
  tag: PropTypes.object.isRequired,
};

ListTag.defaultProps = {
  handleClick: () => {},
};

export default ListTag;
