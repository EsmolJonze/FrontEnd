import React, { useEffect } from 'react';
import { TASK_FEED_DESELECT_TASK_CATEGORY } from '../../actions/dictionary';
import { connect } from 'react-redux';
import AccountSettingsPage from './accountSettingsPage.view';

const AccountSettingsContainer = ({ deselectTaskCategory }) => {
  useEffect(() => {
    deselectTaskCategory();
  }, []);

  return <AccountSettingsPage />;
};

const mapDispatchToProps = dispatch => ({
  deselectTaskCategory: () => dispatch({ type: TASK_FEED_DESELECT_TASK_CATEGORY }),
});

export default connect(
  null,
  mapDispatchToProps,
)(AccountSettingsContainer);
