import React, { useEffect, useState } from 'react';
import { useActiveUser, useEmailConnections, useRouter } from '../../hooks';
import AlertBanner from '../alertBanner';
import { APP_MANAGEMENT_USER } from '../../app/_constants/routes';
import { usePausePeriods } from '../../hooks/usePausePeriods';
import AlertMessage from './alertMessage';

const AccountAlertsView = () => {
  const { stoppedConnections } = useEmailConnections();
  const { activeUser } = useActiveUser();
  const { periods } = usePausePeriods({ userId: activeUser?.id });
  const router = useRouter();
  const [alerts, setAlerts] = useState([]);

  const onMessageClick = (value, e) => {
    router.push(APP_MANAGEMENT_USER, { event: e });
  };

  const checkAlertExistance = type => alerts.find(alert => alert.key === type);

  useEffect(() => {
    const alertType = 'nylasStopped';
    if (stoppedConnections?.length > 0) {
      setAlerts([
        ...alerts,
        {
          key: alertType,
          type: 'negative',
          message: <AlertMessage type={alertType} onMessageClick={onMessageClick} />,
        },
      ]);
    }
  }, [stoppedConnections]);

  useEffect(() => {
    const alertType = 'notInChrome';
    if (!window.chrome) {
      setAlerts([
        ...alerts,
        {
          key: alertType,
          type: 'alert',
          message: <AlertMessage type={alertType} onMessageClick={onMessageClick} />,
        },
      ]);
    }
  }, []);

  useEffect(() => {
    const alertType = 'userPaused';
    const periodAlert = checkAlertExistance(alertType);
    if (periods.isUserCurrentlyPaused && !periodAlert) {
      setAlerts([
        ...alerts,
        {
          key: alertType,
          type: 'alert',
          message: (
            <AlertMessage
              type={alertType}
              onMessageClick={onMessageClick}
              options={{
                date: periods.currentPausedPeriod,
              }}
            />
          ),
        },
      ]);
    }
  }, [periods]);

  return <>{alerts && alerts.map(alert => <AlertBanner key={alert.key} {...alert} />)}</>;
};

export default AccountAlertsView;
