import React from 'react';
import { withStyles } from '@material-ui/core';
import { cssVariables } from '../style/variables';

const style = {
  title: {
    fontSize: '20px',
    lineHeight: '1.2',
    color: cssVariables.color.gunmetal.light,
  },
  subTitle: {
    fontSize: '13px',
    lineHeight: '1.23',
    letterSpacing: '0.8px',
    color: cssVariables.color.gunmetal.light,
  },
};

export const SubTitle = withStyles(style)(props => {
  const { text, classes } = { ...props };
  return <h2 className={classes.subTitle}>{text}</h2>;
});
