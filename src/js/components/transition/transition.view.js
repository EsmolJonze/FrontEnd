import React from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './transition.module.css';

const classNames = {
  fade: {
    appear: styles._fade_enter,
    appearActive: styles._fade_enter_active,
    enter: styles._fade_enter,
    enterActive: styles._fade_enter_active,
    exit: styles._fade_exit,
    exitActive: styles._fade_exit_active,
  },
};

const Transition = ({ children, visible, type }) => (
  <CSSTransition appear in={visible} unmountOnExit timeout={300} classNames={classNames[type]}>
    {children}
  </CSSTransition>
);

export default Transition;
