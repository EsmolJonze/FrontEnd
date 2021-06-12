import { ServiceApi } from '../../misc/api/service';
import { bobjectTableActions } from './context/bobjectTable.types';

export const viewResponseSuccessFactory = dispatch => payload => {
  dispatch({ type: bobjectTableActions.BOBJECT_TABLE_RETRIEVE_VIEW_SUCCESS, payload });
};

export const retrieveCustomViewFactory = onSuccess => viewType => {
  ServiceApi.request({
    url: `/service/view/bobjectview/type/${viewType}`,
    method: 'GET',
  })
    .then(onSuccess)
    .catch(error => console.info(error));
};
