import TableCell from '@material-ui/core/TableCell';
import React from 'react';
import withStyles from '@material-ui/styles/withStyles';
import { cssVariables } from '../../../../style/variables';

const style = {
  root: {
    color: cssVariables.color.black.natural,
    paddingRight: '0px',
    minWidth: '250px',
    border: 'none',
  },
  withActions: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
};

const Cell = ({ classes, children, actions, dataTest }) => {
  let content = children;
  if (actions) {
    content = (
      <div className={classes.withActions}>
        {content}
        {actions}
      </div>
    );
  }
  return (
    <TableCell className={classes.root}>
      <div data-test={dataTest}>{content}</div>
    </TableCell>
  );
};

export default withStyles(style)(Cell);
