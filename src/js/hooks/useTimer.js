import { useEffect, useState } from 'react';

export const useTimer = () => {
  const [{ seconds, active }, setState] = useState({ seconds: 0, active: false });

  useEffect(() => {
    let interval = null;

    if (active) {
      interval = setInterval(
        () => setState(state => ({ seconds: state.seconds + 1, active: true })),
        1000,
      );
    } else if (seconds !== 0) {
      clearInterval(interval);
    }

    return () => interval && clearInterval(interval);
  }, [active]);

  const startTimer = () => setState({ seconds: 0, active: true });
  const stopTimer = () => setState({ seconds: 0, active: false });
  const pauseTimer = () => setState(state => ({ seconds: state.seconds, active: false }));

  return { seconds, startTimer, stopTimer, pauseTimer };
};
