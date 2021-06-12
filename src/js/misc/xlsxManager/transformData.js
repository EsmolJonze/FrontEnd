import { bobjectFieldsModel, bobjectModel } from '../model/bobjectFieldsModel';
import { ID } from './constants';

function buildCell(bobjectField, bobjectTypes, obj) {
  if (obj.model.findById(bobjectField.id) !== undefined) {
    return obj.model.findById(bobjectField?.id);
  }
  const referencedBobject = obj.model.findBy('referencedBobjectType')(
    bobjectTypes.get(bobjectField.bobjectType)?.name,
  )?.referencedBobject;

  if (referencedBobject !== undefined) {
    const referencedField = bobjectModel(referencedBobject).findById(bobjectField?.id);
    return {
      ...referencedField,
      label: `${referencedField?.label} from ${referencedBobject?.id.typeName}`,
    };
  }

  return {};
}

export default (bobjects, selectedColumns, bobjectTypes) => {
  const rawData = bobjects
    .map(b => ({ id: b.id.objectId, model: bobjectFieldsModel(b.fields) }))
    .map(obj => [
      { label: ID, text: obj.id },
      ...selectedColumns
        .map(bobjectField => buildCell(bobjectField, bobjectTypes, obj))
        .filter(cell => cell !== undefined),
    ])
    .map(row => row.flatMap(x => x));

  const header = rawData
    .map(fields => fields.map(f => f.label || ''))
    .reduce((prev, current) => {
      const notIncluded = current.filter(name => !prev.includes(name));
      return [...prev, ...notIncluded];
    }, []);

  const data = rawData.map(fields =>
    fields.reduce((prev, curr) => ({ ...prev, [curr.label]: curr.text }), {}),
  );

  return {
    data,
    options: {
      header,
    },
  };
};
