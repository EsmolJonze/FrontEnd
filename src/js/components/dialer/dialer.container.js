import React, { useEffect } from 'react';
import { useForceRerender } from '../../hooks';
import { useUserSettings } from '../userPermissions/hooks';
import DialerView from './dialer.view';

const DialerContainer = () => {
  const settings = useUserSettings();
  const { forceRerender, id } = useForceRerender();
  useEffect(() => {
    forceRerender();
  }, [!!settings?.user.incomingCallsForwarding]);

  return (
    <React.Suspense fallback={<></>}>
      <DialerView key={id} />
    </React.Suspense>
  );
};

export default DialerContainer;
