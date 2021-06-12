import React from 'react';
import PropTypes from 'prop-types';
import {
  isCallEnded,
  isCallInCourse,
  isCallIncoming,
  isCallConnecting,
  isCallIncomingToSDRPhone,
} from '../dialer.utils';
import { Icon } from '@bloobirds-it/bloobirds-platform-component-library';
import classNames from 'clsx';
import styles from './callButton.module.css';

const CallButtonView = ({
  acceptCall,
  endCall,
  greenControlDisabled,
  makeCall,
  redControlDisabled,
  state,
}) => {
  const greenButtonAction = isCallIncoming(state) ? acceptCall : makeCall;
  const redButtonAction = endCall;

  const greenButtonClasses = classNames(styles._green__button, {
    [styles._call__animation]: isCallIncoming(state),
    [styles._button__disabled]: isCallEnded(state) || greenControlDisabled,
    [styles._call__disabled]: isCallIncomingToSDRPhone(state),
  });

  const redButtonClasses = classNames(styles._red__button, {
    [styles._call__animation]: isCallConnecting(state),
    [styles._call__disabled]: redControlDisabled,
  });

  const renderGreenButton = !(isCallConnecting(state) || isCallInCourse(state));

  const renderRedButton = isCallIncoming(state) || isCallInCourse(state) || isCallConnecting(state);

  return (
    <div className={styles._container}>
      {renderGreenButton && (
        <div
          className={greenButtonClasses}
          onClick={() =>
            (!isCallEnded(state) || isCallIncomingToSDRPhone(state)) && greenButtonAction()
          }
        >
          <Icon name="phone" size={32} color="white" />
        </div>
      )}
      {renderRedButton && (
        <div className={redButtonClasses} onClick={() => !redControlDisabled && redButtonAction()}>
          <Icon name="phoneHang" size={32} color={redControlDisabled ? 'softPeanut' : 'white'} />
        </div>
      )}
    </div>
  );
};

CallButtonView.propTypes = {
  acceptCall: PropTypes.func.isRequired,
  endCall: PropTypes.func.isRequired,
  greenControlDisabled: PropTypes.bool.isRequired,
  makeCall: PropTypes.func.isRequired,
  redControlDisabled: PropTypes.bool.isRequired,
  state: PropTypes.string.isRequired,
};

export default CallButtonView;
