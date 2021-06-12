import React from 'react';
import { format } from 'date-fns';
import { BobjectField } from '../filter/field/field';

const getDateValue = text => (text ? format(new Date(text), 'MMMM do, yyyy') : 'never');

const lastDaytextBuilder = text => value => `${text} ${getDateValue(value)}`;
const countTextBuilder = text => value => `${value ? parseInt(value, 10) : 0} ${text}`;

export const LastAttemptBobjectField = props => (
  <BobjectField {...props} textProcessor={lastDaytextBuilder('Last attempt,')} />
);
export const LastTouchBobjectField = props => (
  <BobjectField {...props} textProcessor={lastDaytextBuilder('Last touch,')} />
);
export const TouchesBobjectField = props => (
  <BobjectField {...props} textProcessor={countTextBuilder('touches')} />
);
export const AttemptsBobjectField = props => (
  <BobjectField {...props} textProcessor={countTextBuilder('attempts')} />
);
