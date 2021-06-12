import React from 'react';
import styles from './replacedVariable.module.css';
import classnames from 'clsx';
import { toCapitalize } from '../../../../utils/strings.utils';
import { ReactEditor, useEditor, useFocused, useSelected } from 'slate-react';
import { Transforms } from 'slate';

const ReplacedVariable = ({ attributes, children, element }) => {
  const selected = useSelected();
  const focused = useFocused();
  const editor = useEditor();

  return (
    <span
      {...attributes}
      className={classnames(styles._container, {
        [styles._not_found__text]: !element.variableValue,
      })}
    >
      {!element.variableValue && (
        <span
          contentEditable={false}
          className={classnames(styles._container__notFound, {
            [styles._container__notFound__selected]: selected && focused,
          })}
          onClick={() => {
            const path = ReactEditor.findPath(editor, element);
            Transforms.select(editor, path);
            Transforms.move(editor, { edge: 'end' });
          }}
        >
          Not found: {toCapitalize(element.variableGroup)}: {element.variableName}
        </span>
      )}
      {children}
    </span>
  );
};

export default ReplacedVariable;
