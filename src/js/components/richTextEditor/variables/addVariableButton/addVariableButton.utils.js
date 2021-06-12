import { Transforms } from 'slate';
import { ReactEditor } from 'slate-react';

export const insertTemplateVariable = (editor, variable, groupName, shouldReplace) => {
  const templateVariable = {
    type: 'template-variable',
    templateVariable: variable,
    templateGroup: groupName,
    children: [{ text: '' }],
  };

  const replacedVariable = {
    type: 'replaced-variable',
    variableValue: variable?.value,
    variableGroup: variable?.group,
    children: [
      {
        text: variable.value ? variable.value : '',
      },
    ],
  };

  if (editor.selection) {
    Transforms.insertNodes(editor, shouldReplace ? replacedVariable : templateVariable);
    ReactEditor.focus(editor);

    if (!shouldReplace) {
      Transforms.move(editor);
    }

    Transforms.insertText(editor, ' ');
  }
};

export const withTemplateVariables = editor => {
  const { isInline, isVoid } = editor;

  editor.isInline = element =>
    element.type === 'template-variable' || element.type === 'replaced-variable'
      ? true
      : isInline(element);
  editor.isVoid = element =>
    element.type === 'template-variable' ||
    (element.type === 'replaced-variable' && !element.variableValue)
      ? true
      : isVoid(element);
  return editor;
};

export const isOutOfViewport = element => {
  const { top, bottom } = element.getBoundingClientRect();
  const height = window.innerHeight || document.documentElement.clientHeight;

  return {
    top: top < 0,
    bottom: bottom > height,
  };
};
