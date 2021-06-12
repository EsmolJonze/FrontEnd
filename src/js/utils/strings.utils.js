export const cleanStartEndWhiteSpaces = word => word.replace(/^\s+|\s+$|\s+(?=\s)/g, '');

export const ellipsis = (str, maxLength, { side = 'end', prefix = '...' } = {}) => {
  if (str && str.length > maxLength) {
    const length = maxLength - prefix.length;
    switch (side) {
      case 'start':
        return prefix + str.slice(-length);
      case 'end':
      default:
        return str.slice(0, length) + prefix;
    }
  }
  return str;
};

export const toCamelCase = str =>
  str &&
  str
    .replace(/\s(.)/g, $1 => $1.toUpperCase())
    .replace(/\s/g, '')
    .replace(/^(.)/, $1 => $1.toLowerCase());

export const toCapitalize = (str, lower = false) =>
  str &&
  (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, match => match.toUpperCase());

export const toSentenceCase = str => toCapitalize(str, true).replace('_', ' ');

export const getBrowserType = () => {
  let sBrowser = 'unknown';
  const sUsrAg = navigator.userAgent;
  // The order matters here, and this may report false positives for unlisted browsers.
  if (sUsrAg) {
    if (sUsrAg.indexOf('Firefox') > -1) {
      sBrowser = 'Mozilla Firefox';
      // "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:61.0) Gecko/20100101 Firefox/61.0"
    } else if (sUsrAg.indexOf('SamsungBrowser') > -1) {
      sBrowser = 'Samsung Internet';
      // "Mozilla/5.0 (Linux; Android 9; SAMSUNG SM-G955F Build/PPR1.180610.011) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.4 Chrome/67.0.3396.87 Mobile Safari/537.36
    } else if (sUsrAg.indexOf('Opera') > -1 || sUsrAg.indexOf('OPR') > -1) {
      sBrowser = 'Opera';
      // "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 OPR/57.0.3098.106"
    } else if (sUsrAg.indexOf('Trident') > -1) {
      sBrowser = 'Microsoft Internet Explorer';
      // "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; Zoom 3.6.0; wbx 1.0.0; rv:11.0) like Gecko"
    } else if (sUsrAg.indexOf('Edge') > -1) {
      sBrowser = 'Microsoft Edge';
      // "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299"
    } else if (sUsrAg.indexOf('Chrome') > -1) {
      sBrowser = 'Google Chrome or Chromium';
      // "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/66.0.3359.181 Chrome/66.0.3359.181 Safari/537.36"
    } else if (sUsrAg.indexOf('Safari') > -1) {
      sBrowser = 'Apple Safari';
      // "Mozilla/5.0 (iPhone; CPU iPhone OS 11_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 Mobile/15E148 Safari/604.1 980x1306"
    }
  }
  return sBrowser;
};

export const isHtml = str => {
  const regex = RegExp(/(<([^>]+)>)/gi);
  return regex.test(str);
};

export const stringToHTML = str => {
  const dom = document.createElement('div');
  dom.innerHTML = str;
  return dom;
};

export const HTMLToString = html => {
  const txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
};

export const parseLineBreak = str => {
  const regex = /(\r\n|\r|\n)/gi;
  return str.replace(regex, '<br />');
};

export const numberWithDots = number =>
  number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, '.');

export const replaceVariables = (text, values) => {
  const regex = new RegExp(/##(.*?)##/);

  if (!text) {
    return null;
  }

  if (!values) {
    return text;
  }

  return text.split(regex).reduce((prev, current, i) => {
    if (!i) {
      return [current];
    }

    return prev.concat(values[current] || current);
  }, []);
};

export const numberToOrdinalString = number => {
  const suffixes = ['th', 'st', 'nd', 'rd'];
  const v = number % 100;
  return number + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
};
