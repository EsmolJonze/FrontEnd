import React from 'react';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core';
import { cssVariables } from '../../../../../../style/variables';
import { QuoteStatement } from '../../../../../../components/quoteStatement';
import { useDocumentTitle } from '../../../../../../hooks/useDocumentTitle';
import { BirdsSvg } from '../../../../../../../assets/svg';

const style = {
  root: {
    minHeight: 'calc(100vh - 152px)',
    margin: '36px',
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
    flexDirection: 'column',
    position: 'relative',
  },
  titleEmoji: {
    marginTop: 120,
    fontSize: '50px',
  },
  title: {
    color: cssVariables.color.bloobirds.natural,
    fontSize: '30px',
    fontWeight: 'normal',
    fontStretch: 'normal',
  },
  paragraph: {
    color: cssVariables.color.gunmetal.natural,
  },
  background: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    '& > svg': {
      height: '100%',
      width: '100%',
    },
    '& > svg path': {
      fill: cssVariables.color.bloobirds.natural,
    },
  },
  button: {
    backgroundColor: cssVariables.color.bloobirds.natural,
    color: cssVariables.color.white.natural,
    '&:hover': {
      backgroundColor: cssVariables.color.bloobirds.light,
    },
  },
};

const SplashTask = withStyles(style)(({ classes, title, subtitle, emoji }) => (
  <Card classes={{ root: classes.root }}>
    <div className={classes.background}>
      <BirdsSvg />
    </div>
    <span className={classes.titleEmoji} role="img" aria-label="icon-label">
      {emoji}
    </span>
    <h1 className={classes.title}>{title}</h1>
    <QuoteStatement />
    <p className={classes.paragraph}>
      <span role="img" aria-label="icon-label">
        👈
      </span>{' '}
      {subtitle}
    </p>
  </Card>
));

export const SplashNextTask = props => {
  useDocumentTitle('Done!');
  return (
    <SplashTask title="Done!" emoji="🎉" subtitle="Select the next task from the feed" {...props} />
  );
};

export const SplashWelcomeTask = props => {
  useDocumentTitle('Welcome!');
  return (
    <SplashTask
      title="Welcome!"
      emoji="👋"
      subtitle="Select a task from the feed, to start working"
      {...props}
    />
  );
};
