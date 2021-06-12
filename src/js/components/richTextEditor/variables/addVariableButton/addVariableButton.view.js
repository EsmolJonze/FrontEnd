import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useSlate } from 'slate-react';
import classNames from 'clsx';
import { insertTemplateVariable, isOutOfViewport } from './addVariableButton.utils';
import {
  IconButton,
  Portal,
  Item,
  Section,
} from '@bloobirds-it/bloobirds-platform-component-library';
import styles from './addVariableButton.module.css';
import { toCapitalize } from '../../../../utils/strings.utils';
import { VIEWS } from './addVariableButton.constants';
import { useEmailVariables } from '../../../../hooks';
import { getSelectionNodes } from '../../richTextEditor.utils';

const VariableOption = ({ editor, variablesByGroup, shouldReplace, groupName, toggleView }) => (
  <div>
    <Section>{toCapitalize(groupName)}</Section>
    {variablesByGroup.map(variable => (
      <div
        key={variable.name}
        onMouseDown={event => {
          event.preventDefault();
          event.stopPropagation();
          insertTemplateVariable(editor, variable, groupName, shouldReplace);
          toggleView();
        }}
      >
        <Item disabled={shouldReplace && !variable.value}>{variable.name}</Item>
      </div>
    ))}
  </div>
);

const AddVariableButtonView = ({ editorRef, shouldReplace = false }) => {
  const popupRef = useRef();
  const contentRef = useRef();
  const editor = useSlate();
  const [view, setView] = useState(VIEWS.INITIAL);

  const resetContainer = () => {
    const content = contentRef.current;
    content.style.marginBottom = '';
    content.style.marginTop = '';
    content.style.width = '';
    content.style.height = '';
  };

  const updatePosition = () => {
    const popup = popupRef.current;
    const content = contentRef.current;
    const nodes = getSelectionNodes(editor);
    const isImageSelected = nodes.some(([node]) => node?.type === 'image');

    if (!editor.selection || isImageSelected) {
      setView(VIEWS.INITIAL);
      return;
    }

    const domSelection = window.getSelection();
    if (domSelection.rangeCount < 1) {
      return;
    }

    const selectionRect = domSelection.getRangeAt(0).getBoundingClientRect();
    popup.style.position = 'fixed';
    popup.style.visibility = 'visible';

    // Prevent selection reset sending the popup to the top of the page.
    if (selectionRect.top !== 0) {
      popup.style.top = `${selectionRect.top}px`;
    }

    if (editorRef && editorRef.current) {
      const editorRect = editorRef.current.getBoundingClientRect();
      popup.style.left = `${editorRect.x + editorRect.width - 48}px`;
      if (selectionRect.top < editorRect.top || selectionRect.top > editorRect.bottom) {
        setView(VIEWS.INITIAL);
        popup.style.visibility = 'hidden';
        resetContainer();
        return;
      }
    }

    const out = isOutOfViewport(content);
    if (out.top) {
      const margin = -content.getBoundingClientRect().top;
      content.style.marginTop = `${margin}px`;
      content.style.marginBottom = '';
    } else if (out.bottom) {
      const margin = popup.offsetTop + content.clientHeight - window.innerHeight;
      content.style.marginTop = '';
      content.style.marginBottom = `${margin}px`;
    }
  };

  const handleClick = event => {
    event.preventDefault();
    event.stopPropagation();
    setView(VIEWS.VARIABLES);
  };

  const scrollReset = useCallback(event => {
    // Don't close the popup if the scroll comes within it
    if (contentRef.current && contentRef.current.isSameNode(event.target)) {
      return;
    }
    updatePosition();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', scrollReset, true);
    return () => window.removeEventListener('scroll', scrollReset, true);
  }, []);

  useEffect(() => {
    updatePosition();
  }, [editor.selection]);

  useEffect(() => {
    const popup = popupRef.current;
    const content = contentRef.current;

    if (view === VIEWS.INITIAL) {
      resetContainer();
    } else if (view === VIEWS.VARIABLES) {
      content.style.width = '166px';
      content.style.height = `${content.scrollHeight - 32}px`;

      setTimeout(() => {
        const out = isOutOfViewport(content);
        if (out.top) {
          const margin = -popup.offsetTop;
          content.style.marginTop = `${margin}px`;
        } else if (out.bottom) {
          const margin = popup.offsetTop + content.clientHeight - window.innerHeight;
          content.style.marginBottom = `${margin}px`;
        }
      }, 350);
    }
  }, [view]);

  const {
    emailVariablesValues: { values },
    emailVariables: { variables },
  } = useEmailVariables();

  const availableVariables = shouldReplace ? values : variables;
  const hasVariables = !!availableVariables;

  const classes = classNames(styles._content, {
    [styles._views_initial]: view === VIEWS.INITIAL,
  });

  return (
    <Portal>
      <div
        className={styles._popup}
        ref={popupRef}
        data-intercom="send-email-modal-add-variable-button"
      >
        <span className={styles._arrow} />
        <div className={classes} ref={contentRef}>
          {view === VIEWS.INITIAL && (
            <IconButton name="textVariable" onClick={handleClick} disabled={!hasVariables} />
          )}
          {view === VIEWS.VARIABLES &&
            Object.keys(availableVariables).map(tag => (
              <VariableOption
                key={tag}
                variablesByGroup={availableVariables[tag]}
                groupName={tag}
                editor={editor}
                shouldReplace={shouldReplace}
                toggleView={() => setView(VIEWS.INITIAL)}
              />
            ))}
        </div>
      </div>
    </Portal>
  );
};

export default AddVariableButtonView;
