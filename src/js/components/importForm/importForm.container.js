import { connect } from 'react-redux';
import ImportForm from './importForm.view';
import { importActions } from '../../actions/dictionary/import';

const mapStateToProps = state => ({
  visibility: state.components.importHistory.newImportVisibility,
});

const mapDispatchToProps = dispatch => ({
  setVisibilityComponent: boolean =>
    dispatch({ type: importActions.NEW_IMPORT_VISIBILITY_CHANGE, visibility: boolean }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ImportForm);
