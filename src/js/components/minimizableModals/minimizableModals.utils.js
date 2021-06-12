import EmailModal from '../emailModal';
import MinimizableModal from './minimizableModal';
import React from 'react';

export const modalToOpen = (type, id) => {
  switch (type) {
    case 'Email':
      return <EmailModal id={id} />;
    case 'Meeting':
    case 'Note':
      return <MinimizableModal id={id} bobjectType="Activity" type={type} />;
    case 'Task':
      return <MinimizableModal id={id} bobjectType={type} type={type} />;
    default:
      return null;
  }
};

export const styleProps = type => {
  switch (type) {
    case 'Email':
      return {
        icon: 'mail',
        color: 'var(--tangerine)',
      };
    case 'Meeting':
      return {
        icon: 'calendar',
        color: 'var(--softTomato)',
      };
    case 'Note':
      return {
        icon: 'noteAction',
        color: 'var(--banana)',
      };
    case 'Task':
      return {
        icon: 'taskAction',
        color: 'var(--softBloobirds)',
      };
    default:
      return null;
  }
};
