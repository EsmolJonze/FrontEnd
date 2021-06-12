import React from 'react';
import { ALLOCATE_QC_TASK_CLEAR_SESSION } from '../../../../../../../actions/dictionary';
import { withWrappers } from '../../../../../../../misc/utils';
import { CompleteButton } from './CompleteButton';
import { BobjectApi } from '../../../../../../../misc/api/bobject';

const Index = props => {
  const { dispatch, session } = {
    ...props,
  };
  const handleClick = React.useCallback(() => {
    const d = {};
    Object.keys(session).forEach(k => {
      d[k] = { COMPANY__ASSIGNED_TO: session[k] };
    });
    BobjectApi.request()
      .Company()
      .bulkPartialSet(d);
    dispatch({ type: ALLOCATE_QC_TASK_CLEAR_SESSION });
  }, [session, dispatch]);
  return <CompleteButton onClick={handleClick}>Deliver Companies</CompleteButton>;
};

const mapStateToProps = state => ({
  session: state.taskWorkspace.board.allocateQcTask.session,
});

const mapDispatchToProps = dispatch => ({ dispatch });

export const CompleteButtonAllocateQc = withWrappers({
  mapStateToProps,
  mapDispatchToProps,
})(Index);
