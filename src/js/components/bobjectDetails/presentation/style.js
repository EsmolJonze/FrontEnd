const computed = param => obj => ({
  ...obj,
  [`computed${param.charAt(0).toUpperCase()}${param.slice(1)}`]: obj[param] + obj.padding * 2,
});

const computedWidth = computed('width');

const computedHeight = computed('height');

const root = computedWidth({
  width: 444,
  padding: 24,
});

const header = computedHeight({
  height: 140,
  padding: root.padding,
  width: root.width,
  computedWidth: root.computedWidth,
});

const footer = computedHeight({
  width: root.width,
  padding: root.padding,
  height: 40,
});

export default {
  root,
  header,
  footer,
};
