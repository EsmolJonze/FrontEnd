import InputAdornment from '@material-ui/core/InputAdornment';
import { IconButton } from '@bloobirds-it/bloobirds-platform-component-library';
import { TextField } from '@material-ui/core';
import styles from './searchBar.module.css';
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({
  handleChange,
  value,
  placeholder,
  updateRefDependencies,
  updateRefFunction,
}) => {
  const ref = useRef(null);
  let inputProps = {
    endAdornment: (
      <InputAdornment position="end">
        <IconButton
          name="search"
          size={18}
          color="peanut"
          onClick={() => handleChange(ref.current.value)}
        />
      </InputAdornment>
    ),
    className: styles._input,
  };

  useEffect(() => {
    ref.current.value = updateRefFunction();
  }, updateRefDependencies);

  if (placeholder) {
    inputProps = {
      ...inputProps,
      placeholder,
    };
  }

  return (
    <TextField
      fullWidth
      variant="outlined"
      onChange={() => handleChange(ref.current.value)}
      InputProps={inputProps}
      inputRef={ref}
      value={value}
      style={{ backgroundColor: 'white', marginRight: 16 }}
    />
  );
};

SearchBar.propTypes = {
  handleChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  updateRefDependencies: PropTypes.array,
  updateRefFunction: PropTypes.func,
};

SearchBar.defaultProps = {
  placeholder: '',
  updateRefDependencies: [],
  updateRefFunction: () => '',
};

export default SearchBar;
