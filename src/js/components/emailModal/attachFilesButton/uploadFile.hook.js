import { useEffect, useState } from 'react';
import { useBloobirdsApiStateContext } from '@bloobirds-it/bloobirds-platform-react-api-library';
import SessionManagerFactory from '../../../misc/session';
import isEqual from 'lodash/isEqual';

const SessionManager = SessionManagerFactory();

const useFileUpload = endpoint => {
  const { webApi } = useBloobirdsApiStateContext();

  const [data, setData] = useState({});
  const [fileData, setFileData] = useState({});
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (isEqual(fileData, {})) {
      return;
    }

    if (fileData.size / 1024 / 1024 > 10) {
      setStatus('error');
      setMessage('File exceeds 10 MB size');
      return;
    }

    const formData = new FormData();
    formData.append('uploadingFile', fileData);

    setStatus('loading');
    setMessage('');

    fetch(webApi.host.url + endpoint, {
      method: 'POST',
      body: formData,
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Headers': 'Authorization',
        Authorization: `Bearer ${SessionManager.getToken()}`,
      },
    })
      .then(response => response.json())
      .then(json => {
        setStatus('idle');
        setData({ id: json.data, name: fileData.name });
      })
      .catch(() => {
        setStatus('error');
        setMessage('Something went wrong');
      });
  }, [fileData]);

  return { data, status, message, setFileData };
};

export { useFileUpload };
