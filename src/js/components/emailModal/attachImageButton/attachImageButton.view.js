import {
  Button,
  Dropdown,
  Input,
  Item,
  useVisible,
} from '@bloobirds-it/bloobirds-platform-component-library';
import React, { useEffect, useRef, useState } from 'react';
import { useEditor } from 'slate-react';
import { insertImage, isImageUrl } from '../../richTextEditor/images/images.utils';
import styles from './attachImageButton.module.css';
import { addHttpIfNeeded } from '../../../utils/url.utils';

const VIEWS = Object.freeze({
  INITIAL: 'INITIAL',
  IMAGE_URL: 'IMAGE_URL',
  LINK_URL: 'LINK_URL',
});

export const AttachImageButton = () => {
  const editor = useEditor();
  const [view, setView] = useState(VIEWS.INITIAL);
  const [imageUrl, setImageUrl] = useState();
  const [hasLink, setHasLink] = useState(false);
  const { ref, visible, setVisible } = useVisible();
  const [cursorPosition, setCursorPosition] = useState(undefined);
  const [hasError, setHasError] = useState(false);
  const inputRef = useRef();

  const addImage = value => {
    if (isImageUrl(value)) {
      setHasError(false);
      insertImage(editor, value, cursorPosition);
      setVisible(false);
    } else {
      setHasError(true);
    }
  };

  const addImageWithLink = value => {
    if (hasLink) {
      const url = addHttpIfNeeded(value);
      insertImage(editor, imageUrl, cursorPosition, url);
      setHasLink(false);
    } else {
      insertImage(editor, imageUrl, cursorPosition);
    }
    setVisible(false);
  };

  useEffect(() => {
    setView(VIEWS.INITIAL);
  }, [visible]);

  return (
    <div>
      <Dropdown
        ref={ref}
        visible={visible}
        position="top"
        anchor={
          <Button
            variant="clear"
            iconLeft="image"
            onClick={e => {
              e.preventDefault();
              e.stopPropagation();

              if (editor.selection) {
                setCursorPosition(editor.selection.anchor);
              }
              setVisible(true);
              setTimeout(() => inputRef.current?.focus());
            }}
          >
            Image
          </Button>
        }
      >
        <div className={styles._container}>
          {view === VIEWS.INITIAL && (
            <>
              <Item onClick={() => setView(VIEWS.IMAGE_URL)}>Insert image or gif</Item>
              <Item
                onClick={() => {
                  setView(VIEWS.IMAGE_URL);
                  setHasLink(true);
                }}
              >
                Insert image with link
              </Item>
            </>
          )}
          {view === VIEWS.IMAGE_URL && (
            <Input
              width="100%"
              icon="add"
              innerRef={inputRef}
              placeholder="Type or paste URL of image"
              onSubmit={value => {
                if (hasLink) {
                  if (isImageUrl(value)) {
                    setHasError(false);
                    setImageUrl(value);
                    setView(VIEWS.LINK_URL);
                  } else {
                    setHasError(true);
                  }
                } else {
                  addImage(value);
                }
              }}
              error={hasError && 'The url is not a valid image (png, jpg or gif).'}
            />
          )}
          {view === VIEWS.LINK_URL && (
            <Input
              width="100%"
              icon="link"
              placeholder="Enter the URL of the link:"
              onSubmit={addImageWithLink}
              error={hasError && 'The url is not a valid image (png, jpg or gif).'}
            />
          )}
        </div>
      </Dropdown>
    </div>
  );
};
