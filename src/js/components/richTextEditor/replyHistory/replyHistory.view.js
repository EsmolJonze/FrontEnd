import React, { useState } from 'react';
import styles from './replyHistory.module.css';

const ToggleButton = ({ onClick }) => (
  <button type="button" className={styles._toggle_button} onClick={onClick}>
    <div>•</div>
    <div>•</div>
    <div>•</div>
  </button>
);

const ReplyHistory = ({ element }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div contentEditable={false}>
      <ToggleButton onClick={() => setVisible(!visible)} />
      {visible && <div dangerouslySetInnerHTML={{ __html: element.html }} />}
    </div>
  );
};

export default ReplyHistory;
