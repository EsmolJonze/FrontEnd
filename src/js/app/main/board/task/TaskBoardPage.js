import React from 'react';
import { withStyles } from '@material-ui/core';
import { cssVariables } from '../../../../style/variables';
import { FilterRoutesByUserPermissions } from '../../../../components/userPermissions/filterRoutesByUserPermissions/index';
import { withWrappers } from '../../../../misc/utils';

const style = {
  structureTaskPage: {
    margin: '0px',
    padding: '0px',
    gridGap: '0px',
    display: 'flex',
    backgroundColor: '#f0f4f6',
    flexDirection: 'row',
    height: '100%',
  },
  sectionGoals: {
    backgroundColor: 'white',
    minHeight: 'calc(100vh - 80px)',
    borderLeft: '1px solid #e6ecf1',
    marginLeft: '-17px',
    zIndex: '1',
    minWidth: '228px',
    transition: 'width 0.25s',
  },
  sectionGoalsShift: {
    width: '0',
    transition: 'width 0.25s',
  },
  modalForm: {
    modal: {
      backgroundColor: cssVariables.color.white.natural,
      height: '100px',
      width: '100px',
    },
  },
};

const TaskBoardPage = withStyles(style)(props => {
  const { classes, dispatch } = { ...props };
  return (
    <div className={classes.structureTaskPage}>
      <FilterRoutesByUserPermissions task={props} dispatch={dispatch} />
    </div>
  );
});

export default withWrappers({
  mapDispatchToProps: dispatch => ({ dispatch }),
})(TaskBoardPage);
