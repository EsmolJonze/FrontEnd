import { connect } from 'react-redux';
import {
  TEXT_TEMPLATE_SET_TYPE,
  TEXT_TEMPLATE_SET_VERSION,
} from '../../../../../actions/dictionary';
import MessagingTab from './messagingTab.view';

const mapStateToProps = state => ({
  searchedValue: state.components.templateText.searchQueryFilter,
});

const mapDispatchToProps = dispatch => ({
  setType: textTemplateType => dispatch({ type: TEXT_TEMPLATE_SET_TYPE, textTemplateType }),
  setVersion: version => dispatch({ type: TEXT_TEMPLATE_SET_VERSION, version }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MessagingTab);
