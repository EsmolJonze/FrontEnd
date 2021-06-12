import React, { useLayoutEffect, useRef, useState } from 'react';
import styles from './htmlMessage.module.css';
import classnames from 'clsx';
import ReactShadowRoot from 'react-shadow-root';
import { parseEmailPixels } from '../../activityItem.utils';
import ShowMore from '../../showMore';

const HtmlMessage = ({ value }) => {
  const [showMore, setShowMore] = useState(false);
  const [overflows, setOverflows] = useState(false);
  const cardRef = useRef(null);

  useLayoutEffect(() => {
    if (cardRef.current) {
      const { clientHeight } = cardRef.current;
      if (clientHeight > 156) {
        setOverflows(true);
      }
    }
  }, [cardRef.current]);

  return (
    <div className={styles._email_wrapper}>
      <div
        className={classnames({
          [styles._email_wrapper_trimmed]: !showMore,
        })}
      >
        <ReactShadowRoot>
          <div ref={cardRef} dangerouslySetInnerHTML={{ __html: parseEmailPixels(value) }} />
        </ReactShadowRoot>
      </div>
      {overflows && <ShowMore value={showMore} onClick={setShowMore} />}
    </div>
  );
};

export default HtmlMessage;
