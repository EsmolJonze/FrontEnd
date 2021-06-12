import { isUrl } from '../../../misc/utils';
import { wrapLink } from './editorLinks.utils';

export const withLinks = editor => {
  const { insertData, insertText, isInline } = editor;

  editor.isInline = element => (element.type === 'link' ? true : isInline(element));

  editor.insertText = text => {
    if (text && isUrl(text)) {
      wrapLink(editor, text);
    } else {
      insertText(text);
    }
  };

  editor.insertData = data => {
    const text = data.getData('text/plain');

    if (text && isUrl(text)) {
      wrapLink(editor, text);
    } else {
      insertData(data);
    }
  };

  return editor;
};
