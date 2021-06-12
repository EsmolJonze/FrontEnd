import { connect } from 'react-redux';
import React, { useRef, useState } from 'react';
import { bobjectFieldsModel } from '../../../../../../../../misc/model/bobjectFieldsModel';
import { Avatar, withStyles } from '@material-ui/core';
import { cssVariables } from '../../../../../../../../style/variables';
import { Icon } from '@bloobirds-it/bloobirds-platform-component-library';
import { BobjectPill, Pill } from '../../../../../../../../components/filter/field/pill';
import { BobjectField } from '../../../../../../../../components/filter/field/field';
import {
  ALLOCATE_QC_TASK_ALLOCATE_QC_TRANSACTION_END,
  ALLOCATE_QC_TASK_SELECT_QC,
  ALLOCATE_QC_TASK_SELECT_QC_RESET,
  ALLOCATE_QC_TASK_SELECT_RANGE_QC,
  COMPANIES_TO_ALLOCATE_CALCULATE_CENTER,
  COMPANIES_TO_ALLOCATE_RESTORE_DRAGGED_PROPERTIES,
  COMPANIES_TO_ALLOCATE_SET_DRAGGED_COMPANY,
  COMPANIES_TO_ALLOCATE_SET_DRAGGED_XY,
} from '../../../../../../../../actions/dictionary';
import classNames from 'clsx';
import { useBobjectDetails } from '../../../../../../../../hooks';

const style = {
  root: {
    position: 'relative',
  },
  cardAssigned: {},
  card: {
    height: 'auto',
    backgroundColor: cssVariables.color.white.natural,
    borderRadius: '4px',
    boxShadow: '0 2px 4px 0 rgba(25, 145, 255, 0.08)',
    marginBottom: '8px',
    display: 'flex',
    overflow: 'hidden',
    '&:hover': {
      cursor: 'pointer',
    },
    '&:focus': {
      outline: 'none !important',
    },
  },
  styleOnDrag: {
    backgroundColor: `${cssVariables.color.bloobirds.light} !important`,
    boxShadow: 'none !important',
  },
  cardDragIndicator: {
    width: '60px',
    display: 'flex',
    justifyContent: 'center',
    margin: '32px 0',
  },
  cardTitle: {
    height: '24px',
    fontSize: '16px',
    fontWeight: '600',
    display: 'inline-block',
    lineHeight: '1.5',
    color: cssVariables.color.bloobirds.natural,
    cursor: 'pointer',
  },
  cardLeftSide: {
    margin: '16px 0',
    flexGrow: '1',
  },
  cardRightSide: {
    display: 'grid',
    gridTemplateColumns: '200px 200px',
    gridTemplateRows: '20px 20px',
    gridColumnGap: '10px',
    gridRowGap: '4px',
    margin: '20px 0',
  },
  cardCover: {
    root: {
      height: '80px',
      width: '100%',
      position: 'absolute',
      backgroundColor: '#f0f4f6',
      zIndex: '99',
      top: '0',
    },
  },
  assignedAvatar: {
    display: 'inline-flex',
    width: '24px',
    height: '24px',
    fontSize: '14px',
  },
  selectedCounter: {
    position: 'absolute',
    right: '0',
    padding: '8px',
    borderRadius: '50%',
    backgroundColor: cssVariables.color.bloobirds.natural,
    height: '16px',
    width: '16px',
    margin: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: cssVariables.color.white.natural,
    '& > *': {
      marginTop: '4px',
    },
  },
  pill: {
    marginRight: '10px',
    display: 'inline',
  },
};

const CardCover = withStyles(style.cardCover)(({ classes }) => <div className={classes.root} />);

const Index = props => {
  const {
    classes,
    company,
    companyDragged,
    setCompanyDragged,
    setDragPosition,
    resetDragPosition,
    companiesAssigned,
    allocateTransactionToSession,
    index,
    selectCompany,
    isSelected,
    resetSelectedCompanies,
    selectRangeCompany,
    assignees,
    calculateCenterOfAssigneeElement,
    selectedCompaniesCount,
  } = { ...props };
  const { setBobjectDetails, openBobjectDetails } = useBobjectDetails();
  const coordinates = useRef({ x: undefined, y: undefined });
  const [dragHasStarted, setDragHasStarted] = useState(false);
  const model = bobjectFieldsModel(company.fields);
  const isDragged = companyDragged || isSelected;
  const assignedTo =
    assignees !== undefined
      ? assignees.find(a => a.id === companiesAssigned[company.id.value])
      : undefined;
  const hasBeenAssigned = assignedTo !== undefined;
  const companyId = company.id.value;

  const children = (
    <React.Fragment>
      <div className={classes.cardDragIndicator}>
        <Icon name="dragAndDrop" size={24} color="softPeanut" />
      </div>
      <div className={classes.cardLeftSide}>
        <div
          onClick={() => {
            setBobjectDetails({ bobject: company, showContactButton: true });
            openBobjectDetails();
          }}
          className={classes.cardTitle}
        >
          {model.findByLogicRole('COMPANY__NAME').text}
        </div>

        <div>
          {!hasBeenAssigned && (
            <div className={classes.pill}>
              <BobjectPill bobject={company} fieldDescriptor="COMPANY__STATUS" />
            </div>
          )}
          {hasBeenAssigned && (
            <div className={classes.pill}>
              <Pill
                content="delivered"
                textColor={cssVariables.color.tangerine.natural}
                borderColor={cssVariables.color.tangerine.veryLight}
              />
            </div>
          )}
          <div className={classes.pill}>
            <BobjectPill bobject={company} fieldDescriptor="COMPANY__MR_RATING" />
          </div>
          {hasBeenAssigned && (
            <Avatar
              className={classes.assignedAvatar}
              style={{ backgroundColor: assignedTo.color }}
            >
              {assignedTo.shortname}
            </Avatar>
          )}
        </div>
      </div>
      <div className={classes.cardRightSide}>
        <BobjectField bobject={company} fieldDescriptor="COMPANY__SOURCE" />
        <BobjectField bobject={company} fieldDescriptor="COMPANY__COUNTRY" />
        <BobjectField bobject={company} fieldDescriptor="COMPANY__SIZE" />
        <BobjectField bobject={company} fieldDescriptor="COMPANY__INDUSTRY" />
      </div>
      {selectedCompaniesCount > 1 && (
        <div className={classes.selectedCounter}>
          <span>{selectedCompaniesCount}</span>
        </div>
      )}
    </React.Fragment>
  );

  return (
    <div className={classes.root}>
      <div
        className={classNames({
          [classes.card]: true,
          [classes.cardAssigned]: hasBeenAssigned,
          [classes.styleOnDrag]: isDragged || isSelected,
        })}
        onDragStart={() => {
          setCompanyDragged(companyId);
          calculateCenterOfAssigneeElement();
        }}
        onDragCapture={e => {
          setDragHasStarted(true);
          setDragPosition(e);
          coordinates.current.x = e.clientX;
          coordinates.current.y = e.clientY;
        }}
        onDragEnd={e => {
          setDragHasStarted(false);
          allocateTransactionToSession(companyId);
          resetDragPosition(e);
          coordinates.current.x = undefined;
          coordinates.current.y = undefined;
        }}
        onMouseDown={e => {
          const isMac = window.navigator.userAgent.includes('Mac');
          const selectKey = isMac ? e.metaKey : e.ctrlKey;
          if (selectKey) {
            selectCompany(companyId);
          } else if (e.shiftKey) {
            selectRangeCompany(index, companyId);
          } else if (!isSelected) {
            resetSelectedCompanies();
          }
        }}
        tabIndex={index}
        draggable
        role="menuitem"
      >
        {children}
      </div>
      {dragHasStarted && <CardCover />}
    </div>
  );
};

const isSelected = ({ state, companyId }) =>
  state.selectableCompanies.length !== 0
    ? state.selectableCompanies
        .filter(sc => sc.companyId === companyId)
        .reduce((prev, curr) => prev || curr.selected, false)
    : false;

const isCompanyDragged = ({ selectableCompanies, id }) =>
  selectableCompanies.length !== 0
    ? selectableCompanies
        .filter(sc => sc.companyId === id)
        .reduce((prev, current) => prev || current.dragged, false)
    : false;

const mapStateToProps = (state, ownProps) => {
  const { value: id } = { ...ownProps, ...ownProps.company.id };
  const { selectableCompanies } = { ...state.taskWorkspace.board.allocateQcTask };
  return {
    companyDragged: isCompanyDragged({ selectableCompanies, id }),
    isSelected: isSelected({
      state: state.taskWorkspace.board.allocateQcTask,
      companyId: ownProps.company.id.value,
    }),
    companiesAssigned: state.taskWorkspace.board.allocateQcTask.session,
    assignees: state.taskWorkspace.board.allocateQcTask.assignees,
    selectedCompaniesCount:
      isCompanyDragged({ selectableCompanies, id }) &&
      state.taskWorkspace.board.allocateQcTask.selectableCompanies.filter(sc => sc.selected).length,
  };
};

const mapDispatchToProps = dispatch => ({
  setCompanyDragged: companyId =>
    dispatch({ type: COMPANIES_TO_ALLOCATE_SET_DRAGGED_COMPANY, companyId }),
  setDragPosition: e =>
    dispatch({ type: COMPANIES_TO_ALLOCATE_SET_DRAGGED_XY, x: e.clientX, y: e.clientY }),
  resetDragPosition: () => dispatch({ type: COMPANIES_TO_ALLOCATE_RESTORE_DRAGGED_PROPERTIES }),
  allocateTransactionToSession: companyId =>
    dispatch({ type: ALLOCATE_QC_TASK_ALLOCATE_QC_TRANSACTION_END, companyId }),
  selectCompany: companyId => {
    dispatch({ type: ALLOCATE_QC_TASK_SELECT_QC, companyId });
  },
  selectRangeCompany: (index, companyId) => {
    dispatch({ type: ALLOCATE_QC_TASK_SELECT_RANGE_QC, index, companyId });
  },
  resetSelectedCompanies: () => dispatch({ type: ALLOCATE_QC_TASK_SELECT_QC_RESET }),
  calculateCenterOfAssigneeElement: () =>
    dispatch({ type: COMPANIES_TO_ALLOCATE_CALCULATE_CENTER }),
});
export const CompanyToAssign = withStyles(style)(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Index),
);
