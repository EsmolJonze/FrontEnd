import React from 'react';
import { Button } from '@bloobirds-it/bloobirds-platform-component-library';
import TypeButton from './typeButton';
import {
  APP_CL_ACTIVITIES_NEW_VIEW,
  APP_CL_COMPANIES_NEW_VIEW,
  APP_CL_LEADS_NEW_VIEW,
  APP_CL_OPPORTUNITIES_NEW_VIEW,
  APP_CL_TASKS_NEW_VIEW,
} from '../../../../app/_constants/routes';
import styles from './typeList.module.css';
import { useRouter } from '../../../../hooks';

const TypeList = ({ handleCloseModal }) => {
  const { history } = useRouter();

  const types = [
    {
      icon: 'briefcaseOutline',
      title: 'Companies',
      description:
        'Customize your own list of companies. E.g.: My companies in on prospection this week.',
      handleClick: () => history.push(APP_CL_COMPANIES_NEW_VIEW),
    },
    {
      icon: 'people',
      title: 'Leads',
      description:
        'Customize your own list of leads. E.g.: New hot leads, direct requests last week',
      handleClick: () => history.push(APP_CL_LEADS_NEW_VIEW),
    },
    {
      icon: 'activity',
      title: 'Activities',
      description:
        'Customize your own list of meetings, calls, emails, LinkedIn, Inbound & notes. E.g.: Meetings scheduled this week.',
      handleClick: () => history.push(APP_CL_ACTIVITIES_NEW_VIEW),
    },
    {
      icon: 'fileOpportunity',
      title: 'Opportunities',
      description: 'Create your own lists of opportunities. E.g.: Closed opportunities this week',
      handleClick: () => history.push(APP_CL_OPPORTUNITIES_NEW_VIEW),
    },
    {
      icon: 'check',
      title: 'Tasks',
      description: 'Customize your own list of tasks. E.g.: Completed tasks per SDR',
      handleClick: () => history.push(APP_CL_TASKS_NEW_VIEW),
    },
  ];

  return (
    <div className={styles._container}>
      {types.map(type => (
        <TypeButton
          icon={type.icon}
          title={type.title}
          description={type.description}
          onClick={type.handleClick}
        />
      ))}
      <div className={styles._cancel_button}>
        <Button variant="tertiary" onClick={handleCloseModal}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default TypeList;
