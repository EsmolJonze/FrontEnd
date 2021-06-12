import { translateProtobufResponse } from './protoTranslation';

const PROTOBUF_MARSHALLING = 'PROTOBUF';
const JSON_MARSHALLING = 'JSON';
const JSON_MEDIA_TYPE = 'application/json';
const PROTOBUF_MEDIA_TYPE = 'application/x-protobuf;charset=UTF-8';

const protobufMarshalling = ({ responseTranslation, requestTranslation }) => ({
  type: PROTOBUF_MARSHALLING,
  header: {
    accept: PROTOBUF_MEDIA_TYPE,
    contentType: JSON_MEDIA_TYPE,
  },
  marshallRequest: requestTranslation,
  responseReader: x => x.blob(),
  unmarshallResponse: responseTranslation,
});

export const jsonMarshalling = {
  type: JSON_MARSHALLING,
  header: {
    accept: JSON_MEDIA_TYPE,
    contentType: JSON_MEDIA_TYPE,
  },
  marshallRequest: x => JSON.stringify(x),
  responseReader: x => x.json(),
  unmarshallResponse: x => (x !== undefined ? x.body : undefined),
};

export const protobufMarshallingSearch = protobufMarshalling({
  responseTranslation: translateProtobufResponse,
  requestTranslation: x => JSON.stringify(x),
});
