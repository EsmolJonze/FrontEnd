import React, { useEffect, useRef } from 'react';
import { ReactEditor, useSlate } from 'slate-react';
import { Editor, Range } from 'slate';
import { Menu, Portal } from '../richTextEditor.blocks';
import { isBlockActive, isMarkActive, toggleBlock, toggleMark } from '../richTextEditor.utils';
import styles from './hoveringToolBar.module.css';
import { IconButton } from '@bloobirds-it/bloobirds-platform-component-library';
import { addLink, isLinkActive } from '../links/editorLinks.utils';

export const HoveringToolbar = () => {
  const ref = useRef();
  const editor = useSlate();

  useEffect(() => {
    const scrollReset = () => {
      if (ref.current) {
        ref.current.removeAttribute('style');
      }
    };

    window.addEventListener('scroll', scrollReset, true);
    return window.removeEventListener('scroll', scrollReset);
  }, []);

  useEffect(() => {
    const el = ref.current;
    const { selection } = editor;

    if (!el) {
      return;
    }

    if (
      !selection ||
      !ReactEditor.isFocused(editor) ||
      Range.isCollapsed(selection) ||
      Editor.string(editor, selection) === ''
    ) {
      el.removeAttribute('style');
      return;
    }

    const domSelection = window.getSelection();
    const domRange = domSelection.getRangeAt(0);
    const rect = domRange.getBoundingClientRect();
    el.style.opacity = 1;
    el.style.top = `${rect.top + window.pageYOffset - el.offsetHeight}px`;
    el.style.left = `${rect.left + window.pageXOffset - el.offsetWidth / 2 + rect.width / 2}px`;
  });

  return (
    <Portal>
      <Menu ref={ref} className={styles._container}>
        <div className={styles._group__container}>
          <FormatButton format="paragraph" icon="paragraph" editsHoleBlock />
          <FormatButton format="heading-one" icon="header1" editsHoleBlock />
          <FormatButton format="heading-two" icon="header2" editsHoleBlock />
          <FormatButton format="block-quote" icon="quote" editsHoleBlock />
        </div>
        <div className={styles._group__container}>
          <FormatButton format="bold" icon="textBold" size={20} />
          <FormatButton format="italic" icon="textItalic" size={20} />
          <FormatButton format="underlined" icon="textUnderlined" size={20} />
          <FormatButton format="link" icon="link" isLink size={20} />
        </div>
        <div className={styles._group__container}>
          <FormatButton format="bulleted-list" icon="textBulletList" editsHoleBlock size={20} />
          <FormatButton format="numbered-list" icon="textOrderedList" editsHoleBlock size={20} />
        </div>
        <div className={styles.arrow} />
      </Menu>
    </Portal>
  );
};

const FormatButton = ({ format, icon, editsHoleBlock = false, isLink = false, size = 24 }) => {
  const editor = useSlate();
  const toggleFunction = editsHoleBlock ? toggleBlock : toggleMark;
  const isActiveFunction = editsHoleBlock ? isBlockActive : isMarkActive;
  const isActive = isLink ? isLinkActive(editor) : isActiveFunction(editor, format);
  return (
    <div className={styles._formatButton__container}>
      <IconButton
        name={icon}
        onClick={() => (isLink ? addLink(editor) : toggleFunction(editor, format))}
        color={isActive ? 'peanut' : 'white'}
        size={size}
      />
    </div>
  );
};
