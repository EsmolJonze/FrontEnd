import { EMAIL_TYPE } from '../constants/email';
import { HTMLToString, isHtml, stringToHTML } from './strings.utils';
import { deserialize, serialize } from '../components/richTextEditor/serializer/serializer';

const replaceVariables = (body, variables) =>
  serialize({ children: deserialize(stringToHTML(body), variables) });

export const convertHtmlToString = (body, variables, withNewLines = true) => {
  const regexRemove = /(<([^>]+)>)/gi;
  const regexEnter = /(<\/?p>)|(<\/li>)/gi;
  const regexList = /(<li>)/gi;
  const bodyWithVariables = isHtml(body)
    ? HTMLToString(variables ? replaceVariables(body, variables) : body)
    : body;
  const bodyParsed = withNewLines ? bodyWithVariables.replace(regexEnter, '\n') : bodyWithVariables;
  return bodyParsed.replace(regexList, '- ').replace(regexRemove, '');
};

export const parseHtmlToEncodedString = (body, variables, withNewLines = true) => {
  const plainText = convertHtmlToString(body, variables, withNewLines);
  return encodeURIComponent(plainText.trim());
};

export const createEmailLink = ({
  type,
  toEmail,
  templateSubject,
  templateBody,
  availableVariables,
}) => {
  const parsedBody = parseHtmlToEncodedString(templateBody || '', availableVariables);
  const parsedSubject = parseHtmlToEncodedString(templateSubject || '', availableVariables, false);

  if (type === EMAIL_TYPE.GMAIL) {
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(toEmail) ||
      ''}&su=${parsedSubject}&body=${parsedBody}`;
  }
  if (type === EMAIL_TYPE.OUTLOOK) {
    return `https://outlook.office.com/?path=/mail/action/compose&to=${toEmail ||
      ''}&subject=${parsedSubject}&body=${parsedBody}`;
  }
  return `mailto:${encodeURIComponent(toEmail) || ''}?subject=${parsedSubject}&body=${parsedBody}`;
};
