import { connect } from 'react-redux';
import { DISPLAY_HIDE_SIDEBAR_LEFT } from '../../actions/dictionary/app/main/taskWorkspace/taskFeed';
import Header from './header.view';

const mapDispatchToProps = dispatch => ({
  displayHideSidebar: () => dispatch({ type: DISPLAY_HIDE_SIDEBAR_LEFT }),
});

const mapStateToProps = state => {
  const {
    taskWorkspace: {
      taskFeed: { displaySidebar },
    },
  } = state;

  return {
    displaySidebar,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
