import React, { useState } from 'react';
import { Icon, Label, Text } from '@bloobirds-it/bloobirds-platform-component-library';
import styles from './cardStatistics.module.css';
import { formatDate } from '../../../../utils/dates.utils';
import { getTextFromLogicRole } from '../../../../utils/bobjects.utils';

const Statistic = ({ title, value }) => {
  if (!value) return null;

  const length = Object.keys(value).length;
  const style = {
    color: length ? 'var(--melon)' : 'var(--peanut)',
    backgroundColor: length ? 'var(--verySoftMelon)' : 'var(--verySoftPeanut)',
    borderColor: length ? 'var(--verySoftMelon)' : 'var(--verySoftPeanut)',
  };

  return (
    <div className={styles._statistic}>
      <Text weight="medium" size="m" color="peanut">
        {title}
      </Text>
      <Label size="small" overrideStyle={style}>
        {length}
      </Label>
    </div>
  );
};

const History = ({ opens, clicks }) => {
  const openHistory = Object.entries(opens).map(([date, data]) => ({
    date: new Date(parseInt(date, 10) * 1000),
    type: 'opened',
    data,
  }));

  const clickHistory = Object.entries(clicks).map(([date, data]) => ({
    date: new Date(parseInt(date, 10) * 1000),
    type: 'clicked',
    data,
  }));

  const history = [...openHistory, ...clickHistory];
  history.sort((a, b) => b.date - a.date);

  return (
    <ul className={styles._history_list}>
      {history.map(({ date, type, data }) => (
        <li className={styles._history_item}>
          <Text size="s" color="peanut">
            {type === 'opened' ? 'Opened' : 'Clicked link'}
          </Text>
          {type === 'clicked' && (
            <a
              className={styles._history_link}
              href={data.startsWith('http') ? data : `//${data}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Text size="s" color="bloobirds" ellipsis={48}>
                {data.replace(/https?:\/\/(www.)?/, '')}
              </Text>
            </a>
          )}
          <Text size="xs" color="softPeanut">
            {formatDate(date, "dd LLL yyyy 'at' p OOO")}
          </Text>
        </li>
      ))}
    </ul>
  );
};

const CardStatistics = ({ bobject }) => {
  const [showDetails, setShowDetails] = useState(false);

  const openHistory = getTextFromLogicRole(bobject, 'ACTIVITY__EMAIL_HISTORY_OPEN');
  const emailHistory = getTextFromLogicRole(bobject, 'ACTIVITY__EMAIL_HISTORY_CLICK');

  if (!openHistory && !emailHistory) {
    return null;
  }

  const opens = openHistory ? JSON.parse(openHistory) : {};
  const clicks = emailHistory ? JSON.parse(emailHistory) : {};

  const emptyHistory = Object.keys(opens).length === 0 && Object.keys(clicks).length === 0;

  return (
    <div className={styles._container}>
      <div className={styles._statistic_container}>
        <Statistic title="Opened" value={opens} />
        <Statistic title="Clicked" value={clicks} />
        {!emptyHistory && (
          <div className={styles._showDetails} onClick={() => setShowDetails(!showDetails)}>
            <Text size="s" color="bloobirds">
              {showDetails ? 'Hide details' : 'Show details'}
            </Text>
            <Icon size={16} name={showDetails ? 'chevronUp' : 'chevronDown'} color="bloobirds" />
          </div>
        )}
      </div>
      {showDetails && <History opens={opens} clicks={clicks} />}
    </div>
  );
};

export default CardStatistics;
