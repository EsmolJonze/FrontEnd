import React from 'react';
import {
  Icon,
  IconButton,
  Text,
  Tooltip,
} from '@bloobirds-it/bloobirds-platform-component-library';
import classNames from 'clsx';
import styles from './notificationCard.module.css';
import { format } from 'date-fns';
import { formatTimeDistance } from '../../../../../misc/utils';
import { useActiveLeads, usePreviousUrl, useRouter } from '../../../../../hooks';
import { APP_CL_COMPANIES } from '../../../../../app/_constants/routes';
import { useActiveActivitiesFilters } from '../../../../../hooks/useActiveActivities';
import { useSharedQueryStringState } from '../../../../../hooks/queryStringState/useQueryStringState';
import { isLeadPage } from '../../../../../utils/pages.utils';

const ICONS = {
  NEW_EMAIL: {
    name: 'mail',
    color: 'tangerine',
  },
  NEW_LINKEDIN: {
    name: 'linkedin',
    color: 'darkBloobirds',
  },
  NEW_INBOUND: {
    name: 'download',
    color: 'banana',
  },
  NEW_INBOUND_LEAD: {
    name: 'personAdd',
    color: 'banana',
  },
  MISSED_CALL_UNKNOWN: {
    name: 'phone',
    color: 'melon',
  },
  MISSED_CALL_LEAD: {
    name: 'phone',
    color: 'melon',
  },
  REPORT_CALL: {
    name: 'phone',
    color: 'melon',
  },
  EMAIL_OPENED: {
    name: 'eye',
    color: 'banana',
  },
  EMAIL_CLICKED: {
    name: 'cursorClickOutline',
    color: 'grape',
  },
  MEETING_DONE: {
    name: 'calendar',
    color: 'tomato',
  },
  CADENCE_ENDED: {
    name: 'cadence',
    color: 'softPeanut',
  },
  IMPORT_FAILED: {
    name: 'upload',
    color: 'tomato',
  },
  IMPORT_COMPLETED: {
    name: 'upload',
    color: 'melon',
  },
  IMPORT_COMPLETED_WITH_WARNINGS: {
    name: 'upload',
    color: 'banana',
  },
};

const NotificationCard = ({ date, id, subtitle, title, type, read, url, onDelete, onClick }) => {
  const { setPreviousUrl } = usePreviousUrl();
  const { history } = useRouter();
  const { resetTypeFilter, setDateFilter } = useActiveActivitiesFilters();
  const [, setTab] = useSharedQueryStringState('tab');
  const { resetActiveLeads } = useActiveLeads();

  const classes = classNames(styles._card, {
    [styles._unread]: !read,
  });

  const handleRemove = event => {
    event.preventDefault();
    event.stopPropagation();
    onDelete(id);
  };

  const handleOnClick = async () => {
    setDateFilter({ startDate: date, endDate: date });
    resetTypeFilter();

    onClick(id);

    setPreviousUrl(APP_CL_COMPANIES);
    if (url) {
      if (isLeadPage(url)) {
        await resetActiveLeads();
      }
      history.push(`${url}${url.indexOf('?') === -1 ? '?' : '&'}notificationId=${id}`);

      setTimeout(() => {
        setTab('Activity');
      }, 100);
      setTimeout(() => {
        const activityTab = document.querySelector('#activity-tab');
        if (activityTab) {
          activityTab.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    }
  };

  return (
    <li className={classes} onClick={handleOnClick}>
      <Icon {...ICONS[type]} />
      <div className={styles._card__body}>
        <Text dataTest={`Notification-Activity-${title}`} color="darkGray" size="xs" ellipsis={75}>
          {title || ''}
        </Text>
        <Text
          dataTest={`Notification-Company-${subtitle}`}
          color="softPeanut"
          size="xs"
          ellipsis={75}
        >
          {subtitle || ''}
        </Text>
      </div>
      <div className={styles._card__info}>
        <IconButton name="trashFull" size={16} color="bloobirds" onClick={handleRemove} />
        <Tooltip position="bottom" title={format(date, 'PPP ppp')}>
          <Text size="xs" color="softPeanut">
            {formatTimeDistance(date)}
          </Text>
        </Tooltip>
      </div>
    </li>
  );
};

export default NotificationCard;
