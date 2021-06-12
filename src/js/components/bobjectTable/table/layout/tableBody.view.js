import React from 'react';
import { TableBody as MuiTableBody } from '@material-ui/core';
import { Row } from './Row';
import { SkeletonTableBody } from '../../bobjectTableSkeleton/skeletonTable.view';

export const TableBody = ({ bobjects, bobjectFields, actionsRow, bobjectType, rowClick }) => {
  let contents = <React.Fragment />;
  if (bobjects === undefined) {
    contents = <SkeletonTableBody bobjectFields={bobjectFields} />;
  }
  if (bobjects?.length > 0) {
    contents = bobjects.map((bobject, index) => (
      <Row
        key={bobject.id.objectId}
        bobject={bobject}
        bobjectType={bobjectType}
        bobjectFields={bobjectFields}
        actionsRow={actionsRow}
        rowClick={rowClick}
        showContactButton
        dataTest={`Row_${index}`}
      />
    ));
  }
  return <MuiTableBody data-intercom="bobject-table-body">{contents}</MuiTableBody>;
};
