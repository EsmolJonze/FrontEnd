import React from 'react';
import { connect } from 'react-redux';
import MessagingTemplateActionsView from './messagingTemplateActions.view';

const MessagingTemplateActions = ({ creationConfig, children }) => (
  <MessagingTemplateActionsView
    searchPlaceholder={creationConfig.searchPlaceholder}
    handleOnCreationClick={creationConfig.onClickAction}
    newEntityButtonName={creationConfig.actionName}
  >
    {children}
  </MessagingTemplateActionsView>
);

const mapStateToProps = state => ({
  version: state.components.templateText.version,
});

export default connect(
  mapStateToProps,
  null,
)(MessagingTemplateActions);
