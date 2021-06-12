import React from 'react';
import { Input } from '@bloobirds-it/bloobirds-platform-component-library';
import BaseField from '../baseField/baseField.view';

const TextField = props => <BaseField {...props} as={<Input />} />;

export default TextField;
