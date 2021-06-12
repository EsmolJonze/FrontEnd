import { connect } from 'react-redux';
import CadenceItemView from './cadenceItem.view';

const mapStateToProps = state => {
  const {
    components: {
      bobjectList: { isInitialValues },
    },
  } = state;

  return {
    isInitialValues,
  };
};

export default connect(mapStateToProps)(CadenceItemView);
