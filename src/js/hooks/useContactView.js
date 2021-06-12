import { SubscriptionHooks } from '@bloobirds-it/bloobirds-platform-react-api-library';
import {
  useQueryStringState,
  useSharedQueryStringState,
} from './queryStringState/useQueryStringState';
import { useActiveCompany } from './useActiveCompany';

export const useContactView = () => {
  const { company } = useActiveCompany();
  const [tab, setTab] = useSharedQueryStringState('tab');
  const [subtab, setSubtab] = useQueryStringState('subtab');
  const [showContactFlow, setShowContactFlow] = useQueryStringState('showContactFlow');
  const [notificationObjectId, setNotificationObjectId] = useQueryStringState('notificationId');

  const setActiveTabs = ({ tab: newTab, subtab: newSubtab }) => {
    setTab(newTab);
    setSubtab(newSubtab);
  };

  const scrollToContactTabs = () => {
    document.getElementById('contact-tabs').scrollIntoView({ behavior: 'smooth' });
  };

  const openContactFlow = data => {
    if (data.notification.type === 'REPORT_CALL') {
      const url = data.notification.url;
      const notificationId = data.notification.id;
      const urlWithoutQueryParams = url.split('?')[0];
      const urlId = urlWithoutQueryParams.split('/')[4];

      if (company?.id.objectId === urlId) {
        setShowContactFlow(data?.notification?.objectId);
        setNotificationObjectId(notificationId);
      }
    }
  };

  SubscriptionHooks.useWebsocketEventSubscription('notification', data => openContactFlow(data));

  return {
    notificationObjectId,
    showContactFlow,
    subtab,
    tab,
    setActiveTabs,
    setNotificationObjectId,
    setShowContactFlow,
    scrollToContactTabs,
    setTab,
    setSubtab,
  };
};
