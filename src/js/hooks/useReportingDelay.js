import { atom, useRecoilState } from 'recoil';
import { Commons } from '@bloobirds-it/bloobirds-platform-js-api-library';

const reportingDelayAtom = atom({
  key: 'reportingDelayAtom',
  default: {
    delay: 0,
    warningVisible: true,
    needsToNotify: false,
  },
});

export const useReportingDelay = () => {
  const [reportingDelay, setReportingDelay] = useRecoilState(reportingDelayAtom);

  const fetchReportingDelay = (webApi, schemasList) => {
    webApi
      .request({
        url: '/reportingDelay',
        method: Commons.HttpMethod.POST,
        body: {
          schemasList,
        },
      })
      .then(delay => {
        const maxDelay = Math.max(...Object.values(delay)) || 0;
        if (maxDelay > 60 * 1000) {
          setReportingDelay({ delay: maxDelay, warningVisible: false, needsToNotify: false });
        } else {
          setReportingDelay({ delay: maxDelay, warningVisible: true, needsToNotify: false });
        }
      });
  };

  const setWarningVisible = boolean =>
    setReportingDelay({ ...reportingDelay, warningVisible: boolean });

  return {
    reportingDelay,
    setReportingDelay,
    fetchReportingDelay,
    setWarningVisible,
  };
};
