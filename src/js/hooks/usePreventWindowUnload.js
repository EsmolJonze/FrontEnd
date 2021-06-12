import React from 'react';

export const usePreventWindowUnload = preventUnload => {
  React.useEffect(() => {
    if (preventUnload) {
      window.onbeforeunload = () => true;
    } else {
      window.onbeforeunload = null;
    }
  }, [preventUnload]);
};
