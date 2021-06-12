import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';
import { withRouter } from 'react-router';
import { formatDistance, isBefore } from 'date-fns';
import { format, utcToZonedTime } from 'date-fns-tz';
import memoize from 'lodash/memoize';
import { isArray } from 'xstate/lib/utils';

export const BIG_INTEGER = 999999999999;

export const filterObject = (object, filter) => {
  const x = {};
  Object.entries(object).forEach(([k, v]) => {
    if (filter(k, v)) {
      x[k] = v;
    }
  });
  return x;
};

export const naturalTextToCamelCase = memoize(text =>
  text
    .split(' ')
    .map((n, i) =>
      i === 0 ? n.charAt(0).toLowerCase() + n.slice(1) : n.charAt(0).toUpperCase() + n.slice(1),
    )
    .reduce((p, c) => p + c),
);

// https://mathiasbynens.be/demo/url-regex
// https://gist.github.com/dperini/729294
const reWeburl = new RegExp(
  '^' +
    // protocol identifier (optional)
    // short syntax // still required
    '(?:(?:(?:https?|ftp):)?\\/\\/)?' +
    // user:pass BasicAuth (optional)
    '(?:\\S+(?::\\S*)?@)?' +
    '(?:' +
    // IP address exclusion
    // private & local networks
    '(?!(?:10|127)(?:\\.\\d{1,3}){3})' +
    '(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})' +
    '(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})' +
    // IP address dotted notation octets
    // excludes loopback network 0.0.0.0
    // excludes reserved space >= 224.0.0.0
    // excludes network & broadcast addresses
    // (first & last IP address of each class)
    '(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])' +
    '(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}' +
    '(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))' +
    '|' +
    // host & domain names, may end with dot
    // can be replaced by a shortest alternative
    // (?![-_])(?:[-\\w\\u00a1-\\uffff]{0,63}[^-_]\\.)+
    '(?:' +
    '(?:' +
    '[a-z0-9\\u00a1-\\uffff]' +
    '[a-z0-9\\u00a1-\\uffff_-]{0,62}' +
    ')?' +
    '[a-z0-9\\u00a1-\\uffff]\\.' +
    ')+' +
    // TLD identifier name, may end with dot
    '(?:[a-z\\u00a1-\\uffff]{2,}\\.?)' +
    ')' +
    // port number (optional)
    '(?::\\d{2,5})?' +
    // resource path (optional)
    '(?:[/?#]\\S*)?' +
    '$',
  'i',
);
export const isUrl = url =>
  url !== undefined && url !== null && typeof url === 'string' && !!url.match(reWeburl);

const historyProxy = Component => props => {
  const { history, ...remainingProps } = props;
  const historyPushProxy = new Proxy(history.push, {
    apply(target, thisArg, argumentsList) {
      return target(...argumentsList);
    },
  });
  return (
    <React.Fragment>
      <Component {...remainingProps} history={{ ...history, push: historyPushProxy }} />
    </React.Fragment>
  );
};
export const withWrappers = ({
  style,
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
  router,
}) => component => {
  if (style !== undefined) {
    component = withStyles(style)(component);
  }
  if (
    mapStateToProps !== undefined ||
    mapDispatchToProps !== undefined ||
    mergeProps !== undefined
  ) {
    component = connect(
      mapStateToProps,
      mapDispatchToProps,
      mergeProps,
    )(component);
  }
  if (router) {
    component = withRouter(historyProxy(component));
  }
  return component;
};

const emailRe = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const isEmail = email =>
  email !== undefined &&
  email !== null &&
  email !== '' &&
  emailRe.test(String(email).toLowerCase());

export const makeUrl = url => {
  if (url) {
    if (url.startsWith('https://') || url.startsWith('http://')) {
      return url;
    }
    return `http://${url}`;
  }
  return url;
};

export const copyToClipboard = ({ html, plain }) => {
  function listener(e) {
    e.clipboardData.setData('text/html', html);
    e.clipboardData.setData('text/plain', plain);
    e.preventDefault();
  }
  document.addEventListener('copy', listener);
  document.execCommand('copy');
  document.removeEventListener('copy', listener);
};

export const switchDateFormat = (date, includeSeconds = false, excludeTimeZone) => {
  if (!date) {
    throw new Error('date parameter is required');
  }

  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const utcDate = utcToZonedTime(date, timeZone);
  if (excludeTimeZone) {
    return format(utcDate, 'MMM dd, yyyy HH:mm', { timeZone });
  }
  if (!includeSeconds) {
    return format(utcDate, 'iii MMM dd yyyy HH:mm OOOO (zzz)', { timeZone });
  }
  return format(utcDate, 'MMM dd, yyyy HH:mm (zzz)', { timeZone });
};

export const formatTimeDistance = date => {
  let dateToFormat;
  if (date instanceof Date) {
    dateToFormat = date;
  } else {
    dateToFormat = date?.length > 0 ? new Date(date) : undefined;
  }
  if (dateToFormat) {
    if (isBefore(dateToFormat, new Date())) {
      return `${formatDistance(dateToFormat, new Date())} ago`;
    }
    return `${formatDistance(dateToFormat, new Date())} from now`;
  }
  return undefined;
};

export const asArray = value => (isArray(value) ? value : [value]);

export const saveAs = (blob, filename) => {
  if (navigator.msSaveOrOpenBlob) {
    navigator.msSaveOrOpenBlob(blob, filename);
    return true;
  }

  if (typeof URL !== 'undefined' && 'download' in HTMLAnchorElement.prototype) {
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.addEventListener(
      'click',
      () => {
        requestAnimationFrame(() => {
          URL.revokeObjectURL(link.href);
          link.remove();
        });
      },
      false,
    );

    link.dispatchEvent(new MouseEvent('click'));
    return true;
  }

  return false;
};
