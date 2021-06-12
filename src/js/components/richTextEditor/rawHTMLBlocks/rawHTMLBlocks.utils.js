import { Transforms } from 'slate';

export const insertRawHTMLBlock = (editor, htmlContent) => {
  const rawHTMLBlock = {
    type: 'raw-html-block',
    html: htmlContent,
    children: [{ text: '' }],
  };

  Transforms.insertNodes(editor, rawHTMLBlock);
  Transforms.move(editor);
};

export const withRawHTMLBlock = editor => {
  const { isInline, isVoid } = editor;

  editor.isInline = element => (element.type === 'raw-html-block' ? true : isInline(element));
  editor.isVoid = element => (element.type === 'raw-html-block' ? true : isVoid(element));
  return editor;
};
