import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Text } from '@bloobirds-it/bloobirds-platform-component-library';
import styles from './subhomesLayout.module.css';
import { getHideInfoInLocalStorage, setHideInfoInLocalStorage } from './subhomesLayout.service';

const SubHomesLayout = ({ bodyContent, collapsableContent, id, title }) => {
  const [toggleVisibility, setToggleVisibility] = useState(getHideInfoInLocalStorage());
  const visibilityButtonLabel = toggleVisibility ? 'Hide info' : 'Show info';

  return (
    <div className={styles._container} id={id}>
      <div className={styles._info_container}>
        <div className={styles._header}>
          <div className={styles._title}>
            <Text htmlTag="h3" size="xl">
              {title}
            </Text>
          </div>
          <div className={styles._visibility_button}>
            <Button
              variant="clear"
              onClick={() => {
                setHideInfoInLocalStorage(!toggleVisibility);
                setToggleVisibility(!toggleVisibility);
              }}
            >
              {visibilityButtonLabel}
            </Button>
          </div>
        </div>
        {toggleVisibility && <div className={styles._collapse_content}>{collapsableContent}</div>}
      </div>
      <div className={styles._body_container}>{bodyContent}</div>
    </div>
  );
};

SubHomesLayout.propTypes = {
  bodyContent: PropTypes.element.isRequired,
  collapsableContent: PropTypes.element.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default SubHomesLayout;
