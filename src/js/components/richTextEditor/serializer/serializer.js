import { jsx } from 'slate-hyperscript';
import { ELEMENT_TAGS, HTML_ELEMENT_TAGS, HTML_TEXT_TAGS, TEXT_TAGS } from './htmlElements';
import escapeHtml from 'escape-html';
import { Text } from 'slate';

export const SERIALIZE_MODE = Object.freeze({
  PLAIN_HTML: 'PLAIN_HTML',
  CUSTOM_HTML: 'CUSTOM_HTML',
});

export const serialize = (node, mode = SERIALIZE_MODE.CUSTOM_HTML) => {
  if (Text.isText(node)) {
    if (node.bold) {
      return HTML_TEXT_TAGS.bold(node.text);
    }
    if (node.underlined) {
      return HTML_TEXT_TAGS.underlined(node.text);
    }
    if (node.italic) {
      return HTML_TEXT_TAGS.italic(node.text);
    }
    return escapeHtml(node.text);
  }
  const children = node.children.map(n => serialize(n, mode)).join('');

  if (HTML_ELEMENT_TAGS[node.type]) {
    if (mode === SERIALIZE_MODE.PLAIN_HTML) {
      return HTML_ELEMENT_TAGS[node.type](node, children, true);
    }
    return HTML_ELEMENT_TAGS[node.type](node, children);
  }

  if (HTML_TEXT_TAGS[node.type]) {
    return HTML_TEXT_TAGS[node.type](node, children);
  }

  return children;
};

export const deserialize = (element, variables) => {
  const { nodeName, nodeType, textContent, childNodes } = element;

  // Is a text node
  if (nodeType === 3) {
    return textContent;
  }

  // Is not an element node
  if (nodeType !== 1) {
    return null;
  }

  if (nodeName === 'BR') {
    return '\n';
  }

  const children = Array.from(childNodes)
    .map(child => deserialize(child, variables))
    .flat();

  if (nodeName === 'BODY') {
    return jsx('fragment', {}, children);
  }

  const isVariable = nodeName === 'VARIABLE';

  if (isVariable && variables) {
    const attrs = ELEMENT_TAGS.VARIABLE_REPLACEMENT(element, variables);
    const variableElement = jsx('element', attrs, [{ text: attrs.variableValue || '' }]);
    return [{ text: '' }, variableElement, { text: '' }];
  }

  if (isVariable) {
    const attrs = ELEMENT_TAGS.VARIABLE(element);
    const variableElement = jsx('element', attrs, [{ text: '' }]);
    return [{ text: '' }, variableElement, { text: '' }];
  }

  if (ELEMENT_TAGS[nodeName]) {
    const attrs = ELEMENT_TAGS[nodeName](element);
    const parsedChildren = children.filter(child => child !== undefined);
    const innerNodes = parsedChildren.length === 0 ? [{ text: '' }] : parsedChildren;
    return jsx('element', attrs, innerNodes);
  }

  if (TEXT_TAGS[nodeName]) {
    const attrs = TEXT_TAGS[nodeName](element);
    return children
      .filter(child => Text.isText(child) || typeof child === 'string')
      .map(child => jsx('text', attrs, child));
  }

  return children;
};

export const deserializeHtmlTemplate = (body, variables) => {
  const document = new DOMParser().parseFromString(body, 'text/html');
  return deserialize(document.body, variables);
};
