import viewTable from './viewTable.view';
import { contextWrapper } from './context/viewTable.context.provider';
import { withWrappers } from '../../misc/utils';

export default withWrappers({ router: true })(contextWrapper(viewTable));
