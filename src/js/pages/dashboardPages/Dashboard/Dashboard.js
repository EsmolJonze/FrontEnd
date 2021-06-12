import React, { useState, useMemo, useCallback, useRef } from 'react';
import styles from './Dashboard.module.css';
import { sortBy } from 'lodash';
import {
  RelativeDatePicker,
  Icon,
  Text,
  MultiSelect,
  Select,
  Item,
  CheckItem,
  Button,
  Section,
} from '@bloobirds-it/bloobirds-platform-component-library';
import { useEntity, useReportingDelay, useDashboard, useMediaQuery } from '../../../hooks';
import ViewEditionModal from '../../../components/bobjectTable/viewEditionModal';
import { ViewEditionContextProvider } from '../../../components/bobjectTable/viewEditionModal/viewEdition.context';
import { isIntervalSelectable } from '../utils/isIntervalSelectable';
import classNames from 'clsx';

const LogicRoleFilter = ({ logicRole, placeholder, onChange }) => {
  const clickOutsideRef = useRef(null);
  const bobjectFields = useEntity('bobjectFields');
  const { filters = {} } = useDashboard();
  const bobjectPicklistFieldValues = useEntity('bobjectPicklistFieldValues');

  const bobjectField = bobjectFields?.findByLogicRole(logicRole);

  if (!bobjectField || !bobjectPicklistFieldValues) {
    return null;
  }

  const value = filters[bobjectField.id] || [];

  const items = bobjectPicklistFieldValues.filterBy(
    'bobjectGlobalPicklist',
    bobjectField.bobjectGlobalPicklist,
  );

  return (
    <>
      {/* this is hack to make <Select /> component to close after setting its value to undefined */}
      <div ref={clickOutsideRef} style={{ display: 'none' }} />
      <MultiSelect
        value={value}
        onChange={newValue => {
          const unselectAll = newValue.includes('all');
          const shouldUnsetFilter = unselectAll || newValue.length === 0;

          if (unselectAll) {
            clickOutsideRef.current.click();
          }

          if (unselectAll && value.length === 0) {
            return;
          }

          onChange({
            [bobjectField.id]: shouldUnsetFilter ? undefined : newValue,
          });
        }}
        sortByChecked={false}
        size="small"
        borderless={false}
        placeholder={placeholder}
      >
        <Item value="all">All</Item>
        {sortBy(items, 'value').map(item => (
          <CheckItem key={item.id} value={item.id}>
            {item.value}
          </CheckItem>
        ))}
      </MultiSelect>
    </>
  );
};

const useGroupByOptions = () => {
  const bobjectFields = useEntity('bobjectFields');
  const conditionalFields = useEntity('bobjectConditionalFields');
  const bobjectType = useEntity('bobjectTypes');
  const fieldType = useEntity('fieldTypes');

  const companyTypeId = bobjectType?.findBy('name')('Company')?.id;
  const picklistFieldId = fieldType?.findBy('enumName')('PICKLIST')?.id;
  const globalPicklistFieldId = fieldType?.findBy('enumName')('GLOBAL_PICKLIST')?.id;
  const companyFields = bobjectFields?.filterBy('bobjectType', companyTypeId);

  if (companyFields && conditionalFields) {
    return companyFields?.filter(field => {
      const isPicklist =
        (picklistFieldId && field.fieldType === picklistFieldId) ||
        (globalPicklistFieldId && field.fieldType === globalPicklistFieldId);
      const isConditionalField = conditionalFields?.findBy('bobjectField', field.id);
      return (
        field.enabled === true &&
        field.bobjectFieldGroup !== null &&
        isPicklist &&
        field.reportingEnabled &&
        !isConditionalField
      );
    });
  }
  return undefined;
};

const excludeFields = fields => {
  const excludedLogicRoles = [
    'COMPANY__ASSIGNED_TO',
    'COMPANY__TARGET_MARKET',
    'LEAD__ICP',
    'COMPANY__SCENARIO',
    'COMPANY__SOURCE',
    'COMPANY__DATA_SOURCE_AUTOMATED',
  ];
  return fields?.filter(field => !excludedLogicRoles.includes(field.logicRole));
};

const SelectGroupBy = () => {
  const { groupBy, setGroupBy } = useDashboard();
  const bobjectFields = useEntity('bobjectFields');

  const assignedToField = bobjectFields?.findByLogicRole('COMPANY__ASSIGNED_TO');
  const targetMarketField = bobjectFields?.findByLogicRole('COMPANY__TARGET_MARKET');
  const icpField = bobjectFields?.findByLogicRole('LEAD__ICP');
  const scenarioField = bobjectFields?.findByLogicRole('COMPANY__SCENARIO');
  const sourceField = bobjectFields?.findByLogicRole('COMPANY__SOURCE');
  const activityUser = bobjectFields?.findByLogicRole('ACTIVITY__USER');

  const optionFields = useGroupByOptions();
  const groupByFields = excludeFields(optionFields);

  return (
    <>
      <Select
        placeholder="None"
        size="small"
        borderless={false}
        value={groupBy || 'none'}
        onChange={value => {
          setGroupBy(value === 'none' ? undefined : value);
        }}
      >
        <Item value="none">None</Item>
        <Section value="main-fields" id="main-fields">
          Main
        </Section>
        <Item value={assignedToField?.id} section="main-fields">
          {assignedToField?.reportingName}
        </Item>
        <Item value={targetMarketField?.id} section="main-fields">
          {targetMarketField?.reportingName}
        </Item>
        <Item value={icpField?.id} section="main-fields">
          {icpField?.reportingName}
        </Item>
        <Item value={scenarioField?.id} section="main-fields">
          {scenarioField?.reportingName}
        </Item>
        <Item value={sourceField?.id} section="main-fields">
          {sourceField?.reportingName}
        </Item>
        <Item value={activityUser?.id} section="main-fields">
          {activityUser?.reportingName}
        </Item>
        <Section value="other-fields" id="other-fields">
          Other company fields
        </Section>
        {sortBy(groupByFields, 'reportingName')?.map(field => (
          <Item key={field.id} value={field.id} section="other-fields">
            {field.reportingName}
          </Item>
        ))}
      </Select>
    </>
  );
};

const MoreFilters = ({ onChange, value }) => {
  const [shouldShowAdvancedFilters, setShouldShowAdvancedFilters] = useState(false);
  const bobjectFields = useEntity('bobjectFields');
  const filtersAppliedCount = Object.keys(value || {}).reduce(
    (total, key) => value[key]?.length + total,
    0,
  );

  return (
    <>
      <Select
        key={filtersAppliedCount}
        onClick={() => setShouldShowAdvancedFilters(true)}
        size="small"
        borderless={false}
        placeholder="More filters"
        value={filtersAppliedCount > 0 ? 'filters-applied' : undefined}
      >
        {filtersAppliedCount > 0 && (
          <Item key={filtersAppliedCount} value="filters-applied">
            More filters ({filtersAppliedCount})
          </Item>
        )}
      </Select>
      {shouldShowAdvancedFilters && (
        <ViewEditionContextProvider
          bobjectType={['Company', 'Lead', 'Activity']}
          setQuery={onChange}
          query={value}
          shouldShowField={field =>
            (field.type === 'Global Picklist' || field.type === 'Picklist') &&
            bobjectFields?.findBy('id')(field?.name)?.reportingEnabled
          }
          showRelationships={false}
        >
          <ViewEditionModal
            modalType="filter"
            handleCloseModal={() => setShouldShowAdvancedFilters(false)}
          />
        </ViewEditionContextProvider>
      )}
    </>
  );
};

const ICPFilter = ({ value, onChange }) => (
  <LogicRoleFilter logicRole="LEAD__ICP" value={value} placeholder="ICP" onChange={onChange} />
);

const AssignedToFilter = ({ value, onChange }) => (
  <LogicRoleFilter
    logicRole="COMPANY__ASSIGNED_TO"
    placeholder="Assigned To"
    value={value}
    onChange={onChange}
  />
);

const TargetMarketFilter = ({ value, onChange }) => (
  <LogicRoleFilter
    logicRole="COMPANY__TARGET_MARKET"
    placeholder="Target Market"
    value={value}
    onChange={onChange}
  />
);

const CompanyScenarioFilter = ({ value, onChange }) => (
  <LogicRoleFilter
    logicRole="COMPANY__SCENARIO"
    placeholder="Scenario"
    value={value}
    onChange={onChange}
  />
);

export const Dashboard = ({ children, title }) => {
  const {
    intervalFilter,
    setIntervalFilter,
    dashboardData,
    dateRangeTypeFilter,
    dateRangeStartFilter,
    dateRangeEndFilter,
    clearFilters,
    setDateRange,
    setFilters,
    filters,
    updateFilters,
    updateEvolutionData,
  } = useDashboard();
  const { windowDimensions } = useMediaQuery();
  const { reportingDelay } = useReportingDelay();

  const datePickerValue = useMemo(() => {
    const result = {
      type: dateRangeTypeFilter,
    };

    if (dateRangeTypeFilter === 'custom') {
      result.start = dateRangeStartFilter;
      result.end = dateRangeEndFilter;
    }

    return result;
  }, [dateRangeTypeFilter, dateRangeEndFilter, dateRangeStartFilter]);

  const isIntervalDisabled = useCallback(
    interval =>
      !isIntervalSelectable({
        interval,
        type: dateRangeTypeFilter,
        start: dateRangeStartFilter,
        end: dateRangeEndFilter,
      }),
    [datePickerValue, dateRangeStartFilter, dateRangeEndFilter],
  );
  const responsiveClass = classNames(styles.content, {
    [styles.content__with_sideBar_open]:
      dashboardData.isSideBarOpen && windowDimensions.width < 1500,
  });
  return (
    <div className={styles.root} id="scroll_top_dashboard">
      <div className={styles.title}>
        <Text weight="medium" color="peanut" size="xl">
          {title}
        </Text>
      </div>
      <div
        className={styles.filters}
        style={{
          top: reportingDelay?.needsToNotify && reportingDelay?.warningVisible ? '-10px' : '-40px',
        }}
      >
        <div className={styles.filters_item}>
          <RelativeDatePicker
            dataTest="relative-date-picker-element"
            value={datePickerValue}
            adornment={<Icon name="calendar" size={12} color="softPeanut" />}
            onChange={({ type, start, end }) => {
              // Avoids a rerender on initial load
              if (type !== 'custom' && type === datePickerValue.type) {
                return;
              }

              setDateRange({ type, start, end });
            }}
            size="small"
          />
        </div>
        <div className={styles.filters_item}>
          <Select
            adornment={<Icon name="clock" size={12} color="softPeanut" />}
            value={intervalFilter}
            onChange={value => {
              setIntervalFilter(value);
              updateEvolutionData(value);
            }}
            size="small"
            borderless={false}
          >
            <Item disabled={isIntervalDisabled('day')} value="day">
              Daily
            </Item>
            <Item disabled={isIntervalDisabled('week')} value="week">
              Weekly
            </Item>
            <Item disabled={isIntervalDisabled('month')} value="month">
              Monthly
            </Item>
            <Item disabled={isIntervalDisabled('quarter')} value="quarter">
              Quarterly
            </Item>
            <Item disabled={isIntervalDisabled('year')} value="year">
              Yearly
            </Item>
          </Select>
        </div>
        <div className={styles.filters_item}>
          <div className={styles.separator} />
        </div>
        <div className={styles.filters_item}>
          <Text size="xs" color="softPeanut">
            Group by
          </Text>
        </div>
        <div className={styles.filters_item}>
          <SelectGroupBy />
        </div>
        <div className={styles.filters_item}>
          <div className={styles.separator} />
        </div>
        <div className={styles.filters_item}>
          <Text size="xs" color="softPeanut">
            Filters
          </Text>
        </div>
        <div
          className={classNames(styles.filters_item, styles.filters_item_hideOnExtraSmallScreen)}
        >
          <AssignedToFilter
            onChange={value => {
              updateFilters(value);
            }}
          />
        </div>
        <div
          className={classNames(styles.filters_item, styles.filters_item_hideOnExtraSmallScreen, {
            [styles.filters__with_sideBar_open]:
              dashboardData.isSideBarOpen && windowDimensions.width < 1330,
          })}
        >
          <TargetMarketFilter
            onChange={value => {
              updateFilters(value);
            }}
          />
        </div>
        <div
          className={classNames(styles.filters_item, styles.filters_item_hideOnSmallScreen, {
            [styles.filters__with_sideBar_open]:
              dashboardData.isSideBarOpen && windowDimensions.width < 1470,
          })}
        >
          <ICPFilter
            onChange={value => {
              updateFilters(value);
            }}
          />
        </div>
        <div
          className={classNames(styles.filters_item, styles.filters_item_hideOnSmallScreen, {
            [styles.filters__with_sideBar_open]:
              dashboardData.isSideBarOpen && windowDimensions.width < 1610,
          })}
        >
          <CompanyScenarioFilter
            onChange={value => {
              updateFilters(value);
            }}
          />
        </div>
        <div className={styles.filters_item}>
          <MoreFilters onChange={value => setFilters(value)} value={filters} />
        </div>
        <div className={styles.filters_item}>
          <Button iconLeft="cross" size="small" variant="clear" onClick={() => clearFilters()}>
            Clear
          </Button>
        </div>
      </div>
      <div className={responsiveClass}>{children}</div>
    </div>
  );
};
