import { getFieldByLogicRole, getTextFromLogicRole } from '../../../utils/bobjects.utils';
import { ACTIVITY_FIELDS_LOGIC_ROLE } from '../../../constants/activity';
import { LEAD_FIELDS_LOGIC_ROLE } from '../../../constants/lead';

const PIXEL_REGEX = [
  /<[^>]+src\s*=\s*['"]*.*(mailtrack.io)([^'"]+)['"][^>]*>/g, // mailtrack
  /<[^>]+src="https:\/\/nyl\.as.*[^>]*>/g, // nylas
  /<[^>]+href\s*=\s*['"]*.*(cirrusinsight.com)([^'"]+)['"][^>]*>/g, // cirrus
  /<img[^>]+width="1"[^>]+height="1"[^>]*>/g, // 1x1 pixel
  /<img[^>]+height="1"[^>]+width="1"[^>]*>/g, // 1x1 pixel
];

export const getLeadName = bobject => {
  const leadField = getFieldByLogicRole(bobject, ACTIVITY_FIELDS_LOGIC_ROLE.LEAD);
  if (leadField && leadField.referencedBobject) {
    const lead = leadField.referencedBobject;
    const fullName = getTextFromLogicRole(lead, LEAD_FIELDS_LOGIC_ROLE.FULL_NAME);
    const name = getTextFromLogicRole(lead, LEAD_FIELDS_LOGIC_ROLE.NAME);
    return fullName || name;
  }
  return '';
};

export const getActivityUserName = bobject => {
  const userField = getFieldByLogicRole(bobject, ACTIVITY_FIELDS_LOGIC_ROLE.USER);
  if (userField) {
    return userField?.text;
  }
  return '';
};

export const parseEmailPixels = value => {
  let html = value;
  if (value) {
    html = PIXEL_REGEX.reduce((prev, regex) => prev.replace(regex, ''), value);
  }
  return html;
};

export const createCallTitle = ({ direction, phone }) => {
  let title = `${direction} call`;
  if (phone) {
    if (direction === 'Outgoing') {
      title += ` to ${phone}`;
    }
    if (direction === 'Incoming') {
      title += ` from ${phone}`;
    }
  }
  return title;
};

export const createEmailTitle = ({ direction, user, leadEmail, subjectEmail }) => {
  let title = ' Email';
  if (direction === 'Outgoing') {
    title += ' sent';
    if (user) {
      title += ` from ${user}`;
    }
  }
  if (direction === 'Incoming') {
    title += ' received';
    if (leadEmail) {
      title += ` from ${leadEmail}`;
    }
  }
  if (subjectEmail) {
    title += ` - ${subjectEmail}`;
  }
  return title;
};
