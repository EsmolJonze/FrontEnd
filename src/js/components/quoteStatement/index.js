import React from 'react';
import { withStyles } from '@material-ui/core';
import { cssVariables } from '../../style/variables';

const style = {
  root: {
    textAlign: 'center',
    maxWidth: 600,
  },
  text: {
    fontSize: 25,
  },
  author: {
    fontSize: 25,
    color: cssVariables.color.gunmetal.light,
  },
};

const statements = [
  {
    text: 'Success is not final, failure is not fatal: it is the courage to continue that counts',
    author: 'Winston Churchill',
    type: 'Motivational',
  },
  {
    text: 'Success is a science; if you have the conditions, you get the result.',
    author: 'Oscar Wilde',
    type: 'Motivational',
  },
  {
    text: 'Success consists of going from failure to failure without loss of enthusiasm.',
    author: 'Winston Churchill',
    type: 'Motivational',
  },
  {
    text: "Just remember, you can't climb the ladder of success with your hands in your pockets.",
    author: 'Arnold Schwarzenegger',
    type: 'Motivational',
  },
  {
    text: 'That some achieve great success, is proof to all that others can achieve it as well.',
    author: 'Abraham Lincoln',
    type: 'Motivational',
  },
];

const statementsOfType = type => statements.filter(s => s.type === type);

const statementOfType = type => {
  const items = statementsOfType(type);
  const index = Math.floor(Math.random() * items.length);
  return items[index];
};

export const QuoteStatement = withStyles(style)(props => {
  const { classes, type = 'Motivational' } = { ...props };
  const statement = statementOfType(type);
  return (
    <div className={classes.root}>
      <p className={classes.text}>{statement.text}</p>
      <p className={classes.author}>- {statement.author}</p>
    </div>
  );
});
