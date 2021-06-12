const findByProperty = (bobjectFields, property, value) => {
  const matchingFields = bobjectFields.filter(b => b[property] === value);
  if (matchingFields.length === 1) {
    return matchingFields[0];
  }
  if (matchingFields.length === 0) {
    return undefined;
  }
  return matchingFields;
};
const findByProperties = (bobjectFields, properties, value) => {
  for (let i = 0; i < properties.length; i += 1) {
    const field = findByProperty(bobjectFields, properties[i], value);
    if (field !== undefined) {
      return field;
    }
  }
  return undefined;
};
const findByPropertiesAndValues = (bobjectFields, properties, values) => {
  for (let i = 0; i < values.length; i += 1) {
    const field = findByProperties(bobjectFields, properties, values[i]);
    if (field !== undefined) {
      return field;
    }
  }
  return undefined;
};

const groupFieldsByGroup = bobjectFields => {
  const groupMetadata = {};
  bobjectFields
    .filter(bf => bf.groupName !== null && bf.groupName !== undefined)
    .forEach(bf => {
      groupMetadata[bf.groupName] = {
        name: bf.groupName,
        ordering: bf.groupOrdering,
        detailDisplay: bf.groupDetailDisplay,
      };
    });
  const groups = Object.keys(groupMetadata);
  const fieldsByGroup = {};
  groups.forEach(group => {
    fieldsByGroup[group] = [];
  });
  bobjectFields
    .filter(bf => bf.groupName !== null && bf.groupName !== undefined)
    .forEach(bf => {
      if (bf.logicRole !== 'COMPANY__NAME') {
        fieldsByGroup[bf.groupName].push(bf);
      }
    });
  Object.values(fieldsByGroup).forEach(fields =>
    fields.sort((f1, f2) => f1.ordering - f2.ordering),
  );
  const arranged = [];
  Object.keys(fieldsByGroup).forEach(groupName =>
    arranged.push({
      name: groupName.toUpperCase(),
      fields: fieldsByGroup[groupName],
      meta: groupMetadata[groupName],
    }),
  );
  arranged.sort((f1, f2) => f1.fields[0].groupOrdering - f2.fields[0].groupOrdering);
  return arranged;
};

const bobjectFieldsModel = bobjectFields => ({
  find: fieldDescriptor =>
    findByProperties(bobjectFields, ['id', 'name', 'logicRole'], fieldDescriptor),
  findById: bobjectFieldId => findByProperty(bobjectFields, 'name', bobjectFieldId),
  findByLogicRole: logicRole => findByProperty(bobjectFields, 'logicRole', logicRole),
  findByLabel: label => findByProperty(bobjectFields, 'label', label),
  groupFieldsByGroup,
  findByCondition: condition => bobjectFields.filter(condition),
  findBy: property => value => findByProperty(bobjectFields, property, value),
});

const bobjectModel = bobject => {
  const bobjectFields = bobject.fields;
  const bobjectPrefix = `${bobject.id.typeName.toUpperCase()}__`;
  const model = bobjectFieldsModel(bobjectFields);
  model.find = fieldDescriptor =>
    findByPropertiesAndValues(
      bobjectFields,
      ['id', 'name', 'logicRole'],
      [fieldDescriptor, bobjectPrefix + fieldDescriptor],
    );
  model.type = () => bobject.id.typeName;
  return model;
};

export { bobjectFieldsModel, bobjectModel };
export const BOBJECT_FIELD__LOGIC_ROLE__TASK__TITLE = 'TASK__TITLE';
export const BOBJECT_FIELD__LOGIC_ROLE__TASK__TYPE = 'TASK__TASK_TYPE';
export const BOBJECT_FIELD__LOGIC_ROLE__TASK__GOAL = 'TASK__GOAL';
export const BOBJECT_FIELD__LOGIC_ROLE__TASK__SCHEDULED_DATETIME = 'TASK__SCHEDULED_DATETIME';
