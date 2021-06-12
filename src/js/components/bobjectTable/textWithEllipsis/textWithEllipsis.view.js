import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from '@bloobirds-it/bloobirds-platform-component-library';

const isEllipsisActive = elementToCheck =>
  elementToCheck?.scrollWidth > elementToCheck?.offsetWidth;

const TextWithEllipsis = ({ element, tooltipPosition }) => {
  if (!element) {
    return null;
  }

  const {
    props: { children },
    ref: { current: elementRef },
  } = element;

  const elementWithTooltip = (
    <Tooltip title={children} position={tooltipPosition}>
      {element}
    </Tooltip>
  );

  return isEllipsisActive(elementRef) ? elementWithTooltip : element;
};

TextWithEllipsis.propTypes = {
  element: PropTypes.node.isRequired,
  tooltipPosition: PropTypes.string,
};

TextWithEllipsis.defaultProps = {
  tooltipPosition: 'bottom',
};

export default TextWithEllipsis;
