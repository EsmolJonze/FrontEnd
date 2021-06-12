import React, { useEffect } from 'react';
import {
  TEXT_TEMPLATE_RESET_DATA,
  TEXT_TEMPLATE_SET_TYPE,
  TEXT_TEMPLATE_SET_VERSION,
} from '../../actions/dictionary';
import { connect } from 'react-redux';
import MessagingSectionLayoutView from './messagingSectionLayout.view';
import PropTypes from 'prop-types';

const MessagingSectionLayoutContainer = ({
  actions,
  body,
  id,
  title,
  dataIntercom,
  createConfig,
  pluralEntityName,
  active,
  type,
  setType,
  resetData,
  setVersion,
}) => {
  useEffect(() => {
    if (active) {
      setType(type);
      resetData();
      setVersion('SETTINGS');
    }
  }, [active, type]);
  return (
    <MessagingSectionLayoutView
      actions={actions}
      dataIntercom={dataIntercom}
      body={body}
      createConfig={createConfig}
      id={id}
      pluralEntityName={pluralEntityName}
      title={title}
    />
  );
};

const mapDispatchToProps = dispatch => ({
  setVersion: version => dispatch({ type: TEXT_TEMPLATE_SET_VERSION, version }),
  setType: textTemplateType => dispatch({ type: TEXT_TEMPLATE_SET_TYPE, textTemplateType }),
  resetData: () => dispatch({ type: TEXT_TEMPLATE_RESET_DATA }),
});

MessagingSectionLayoutContainer.defaultProps = {
  active: true,
  actions: PropTypes.node,
};

export default connect(
  null,
  mapDispatchToProps,
)(MessagingSectionLayoutContainer);
