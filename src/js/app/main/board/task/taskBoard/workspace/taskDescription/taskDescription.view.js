import React from 'react';
import { withStyles } from '@material-ui/core';
import classNames from 'clsx';
import {
  BOBJECT_FIELD__LOGIC_ROLE__TASK__GOAL,
  BOBJECT_FIELD__LOGIC_ROLE__TASK__SCHEDULED_DATETIME,
  BOBJECT_FIELD__LOGIC_ROLE__TASK__TITLE,
  BOBJECT_FIELD__LOGIC_ROLE__TASK__TYPE,
  bobjectFieldsModel,
} from '../../../../../../../misc/model/bobjectFieldsModel';
import { DateTextField } from '../../../../../../../components/filter/field/field';
import { BobjectFieldPill } from '../../../../../../../components/filter/field/pill';
import { useBobjectDetails } from '../../../../../../../hooks';
import { styles } from './taskDescription.styles';
import { Icon } from '@bloobirds-it/bloobirds-platform-component-library';

const TaskDescription = withStyles(styles)(props => {
  const { task, classes, CompleteButton, company } = {
    ...props,
  };
  const { setBobjectDetails, openBobjectDetails } = useBobjectDetails();
  if (task === null) {
    return <div />;
  }

  let taskTypeLogicRole;
  let fields;
  let goals;
  if (!task) {
    taskTypeLogicRole = 'CONTACT';
  } else {
    fields = bobjectFieldsModel(task.fields);
    goals = fields.findByLogicRole(BOBJECT_FIELD__LOGIC_ROLE__TASK__GOAL).text;
    taskTypeLogicRole = fields.findByLogicRole(BOBJECT_FIELD__LOGIC_ROLE__TASK__TYPE)
      .valueLogicRole;
  }
  let taskDescription;
  let taskGoalsStartingText;
  let taskGoalsEndingText;
  let companyStatus;
  let companyName;
  let numberOfLeads;
  let showContactButton = false;
  if (company) {
    const model = bobjectFieldsModel(company.fields);
    companyStatus = model.findByLogicRole('COMPANY__STATUS');
    companyName = model.findByLogicRole('COMPANY__NAME').text;
    numberOfLeads = model.findByLogicRole('COMPANY__LEADS_COUNT').text
      ? model.findByLogicRole('COMPANY__LEADS_COUNT').text
      : 0;
  }
  let content;
  switch (taskTypeLogicRole) {
    case 'ADD_QC' || 'ALLOCATE_QC':
      taskGoalsStartingText = 'QC OF';
      taskGoalsEndingText = 'RECOMMENDED FOR THIS WEEK';
      break;
    case 'ADD_LEADS_TO_QC':
      taskDescription = 'TASK: ADD LEADS TO THE COMPANY';
      taskGoalsStartingText = 'LEADS ADDED FROM';
      taskGoalsEndingText = 'RECOMMENDED';
      showContactButton = true;
      break;
    case 'CONTACT':
      taskDescription = 'TASK: CONTACT THE COMPANY';
      break;
    case 'NEXT_STEP':
      taskDescription = 'Next Step';
      break;
    case 'CONTACT_BEFORE_MEETING':
      taskDescription = 'Contact Before Meeting';
      break;
    default:
      break;
  }
  if (companyStatus) {
    content = <BobjectFieldPill field={companyStatus} />;
  }

  return (
    <div className={classes.taskDescription}>
      <div className={classes.taskCardTitleWrapper}>
        <div className={classes.taskCardLeftSide}>
          <div className={classes.taskDescriptionLineOne}>
            <div>{taskDescription}</div>
            <div>
              {task &&
              fields.findByLogicRole(BOBJECT_FIELD__LOGIC_ROLE__TASK__SCHEDULED_DATETIME) ? (
                <DateTextField
                  field={fields.findByLogicRole(
                    BOBJECT_FIELD__LOGIC_ROLE__TASK__SCHEDULED_DATETIME,
                  )}
                />
              ) : (
                ''
              )}
            </div>
          </div>
          <div className={classes.taskDescriptionMainBlock}>
            <div>
              <div className={classes.taskDescriptionCompanyNameStatusContainer}>
                {company ? (
                  <div
                    data-test="addLeadsCompanyName"
                    onClick={() => {
                      setBobjectDetails({ bobject: company, showContactButton });
                      openBobjectDetails();
                    }}
                    className={classNames({
                      [classes.taskDescriptionMainBlockAQC]: true,
                      [classes.taskDescriptionMainBlockAQCLink]: true,
                    })}
                  >
                    {companyName || '-'}
                  </div>
                ) : (
                  <h1 className={classes.taskDescriptionMainBlockAQC}>
                    {task
                      ? fields.findByLogicRole(BOBJECT_FIELD__LOGIC_ROLE__TASK__TITLE).text
                      : ''}
                  </h1>
                )}
                {content}
              </div>
              {goals && (
                <div className={classes.goalCardContainer}>
                  {numberOfLeads >= goals ? (
                    <div className={classes.goalIcon}>
                      <Icon name="check" color="softPeanut" size={14} />
                    </div>
                  ) : (
                    <div className={classes.goalIcon}>
                      <Icon name="check" color="bloobirds" size={14} />
                    </div>
                  )}
                  <div
                    className={classNames({
                      [classes.taskDescriptionMainBlockText]: true,
                      [classes.taskDescriptionMainBlockTextGoalReached]: numberOfLeads >= goals,
                    })}
                  >
                    {`${numberOfLeads} ${taskGoalsStartingText} ${goals} ${taskGoalsEndingText}`}
                  </div>
                  {numberOfLeads >= goals ? (
                    <div className={classes.goalIcon}>
                      <Icon name="eye" color="softPeanut" size={14} />
                    </div>
                  ) : (
                    <div className={classes.goalIcon}>
                      <Icon name="eye" color="bloobirds" size={14} />
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div data-test={'Button-leadsConfirm'} className={classes.taskDescriptionMainBlockButtons}>
        <CompleteButton />
      </div>
    </div>
  );
});

export default TaskDescription;
