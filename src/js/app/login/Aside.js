import Grid from '@material-ui/core/Grid';
import React from 'react';
import Image from '../../../assets/login-aside-708x1024.png';
import withStyles from '@material-ui/styles/withStyles';
import { cssVariables } from '../../style/variables';
import { Action } from '@bloobirds-it/bloobirds-platform-component-library';

const styles = {
  aside: {
    backgroundImage: `url(${Image})`,
    height: '100%',
    backgroundSize: '100% 100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    container: {
      color: cssVariables.color.white.natural,
      display: 'grid',
      height: '100%',
      maxHeight: '238px',
      width: '445px',
      '& > span > svg > path': {
        fill: cssVariables.color.bloobirds.natural,
      },
    },
    header: {
      margin: 0,
      fontSize: 30,
      fontWeight: 600,
    },
  },
  playButton: {
    backgroundColor: 'white',
    boxShadow: '0 2px 4px -1px #00000033, 0 1px 10px 0 #0000001e, 0 4px 5px 0 #00000023',
    '&:hover': {
      backgroundColor: cssVariables.color.bloobirds.natural,
    },
  },
  playIcon: {
    color: cssVariables.color.bloobirds.natural,
    height: 32,
    width: 32,
  },
};

const PlayButton = () => (
  <Action
    color="white"
    icon="playOutline"
    onClick={() => window.open('https://bloobirds.com/', '_blank')}
  />
);

const Description = withStyles(styles.description)(({ classes }) => (
  <div className={classes.container}>
    <h1 className={classes.header}>The next generation of B2B prospecting</h1>
    <p>
      Bloobirds' end-to-end prospecting platform guides your sales development team through the
      challenge of converting leads and target accounts into qualified sales opportunities.
    </p>
    <PlayButton />
  </div>
));

const Aside = withStyles(styles)(({ classes }) => (
  <Grid item xs={6}>
    <div className={classes.aside}>
      <Description />
    </div>
  </Grid>
));

export default Aside;
