import React from 'react';
import classnames from 'clsx';
import { IconButton, Dropdown, Text } from '@bloobirds-it/bloobirds-platform-component-library';
import styles from './keypad.module.css';

const Keypad = ({ anchor, handleClose, handleKeyPress, visible, isCallInCourse, innerRef }) => (
  <Dropdown
    visible={visible}
    position="right"
    anchor={<div className={styles._anchor_wrapper}>{anchor}</div>}
  >
    <div className={styles._container} ref={innerRef}>
      <div className={styles._item} onClick={() => handleKeyPress(1)}>
        <Text size="xl">1</Text>
      </div>
      <div className={styles._item} onClick={() => handleKeyPress(2)}>
        <Text size="xl">2</Text>
      </div>
      <div className={styles._item} onClick={() => handleKeyPress(3)}>
        <Text size="xl">3</Text>
      </div>
      <div className={styles._item} onClick={() => handleKeyPress(4)}>
        <Text size="xl">4</Text>
      </div>
      <div className={styles._item} onClick={() => handleKeyPress(5)}>
        <Text size="xl">5</Text>
      </div>
      <div className={styles._item} onClick={() => handleKeyPress(6)}>
        <Text size="xl">6</Text>
      </div>
      <div className={styles._item} onClick={() => handleKeyPress(7)}>
        <Text size="xl">7</Text>
      </div>
      <div className={styles._item} onClick={() => handleKeyPress(8)}>
        <Text size="xl">8</Text>
      </div>
      <div className={styles._item} onClick={() => handleKeyPress(9)}>
        <Text size="xl">9</Text>
      </div>
      <div className={styles._item} onClick={() => handleKeyPress('*')}>
        <Text size="xl">*</Text>
      </div>
      <div className={styles._item} onClick={() => handleKeyPress(0)}>
        <Text size="xl">0</Text>
      </div>
      <div className={styles._item} onClick={() => handleKeyPress('#')}>
        <Text size="xl">#</Text>
      </div>
      <div className={styles._item} onClick={handleClose}>
        <IconButton size="18" name="cross" />
      </div>
      <div className={styles._item} onClick={() => handleKeyPress('+')}>
        <Text size="xl">+</Text>
      </div>
      <div
        className={classnames({
          [styles._item]: true,
          [styles._item_button]: true,
          [styles._disabled]: isCallInCourse,
        })}
        onClick={() => {
          if (!isCallInCourse) {
            handleKeyPress('backspace');
          }
        }}
      >
        <IconButton disabled={isCallInCourse} size="18" name="arrowLeft" />
      </div>
    </div>
  </Dropdown>
);

export default Keypad;
