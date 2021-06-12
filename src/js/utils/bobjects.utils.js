import { bobjectModel } from '../misc/model/bobjectFieldsModel';

const bobjectPlurals = {
  Activity: 'Activities',
  Company: 'Companies',
  Lead: 'Leads',
  Meeting: 'Meetings',
  Task: 'Tasks',
  Opportunity: 'Opportunities',
};

export const getRelatedBobject = (bobject, relatedBobjectType) => {
  const model = bobjectModel(bobject);
  return model.findBy('referencedBobjectType')(relatedBobjectType)?.referencedBobject;
};

export const getPluralBobjectName = (bobjectName, number) => {
  if (number > 1) {
    return bobjectPlurals[bobjectName];
  }
  return bobjectName;
};

export const getFieldByLogicRole = (bobject, logicRole) =>
  bobject?.fields.find(fieldItem => fieldItem.logicRole === logicRole);

export const getFieldById = (bobject, id) =>
  bobject?.fields.find(fieldItem => fieldItem.name === id);

export const getValueFromLogicRole = (bobject, logicRole, asText = false) => {
  const field = getFieldByLogicRole(bobject, logicRole);
  return asText ? field?.text : field?.value;
};

export const getDateByLogicRole = (bobject, logicRole) => {
  const value = getValueFromLogicRole(bobject, logicRole);
  return new Date(value);
};

export const getTextFromLogicRole = (bobject, logicRole) =>
  getValueFromLogicRole(bobject, logicRole, true);

export const getFiledsByType = (bobject, fieldType) =>
  bobject?.fields.filter(fieldItem => fieldItem.type === fieldType) || [];

export const getFieldsByLogicRoles = (bobject, logicRoles) =>
  bobject.fields
    .filter(field => logicRoles.includes(field.logicRole))
    .reduce(
      (filteredFields, field) => ({ ...filteredFields, [field.logicRole]: { ...field } }),
      {},
    );

export const getFieldByName = (bobject, name) =>
  bobject?.fields.find(fieldItem => fieldItem.label === name)?.text;

export const getBobjectTypeByStage = stage => {
  switch (stage) {
    case 'PROSPECT':
      return 'Company';
    case 'SALES':
      return 'Opportunity';
    default:
      throw new Error(`Unsupported stage ${stage}`);
  }
};
