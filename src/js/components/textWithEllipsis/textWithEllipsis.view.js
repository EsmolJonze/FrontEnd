import React from 'react';
import { Tooltip } from '@bloobirds-it/bloobirds-platform-component-library';
import { ellipsis } from '../../utils/strings.utils';

const TextWithEllipsis = ({ children, numChars }) => {
  if (!children) {
    return null;
  }

  const contentWithEllipsis = (
    <Tooltip title={children} position="top">
      {ellipsis(children, numChars)}
    </Tooltip>
  );
  const contentWithoutEllipsis = children;
  const needsEllipsis = children && children.length > numChars;

  return needsEllipsis ? contentWithEllipsis : contentWithoutEllipsis;
};

export default TextWithEllipsis;
