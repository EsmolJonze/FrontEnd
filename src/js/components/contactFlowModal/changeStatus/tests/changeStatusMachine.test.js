import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useMachine } from '@xstate/react';
import StatusMachine from '../changeStatus.machine';

const entities = ['Lead', 'Company'];
const statuses = ['On Prospection', 'Contacted', 'Engaged', 'Meeting', 'Discarded', 'Nurturing'];

const TestChangeStatus = () => {
  const [state, send] = useMachine(StatusMachine);

  return (
    <div>
      {entities.map(entity =>
        statuses.map(status => (
          <button
            key={`status-${status}`}
            onClick={() => send(`SET_${status.toUpperCase()}_${entity.toUpperCase()}`)}
            type="button"
          >
            {entity} - {status}
          </button>
        )),
      )}
      <span>State Lead: {state.value.lead}</span>
      <span>State Company: {state.value.company}</span>
    </div>
  );
};

test('status machine starts properly', () => {
  render(<TestChangeStatus />);
  const stateLead = screen.getByText(/state lead/i);
  expect(stateLead).toHaveTextContent(`State Lead: on_prospection`);

  const stateCompany = screen.getByText(/state company/i);
  expect(stateCompany).toHaveTextContent(`State Company: on_prospection`);
});

test('user sets the Lead status to "On Prospection"', () => {
  render(<TestChangeStatus />);

  const onProspection = screen.getByText(/lead - on prospection/i);
  fireEvent.click(onProspection);

  const stateLead = screen.getByText(/state lead/i);
  expect(stateLead).toHaveTextContent(`State Lead: on_prospection`);

  const stateCompany = screen.getByText(/state company/i);
  expect(stateCompany).toHaveTextContent(`State Company: on_prospection`);
});

test('user sets the Lead status to "Contacted"', () => {
  render(<TestChangeStatus />);

  const contacted = screen.getByText(/lead - contacted/i);
  fireEvent.click(contacted);

  const stateLead = screen.getByText(/state lead/i);
  expect(stateLead).toHaveTextContent(`State Lead: contacted`);

  const stateCompany = screen.getByText(/state company/i);
  expect(stateCompany).toHaveTextContent(`State Company: contacted`);
});

test('user sets the Lead status to "Engaged"', () => {
  render(<TestChangeStatus />);

  const engaged = screen.getByText(/lead - engaged/i);
  fireEvent.click(engaged);

  const stateLead = screen.getByText(/state lead/i);
  expect(stateLead).toHaveTextContent(`State Lead: engaged`);

  const stateCompany = screen.getByText(/state company/i);
  expect(stateCompany).toHaveTextContent(`State Company: engaged`);
});

test('user sets the Lead status to "Meeting"', () => {
  render(<TestChangeStatus />);

  const meeting = screen.getByText(/lead - meeting/i);
  fireEvent.click(meeting);

  const stateLead = screen.getByText(/state lead/i);
  expect(stateLead).toHaveTextContent(`State Lead: meeting`);

  const stateCompany = screen.getByText(/state company/i);
  expect(stateCompany).toHaveTextContent(`State Company: meeting`);
});

test('user sets the Company status to "Contacted"', () => {
  render(<TestChangeStatus />);

  const contacted = screen.getByText(/company - contacted/i);
  fireEvent.click(contacted);

  const stateLead = screen.getByText(/state lead/i);
  expect(stateLead).toHaveTextContent(`State Lead: on_prospection`);

  const stateCompany = screen.getByText(/state company/i);
  expect(stateCompany).toHaveTextContent(`State Company: contacted`);
});

test('user sets the Company status to "Engaged"', () => {
  render(<TestChangeStatus />);

  const engaged = screen.getByText(/company - engaged/i);
  fireEvent.click(engaged);

  const stateLead = screen.getByText(/state lead/i);
  expect(stateLead).toHaveTextContent(`State Lead: on_prospection`);

  const stateCompany = screen.getByText(/state company/i);
  expect(stateCompany).toHaveTextContent(`State Company: engaged`);
});

test('user sets the Company status to "Meeting"', () => {
  render(<TestChangeStatus />);

  const meeting = screen.getByText(/company - meeting/i);
  fireEvent.click(meeting);

  const stateLead = screen.getByText(/state lead/i);
  expect(stateLead).toHaveTextContent(`State Lead: on_prospection`);

  const stateCompany = screen.getByText(/state company/i);
  expect(stateCompany).toHaveTextContent(`State Company: meeting`);
});

test('user sets the Lead status to "Nurturing"', () => {
  render(<TestChangeStatus />);

  const nurturing = screen.getByText(/lead - nurturing/i);
  fireEvent.click(nurturing);

  const stateLead = screen.getByText(/state lead/i);
  expect(stateLead).toHaveTextContent(`State Lead: nurturing`);

  const stateCompany = screen.getByText(/state company/i);
  expect(stateCompany).toHaveTextContent(`State Company: on_prospection`);
});

test('user sets the Lead status to "Discarded"', () => {
  render(<TestChangeStatus />);

  const discarded = screen.getByText(/lead - discarded/i);
  fireEvent.click(discarded);

  const stateLead = screen.getByText(/state lead/i);
  expect(stateLead).toHaveTextContent(`State Lead: discarded`);

  const stateCompany = screen.getByText(/state company/i);
  expect(stateCompany).toHaveTextContent(`State Company: on_prospection`);
});

test('user sets the Company status to "Nurturing"', () => {
  render(<TestChangeStatus />);

  const nurturing = screen.getByText(/company - nurturing/i);
  fireEvent.click(nurturing);

  const stateLead = screen.getByText(/state lead/i);
  expect(stateLead).toHaveTextContent(`State Lead: nurturing`);

  const stateCompany = screen.getByText(/state company/i);
  expect(stateCompany).toHaveTextContent(`State Company: nurturing`);
});

test('user sets the Company status to "Discarded"', () => {
  render(<TestChangeStatus />);

  const discarded = screen.getByText(/company - discarded/i);
  fireEvent.click(discarded);

  const stateLead = screen.getByText(/state lead/i);
  expect(stateLead).toHaveTextContent(`State Lead: discarded`);

  const stateCompany = screen.getByText(/state company/i);
  expect(stateCompany).toHaveTextContent(`State Company: discarded`);
});
