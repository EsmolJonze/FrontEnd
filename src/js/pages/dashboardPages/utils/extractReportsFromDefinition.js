import { compact, flattenDeep, groupBy } from 'lodash';

const reportFromPanel = panel => {
  if (panel.type !== 'MultiPanel') {
    return [panel.report];
  }

  return panel.panels.map(reportFromPanel);
};

export const extractReportsFromDefinition = definition => {
  const reports = compact(
    flattenDeep(definition.sections.map(section => section.panels.map(reportFromPanel))),
  );

  return groupBy(reports, report =>
    report.match(/_EVOLUTION$|^COHORTS/) ? 'timeBased' : 'regular',
  );
};
