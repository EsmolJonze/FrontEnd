import { connect } from 'react-redux';
import { SET_CONTEXT_COMPANY } from '../../actions/dictionary';
import Card from './card.view';

const mapDispatchToProps = dispatch => ({
  setContextCompany: (company, callback) =>
    new Promise(resolve => {
      dispatch({ type: SET_CONTEXT_COMPANY, company });
      resolve();
    }).then(() => callback()),
});

export default connect(
  null,
  mapDispatchToProps,
)(Card);
