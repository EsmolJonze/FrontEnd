import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  CONTACT_QQ_SET_FILTER_VALUE,
  TEMPLATE_TEXT_SET_FILTER_VALUE,
} from '../../../../actions/dictionary';
import TemplateFilterInputView from './templateFilterInput.view';
import { resetTemplateData } from '../../../../reducers/components/templateText';

const TemplateFilterInputContainer = ({
  filter,
  setFilterValue,
  resetData,
  value,
  pluralEntityName,
  setQQFiltersValue,
}) => {
  useEffect(() => {
    setQQFiltersValue(value, filter.param, pluralEntityName);
    if (filter.param === 'scenarios') {
      resetData(pluralEntityName);
    }
  }, [value, filter.param, pluralEntityName]);
  return (
    <TemplateFilterInputView
      filter={filter}
      pluralEntityName={pluralEntityName}
      resetData={resetData}
      setFilterValue={setFilterValue}
      value={{ value, name: filter.label }}
    />
  );
};

const mapStateToProps = (state, props) => ({
  value:
    state.components.templateText.filters !== undefined
      ? state.components.templateText.filters.filter(
          filter => filter?.label === props?.filter.label,
        )[0].selected
      : '',
  getElements: state.components.templateText.version,
});

const mapDispatchToProps = dispatch => ({
  setFilterValue: filter => {
    dispatch({ type: TEMPLATE_TEXT_SET_FILTER_VALUE, name: filter.name, value: filter.value });
  },
  resetData: m => resetTemplateData(dispatch, m),
  setQQFiltersValue: (value, name, m) => {
    if (m === 'Pitches') {
      dispatch({ type: CONTACT_QQ_SET_FILTER_VALUE, value, name });
    }
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TemplateFilterInputContainer);
