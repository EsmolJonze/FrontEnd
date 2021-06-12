import { deserialize } from './serializer';
import { Transforms } from 'slate';

const VOID_TYPES = new Set(['image', 'reply-history']);
const INLINE_TYPES = new Set(['link']);

export const withHtml = editor => {
  const { insertData, isInline, isVoid } = editor;

  editor.isInline = element => INLINE_TYPES.has(element.type) || isInline(element);

  editor.isVoid = element => VOID_TYPES.has(element.type) || isVoid(element);

  editor.insertData = data => {
    const html = data.getData('text/html');
    const slate = data.getData('application/x-slate-fragment');

    if (html && !slate) {
      const parsed = new DOMParser().parseFromString(html, 'text/html');
      const fragment = deserialize(parsed.body);
      Transforms.insertFragment(editor, fragment);
      return;
    }

    insertData(data);
  };

  return editor;
};
