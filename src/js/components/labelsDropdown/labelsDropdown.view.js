import React from 'react';
import {
  Dropdown,
  Icon,
  Label,
  Item,
  useVisible,
} from '@bloobirds-it/bloobirds-platform-component-library';
import styles from './labelsDropdown.module.css';

const LabelsDropdown = ({ items, width, value, onChange }) => {
  const { ref, visible, setVisible } = useVisible(false);
  const selectedItem = items.find(item => item?.id === value);

  return (
    <div className={styles._container} style={{ width: `${width + 5}px` }}>
      <Dropdown
        ref={ref}
        expand
        arrow={false}
        width={width}
        visible={visible}
        anchor={
          <div className={styles._dropdown_wrapper} onClick={() => setVisible(true)}>
            <div className={styles._label_wrapper}>
              <Label
                overrideStyle={{
                  backgroundColor: selectedItem?.styles?.backgroundColor,
                  borderColor:
                    selectedItem?.styles?.borderColor || selectedItem?.styles?.backgroundColor,
                  color: selectedItem?.styles?.textColor,
                }}
              >
                {selectedItem?.text}
              </Label>
            </div>
            <Icon name="chevronDown" size={16} color="peanut" />
          </div>
        }
      >
        {items.map(status => (
          <Item
            dataTest={status?.text}
            value={status?.id}
            onClick={() => {
              onChange(status?.id);
              setVisible(false);
            }}
          >
            {status?.text}
          </Item>
        ))}
      </Dropdown>
    </div>
  );
};

export default LabelsDropdown;
