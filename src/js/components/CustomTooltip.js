import withStyles from '@material-ui/styles/withStyles';
import { cssVariables } from '../style/variables';
import Tooltip from '@material-ui/core/Tooltip';

/*
@deprecated Use the one from the library of components
 */
const CustomTooltip = withStyles(() => ({
  tooltip: {
    backgroundColor: '#0077b5',
    borderRadius: '4px',
    padding: '6px 8px',
    boxShadow: '0 2px 12px rgba(25, 145, 255, 0.55)',
    fontFamily: cssVariables.typography.ProximaNovaSoft,
    fontSize: '13px',
    whiteSpace: 'pre-line',
  },
}))(Tooltip);

export default CustomTooltip;
