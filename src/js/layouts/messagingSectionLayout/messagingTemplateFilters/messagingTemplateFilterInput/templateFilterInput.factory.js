import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bobjectFieldsModel } from '../../../../misc/model/bobjectFieldsModel';
import TemplateFilterInputContainer from './templateFilterInput.container';
import { useActiveCompany, useActiveLeads } from '../../../../hooks';
import { setTransformedFilterData } from '../../../../reducers/components/templateText';

const isValidFilterValue = (filters, label, value) => {
  const scenarioValues = filters.find(filter => filter.label === label).values;
  return scenarioValues.some(({ id }) => id === value);
};

const isValidScenario = (filters, value) => isValidFilterValue(filters, 'Scenario', value);

const getSelectedFilters = (filters, { company, lead }) => {
  const companyModel = bobjectFieldsModel(company?.fields || []);
  const leadModel = bobjectFieldsModel(lead?.fields || []);

  const targetMarkets = companyModel.findByLogicRole('COMPANY__TARGET_MARKET')?.value || 'all';

  const idealCustomerProfiles = leadModel.findByLogicRole('LEAD__ICP')?.value || 'all';

  const leadScenario = leadModel.findByLabel('Scenario')?.value;
  const companyScenario = companyModel.findByLogicRole('COMPANY__SCENARIO')?.value;

  let scenarios = 'all';
  if (leadScenario && isValidScenario(filters, leadScenario)) {
    scenarios = leadScenario;
  } else if (companyScenario && isValidScenario(filters, companyScenario)) {
    scenarios = companyScenario;
  }

  return { targetMarkets, idealCustomerProfiles, scenarios };
};

const businessAssetToParam = name =>
  `${name
    .split(' ')
    .map((element, index) =>
      index === 0
        ? element.charAt(0).toLowerCase() + element.slice(1)
        : element.charAt(0).toUpperCase() + element.slice(1),
    )
    .reduce((prev, current) => prev.concat(current))}s`;

const transformRawFilters = (filters, selected) =>
  filters.map(({ label, values }) => {
    const param = businessAssetToParam(label);
    const allValue = { id: 'all', name: 'All' };

    return {
      label,
      param,
      values: [allValue, ...values],
      selected: selected[param],
    };
  });

const TemplateFilterInputFactory = ({
  currentIndex,
  filters,
  filtersRawData,
  pluralEntityName,
  setTransformedFilters,
  version,
}) => {
  const { company } = useActiveCompany();
  const { selectedLead } = useActiveLeads();

  useEffect(() => {
    const selectedFilters = getSelectedFilters(filtersRawData, { company, lead: selectedLead });
    const transformedFilters = transformRawFilters(filtersRawData, selectedFilters);

    setTransformedFilters(transformedFilters, pluralEntityName);
  }, [filtersRawData, company?.id.value, currentIndex, version]);

  return filters
    ? filters.map(filter => (
        <TemplateFilterInputContainer
          pluralEntityName={pluralEntityName}
          key={filter.label}
          filter={filter}
        />
      ))
    : null;
};

const mapStateToProps = state => {
  const {
    components: {
      bobjectCarousel: { bobject: bobjects, currentIndex },
      templateText: { filters, version },
    },
  } = state;

  return {
    bobjects,
    currentIndex,
    filters,
    version,
  };
};

const mapDispatchToProps = dispatch => ({
  setTransformedFilters: (filters, mode) => setTransformedFilterData(dispatch, filters, mode),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TemplateFilterInputFactory);
