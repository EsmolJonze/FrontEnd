import React, { Fragment, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { DEFAULT_CONVERTER, converters } from './transformers';
import PickerDialog from './PickerDialog';
import { Input } from '@bloobirds-it/bloobirds-platform-component-library';

const ColorPicker = ({
  onChange,
  convert, // Text field
  name,
  hintText,
  placeholder,
  value,
}) => {
  const node = useRef();

  const [showPicker, setShowPicker] = useState(false);
  const [internalValue, setValue] = useState(value);

  const handleClick = e => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setShowPicker(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);
  return (
    <Fragment>
      <div ref={node}>
        <Input
          name={name}
          value={value === undefined ? internalValue : value}
          variant="outlined"
          width="185px"
          placeholder={hintText || placeholder}
          onClick={() => setShowPicker(true)}
          onChange={v => {
            setValue(v);
          }}
        />
        {showPicker ? (
          <PickerDialog
            value={value === undefined ? internalValue : value}
            onClick={() => {
              setShowPicker(false);
              onChange(value);
            }}
            onChange={c => {
              const newValue = converters[convert](c);
              onChange(newValue);
            }}
          />
        ) : null}
      </div>
    </Fragment>
  );
};

ColorPicker.propTypes = {
  convert: PropTypes.oneOf(Object.keys(converters)),
  hintText: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

ColorPicker.defaultProps = {
  convert: DEFAULT_CONVERTER,
};

const ColorPickerField = ({
  input: { value, onChange, ...restInput },
  meta: { touched, error },
  ...restProps
}) => (
  <ColorPicker
    value={value}
    onChange={onChange}
    errorText={touched && error}
    {...restInput}
    {...restProps}
  />
);
ColorPickerField.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
};

export default ColorPicker;
