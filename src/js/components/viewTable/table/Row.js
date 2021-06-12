import React, { useState } from 'react';
import { TableRow } from '@material-ui/core';
import Cell from '../../bobjectTable/table/layout/Cell';
import { withWrappers } from '../../../misc/utils';
import Skeleton from '@material-ui/lab/Skeleton';
import { rowStyle } from '../../bobjectTable/table/layout/Row';
import styles from './row.module.css';
import { Text } from '@bloobirds-it/bloobirds-platform-component-library';
import { format } from 'date-fns';
import { paramsToQuery } from '../../../misc/urlQueryUtils';
import {
  APP_CL,
  APP_CL_ACTIVITIES,
  APP_CL_COMPANIES,
  APP_CL_LEADS,
  APP_CL_OPPORTUNITIES,
  APP_CL_TASKS,
} from '../../../app/_constants/routes';
import classNames from 'clsx';
import ListTag from '../../listTag';
import LinkRow from '../../bobjectTable/table/layout/linkRow';

const getViewUrl = element => {
  const query = paramsToQuery({ viewId: element.bobjectView.id });
  let path;
  switch (element.bobjectView.viewType) {
    case 'COMPANY':
      path = APP_CL_COMPANIES;
      break;
    case 'LEAD':
      path = APP_CL_LEADS;
      break;
    case 'ACTIVITY':
      path = APP_CL_ACTIVITIES;
      break;
    case 'TASK':
      path = APP_CL_TASKS;
      break;
    case 'OPPORTUNITY':
      path = APP_CL_OPPORTUNITIES;
      break;
    default:
      path = APP_CL;
  }
  return `${path}?${query}`;
};

const renderTags = ({ expandTags, tags, setExpandTags }) => {
  if (tags.length >= 3 && !expandTags) {
    return (
      <>
        {tags.slice(0, 2).map(tag => (
          <span key={`tag-${tag}`} className={styles._tag__container}>
            <ListTag tag={{ value: tag }} type="filter" />
          </span>
        ))}
        <div
          className={styles._more_options__container}
          onClick={e => {
            e.stopPropagation();
            setExpandTags(true);
          }}
        >
          <Text color="bloobirds" size="m">{`+${tags.length - 2}`}</Text>
        </div>
      </>
    );
  }
  const tagClass = classNames(styles._tag__container, {
    [styles._tag_expanded__container]: expandTags,
  });
  return (
    <div className={styles._expanded_tags_container}>
      {tags.map(tag => (
        <span key={`tag-${tag}`} className={tagClass}>
          <ListTag tag={{ value: tag }} type="filter" />
        </span>
      ))}
    </div>
  );
};

const dataDisplay = (element, column) => {
  if (column.key === 'tags') {
    const [expandTags, setExpandTags] = useState(false);
    return renderTags({ expandTags, tags: element[column.key], setExpandTags });
  }
  if (column.key === 'updateDateTime' || column.key === 'creationDateTime') {
    const date = new Date(element[column.key]);
    return format(date, 'MMMM do, yyyy');
  }
  return element[column.key];
};

export const Row = withWrappers({ style: rowStyle })(props => {
  const { element, columns, classes } = props;

  return (
    <TableRow
      className={classes.root}
      component={linkProps => (
        <LinkRow linkProps={linkProps} url={getViewUrl(element)}>
          {linkProps.children}
        </LinkRow>
      )}
    >
      {columns.map(column => (
        <Cell key={column.key}>{dataDisplay(element.bobjectView, column)}</Cell>
      ))}
    </TableRow>
  );
});

export const SkeletonRow = withWrappers({ style: rowStyle })(({ columns, classes }) => (
  <TableRow className={classes.root}>
    {columns?.map(c => (
      <Cell key={c.header}>
        <Skeleton variant="text" height="1em" />
      </Cell>
    ))}
  </TableRow>
));
