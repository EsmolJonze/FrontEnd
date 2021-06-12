import { connect } from 'react-redux';
import { OPEN_MODAL_COMPLETE_TASK } from '../../../../../../../actions/dictionary';
import TaskDescription from './taskDescription.view';

const mapDispatchToProps = dispatch => ({
  handleOpenTaskCompleteModal: () => dispatch({ type: OPEN_MODAL_COMPLETE_TASK }),
});

export default connect(
  null,
  mapDispatchToProps,
)(TaskDescription);
