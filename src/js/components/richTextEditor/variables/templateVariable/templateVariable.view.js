import React from 'react';
import styles from './templateVariable.module.css';
import classnames from 'clsx';
import { ReactEditor, useEditor, useFocused, useSelected } from 'slate-react';
import { toCapitalize } from '../../../../utils/strings.utils';
import { Transforms } from 'slate';

const TemplateVariableView = ({ attributes, children, element }) => {
  const selected = useSelected();
  const focused = useFocused();
  const editor = useEditor();
  return (
    <span {...attributes}>
      <span
        contentEditable={false}
        className={classnames(styles._container, {
          [styles._container__selected]: selected && focused,
        })}
        onClick={() => {
          const path = ReactEditor.findPath(editor, element);
          Transforms.select(editor, path);
          Transforms.move(editor, { edge: 'end' });
        }}
      >
        {toCapitalize(element.templateGroup || '')}: {element.templateVariable?.name}
      </span>
      {children}
    </span>
  );
};

export default TemplateVariableView;
