// @deprecated
import { withStyles } from '@material-ui/core';
import { cssVariables } from '../../style/variables';
import React from 'react';

const CircleWithText = ({ height, width, backgroundColor, shortName, fontSize, fontColor }) => {
  const Component = withStyles({
    root: {
      height,
      width,
      backgroundColor,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: fontColor || cssVariables.color.white.natural,
      fontSize,
      height: fontSize,
      lineHeight: `${fontSize + 2}px`,
    },
  })(({ classes }) => (
    <div className={classes.root}>
      <span className={classes.text}>{shortName}</span>
    </div>
  ));

  return <Component />;
};

export default CircleWithText;
