import { connect } from 'react-redux';
import {
  DISPLAY_SIDEBAR_LEFT,
  TASK_FEED_SET_TASK_CATEGORY,
} from '../../../../../../actions/dictionary/app/main/taskWorkspace/taskFeed';
import FilterButton from './filterButton.view';

const mapStateToProps = state => {
  const {
    taskWorkspace: {
      taskFeed: { selectedTaskCategory, taskCount, inboundCountOfLeads, prospectTasksCount },
    },
  } = state;
  return {
    selectedTaskCategory,
    taskCount,
    inboundCountOfLeads,
    prospectTasksCount,
  };
};

const mapDispatchToProps = dispatch => ({
  changeCategory: selectedTaskCategory => {
    dispatch({
      type: TASK_FEED_SET_TASK_CATEGORY,
      selectedTaskCategory,
    });
    dispatch({ type: DISPLAY_SIDEBAR_LEFT });
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterButton);
