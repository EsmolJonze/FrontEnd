import withStyles from '@material-ui/styles/withStyles';
import { Button } from '@material-ui/core';
import React from 'react';
import classNames from 'clsx';
import { cssVariables } from '../style/variables';

const style = {
  button: {
    backgroundColor: cssVariables.color.bloobirds.natural,
    boxShadow: 'none ',
    color: 'white',
    '&:hover': {
      backgroundColor: cssVariables.color.bloobirds.light,
    },
    height: '48px',
  },
  disabled: {
    color: 'rgba(0, 0, 0, 0.26) !important',
    boxShadow: 'none ',
    backgroundColor: 'rgba(0, 0, 0, 0.12) !important',
    cursor: 'default',
  },
};

const FormButton = withStyles(style)(({ text, classes, className, disabled = false }) => (
  <Button
    variant="contained"
    className={
      className
        ? classNames(classes.button, { [classes.disabled]: disabled }, className)
        : classes.button
    }
    type={'submit'}
  >
    {text}
  </Button>
));

export default FormButton;
