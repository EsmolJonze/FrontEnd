import React from 'react';
import { QQ_GO_BACK, TEXT_TEMPLATE_GO_BACK } from '../../../actions/dictionary';
import { connect } from 'react-redux';
import SideBarView from './sidebar.view';

const SideBarContainer = ({ resetData }) => <SideBarView resetData={resetData} />;

const mapDispatchToProps = dispatch => ({
  resetData: () => {
    dispatch({ type: QQ_GO_BACK });
    dispatch({ type: TEXT_TEMPLATE_GO_BACK });
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(SideBarContainer);
