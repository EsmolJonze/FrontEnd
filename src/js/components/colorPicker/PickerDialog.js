import React from 'react';
import PropTypes from 'prop-types';
import { ChromePicker } from 'react-color';

const PickerDialog = ({ value, onClick, onChange }) => (
  <div style={{ position: 'absolute', zIndex: '2' }}>
    <div
      style={{
        position: 'absolute',
        top: '0px',
        right: '30px',
        bottom: '0px',
        left: '0px',
      }}
      onClick={onClick}
    />
    <ChromePicker color={value || '#000000'} onChange={onChange} />
  </div>
);

PickerDialog.propTypes = {
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  value: PropTypes.string,
};

export default PickerDialog;
