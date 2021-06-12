import React, { useEffect, useState } from 'react';
import CadenceTableView from './cadenceTable.view';
import { contextWrapper } from './context/cadenceTable.context.provider';
import { useCadenceContext } from './context/cadenceTable.context';
import PropTypes from 'prop-types';
import {
  loadCadenceByTargetMarket,
  loadActivityAggregation,
  loadTaskAggregation,
  loadActivityAggregationStatus,
  loadProspectTasksStatus,
  loadCadenceById,
  loadRecomendedCadenceOpportunity,
} from './cadenceTable.service';
import { bobjectModel } from '../../misc/model/bobjectFieldsModel';
import { cadenceTableActions as actions } from './context/cadenceTable.types';
import {
  processData,
  buildFiltersActivity,
  buildFiltersCadenceTask,
  buildFiltersTask,
} from './cadenceTable.utils';
import {
  CONTACT_TASK_RESET_ACTIVITY_FILTER,
  CONTACT_TASK_SET_ACTIVITY_FILTER,
  TIMETABLE_CONFIG,
  TIMETABLE_STATE_RESET,
} from '../../actions/dictionary';
import { connect } from 'react-redux';
import {
  useActiveCompany,
  useActiveFilters,
  useActiveOpportunities,
  usePicklistValues,
} from '../../hooks';
import { Skeleton } from '@bloobirds-it/bloobirds-platform-component-library';
import isEqual from 'lodash/isEqual';
import { BOBJECT_TYPES } from '../../constants/bobject';
import { useUserSettings } from '../userPermissions/hooks';
import { useActiveActivitiesFilters } from '../../hooks/useActiveActivities';
import { usePausePeriods } from '../../hooks/usePausePeriods';
import { getValueFromLogicRole } from '../../utils/bobjects.utils';

const CadenceTableContainer = props => {
  const {
    showNavigation,
    showHeader,
    offsetDays = 0,
    company: companyProps,
    lead = undefined,
    filters,
    handleChangeActivityFilters,
    config,
    reset,
    selectedTask,
    stateFilters,
    bobjectType,
    ...otherProps
  } = props;
  const { company: companyActive } = useActiveCompany();
  const { selectedOpportunity } = useActiveOpportunities(companyActive?.id.value);
  const { state, dispatch } = useCadenceContext();
  const settings = useUserSettings();
  const [activityAggregationResponse, setActivityAggregationResponse] = useState(undefined);
  const [activityStatusAggregationResponse, setActivityStatusAggregationResponse] = useState(
    undefined,
  );
  const [taskProspectingResponse, setTaskProspectingResponse] = useState(undefined);
  const [taskAggregationResponse, setTaskAggregationResponse] = useState(undefined);
  const [company, setCompany] = useState(companyActive || companyProps);
  const [cadenceDataFromBobject, setCadenceDataFromBobject] = useState(undefined);
  const { setLeadFilter, resetLeadFilter } = useActiveActivitiesFilters();
  const companyAssignedTo = getValueFromLogicRole(company, 'COMPANY__ASSIGNED_TO');
  const oppAssignedTo = getValueFromLogicRole(selectedOpportunity, 'OPPORTUNITY__ASSIGNED_TO');
  const { periods } = usePausePeriods({
    userId: selectedOpportunity ? oppAssignedTo : companyAssignedTo,
  });

  const { filters: activeFilters, setFilters } = useActiveFilters();

  useEffect(() => () => reset(), []);

  useEffect(() => {
    setCompany(companyActive || companyProps);
  }, [companyProps, companyActive]);

  useEffect(() => {
    if (selectedOpportunity) {
      const opportunityModel = bobjectModel(selectedOpportunity);
      setCadenceDataFromBobject(opportunityModel.find('OPPORTUNITY__CADENCE').text);
    } else if (company) {
      const companyModel = bobjectModel(company);
      setCadenceDataFromBobject(companyModel.find('COMPANY__CADENCE').text);
    }
  }, [company, selectedOpportunity]);

  useEffect(() => {
    if (
      state.cadence !== undefined &&
      activityStatusAggregationResponse !== undefined &&
      taskProspectingResponse !== undefined &&
      taskAggregationResponse !== undefined &&
      activityAggregationResponse !== undefined
    ) {
      const { dayData, weekData, monthData, lastEntityUpdate, name } = processData(
        state.cadence,
        [...activityAggregationResponse, ...activityStatusAggregationResponse],
        taskAggregationResponse,
        taskProspectingResponse,
        bobjectType === BOBJECT_TYPES.COMPANY ? company : selectedOpportunity,
        selectedTask,
        offsetDays,
        bobjectType,
        oppAssignedTo || companyAssignedTo ? periods : null,
      );
      dispatch({
        type: actions.CADENCE_TABLE_LOAD_DATA,
        payload: { dayData, weekData, monthData, lastEntityUpdate, cadenceName: name },
      });
    }
  }, [
    activityAggregationResponse,
    activityStatusAggregationResponse,
    taskProspectingResponse,
    taskAggregationResponse,
    company,
    selectedOpportunity,
    state.cadence,
    filters,
    lead,
    offsetDays,
    bobjectType,
  ]);
  const bobjectPicklistFieldValues = usePicklistValues({
    picklistLogicRole: `${bobjectType.toUpperCase()}__STATUS`,
  });
  useEffect(() => {
    if (bobjectPicklistFieldValues?.length > 0) {
      const colors = {};
      bobjectPicklistFieldValues.forEach(pick => {
        colors[pick.value] = {
          backgroundColor: pick.backgroundColor,
          textColor: pick.textColor,
        };
      });
      if (!state.companyStatusColors) {
        dispatch({
          type: actions.CADENCE_TABLE_LOAD_COMPANY_STATUS_COLORS,
          payload: colors,
        });
      }
    }
  }, [bobjectPicklistFieldValues]);

  useEffect(() => {
    if (bobjectType === BOBJECT_TYPES.COMPANY) {
      if (company) {
        const companyModel = bobjectModel(company);
        if (!state.cadence || !companyModel.find('COMPANY__CADENCE_DATA')?.text) {
          if (companyModel.find('COMPANY__CADENCE')?.text) {
            loadCadenceById(companyModel.find('COMPANY__CADENCE').text).then(res => {
              dispatch({
                type: actions.CADENCE_TABLE_CADENCE_LOADED,
                payload: {
                  cadence: res,
                  company,
                  lead,
                },
              });
            });
          } else {
            loadCadenceByTargetMarket(companyModel.find('TARGET_MARKET').text).then(res => {
              dispatch({
                type: actions.CADENCE_TABLE_CADENCE_LOADED,
                payload: {
                  cadence: res,
                  company,
                  lead,
                },
              });
            });
          }
        }
      } else {
        loadCadenceByTargetMarket('__DEFAULT__CADENCE__').then(res => {
          dispatch({
            type: actions.CADENCE_TABLE_CADENCE_LOADED,
            payload: {
              cadence: res,
              company,
            },
          });
        });
      }
    } else if (selectedOpportunity) {
      const model = bobjectModel(selectedOpportunity);
      const cadenceName = model.findByLogicRole('OPPORTUNITY__CADENCE')?.text;
      if (cadenceName) {
        if (!state.cadence || !model.find('OPPORTUNITY__CADENCE_DATA')?.text) {
          loadCadenceById(cadenceName).then(res => {
            dispatch({
              type: actions.CADENCE_TABLE_CADENCE_LOADED,
              payload: {
                cadence: res,
                opportunity: selectedOpportunity,
                company,
                lead,
              },
            });
          });
        }
      } else {
        loadRecomendedCadenceOpportunity().then(res => {
          dispatch({
            type: actions.CADENCE_TABLE_CADENCE_LOADED,
            payload: {
              cadence: res,
              opportunity: selectedOpportunity,
              company,
              lead,
            },
          });
        });
      }
    }
  }, [cadenceDataFromBobject, bobjectType, selectedOpportunity?.id.value, company?.id.value]);

  const effectiveFiltersActivity = buildFiltersActivity({
    companyId: company?.id.value,
    leadId: lead?.id.value,
    filters,
    opportunityId: selectedOpportunity?.id.value,
    salesFeatureEnabled: settings?.account?.features.salesFeature,
  });
  useEffect(() => {
    if (!isEqual(effectiveFiltersActivity, stateFilters)) {
      config(effectiveFiltersActivity);
      // TODO: REMOVE THE REDUCER AND USE ONLY THE HOOK;
    }
  }, [filters, stateFilters, cadenceDataFromBobject]);

  useEffect(() => {
    if (!isEqual(effectiveFiltersActivity, activeFilters)) {
      setFilters(effectiveFiltersActivity);
    }
  }, [filters]);

  const activityFilters = { ...effectiveFiltersActivity };

  activityFilters.ACTIVITY__TYPE = [
    'ACTIVITY__TYPE__LINKEDIN_MESSAGE',
    'ACTIVITY__TYPE__EMAIL',
    'ACTIVITY__TYPE__CALL',
    'ACTIVITY__TYPE__INBOUND',
  ];

  const activityFiltersStatus = { ...effectiveFiltersActivity };

  activityFiltersStatus.ACTIVITY__TYPE = ['ACTIVITY__TYPE__STATUS'];
  activityFiltersStatus.ACTIVITY__TYPE_STATUS = [
    `ACTIVITY__TYPE_STATUS__${bobjectType.toUpperCase()}_STATUS_CHANGED`,
  ];
  activityFiltersStatus.ACTIVITY__LEAD = undefined;

  const effectiveFiltersCadenceTask = buildFiltersCadenceTask({
    bobjectId:
      bobjectType === BOBJECT_TYPES.COMPANY ? company?.id.value : selectedOpportunity?.id.value,
    bobjectType,
    salesFeatureEnabled: settings?.account?.features.salesFeature,
  });

  const effectiveFiltersTask = buildFiltersTask({
    companyId: company?.id.value,
    leadId: lead?.id.value,
    filters,
    opportunityId: selectedOpportunity?.id.value,
    salesFeatureEnabled: settings?.account?.features.salesFeature,
  });

  const onActivityAggregation = response => {
    setActivityAggregationResponse(response.contents);
  };

  const onActivityStatusAggregation = response => {
    setActivityStatusAggregationResponse(response.contents);
  };

  const onTaskProspectingResponse = response => {
    setTaskProspectingResponse(response.contents);
  };
  const onTaskAggregation = response => {
    setTaskAggregationResponse(response.contents);
  };

  loadActivityAggregation(activityFilters, onActivityAggregation, true);
  loadActivityAggregationStatus(activityFiltersStatus, onActivityStatusAggregation, !!company);
  loadProspectTasksStatus(effectiveFiltersCadenceTask, onTaskProspectingResponse, !!company);
  loadTaskAggregation(effectiveFiltersTask, onTaskAggregation, true);

  if (
    state.dayData === undefined ||
    state.monthData === undefined ||
    state.weekData === undefined
  ) {
    return <Skeleton variant="rect" width="100%" height={323} />;
  }

  const onChangeActivityFilters = filter => value => {
    if (filter === 'lead') {
      if (value === 'any') {
        resetLeadFilter();
      } else {
        setLeadFilter(value);
      }
    }
    handleChangeActivityFilters(filter)(value);
  };

  return (
    <CadenceTableView
      showNavigation={showNavigation}
      showHeader={showHeader}
      name={state.cadenceName}
      lastEntityUpdate={state.lastEntityUpdate}
      timeWindowFilter={state.timeWindowFilter}
      activityFilters={filters}
      onChangeActivityFilters={onChangeActivityFilters}
      bobjectType={bobjectType}
      bobject={selectedOpportunity || company}
      {...otherProps}
    />
  );
};

const mapStateToProps = state => ({
  selectedTask: state.taskWorkspace.taskFeed.selectedTask,
  filters: state.taskWorkspace.board.contactTask.activityFilters,
});

const mapDispatchToProps = dispatch => ({
  config: filters => dispatch({ type: TIMETABLE_CONFIG, filters }),
  reset: () => {
    dispatch({ type: CONTACT_TASK_RESET_ACTIVITY_FILTER });
    dispatch({ type: TIMETABLE_STATE_RESET });
  },
  handleChangeActivityFilters: filter => value =>
    dispatch({ type: CONTACT_TASK_SET_ACTIVITY_FILTER, filter, value }),
});

CadenceTableContainer.propTypes = {
  lead: PropTypes.object,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(contextWrapper(CadenceTableContainer));
