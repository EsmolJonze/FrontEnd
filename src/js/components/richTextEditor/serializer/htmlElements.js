import escapeHtml from 'escape-html';
import { toCapitalize } from '../../../utils/strings.utils';
import { addHttpIfNeeded } from '../../../utils/url.utils';

export const ELEMENT_TAGS = {
  A: el => ({ type: 'link', url: el.getAttribute('href') }),
  BLOCKQUOTE: () => ({ type: 'quote' }),
  H1: () => ({ type: 'heading-one' }),
  H2: () => ({ type: 'heading-two' }),
  LI: () => ({ type: 'list-item' }),
  OL: () => ({ type: 'numbered-list' }),
  P: () => ({ type: 'paragraph' }),
  PRE: () => ({ type: 'code' }),
  UL: () => ({ type: 'bulleted-list' }),
  VARIABLE: el => ({
    type: 'template-variable',
    templateVariable: { name: el.attributes.name?.value, id: el.attributes.type?.value },
    templateGroup: el.attributes.group?.value,
    children: [{ text: '' }],
  }),
  IMG: el => ({
    type: 'image',
    url: el.getAttribute('src'),
    children: [{ text: '' }],
  }),
  IMGLINK: el => ({
    type: 'image-link',
    url: el.getAttribute('src'),
    href: el.getAttribute('href'),
    children: [{ text: '' }],
  }),
  VARIABLE_REPLACEMENT: (el, variables) => {
    const elemValue = el.attributes.type?.value;
    const variablesGroups = Object.values(variables).flat();
    const variableData = variablesGroups.find(
      ({ id, logicRole }) => id === elemValue || logicRole === elemValue,
    );

    return {
      type: 'replaced-variable',
      variableValue: variableData?.value,
      variableGroup: el.attributes.group?.value,
      variableName: el.attributes.name?.value,
    };
  },
};

export const TEXT_TAGS = {
  CODE: () => ({ code: true }),
  EM: () => ({ italic: true }),
  I: () => ({ italic: true }),
  S: () => ({ strikethrough: true }),
  STRONG: () => ({ bold: true }),
  U: () => ({ underline: true }),
};

export const HTML_ELEMENT_TAGS = {
  'replaced-variable': (node, children) => `<span>${children}</span>`,
  'template-variable': (node, children) =>
    `<variable type="${node.templateVariable.id}" name="${node.templateVariable.name}" group="${
      node.templateGroup
    }">{${toCapitalize(node.templateGroup)}: ${toCapitalize(
      node.templateVariable.name,
    )}}${children}</variable>`,
  paragraph: (node, children) => `<p>${children}</p>`,
  link: (node, children) => `<a href="${addHttpIfNeeded(escapeHtml(node.url))}">${children}</a>`,
  'block-quote': (node, children) => `<blockquote>${children}</blockquote>`,
  'heading-one': (node, children) => `<h1>${children}</h1>`,
  'heading-two': (node, children) => `<h2>${children}</h2>`,
  'list-item': (node, children) => `<li>${children}</li>`,
  'bulleted-list': (node, children) => `<ul>${children}</ul>`,
  'numbered-list': (node, children) => `<ol>${children}</ol>`,
  image: (node, children) =>
    `<div><div><img src="${node.url}" alt="${node.url}"/></div>${children}</div>`,
  'image-link': (node, children, plainHtml = false) =>
    !plainHtml
      ? `<imgLink href="${node.href}" src="${node.url}">${children}</imgLink>`
      : `<div><a href="${addHttpIfNeeded(node.href)}" target="_blank" rel="noreferrer"><img src="${
          node.url
        }" alt="${node.url}" href="${node.href}"/></a>${children}</div>`,
  'raw-html-block': node => node.html,
  'reply-history': node => node.html,
};

export const HTML_TEXT_TAGS = {
  bold: children => `<strong>${children}</strong>`,
  italic: children => `<em>${children}</em>`,
  underlined: children => `<u>${children}</u>`,
};
