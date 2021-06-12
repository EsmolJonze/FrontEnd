import * as messages from '../proto/message_pb';

const cleanStrings = obj => {
  const keys = Object.keys(obj);
  keys.forEach(k => {
    if (obj[k] === '') {
      delete obj[k];
    }
  });
};
const manageLists = obj => {
  const keys = Object.keys(obj);
  keys.forEach(k => {
    if (k.endsWith('List')) {
      obj[k.substring(0, k.length - 'List'.length)] = obj[k];
      delete obj[k];
    }
  });
};
const manageMaps = obj => {
  const keys = Object.keys(obj);
  keys.forEach(k => {
    if (k.endsWith('Map')) {
      const newKey = k.substring(0, k.length - 'Map'.length);
      obj[newKey] = {};
      obj[k].forEach(x => {
        obj[newKey][x[0]] = x[1];
      });
      delete obj[k];
    }
  });
};

const process = obj => {
  if (obj instanceof String) {
    return;
  }
  if (obj instanceof Object) {
    cleanStrings(obj);
    manageLists(obj);
    manageMaps(obj);
    Object.values(obj).forEach(process);
  }
  if (obj instanceof Array) {
    obj.forEach(process);
  }
};

const translateFromMessageName = async ({ messageTypeName, body }) => {
  const messageType = messages[messageTypeName];
  const responseUint8Array = await new Response(body).arrayBuffer();
  const message = messageType.deserializeBinary(responseUint8Array);
  const obj = message.toObject();
  process(obj);
  return obj;
};

export const translateProtobufResponse = async ({ response, body }) => {
  const messageTypeName = response.headers.get('x-protobuf-message');
  return translateFromMessageName({ messageTypeName, body });
};
