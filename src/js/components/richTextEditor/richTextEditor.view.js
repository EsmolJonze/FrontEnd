import React, { useCallback, useMemo } from 'react';
import { createEditor } from 'slate';
import { Editable, Slate, withReact } from 'slate-react';
import { toggleElementOnDelete, toggleMark, withSingleLine } from './richTextEditor.utils';
import { HoveringToolbar } from './hoveringToolBar/hoveringToolBar.view';
import { Element, Leaf } from './richTextEditor.blocks';
import { withHistory } from 'slate-history';
import isHotkey from 'is-hotkey';
import styles from './richTextEditor.module.css';
import { withTemplateVariables } from './variables/addVariableButton/addVariableButton.utils';
import { withLinks } from './links/editorLinks.hoc';
import { withHtml } from './serializer/withHtml.hoc';
import { withImages } from './images/images.hoc';
import { withRawHTMLBlock } from './rawHTMLBlocks/rawHTMLBlocks.utils';
import { Text } from '@bloobirds-it/bloobirds-platform-component-library';
import { withStyledContainer } from './richTextEditorStyled.hoc';

const HOTKEYS = {
  'mod+b': 'bold',
  'mod+i': 'italic',
  'mod+u': 'underline',
};

const BaseEditor = React.forwardRef((props, ref) => (
  <div className={styles._container} ref={ref}>
    <Editable
      renderLeaf={props.renderLeaf}
      renderElement={props.renderElement}
      placeholder={
        <Text color="peanut" size="s">
          {props.placeholder || 'Enter some text...'}
        </Text>
      }
      onKeyDown={props.onKeyDown}
    />
  </div>
));

const RichTextEditor = React.forwardRef(
  (
    {
      value,
      onChange,
      children,
      hoveringToolbar = true,
      singleLine = false,
      styled = false,
      placeholder,
      error,
    },
    ref,
  ) => {
    const editor = useMemo(() => {
      const wrappedEditor = withImages(
        withHtml(
          withTemplateVariables(
            withLinks(withRawHTMLBlock(withHistory(withReact(createEditor())))),
          ),
        ),
      );
      if (singleLine) {
        return withSingleLine(wrappedEditor);
      }
      return wrappedEditor;
    }, [singleLine]);

    const renderElement = useCallback(props => <Element {...props} />, []);
    const renderLeaf = useCallback(props => <Leaf {...props} />, []);

    const Editor = styled ? withStyledContainer(BaseEditor) : BaseEditor;

    return (
      <Slate editor={editor} value={value} onChange={onChange}>
        {hoveringToolbar && <HoveringToolbar />}
        <Editor
          value={value}
          singleLine={singleLine}
          error={error}
          placeholder={placeholder}
          ref={ref}
          renderLeaf={renderLeaf}
          renderElement={renderElement}
          onKeyDown={event => {
            Object.keys(HOTKEYS).forEach(hotkey => {
              if (event.key === 'Backspace' || event.key === 'Enter') {
                if (toggleElementOnDelete(editor)) {
                  event.preventDefault();
                }
              }

              if (isHotkey(hotkey, event)) {
                event.preventDefault();
                const mark = HOTKEYS[hotkey];
                toggleMark(editor, mark);
              }
            });
          }}
        />
        {children}
      </Slate>
    );
  },
);

export default RichTextEditor;
