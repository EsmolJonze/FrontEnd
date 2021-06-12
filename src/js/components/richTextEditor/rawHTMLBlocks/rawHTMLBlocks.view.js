import React from 'react';
import { useFocused, useSelected } from 'slate-react';
import styles from './rawHTMLBlocks.module.css';

const RawHTMLBlocksView = ({ children, element }) => {
  const selected = useSelected();
  const focused = useFocused();
  return (
    <>
      <div
        style={{ boxShadow: selected && focused ? '0 0 0 2px #B4D5FF' : 'none' }}
        className={styles._container}
        contentEditable={false}
      >
        <div dangerouslySetInnerHTML={{ __html: element.html }} />
      </div>
      <span>{children}</span>
    </>
  );
};

export default RawHTMLBlocksView;
