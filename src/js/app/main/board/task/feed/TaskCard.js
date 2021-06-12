import React from 'react';
import withStyles from '@material-ui/styles/withStyles';
import { cssVariables } from '../../../../../style/variables';
import { bobjectModel } from '../../../../../misc/model/bobjectFieldsModel';
import { format, parse } from 'date-fns';
import { withRouter } from 'react-router-dom';
import { companyTaskUrl, leadUrl } from '../../../../_constants/routes';
import { BobjectPill } from '../../../../../components/filter/field/pill';
import classNames from 'clsx';
import {
  isAfterTomorrow,
  isBeforeToday,
  isToday,
  isTomorrow,
} from '../../../../../utils/dates.utils';

const activeCard = {
  root: {
    backgroundColor: '#f0f4f6',
    width: '231px',
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
};

const defaultStyle = {
  root: {
    backgroundColor: cssVariables.color.bloobirds.veryLight,
    width: 215,
    margin: '16px 16px 0',
    height: 'auto',
    display: 'grid',
    gridTemplateColumns: '8px 8px auto',
    gridTemplateRows: '8px 26px auto 8px',
    cursor: 'pointer',
    borderRadius: '4px',
    minHeight: '80px',
    '& > *': {
      margin: 0,
      overflow: 'auto',
      textOverflow: 'ellipsis',
    },
  },
};

const style = {
  root: {
    ...defaultStyle.root,
  },
  rootFuture: {
    ...defaultStyle.root,
    backgroundColor: cssVariables.color.bloobirds.verySoft,
  },
  rootActive: {
    ...defaultStyle.root,
    ...activeCard.root,
  },
  label: {
    gridColumn: 1,
    gridRow: '1 / end',
    borderTopLeftRadius: '4px',
    borderBottomLeftRadius: '4px',
  },
  header: {
    root: {
      maxWidth: '199px',
      fontSize: 13,
      gridColumn: 3,
      gridRow: 2,
      '& > *': {
        margin: 0,
      },
    },
    label: {
      borderRadius: 5,
      marginRight: 5,
      backgroundColor: cssVariables.color.bloobirds.natural,
      color: cssVariables.color.white.natural,
      padding: 2,
    },
    overdueLabel: {
      borderRadius: 5,
      marginRight: 5,
      backgroundColor: cssVariables.color.tomato.natural,
      color: cssVariables.color.white.natural,
      padding: 2,
    },
    futureLabel: {
      borderRadius: 5,
      marginRight: 5,
      backgroundColor: cssVariables.color.bloobirds.veryLight,
      color: cssVariables.color.gunmetal.natural,
      padding: 4,
    },
    text: {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      paddingRight: 5,
    },
  },
  body: {
    root: {
      gridColumn: 3,
      gridRow: 3,
    },
    text: {
      paddingRight: 5,
      fontWeight: 600,
      fontSize: 16,
      color: cssVariables.color.gunmetal.natural,
      margin: 0,
    },
  },
};

const color = task => {
  const taskModel = bobjectModel(task);
  const taskType = taskModel.find('TASK__TASK_TYPE').valueLogicRole;
  switch (taskType) {
    case 'CONTACT':
      return cssVariables.color.bloobirds.natural;
    case 'NEXT_STEP':
      return cssVariables.color.melon.natural;
    case 'CONTACT_BEFORE_MEETING': {
      return cssVariables.color.tomato.natural;
    }
    case 'ALLOCATE_QC':
    case 'ADD_QC':
    case 'ADD_LEADS_TO_QC':
      return cssVariables.color.banana.veryLight;
    default:
      return cssVariables.color.tangerine.light;
  }
};

const getTextByDate = (date, datetime) => {
  if (!!datetime && isToday(datetime)) {
    return format(datetime, 'HH:mm');
  }
  if (isToday(date)) {
    return 'Today';
  }
  if (isTomorrow(date)) {
    return 'Tomorrow';
  }
  if (isBeforeToday(date)) {
    return `overdue ${format(date, 'MMMM, do')}`;
  }
  if (isAfterTomorrow(date)) {
    return format(date, 'MMMM, do');
  }
  return 'NaN';
};

const Header = withStyles(style.header)(({ classes, children, date, datetime, future, label }) => (
  <div className={classes.root}>
    <p className={classes.text}>
      {label && (
        <span
          className={classNames({
            [classes.label]: true,
            [classes.overdueLabel]: isBeforeToday(date) && !future,
            [classes.futureLabel]: future,
          })}
        >
          {getTextByDate(date, datetime)}
        </span>
      )}
      {children}
    </p>
  </div>
));

const Body = withStyles(style.body)(({ classes, content }) => (
  <div className={classes.root}>
    <p data-test={`Tab-addLeadsTab-${content}`} className={classes.text}>
      {content}
    </p>
  </div>
));

const TaskCard = ({ classes, bobject, history, future }) => {
  const taskModel = bobjectModel(bobject);
  const companyField = taskModel.find('TASK__COMPANY');
  let date = taskModel.find('TASK__SCHEDULED_DATE').value;
  const schedulingDateTime = taskModel.find('TASK__SCHEDULED_DATETIME').value;
  const datetime = schedulingDateTime ? new Date(schedulingDateTime) : undefined;
  if (date.indexOf('T')) {
    date = date.split('T')[0];
  }

  const schedulingDate = parse(date, 'yyyy-MM-dd', new Date());
  let companyName = '';
  if (companyField !== undefined && companyField.referencedBobject !== undefined) {
    const company = taskModel.find('TASK__COMPANY').referencedBobject;
    const companyModel = bobjectModel(company);
    companyName = companyModel.find('COMPANY__NAME').text;
  }
  let thisTaskUrl;
  if (companyField.value !== undefined) {
    thisTaskUrl = companyTaskUrl(companyField.value, bobject);
  } else {
    const leadField = taskModel.find('TASK__LEAD');
    thisTaskUrl = leadUrl(leadField.value);
  }
  const active = history.location.pathname.startsWith(thisTaskUrl);
  const handleAction = () => {
    history.push(thisTaskUrl);
  };
  const taskType = taskModel.find('TASK__TASK_TYPE').valueLogicRole;
  return (
    <div
      className={classNames({
        [classes.root]: true,
        [classes.rootActive]: active,
        [classes.rootFuture]: future,
      })}
      onClick={handleAction}
    >
      <div className={classes.label} style={{ backgroundColor: color(bobject) }} />
      <Header date={schedulingDate} datetime={datetime} taskType={taskType} future={future} label>
        {taskModel.find('TASK__TITLE').text}
      </Header>
      <Body content={companyName} />
    </div>
  );
};

const AddLeadTaskCardIndex = ({ classes, bobject, history }) => {
  const taskModel = bobjectModel(bobject);
  const company = taskModel.find('TASK__COMPANY').referencedBobject;
  if (company) {
    const companyModel = bobjectModel(company);
    const companyName = companyModel.find('COMPANY__NAME').text;
    const thisTaskUrl = companyTaskUrl(company.id.value, bobject);
    const active = history.location.pathname.startsWith(thisTaskUrl);
    const handleAction = () => {
      history.push(thisTaskUrl);
    };
    return (
      <div className={active ? classes.rootActive : classes.root} onClick={handleAction}>
        <div className={classes.label} style={{ backgroundColor: color(bobject) }} />
        <Header>
          <span style={{ float: 'right' }}>
            <BobjectPill bobject={company} fieldDescriptor="COMPANY__MR_RATING" />
          </span>
        </Header>
        <Body content={companyName} />
      </div>
    );
  }

  return null;
};

export default withStyles(style)(withRouter(TaskCard));

export const AddLeadTaskCard = withStyles(style)(withRouter(AddLeadTaskCardIndex));
