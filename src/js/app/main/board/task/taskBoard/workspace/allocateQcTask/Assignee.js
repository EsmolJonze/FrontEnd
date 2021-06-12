import { connect } from 'react-redux';
import React from 'react';
import { Collapse, withStyles } from '@material-ui/core';
import { cssVariables } from '../../../../../../../style/variables';
import classNames from 'clsx';
import { SubTitle } from '../../../../../../../components/titles';
import { BobjectFieldPill } from '../../../../../../../components/filter/field/pill';
import {
  BobjectFieldColorField,
  ColorField,
} from '../../../../../../../components/filter/field/colorField';
import {
  ALLOCATE_QC_TASK_ASSIGNEE_CLEAR,
  ALLOCATE_QC_TASK_ASSIGNEE_EXPANDED,
  COMPANIES_TO_ALLOCATE_SET_DROPPABLE_ELEMENT,
} from '../../../../../../../actions/dictionary';
import CustomTooltip from '../../../../../../../components/CustomTooltip';
import { Icon } from '@bloobirds-it/bloobirds-platform-component-library';

const style = {
  card: {
    backgroundColor: cssVariables.color.bloobirds.superVeryLight,
    borderRadius: '0 30px 30px 0',
    marginBottom: '8px',
    position: 'relative',
    boxShadow: `0 2px 4px 0 ${cssVariables.color.bloobirds.veryLight}`,
    transition: 'boxShadow ease 1000ms, height ease 1000ms',
    padding: '12px',
  },
  cardCloser: {
    backgroundColor: cssVariables.color.bloobirds.veryLight,
    borderColor: cssVariables.color.bloobirds.natural,
    borderStyle: 'dashed',
    borderWidth: '2px',
    boxShadow: 'none',
  },
  cardName: {
    height: '24px',
    fontSize: '16px',
    lineHeight: '34px',
    display: 'inline-block',
    maxWidth: '135px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  summaryNumber: {
    height: '24px',
    fontSize: '16px',
    lineHeight: '34px',
    color: cssVariables.color.gunmetal.light,
    position: 'absolute',
    right: '40px',
    top: '12px',
  },
  expandCollapseButton: {
    position: 'absolute',
    right: '12px',
    top: '18px',
    '& svg': {
      color: cssVariables.color.gunmetal.light,
    },
  },
  summaryBar: {
    position: 'absolute',
    top: '40px',
    right: '40px',
    height: '4px',
    left: '12px',
    display: 'flex',
    borderRadius: '100px',
    backgroundColor: 'rgba(255,255,255,0)',
  },
  cardHeader: {
    minHeight: '28px',
    cursor: 'pointer',
  },
  userStatsStatusRow: {
    marginBottom: '5px',
    display: 'flex',
    color: cssVariables.color.gunmetal.light,
    position: 'relative',
  },
  userStatsMrRow: {
    marginBottom: '5px',
    maxWidth: '85px',
    justifyContent: 'space-between',
    display: 'flex',
    color: cssVariables.color.gunmetal.light,
  },
  undoButton: {
    position: 'absolute',
    right: '0',
    cursor: 'pointer',
  },
  expandIconDown: {
    transform: 'rotate(-180deg)',
  },
  blankSeparator: {
    display: 'block',
    height: '30px',
    content: '""',
  },
};

const UserStats = props => {
  let companyStatusUpdated = [];
  props.assigneesAllStatus.forEach(a => companyStatusUpdated.push({ ...a, value: 0 }));
  if (props.assigneesAllStatus?.length && props.assignee.companiesByStage.length) {
    companyStatusUpdated = companyStatusUpdated.map(d => {
      props.assignee.companiesByStage.forEach(element => {
        if (element.field.valueLogicRole === d.field.logicRole) {
          d.value = element.value;
        }
      });
      return d;
    });
  }

  return (
    <Collapse in={props.expanded}>
      <span className={props.classes.blankSeparator} />
      <div className={props.classes.userStatsStatusRow}>
        <ColorField content="Delivered New" color={cssVariables.color.gunmetal.veryLight} />
        {props.newAssignedCount}
        {props.newAssignedCount > 0 && (
          <div
            className={props.classes.undoButton}
            onClick={props.setUndoAssignment(props.assignee.id)}
          >
            <Icon name="undoRevert" color="softPeanut" />
          </div>
        )}
      </div>
      {companyStatusUpdated &&
        companyStatusUpdated.length &&
        companyStatusUpdated.map(company => (
          <div
            className={props.classes.userStatsStatusRow}
            key={`${props.assignee}-company-${company.field.value}`}
          >
            <BobjectFieldColorField field={company.field} /> {company.value}
          </div>
        ))}
      {props.assignee.companiesByRating.length > 0 && <SubTitle text="BY MR RATING" />}
      {props.assignee.companiesByRating.map(company => (
        <div
          className={props.classes.userStatsMrRow}
          key={`${props.assignee}-company-${company.field.value}`}
        >
          <BobjectFieldPill field={company.field} /> {company.value}
        </div>
      ))}
    </Collapse>
  );
};

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.id = props.key;
  }

  componentDidMount() {
    this.props.setDroppableElement({
      element: this.ref.current,
      assigneeId: this.props.assignee.id,
    });
  }

  render() {
    const {
      classes,
      assignee,
      isCloserElement,
      setAssigneeExpanded,
      assigneeExpanded,
    } = this.props;
    const isExpanded = assigneeExpanded === assignee.id;
    const newAssignedCount = this.props.newAssignedCount || 0;
    const totalCompanies = assignee.totalCompanies + newAssignedCount;

    return (
      <div
        className={classNames({
          [classes.cardExpanded]: isExpanded,
          [classes.card]: true,
          [classes.cardCloser]: isCloserElement,
        })}
        ref={this.ref}
        key={this.id}
      >
        <div
          className={classes.cardHeader}
          onClick={setAssigneeExpanded(isExpanded ? undefined : assignee.id)}
        >
          <CustomTooltip title={assignee.name} placement="top">
            <span className={classes.cardName}>{assignee.name}</span>
          </CustomTooltip>
          <CustomTooltip title={totalCompanies} placement="top">
            <span className={classes.summaryNumber}>{totalCompanies}</span>
          </CustomTooltip>
          <span className={classes.expandCollapseButton}>
            <div
              className={classNames({
                [classes.expandIconDown]: isExpanded,
              })}
            >
              <Icon name="chevronDown" size={20} color="softPeanut" />
            </div>
          </span>
          <span className={classes.summaryBar}>
            <span
              title={`Delivered New (${newAssignedCount})`}
              style={{
                backgroundColor: cssVariables.color.gunmetal.veryLight,
                width: `${(100 * newAssignedCount) / totalCompanies}%`,
              }}
            />
            {assignee.companiesByStage.map(company => (
              <span
                key={`${assignee.id}-company-${company.field.value}`}
                title={`${company.field.text} (${company.value})`}
                style={{
                  backgroundColor: company.field.valueBackgroundColor,
                  width: `${(100 * company.value) / totalCompanies}%`,
                }}
              />
            ))}
          </span>
        </div>
        <UserStats {...this.props} expanded={isExpanded} newAssignedCount={newAssignedCount} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  companyDragged: state.taskWorkspace.board.allocateQcTask.companyDragged,
  assigneeExpanded: state.taskWorkspace.board.allocateQcTask.assigneeExpanded,
  isCloserElement:
    state.taskWorkspace.board.allocateQcTask.closerElement !== undefined
      ? state.taskWorkspace.board.allocateQcTask.closerElement.assigneeId === ownProps.assignee.id
      : undefined,
});

const mapDispatchToProps = dispatch => ({
  setDroppableElement: droppable =>
    dispatch({ type: COMPANIES_TO_ALLOCATE_SET_DROPPABLE_ELEMENT, droppable }),
  setAssigneeExpanded: assigneeId => () =>
    dispatch({ type: ALLOCATE_QC_TASK_ASSIGNEE_EXPANDED, assigneeId }),
  setUndoAssignment: assigneeId => () => {
    dispatch({ type: ALLOCATE_QC_TASK_ASSIGNEE_CLEAR, assigneeId });
  },
});

export const Assignee = withStyles(style)(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Index),
);
