import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { CALL_STATE, DEVICE_STATE } from '../dialer.constants';
import { useMachine } from '@xstate/react';
import DialerMachine from '../dialer.machine';
import { isCallInCourse } from '../dialer.utils';

jest.mock('../dialer.actions');
jest.mock('../../../misc/api/panopticon');

const TestDialerMachine = () => {
  const [state, send] = useMachine(DialerMachine);
  return (
    <div>
      <button
        onClick={() =>
          send('makeCall', { connection: { parameters: { CallSid: 'TEST_CALL_SID' } } })
        }
        disabled={isCallInCourse(state)}
        type="button"
      >
        Call
      </button>
      <span>State: {state.value}</span>
    </div>
  );
};

test('dialer machine starts properly', () => {
  render(<TestDialerMachine />);
  const state = screen.getByText(/state/i);
  expect(state).toHaveTextContent(`State: ${DEVICE_STATE.DEVICE_TOKEN}`);
});

test('dialer cannot call without token', () => {
  render(<TestDialerMachine />);
  const state = screen.getByText(/state/i);
  expect(state).toHaveTextContent(`State: ${DEVICE_STATE.DEVICE_TOKEN}`);

  const call = screen.getByText(/call/i);
  fireEvent.click(call);

  expect(state).not.toHaveTextContent(`State: ${CALL_STATE.CALL_CONNECTING}`);
});
