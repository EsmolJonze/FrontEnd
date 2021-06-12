import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import {
  BOBJECT_INBOUND_TABLE_RESET_VIEW,
  RESET_TASK_STATE,
} from '../../../../../../../actions/dictionary';
import {
  ADD_QC_TASK_MODAL_ADD_QC_TO_LEAD_CLOSE,
  ADD_QC_TASK_TAB_CHANGE,
} from '../../../../../../../actions/dictionary/app/main/taskWorkspace/addQcTask';
import AddQcTask from './addQcTask.view';

const mapStateToProps = state => ({
  activeTab: state.taskWorkspace.board.addQcTask.activeTab,
  modalAddQcOpen: state.taskWorkspace.board.addQcTask.modalAddQcOpen,
  leadId: state.taskWorkspace.board.addQcTask.leadId,
});

const mapDispatchToProps = dispatch => ({
  changeTab: tab => dispatch({ type: ADD_QC_TASK_TAB_CHANGE, tab }),
  resetTaskState: () => dispatch({ type: RESET_TASK_STATE }),
  handleResetView: () => dispatch({ type: BOBJECT_INBOUND_TABLE_RESET_VIEW }),
  handleCloseModalAddQc: () => dispatch({ type: ADD_QC_TASK_MODAL_ADD_QC_TO_LEAD_CLOSE }),
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(AddQcTask),
);
