import React from 'react';
import { Link } from 'react-router-dom';

const LinkRow = props => {
  const { children, linkProps, onClickRow, url } = props;
  const handleRowClicked = event => {
    if (onClickRow) {
      onClickRow(event);
    }
  };
  return (
    <Link {...linkProps} to={url} onClick={handleRowClicked}>
      {children}
    </Link>
  );
};

export default LinkRow;
