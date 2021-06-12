import { connect } from 'react-redux';
import { importActions } from '../../../../actions/dictionary/import';
import ImportDropdown from './importButton.view';

const mapDispatchToProps = dispatch => ({
  showImport: () =>
    dispatch({ type: importActions.NEW_IMPORT_VISIBILITY_CHANGE, visibility: true }),
});

export default connect(
  null,
  mapDispatchToProps,
)(ImportDropdown);
