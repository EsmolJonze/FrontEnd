import { useEffect } from 'react';
import { insertRawHTMLBlock } from '../../richTextEditor/rawHTMLBlocks/rawHTMLBlocks.utils';
import { useEditor } from 'slate-react';
import { useEmailSignature } from '../../../hooks';

const AppendEmail = ({ nodes }) => {
  const editor = useEditor();
  const { signature } = useEmailSignature();

  useEffect(() => {
    if (signature.enabled) {
      insertRawHTMLBlock(editor, signature.body);
      nodes.filter(Boolean).forEach(editor.insertNode);
    }
  }, [signature.loaded]);

  return null;
};

export default AppendEmail;
