import {
  ALLOCATE_QC_REMOVE_COMPANY_ASSIGNED,
  ALLOCATE_QC_TASK_ALLOCATE_QC_TRANSACTION_END,
  ALLOCATE_QC_TASK_ALLOCATE_QC_TRANSACTION_ON_LOAD,
  ALLOCATE_QC_TASK_APPLY_FILTERS,
  ALLOCATE_QC_TASK_ASSIGNEE_CLEAR,
  ALLOCATE_QC_TASK_ASSIGNEE_EXPANDED,
  ALLOCATE_QC_TASK_CHANGE_PAGE,
  ALLOCATE_QC_TASK_CLEAR_SESSION,
  ALLOCATE_QC_TASK_LOAD_ASSIGNEES_AGG_MR_SUCCESS,
  ALLOCATE_QC_TASK_LOAD_ASSIGNEES_AGG_STATUS_SUCCESS,
  ALLOCATE_QC_TASK_LOAD_ASSIGNEES_SUCCESS,
  ALLOCATE_QC_TASK_PAGE_PER_ROW,
  ALLOCATE_QC_TASK_RESET_COMPANIES,
  ALLOCATE_QC_TASK_SELECT_COMPANIES_TOGGLE,
  ALLOCATE_QC_TASK_SELECT_QC,
  ALLOCATE_QC_TASK_SELECT_QC_RESET,
  ALLOCATE_QC_TASK_SELECT_RANGE_QC,
  COMPANIES_TO_ALLOCATE_CALCULATE_CENTER,
  COMPANIES_TO_ALLOCATE_LOAD_SUCCESS,
  COMPANIES_TO_ALLOCATE_RESTORE_DRAGGED_PROPERTIES,
  COMPANIES_TO_ALLOCATE_SET_DRAGGED_COMPANY,
  COMPANIES_TO_ALLOCATE_SET_DRAGGED_XY,
  COMPANIES_TO_ALLOCATE_SET_DROPPABLE_ELEMENT,
} from '../../../../actions/dictionary/app/main/taskWorkspace/allocateQcTask';
import { RESET_TASK_STATE } from '../../../../actions/dictionary';
import SessionManagerFactory from '../../../../misc/session';
import { bobjectFieldsModel } from '../../../../misc/model/bobjectFieldsModel';

const SessionManager = SessionManagerFactory();
const initialState = {
  assignees: undefined,
  assigneesAggregateMrRating: undefined,
  assigneesAggregateStatus: undefined,
  assignedByAssignee: {},
  companies: undefined,
  companiesPage: undefined,
  companiesPageSize: 50,
  companiesTotal: undefined,
  session: {},
  selectableCompanies: [],
  dragX: undefined,
  dragY: undefined,
  droppables: [],
  closerElement: undefined,
  firstRangeClick: true,
  selectedRangeStarts: -1,
  selectedRangeEnds: -1,
  query: { COMPANY__STATUS: 'COMPANY__STATUS__BACKLOG' },
  sort: undefined,
};

const discardedStatus = ['CLIENT', 'ACCOUNT', 'NURTURING', 'NEW', 'BACKLOG', 'DISCARDED'];

const joinAssigneesAggregate = (
  assignees,
  assigneesAggregateMrRating,
  assigneesAggregateStatus,
) => {
  if (
    assignees !== undefined &&
    assigneesAggregateMrRating !== undefined &&
    assigneesAggregateStatus !== undefined
  ) {
    const index = {};
    assignees.forEach(a => {
      index[a.id] = a;
      a.totalCompanies = 0;
      a.companiesByRating = [];
      a.companiesByStage = [];
      a.assigned = 0;
    });
    [assigneesAggregateMrRating, assigneesAggregateStatus].forEach(assigneesAggregate => {
      assigneesAggregate.forEach(c => {
        const model = bobjectFieldsModel(c.fieldDataList);
        const authorField = model.findByLogicRole('COMPANY__ASSIGNED_TO');
        const assigneeData = index[authorField.value];
        if (assigneeData !== undefined) {
          const mrRatingField = model.findByLogicRole('COMPANY__MR_RATING');
          if (mrRatingField !== undefined) {
            assigneeData.companiesByRating.push({ field: mrRatingField, value: c.value });
          }
          const statusField = model.findByLogicRole('COMPANY__STATUS');
          if (
            statusField !== undefined &&
            !discardedStatus.some(str => statusField.valueLogicRole?.endsWith(str))
          ) {
            assigneeData.totalCompanies += c.value;
            assigneeData.companiesByStage.push({ field: statusField, value: c.value });
          }
        }
      });
    });
    assignees.forEach(assignee => {
      assignee.companiesByRating.sort((a, b) => a.field.valueOrdering - b.field.valueOrdering);
      assignee.companiesByStage.sort((a, b) => a.field.valueOrdering - b.field.valueOrdering);
    });
  }
};

const recountUserAssigned = session => {
  const assignedByAssignee = {};
  Object.values(session).forEach(uId => {
    assignedByAssignee[uId] = (assignedByAssignee[uId] || 0) + 1;
  });
  return assignedByAssignee;
};

const transformElementToCloserElement = action => droppable => {
  const elementX = droppable.center.x;
  const elementY = droppable.center.y;
  const cursorX = action.x;
  const cursorY = action.y;

  const x = Math.abs(elementX - cursorX);
  const y = Math.abs(elementY - cursorY);
  const distance = Math.sqrt(x * x + y * y);
  return {
    assigneeId: droppable.assigneeId,
    distance,
  };
};

const activateGlobalDnDEvents = () => {
  document.body.addEventListener('dragover', e => {
    // Prevent default to allow drop.
    e.preventDefault();
  });

  document.body.addEventListener('drop', e => {
    // Prevent open as a link for some elements.
    e.preventDefault();
  });
};

const desactivateGlobalDnDEvents = () => {
  document.body.removeEventListener('dragover', e => {
    // Prevent open as a link for some elements.
    e.preventDefault();
  });
  document.body.removeEventListener('drop', e => {
    // Prevent open as a link for some elements.
    e.preventDefault();
  });
};

const resectSelectableCompanies = selectableCompanies =>
  selectableCompanies.map(sc => ({
    ...sc,
    selected: false,
    dragged: false,
  }));

const companiesSelector = (state, companyId) =>
  state.selectableCompanies.map(sc =>
    sc.companyId === companyId ? { ...sc, selected: !sc.selected } : sc,
  );

const calculateCenterOfElement = element => {
  if (element === undefined || element === null) {
    return { x: 0, y: 0 };
  }
  const { top, left, width, height } = element.getBoundingClientRect();
  return { x: left + width / 2, y: top + height / 2 };
};

const addCenterToElement = object => ({
  ...object,
  center: calculateCenterOfElement(object.element),
});

export default (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case RESET_TASK_STATE:
      Object.keys(newState).forEach(k => {
        newState[k] = initialState[k];
      });
      return newState;
    case ALLOCATE_QC_TASK_LOAD_ASSIGNEES_SUCCESS:
      newState.assignees = action.payload;
      joinAssigneesAggregate(
        newState.assignees,
        newState.assigneesAggregateMrRating,
        newState.assigneesAggregateStatus,
      );
      return newState;
    case ALLOCATE_QC_TASK_LOAD_ASSIGNEES_AGG_MR_SUCCESS:
      newState.assigneesAggregateMrRating = action.payload;
      joinAssigneesAggregate(
        newState.assignees,
        newState.assigneesAggregateMrRating,
        newState.assigneesAggregateStatus,
      );
      return newState;
    case ALLOCATE_QC_TASK_LOAD_ASSIGNEES_AGG_STATUS_SUCCESS:
      newState.assigneesAggregateStatus = action.payload;
      joinAssigneesAggregate(
        newState.assignees,
        newState.assigneesAggregateMrRating,
        newState.assigneesAggregateStatus,
      );
      return newState;
    case COMPANIES_TO_ALLOCATE_LOAD_SUCCESS:
      newState.companies = action.payload.contents;
      newState.companiesPage = action.payload.page;
      newState.companiesTotal = action.payload.totalMatching;
      newState.selectableCompanies = action.payload.contents.map((company, index) => ({
        companyId: company.id.value,
        index,
        dragged: false,
        selected: false,
      }));
      return newState;
    case ALLOCATE_QC_TASK_CLEAR_SESSION:
      SessionManager.clearAllocateQc();
      return newState;
    case ALLOCATE_QC_TASK_ALLOCATE_QC_TRANSACTION_ON_LOAD:
      newState.session = SessionManager.getAllocateQc();
      newState.assignedByAssignee = recountUserAssigned(newState.session, newState.assignees);
      return newState;
    case ALLOCATE_QC_REMOVE_COMPANY_ASSIGNED: {
      const buildAllocateQcSession = {};
      Object.keys(newState.session)
        .filter(k => k.split('/').reverse()[0] !== action.id)
        .map(k => (buildAllocateQcSession[k] = newState.session[k]));
      SessionManager.removeAllocateQc(buildAllocateQcSession);
      return newState;
    }
    case ALLOCATE_QC_TASK_ALLOCATE_QC_TRANSACTION_END: {
      if (state.closerElement !== undefined) {
        const session = state.selectableCompanies
          .filter(sc => sc.selected)
          .reduce(
            (prev, current) => ({ ...prev, [current.companyId]: state.closerElement.assigneeId }),
            state.session,
          );
        SessionManager.setAllocateQc(session);
        newState.session = session;
      }
      desactivateGlobalDnDEvents();
      newState.assignedByAssignee = recountUserAssigned(newState.session, newState.assignees);
      return newState;
    }
    case ALLOCATE_QC_TASK_ASSIGNEE_CLEAR: {
      const d = {};
      Object.keys(newState.session).forEach(c => {
        if (!(newState.session[c] !== undefined && newState.session[c] === action.assigneeId)) {
          d[c] = newState.session[c];
        }
      });
      SessionManager.setAllocateQc(d);
      newState.session = d;
      newState.assignedByAssignee = recountUserAssigned(newState.session, newState.assignees);
      return newState;
    }
    case COMPANIES_TO_ALLOCATE_SET_DRAGGED_COMPANY:
      newState.selectableCompanies = state.selectableCompanies.map(sc =>
        sc.companyId === action.companyId ? { ...sc, dragged: true, selected: true } : sc,
      );
      activateGlobalDnDEvents();
      return newState;

    case COMPANIES_TO_ALLOCATE_SET_DRAGGED_XY:
      newState.closerElement = state.droppables
        .map(transformElementToCloserElement(action))
        .reduce((prev, current) => (prev.distance < current.distance ? prev : current));
      if (newState.closerElement.distance > 400) {
        newState.closerElement = undefined;
      }
      return newState;
    case COMPANIES_TO_ALLOCATE_SET_DROPPABLE_ELEMENT: {
      const { element, assigneeId } = action.droppable;
      newState.droppables = [...state.droppables, { element, center: undefined, assigneeId }];
      return newState;
    }
    case COMPANIES_TO_ALLOCATE_CALCULATE_CENTER:
      newState.droppables = state.droppables.map(addCenterToElement);
      return newState;

    case COMPANIES_TO_ALLOCATE_RESTORE_DRAGGED_PROPERTIES:
      newState.closerElement = initialState.closerElement;
      newState.selectedRangeStarts = initialState.selectedRangeStarts;

      newState.selectedRangeEnds = initialState.selectedRangeEnds;
      newState.selectableCompanies = resectSelectableCompanies(state.selectableCompanies);

      return newState;
    case ALLOCATE_QC_TASK_SELECT_QC:
      newState.selectableCompanies = companiesSelector(state, action.companyId);
      return newState;
    case ALLOCATE_QC_TASK_SELECT_RANGE_QC:
      if (state.firstRangeClick) {
        newState.selectedRangeStarts = action.index;
        newState.selectedRangeEnds = action.index;
        newState.selectableCompanies = companiesSelector(state, action.companyId);
      } else {
        if (state.selectedRangeStarts > action.index) {
          newState.selectedRangeEnds = newState.selectedRangeStarts;
          newState.selectedRangeStarts = action.index;
        } else {
          newState.selectedRangeEnds = action.index;
        }

        newState.selectableCompanies = state.selectableCompanies.map(sc => {
          if (sc.index <= newState.selectedRangeEnds && sc.index >= newState.selectedRangeStarts) {
            return { ...sc, selected: true };
          }
          return sc;
        });
      }
      newState.firstRangeClick = !state.firstRangeClick;
      return newState;
    case ALLOCATE_QC_TASK_SELECT_QC_RESET:
      newState.selectableCompanies = resectSelectableCompanies(state.selectableCompanies);
      return newState;
    case ALLOCATE_QC_TASK_ASSIGNEE_EXPANDED:
      newState.assigneeExpanded = action.assigneeId;
      return newState;
    case ALLOCATE_QC_TASK_SELECT_COMPANIES_TOGGLE:
      newState.selectableCompanies = state.selectableCompanies.map(sc => ({
        ...sc,
        selected: action.selected,
      }));
      return newState;
    case ALLOCATE_QC_TASK_PAGE_PER_ROW:
      newState.companiesPageSize = action.value;
      newState.companiesPage = 0;
      newState.companies = initialState.companies;
      return newState;
    case ALLOCATE_QC_TASK_CHANGE_PAGE:
      newState.companiesPage = action.page;
      newState.companies = initialState.companies;
      return newState;
    case ALLOCATE_QC_TASK_RESET_COMPANIES:
      newState.companies = initialState.companies;
      return newState;
    case ALLOCATE_QC_TASK_APPLY_FILTERS:
      newState.companies = initialState.companies;
      newState.query = action.query;
      newState.sort = action.sort;
      return newState;
    default:
      return state;
  }
};
