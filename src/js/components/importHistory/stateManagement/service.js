import SessionManagerFactory from '../../../misc/session';
import { WebApi } from '../../../misc/api/web';
import { saveAs } from '../../../misc/utils';
import { ServiceApi } from '../../../misc/api/service';

const SessionManager = SessionManagerFactory();

export const searchRestApi = (dispatch, action, page, pageRow, textQuery) =>
  ServiceApi.request({
    url: `/service/import/history/search?page=${page || 0}&pageSize=${pageRow || 25}${
      textQuery ? `&textQuery=${textQuery}` : ''
    }`,
    method: 'GET',
  }).then(data => dispatch({ type: action, data }));

export const downloadImport = (id, name, reportType) => {
  const jwt = SessionManager.getToken();
  WebApi.download({
    path: 'service/import/history',
    id,
    reportType,
    jwt,
  })
    .then(readableSteam => readableSteam.arrayBuffer())
    .then(response => {
      const blob = new Blob([response], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8',
      });
      saveAs(blob, name);
    });
};
