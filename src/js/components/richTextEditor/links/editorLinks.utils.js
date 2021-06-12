import { Editor, Range, Transforms } from 'slate';

export const isLinkActive = editor => {
  const [link] = Editor.nodes(editor, { match: n => n.type === 'link' });
  return !!link;
};
const unwrapLink = editor => {
  Transforms.unwrapNodes(editor, { match: n => n.type === 'link' });
};
export const wrapLink = (editor, url) => {
  if (isLinkActive(editor)) {
    unwrapLink(editor);
  }

  const { selection } = editor;
  const isCollapsed = selection && Range.isCollapsed(selection);
  const link = {
    type: 'link',
    url,
    children: isCollapsed ? [{ text: url }] : [],
  };

  if (isCollapsed) {
    Transforms.insertNodes(editor, link);
  } else {
    Transforms.wrapNodes(editor, link, { split: true });
    Transforms.collapse(editor, { edge: 'end' });
  }
};
const insertLink = (editor, url) => {
  if (editor.selection) {
    wrapLink(editor, url);
  }
};
// TODO: Add a proper link adding contextual menu
export const addLink = editor => {
  // eslint-disable-next-line no-alert
  const url = window.prompt('Enter the URL of the link:');
  if (!url) return;
  insertLink(editor, url);
};
