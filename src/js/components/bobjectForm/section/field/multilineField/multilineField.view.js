import React from 'react';
import { TextArea } from '@bloobirds-it/bloobirds-platform-component-library';
import BaseField from '../baseField';

const MultilineField = ({ multilineLines, ...props }) => (
  <BaseField {...props} as={<TextArea rows={multilineLines} />} />
);

export default MultilineField;
