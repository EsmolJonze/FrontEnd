import React from 'react';
import styles from './HelpButtonBell.module.css';
import {
  Dropdown,
  IconButton,
  Item,
  useVisible,
} from '@bloobirds-it/bloobirds-platform-component-library';

export const HelpButton = () => {
  const { ref, visible: isDropdownVisible, setVisible } = useVisible();

  const handleClick = () => {
    setVisible(!isDropdownVisible);
  };
  const toggleVisibility = () => {
    setVisible(!isDropdownVisible);
  };

  return (
    <div className={styles._container} onClick={handleClick}>
      <Dropdown
        ref={ref}
        arrow={false}
        visible={isDropdownVisible}
        anchor={
          <div className={styles._helpButton__container}>
            <IconButton
              name="questionCircle"
              color="peanut"
              size={24}
              onClick={e => {
                toggleVisibility(e);
              }}
            />
          </div>
        }
      >
        <Item
          onClick={() => {
            window.open('https://support.bloobirds.com/', '_blank');
          }}
        >
          Knowledge Base
        </Item>
        <Item
          onClick={() => {
            window.open('https://support.bloobirds.com/hc/en-us/requests/new', '_blank');
          }}
        >
          Submit a ticket
        </Item>
        <Item
          onClick={() => {
            window.open(
              'https://support.bloobirds.com/hc/en-us/articles/360015264900-What-s-new-',
              '_blank',
            );
          }}
        >
          What's new!
        </Item>
        <Item
          onClick={() => {
            window.open('https://status.bloobirds.com/', '_blank');
          }}
        >
          Status page
        </Item>
      </Dropdown>
    </div>
  );
};
