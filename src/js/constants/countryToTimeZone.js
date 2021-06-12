import * as rawJson from './timeZones.json';
import * as rawJsonTranslate from './countryTranslate.json';

const data = rawJson.default;
const map = Object.keys(data)
  .map(x => ({ [x.toUpperCase()]: data[x] }))
  .reduce((a, b) => ({ ...a, ...b }), {});

export const getTimezone = country => {
  if (!country) {
    return undefined;
  }
  country = rawJsonTranslate.default[country] || country;
  return map[country.toUpperCase()];
};
