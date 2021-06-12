import React from 'react';
import { withStyles } from '@material-ui/core';
import { cssVariables } from '../../../../../../../style/variables';
import { Text } from '@bloobirds-it/bloobirds-platform-component-library';

const style = {
  root: {
    display: 'flex',
    borderBottom: `1px solid ${cssVariables.color.gunmetal.veryLight}`,
    paddingBottom: 16,
    marginBottom: 20,
  },
  left: {
    flexGrow: '1',
  },
  right: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    marginBottom: 12,
  },
};

const Index = withStyles(style)(({ classes, title, subtitle, Button }) => (
  <div className={classes.root}>
    <div className={classes.left}>
      <div className={classes.title}>
        <Text color="peanut" size="xl">
          {title}
        </Text>
      </div>
      {subtitle !== undefined && (
        <Text color="peanut" size="s">
          {subtitle}
        </Text>
      )}
    </div>
    {Button && (
      <div className={classes.right}>
        <Button />
      </div>
    )}
  </div>
));

export const TaskHeader = Index;
