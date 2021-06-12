import { Web } from '@bloobirds-it/bloobirds-platform-js-api-library';
import { getBrowserType } from '../../utils/strings.utils';

const webApi = Web.Api.default();

const getPerformanceMetrics = () => {
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  const memory = window.performance?.memory;

  return {
    platform: navigator.platform,
    browser: getBrowserType(),
    connection: {
      effectiveType: connection?.effectiveType,
      type: connection?.type,
      rtt: connection?.rtt,
      downlinkMax: connection?.downlinkMax,
      downlink: connection?.downlink,
    },
    memory: {
      jsHeapSizeLimit: memory?.jsHeapSizeLimit,
      totalJSHeapSize: memory?.totalJSHeapSize,
      usedJSHeapSize: memory?.usedJSHeapSize,
      usedJSHeapSizeRatio:
        memory?.usedJSHeapSize > 0 && memory?.totalJSHeapSize > 0
          ? memory?.usedJSHeapSize / memory?.totalJSHeapSize
          : undefined,
      usedJSHeapSizeRatioOfTotal:
        memory?.usedJSHeapSize > 0 && memory?.totalJSHeapSize > 0
          ? memory?.usedJSHeapSize / memory?.jsHeapSizeLimit
          : undefined,
    },
  };
};
let events = [];

export const publishEvent = ({ action, asset, assetId, payload }, options = {}) => {
  const { trackPerformance = true } = options;

  if (trackPerformance) {
    payload.performance = getPerformanceMetrics();
  }
  events.push({
    action,
    asset,
    assetId,
    payload,
  });
};

const sendEvents = () => {
  if (events.length === 0) {
    return;
  }
  const toSend = events;
  events = [];

  webApi.request({
    url: '/service/panopticon',
    method: 'POST',
    body: toSend,
  });
};
setInterval(sendEvents, 2000);
