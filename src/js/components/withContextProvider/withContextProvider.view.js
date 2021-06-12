import React from 'react';

const withContextProvider = (Provider, WrappedComponent) => ({ ...props }) => (
  <Provider>
    <WrappedComponent {...props} />
  </Provider>
);

export default withContextProvider;
