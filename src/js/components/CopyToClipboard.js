import React from 'react';
import { useToasts } from '@bloobirds-it/bloobirds-platform-component-library';

const Copy = ({ dataToCopy, children }) => {
  const { createToast } = useToasts();

  const copy = () => {
    navigator.clipboard.writeText(dataToCopy).then(() => {
      createToast({ type: 'success', message: 'Copied to clipboard' });
    });
  };

  return <span onClick={copy}> {children} </span>;
};

export default Copy;
