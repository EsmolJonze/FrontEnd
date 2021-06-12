import { createMemoryHistory } from 'history';
import React from 'react';
import { Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import { renderHook, act } from '@testing-library/react-hooks';
import { useQueryStringState } from './useQueryStringState';
import { RecoilRoot } from 'recoil';

test('properly sets a key to the url if not present', () => {
  const history = createMemoryHistory();
  const { result } = renderHook(() => useQueryStringState('apple', 'nyam'), {
    wrapper: ({ children }) => (
      <>
        <RecoilRoot>
          <Router history={history}>{children}</Router>
        </RecoilRoot>
      </>
    ),
  });

  expect(result.current[0]).toEqual('nyam');
  expect(history.location.search).toBe('?apple=nyam');
  expect(result.current[1]).toBeInstanceOf(Function);
});

test('properly sets a key from the url if present', () => {
  const history = createMemoryHistory();
  history.push({ search: 'apple=puagh' });
  jest.spyOn(window, 'location', 'get').mockReturnValue(history.location);

  const { result } = renderHook(() => useQueryStringState('apple', 'nyam'), {
    wrapper: ({ children }) => (
      <>
        <RecoilRoot>
          <Router history={history}>{children}</Router>
        </RecoilRoot>
      </>
    ),
  });

  expect(result.current[0]).toEqual('puagh');
});

test('properly sets a key to the url if not present and respects the other ones', () => {
  const history = createMemoryHistory();
  history.push({ search: 'lemon=acid' });
  jest.spyOn(window, 'location', 'get').mockReturnValue(history.location);

  const { result } = renderHook(() => useQueryStringState('apple', 'nyam'), {
    wrapper: ({ children }) => (
      <>
        <RecoilRoot>
          <Router history={history}>{children}</Router>
        </RecoilRoot>
      </>
    ),
  });

  expect(result.current[0]).toEqual('nyam');
  expect(history.location.search).toBe('?apple=nyam&lemon=acid');
  expect(result.current[1]).toBeInstanceOf(Function);
});

test('properly updates a key from the url and respects the other ones', () => {
  const history = createMemoryHistory();
  history.push({ search: 'apple=puagh&lemon=acid' });
  jest.spyOn(window, 'location', 'get').mockReturnValue(history.location);

  const { result } = renderHook(() => useQueryStringState('apple', 'nyam'), {
    wrapper: ({ children }) => (
      <>
        <RecoilRoot>
          <Router history={history}>{children}</Router>
        </RecoilRoot>
      </>
    ),
  });

  expect(result.current[0]).toEqual('puagh');

  act(() => {
    result.current[1]('not acid');
  });

  expect(history.location.search).toBe('?apple=not%20acid&lemon=acid');
  expect(result.current[0]).toEqual('not acid');
});
