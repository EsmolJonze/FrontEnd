import React, { useState } from 'react';
import styles from './textMessage.module.css';
import ShowMore from '../../showMore';

const MAX_MESSAGE_LENGTH = 250;

const TextMessage = ({ value }) => {
  const [showMore, setShowMore] = useState(false);
  const isLargeMessage = typeof value === 'string' && value.length > MAX_MESSAGE_LENGTH;
  const shouldTrimMessage = isLargeMessage && !showMore;

  return (
    <p className={styles._text_message}>
      {shouldTrimMessage ? value.substr(0, MAX_MESSAGE_LENGTH) : value}
      {isLargeMessage && <ShowMore value={showMore} onClick={setShowMore} />}
    </p>
  );
};

export default TextMessage;
