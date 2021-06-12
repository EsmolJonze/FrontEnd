import { useEffect, useState } from 'react';
import { useBloobirdsApiStateContext } from '@bloobirds-it/bloobirds-platform-react-api-library';
import { atom, useRecoilState } from 'recoil';

const emailSignature = atom({
  key: 'emailSignature',
  default: {
    body: null,
    enabled: false,
    loaded: false,
    exists: false,
  },
});

const fetchSignature = webApi =>
  webApi.request({
    url: '/service/users/me/signature',
    method: 'GET',
  });

const submitSignature = (webApi, body) =>
  webApi.request({
    url: '/service/users/me/signature',
    method: 'POST',
    body,
  });

export const useEmailSignature = () => {
  const { webApi } = useBloobirdsApiStateContext();
  const [signature, setSignature] = useRecoilState(emailSignature);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!signature.loaded) {
      fetchSignature(webApi).then(response => {
        if (response.exists) {
          setSignature({
            body: response.signature,
            enabled: response.enable,
            loaded: true,
            exists: response.exists,
            isRawHtml: response.rawHtml,
          });
        } else {
          setSignature({ ...signature, loaded: true });
        }
      });
    }
  }, [signature.loaded]);

  const updateSignature = newSignature => {
    setIsSubmitting(true);
    setSignature({ ...signature, ...newSignature });
    submitSignature(webApi, {
      enable: newSignature.enabled,
      signature: newSignature.body,
      rawHtml: !!newSignature.isRawHtml,
    }).then(() => setIsSubmitting(false));
  };

  return { signature, updateSignature, isSubmitting };
};
