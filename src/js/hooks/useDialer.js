import { atom, useRecoilState } from 'recoil';
import { useEffect, useState } from 'react';
import { SubscriptionHooks } from '@bloobirds-it/bloobirds-platform-react-api-library';
import { useMachine } from '@xstate/react';
import isEqual from 'lodash/isEqual';
import { useCompany } from './useCompany';
import { useLeads } from './useLeads';
import { useActiveCompany } from './useActiveCompany';
import { CONNECTION_EVENT_TYPES, DEVICES_EVENT_TYPES } from '../components/dialer/dialer.constants';
import DialerMachine from '../components/dialer/dialer.machine';
import { useActivity } from './useActivity';
import { usePrevious } from './usePrevious';
import { isCallActive } from '../components/dialer/dialer.utils';
import { getValueFromLogicRole } from '../utils/bobjects.utils';
import { useActiveLeads } from './useActiveLeads';

const dialerOpenAtom = atom({
  key: 'dialerOpen',
  default: false,
});

export const useDialerVisibility = () => {
  const [dialerOpen, setDialerOpen] = useRecoilState(dialerOpenAtom);

  const openDialer = () => {
    if (!dialerOpen) {
      setDialerOpen(true);
    }
  };

  const closeDialer = () => {
    if (dialerOpen) {
      setDialerOpen(false);
    }
  };

  return {
    isOpen: dialerOpen,
    openDialer,
    closeDialer,
  };
};

export const useDialer = () => {
  const { company, getCompanyById, resetCompany, setCompany } = useCompany('dialer');
  const { activity, setActivityWithId, resetActivity, updateActivity } = useActivity('dialer');
  const { company: activeCompany } = useActiveCompany();
  const { leads: activeLeads, selectedLead: activeSelectedLead } = useActiveLeads();
  const {
    leads,
    updateSingleLead,
    selectedLead,
    updateLeads,
    updateLeadsByCompany,
    updateSelectedLead,
    resetLeads,
  } = useLeads('dialer');

  const { isOpen, openDialer, closeDialer } = useDialerVisibility();
  const [recievedWSActivity, setRecievedWSActivity] = useState();
  const [state, send] = useMachine(DialerMachine);

  const { context, value } = state;
  const { token, device, connection, isIncomingCall } = context;
  const emitEvent = (type, callConnection) => send(type, { connection: callConnection });

  SubscriptionHooks.useWebsocketEventSubscription('twilio-response', data => {
    setRecievedWSActivity(data);
  });

  const previousConnection = usePrevious(connection);

  useEffect(
    () => () => {
      if (device) {
        device.disconnectAll();
        device.destroy();
      }
    },
    [device],
  );

  useEffect(() => {
    if (!activity && recievedWSActivity) {
      const companyId = company?.id.value.split('/')[2];
      const activityCompanyId =
        recievedWSActivity.companyId === 'undefined' ? undefined : recievedWSActivity.companyId;
      const activityLeadId = recievedWSActivity.leadId;
      if ((!company || activityCompanyId !== companyId) && activityCompanyId) {
        getCompanyById(activityCompanyId?.split('/')[2]);
        updateLeadsByCompany(activityCompanyId);
        updateSelectedLead(activityLeadId);
      }
      if (company && activityLeadId !== selectedLead?.id.value) {
        updateSelectedLead(activityLeadId);
      }
      if (
        !activityCompanyId &&
        (!selectedLead?.id.value || activityLeadId !== selectedLead?.id.value) &&
        activityLeadId
      ) {
        updateSingleLead(activityLeadId?.split('/')[2]);
        updateSelectedLead(activityLeadId);
        resetCompany();
      }
      if (!activityCompanyId && company) {
        resetCompany();
        resetLeads();
      }

      setActivityWithId(recievedWSActivity.activityId);
    } else if (activity && activity.id.objectId !== recievedWSActivity.activityId) {
      setActivityWithId(recievedWSActivity.activityId);
    }
  }, [recievedWSActivity]);

  const handleCloseDialer = () => {
    send('finish');
    closeDialer();
  };

  useEffect(
    () => () => {
      resetCompany();
      resetLeads();
      resetActivity();
    },
    [],
  );

  useEffect(() => {
    if (!isCallActive(value)) {
      if (!company && activeCompany) {
        setCompany(activeCompany);
      }
      if (company && activeCompany && company.id.objectId !== activeCompany.id.objectId) {
        getCompanyById(activeCompany.id.objectId);
      }
    }
  }, [activeCompany]);

  useEffect(() => {
    if (!isCallActive(value)) {
      if (
        leads &&
        activeLeads &&
        ((leads.length === 0 && activeLeads?.length > 0) || !isEqual(leads, activeLeads))
      ) {
        updateLeads(activeLeads);
      }
    }
  }, [activeLeads]);

  useEffect(() => {
    if (!isCallActive(value)) {
      if (activeSelectedLead && !isEqual(selectedLead, activeSelectedLead)) {
        updateSelectedLead(activeSelectedLead.id.value);
      }
    }
  }, [activeSelectedLead]);

  useEffect(() => {
    if (token) {
      send('initDevice', { token });
    }
  }, [token]);

  useEffect(() => {
    if (!isOpen) {
      if (!isEqual(company, activeCompany)) {
        setCompany(activeCompany);
        updateLeads(activeLeads);
      }
      resetActivity();
    }
  }, [isOpen]);

  useEffect(() => {
    if (!connection) {
      resetActivity();
    }
    if (connection) {
      if (previousConnection) {
        resetActivity();
      }
      CONNECTION_EVENT_TYPES.forEach(typeOfEvent => {
        connection.on(typeOfEvent, eventResponse => {
          emitEvent(typeOfEvent, eventResponse);
        });
      });
    }
  }, [connection]);

  useEffect(() => {
    if (activity) {
      const callSid = getValueFromLogicRole(activity, 'ACTIVITY__CALL_SID');
      send('setCallSid', { callSid });
    }
  }, [activity]);

  useEffect(() => {
    if (device) {
      DEVICES_EVENT_TYPES.forEach(typeOfEvent => {
        device.on(typeOfEvent, callConnection => {
          emitEvent(typeOfEvent, callConnection);
        });
      });
    }
  }, [device]);

  return {
    activity,
    company,
    context,
    getCompanyById,
    handleCloseDialer,
    isIncomingCall,
    isOpen,
    leads,
    openDialer,
    selectedLead,
    send,
    updateActivity,
    updateLeadsByCompany,
    updateSelectedLead,
    value,
  };
};
