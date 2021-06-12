import React from 'react';
import withStyles from '@material-ui/styles/withStyles';
import Header from './Header';
import Content from './Content';
import { useDocumentTitle } from '../../../../../../../hooks/useDocumentTitle';

const style = {
  root: {
    height: 'calc(100vh - 80px)',
    width: '100%',
  },
};

const Inbound = ({ history, classes }) => {
  useDocumentTitle('Inbound');
  return (
    <div className={classes.root}>
      <Header history={history} />
      <Content />
    </div>
  );
};

export default withStyles(style)(Inbound);
