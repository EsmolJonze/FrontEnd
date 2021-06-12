import {
  DISPLAY_HIDE_SIDEBAR_LEFT,
  DISPLAY_SIDEBAR_LEFT,
  TASK_FEED_DESELECT_TASK_CATEGORY,
  TASK_FEED_FETCH_DATA_PROSPECT_OVERDUE_COUNT_SUCCESS,
  TASK_FEED_FETCH_DATA_PROSPECT_TODAY_COUNT_SUCCESS,
  TASK_FEED_FETCH_DATA_READY_TO_PROSPECT_TODAY_AND_PAST_COUNT_SUCCESS,
  TASK_FEED_FETCH_DATA_MEETING_TODAY_COUNT_SUCCESS,
  TASK_FEED_FETCH_DATA_MEETING_OVERDUE_COUNT_SUCCESS,
  TASK_FEED_FETCH_DATA_NEXT_STEP_TODAY_COUNT_SUCCESS,
  TASK_FEED_FETCH_DATA_NEXT_STEP_OVERDUE_COUNT_SUCCESS,
  TASK_FEED_FETCH_DATA_SUCCESS,
  TASK_FEED_SET_TASK_CATEGORY,
  TASK_FEED_SWITCH_SELECTED_TASK_START,
  TASK_LOAD_RELATED_COMPANY,
  TASK_FEED_CAME_FROM_DONE_TASK_PAGE,
  TASK_FEED_FETCH_DATA_INBOUND_COUNT_SUCCESS,
} from '../../actions/dictionary';

const initialState = {
  tasks: undefined,
  selectedTask: undefined,
  displaySidebar: true,
  selectedCompany: undefined,
  selectedTaskCategory: undefined,
  inboundCountOfLeads: undefined,
  prospectTasksCount: 0,
  prospectTodayCount: 0,
  prospectOverdueCount: 0,
  readyToProspectCount: 0,
  meetingOverdueCount: 0,
  nextStepOverdueCount: 0,
  nextStepCount: 0,
  meetingCount: 0,
  cameFromDonePage: false,
  salesTaskCount: 0,
};

export default (state = initialState, action) => {
  const newState = { ...state };
  if (action.type === TASK_FEED_SET_TASK_CATEGORY) {
    newState.selectedTaskCategory = action.selectedTaskCategory;
    newState.cameFromDonePage = initialState.cameFromDonePage;
    return newState;
  }
  if (action.type === TASK_FEED_FETCH_DATA_INBOUND_COUNT_SUCCESS) {
    newState.inboundCountOfLeads =
      action.payload.contents.length > 0 ? action.payload.contents[0].value : 0;
    return newState;
  }
  if (action.type === TASK_FEED_FETCH_DATA_PROSPECT_TODAY_COUNT_SUCCESS) {
    newState.prospectTodayCount =
      action.payload.contents.length > 0 ? action.payload.contents[0]?.value : 0;
  }
  if (action.type === TASK_FEED_FETCH_DATA_PROSPECT_OVERDUE_COUNT_SUCCESS) {
    newState.prospectOverdueCount =
      action.payload.contents.length > 0 ? action.payload.contents[0]?.value : 0;
  }
  if (action.type === TASK_FEED_FETCH_DATA_MEETING_OVERDUE_COUNT_SUCCESS) {
    newState.nextStepOverdueCount =
      action.payload.contents.length > 0 ? action.payload.contents[0]?.value : 0;
  }
  if (action.type === TASK_FEED_FETCH_DATA_NEXT_STEP_OVERDUE_COUNT_SUCCESS) {
    newState.meetingOverdueCount =
      action.payload.contents.length > 0 ? action.payload.contents[0]?.value : 0;
  }
  if (action.type === TASK_FEED_FETCH_DATA_READY_TO_PROSPECT_TODAY_AND_PAST_COUNT_SUCCESS) {
    newState.readyToProspectCount = action.payload.totalMatching;
  }
  if (action.type === TASK_FEED_FETCH_DATA_NEXT_STEP_TODAY_COUNT_SUCCESS) {
    newState.nextStepCount =
      action.payload.contents.length > 0 ? action.payload.contents[0]?.value : 0;
  }
  if (action.type === TASK_FEED_FETCH_DATA_MEETING_TODAY_COUNT_SUCCESS) {
    newState.meetingCount =
      action.payload.contents.length > 0 ? action.payload.contents[0]?.value : 0;
  }
  if (
    action.type === TASK_FEED_FETCH_DATA_PROSPECT_OVERDUE_COUNT_SUCCESS ||
    action.type === TASK_FEED_FETCH_DATA_PROSPECT_TODAY_COUNT_SUCCESS ||
    action.type === TASK_FEED_FETCH_DATA_READY_TO_PROSPECT_TODAY_AND_PAST_COUNT_SUCCESS ||
    action.type === TASK_FEED_FETCH_DATA_MEETING_TODAY_COUNT_SUCCESS ||
    action.type === TASK_FEED_FETCH_DATA_NEXT_STEP_TODAY_COUNT_SUCCESS ||
    action.type === TASK_FEED_FETCH_DATA_MEETING_OVERDUE_COUNT_SUCCESS ||
    action.type === TASK_FEED_FETCH_DATA_NEXT_STEP_OVERDUE_COUNT_SUCCESS
  ) {
    newState.prospectTasksCount =
      newState.prospectTodayCount +
      newState.prospectOverdueCount +
      newState.readyToProspectCount +
      newState.nextStepCount +
      newState.meetingCount +
      newState.nextStepOverdueCount +
      newState.meetingOverdueCount;
  }
  if (
    action.type === TASK_FEED_FETCH_DATA_PROSPECT_OVERDUE_COUNT_SUCCESS ||
    action.type === TASK_FEED_FETCH_DATA_PROSPECT_TODAY_COUNT_SUCCESS
  ) {
    newState.salesTaskCount = newState.prospectTodayCount + newState.prospectOverdueCount;
  }

  if (action.type === TASK_FEED_FETCH_DATA_SUCCESS) {
    newState.taskCount = action.payload.contents
      .map(x => ({ [x.fieldDataList[0].valueLogicRole]: x.value }))
      .reduce((a, b) => ({ ...a, ...b }), {});
    return newState;
  }
  if (action.type === TASK_FEED_SWITCH_SELECTED_TASK_START) {
    newState.selectedTask = action.payload;
    newState.selectedCompany = undefined;
    return newState;
  }
  if (action.type === TASK_LOAD_RELATED_COMPANY) {
    newState.selectedCompany = action.payload;
    return newState;
  }
  if (action.type === DISPLAY_HIDE_SIDEBAR_LEFT) {
    newState.displaySidebar = !newState.displaySidebar;
    return newState;
  }
  if (action.type === DISPLAY_SIDEBAR_LEFT) {
    newState.displaySidebar = true;
    return newState;
  }
  if (action.type === TASK_FEED_DESELECT_TASK_CATEGORY) {
    newState.selectedTaskCategory = undefined;
    newState.selectedTask = undefined;
  }
  if (action.type === TASK_FEED_CAME_FROM_DONE_TASK_PAGE) {
    newState.cameFromDonePage = true;
  }
  return newState;
};
