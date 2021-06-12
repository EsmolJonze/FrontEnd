import { Editor, Transforms } from 'slate';

const LIST_TYPES = ['numbered-list', 'bulleted-list'];
const DELETE_TYPES = new Set(['bulleted-list', 'numbered-list', 'list-item', 'block-quote']);

export const isBlockActive = (editor, format) => {
  const [match] = Editor.nodes(editor, {
    match: n => n.type === format,
  });

  return !!match;
};

export const toggleBlock = (editor, format) => {
  const isActive = isBlockActive(editor, format);
  const isList = LIST_TYPES.includes(format);

  Transforms.unwrapNodes(editor, {
    match: n => LIST_TYPES.includes(n.type),
    split: true,
  });

  Transforms.setNodes(editor, {
    // eslint-disable-next-line no-nested-ternary
    type: isActive ? 'paragraph' : isList ? 'list-item' : format,
  });

  if (!isActive && isList) {
    const block = { type: format, children: [] };
    Transforms.wrapNodes(editor, block);
  }
};

export const isMarkActive = (editor, format) => {
  const marks = Editor.marks(editor);
  return marks ? marks[format] === true : false;
};

export const toggleMark = (editor, format) => {
  const isActive = isMarkActive(editor, format);

  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
};

const isCursorAtBeginning = editor => editor.selection.focus.offset === 0;

export const getSelectionNodes = editor => [...Editor.nodes(editor, { at: editor.selection })];

export const toggleElementOnDelete = editor => {
  if (!isCursorAtBeginning(editor)) return false;

  const nodes = getSelectionNodes(editor);

  return nodes.some(([node]) => {
    if (DELETE_TYPES.has(node.type)) {
      toggleBlock(editor, node);
      return true;
    }

    return false;
  });
};

export const withSingleLine = editor => {
  const { normalizeNode } = editor;

  editor.normalizeNode = ([node, path]) => {
    if (path.length === 0) {
      if (editor.children.length > 1) {
        Transforms.mergeNodes(editor);
      }
    }

    return normalizeNode([node, path]);
  };

  return editor;
};

export const initialSlateObject = [
  {
    children: [
      {
        type: 'paragraph',
        children: [{ text: '' }],
      },
    ],
  },
];
