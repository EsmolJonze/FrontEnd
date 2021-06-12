import React from 'react';
import { Button, Snackbar, SnackbarContent, withStyles } from '@material-ui/core';
import { connect } from 'react-redux';
import { cssVariables } from '../../style/variables';

const style = {
  root: {
    backgroundColor: cssVariables.color.gunmetal.natural,
    color: cssVariables.color.white.natural,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: cssVariables.color.gunmetal.natural,
    color: cssVariables.color.banana.natural,
    fontWeight: 'bold',
  },
};

const Index = withStyles(style)(({ classes, versionOutdated }) => (
  <Snackbar
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    open={versionOutdated}
  >
    <SnackbarContent
      className={classes.root}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          There is a new version of Bloobirds, please reload
        </span>
      }
      action={[
        <Button
          key="undo"
          size="small"
          className={classes.button}
          onClick={() => {
            // eslint-disable-next-line no-restricted-globals
            location.reload();
          }}
        >
          RELOAD
        </Button>,
      ]}
    />
  </Snackbar>
));

const mapStateToProps = state => ({
  versionOutdated: state.app.versionOutdated,
});

export default connect(mapStateToProps)(Index);
