import React from 'react';
import EmptyTableContainer from './emptyTable.container';

export const CompanyEmptyContent = props => (
  <EmptyTableContainer
    {...props}
    description="No results can be found! Try something else?"
    buttonText="Clean Filters"
    type={'companies'}
  />
);

export const LeadEmptyContent = props => (
  <EmptyTableContainer
    {...props}
    description="No leads were found to the current filters"
    buttonText="Clean Filters"
    type={'leads'}
  />
);

export const CompanyErrorContent = props => (
  <EmptyTableContainer {...props} type="companies" isError />
);

export const LeadErrorContent = props => <EmptyTableContainer {...props} type="leads" isError />;
