import React from 'react';
import { connect } from 'react-redux';
import { useEmailVariables } from '../../hooks';
import EmailButton from './emailButton.view';

const EmailButtonContainer = props => {
  const { emailVariablesValues } = useEmailVariables();
  return <EmailButton availableVariables={emailVariablesValues.values} {...props} />;
};

const mapStateToProps = state => ({
  currentIndex: state.components.bobjectCarousel.currentIndex,
});

export default connect(mapStateToProps)(EmailButtonContainer);
