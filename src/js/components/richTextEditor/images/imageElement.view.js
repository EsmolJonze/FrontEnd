import React from 'react';
import { useFocused, useSelected } from 'slate-react';
import { Tooltip, Icon } from '@bloobirds-it/bloobirds-platform-component-library';
import { isImageUrl } from './images.utils';

const ImageElement = ({ attributes, children, element }) => {
  const selected = useSelected();
  const focused = useFocused();
  const hasValidFormat = isImageUrl(element.url);

  const image = (
    <img
      src={element.url}
      alt={element.url}
      style={{
        boxShadow: selected && focused ? '0 0 0 3px #B4D5FF' : 'none',
        maxWidth: '100%',
      }}
    />
  );
  const imageComponent = element.href ? (
    <a href={element.href} target="_blank" rel="noreferrer">
      {image}
    </a>
  ) : (
    image
  );

  return (
    <div {...attributes}>
      <div contentEditable={false}>
        {hasValidFormat ? (
          imageComponent
        ) : (
          <Tooltip
            position="right"
            title="This image has a format that does not work with the most used email clients, please use jpg, png or gif images."
          >
            <Icon name="alertTriangle" color="tomato" />
          </Tooltip>
        )}
      </div>
      {children}
    </div>
  );
};

export default ImageElement;
