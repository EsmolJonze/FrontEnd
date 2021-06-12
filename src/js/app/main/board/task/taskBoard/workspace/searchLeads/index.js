import React, { useEffect } from 'react';
import { RESET_TASK_STATE } from '../../../../../../../actions/dictionary';
import { SearchCompanyLeadsLeadTable } from '../../../../../../../components/bobjectTable';
import { IdealCustomerProfileTabs } from '../../../../../../../components/entityTabs/entityTabs.view';
import { withWrappers } from '../../../../../../../misc/utils';
import { useDocumentTitle } from '../../../../../../../hooks/useDocumentTitle';
import { useActiveCompany } from '../../../../../../../hooks';

const style = {
  root: { marginTop: 32 },
};

const Index = ({ resetTaskState, company, classes }) => {
  useEffect(() => () => resetTaskState(), []);
  useDocumentTitle('Search Leads');
  const { setActiveCompany, resetActiveCompany } = useActiveCompany();

  useEffect(() => {
    setActiveCompany(company);
    return () => {
      resetActiveCompany();
    };
  }, []);

  return (
    <React.Fragment>
      <IdealCustomerProfileTabs />
      <div className={classes.root}>
        <SearchCompanyLeadsLeadTable companyId={company.id.value} />
      </div>
    </React.Fragment>
  );
};

const mapDispatchToProps = dispatch => ({
  resetTaskState: () => dispatch({ type: RESET_TASK_STATE }),
});

export const SearchLeads = withWrappers({
  style,
  mapDispatchToProps,
})(Index);
