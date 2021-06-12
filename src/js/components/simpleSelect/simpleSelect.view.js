import React from 'react';
import { Dropdown, Text, useVisible } from '@bloobirds-it/bloobirds-platform-component-library';
import styles from './simpleSelect.module.css';

const SimpleSelect = ({ children, dataIntercom, value, onChange, width }) => {
  const { ref, visible, setVisible } = useVisible(false);

  const items = React.Children.map(children, child => {
    if (!React.isValidElement(child)) return null;
    return React.cloneElement(child, {
      ...child.props,
      onClick: itemValue => {
        if (child.props.onClick) {
          child.props.onClick(itemValue);
        }
        setVisible(false);
        onChange(itemValue);
      },
    });
  });

  const displayValue = React.Children.toArray(children).find(child => child.props.value === value)
    ?.props.children;

  return (
    <Dropdown
      arrow={false}
      width={width}
      dataIntercom={dataIntercom}
      visible={visible}
      position="bottom"
      fallbackPositions={[
        'bottom-start',
        'bottom-end',
        'top',
        'top-start',
        'top-end',
        'right',
        'left',
      ]}
      anchor={
        <div tabIndex={0} role="button" onClick={() => setVisible(!visible)}>
          <Text className={styles.displayValue} size="s" color="bloobirds" weight="bold">
            {displayValue}
          </Text>
        </div>
      }
    >
      <div ref={ref} className={styles.dropdown}>
        {items}
      </div>
    </Dropdown>
  );
};

export default SimpleSelect;
