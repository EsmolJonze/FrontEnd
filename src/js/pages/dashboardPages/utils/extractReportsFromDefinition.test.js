import { extractReportsFromDefinition } from './extractReportsFromDefinition';

describe('extractReportsFromDefinition', () => {
  let definition = {
    title: 'Overview',
    slug: 'overview',
    insight: '???',
    sections: [
      {
        question: 'What was the result of your meetings? How Many opportunities did you generate?',
        panels: [
          {
            type: 'BarChart',
            title: 'Meeting results',
            report: 'MEETING_RESULTS',
            tooltipInformation: '...',
          },
        ],
      },
      {
        question: 'What was the result of your meetings? How Many opportunities did you generate?',
        panels: [
          {
            type: 'BarChart',
            title: 'Meeting results evolution',
            report: 'MEETING_RESULTS_EVOLUTION',
            tooltipInformation: '...',
          },
        ],
      },
    ],
  };

  it('returns all reports to be fetched', () => {
    expect(extractReportsFromDefinition(definition)).toEqual({
      regular: ['MEETING_RESULTS'],
      timeBased: ['MEETING_RESULTS_EVOLUTION'],
    });
  });

  it('returns panels when multi panels are included', () => {
    let definition = {
      title: 'Overview',
      slug: 'overview',
      insight: '???',
      sections: [
        {
          question:
            'What was the result of your meetings? How Many opportunities did you generate?',
          panels: [
            {
              type: 'BarChart',
              title: 'Meeting results',
              report: 'MEETING_RESULTS',
              tooltipInformation: '...',
            },
          ],
        },
        {
          question:
            'What was the result of your meetings? How Many opportunities did you generate?',
          panels: [
            {
              type: 'BarChart',
              title: 'Meeting results evolution',
              report: 'MEETING_RESULTS_EVOLUTION',
              tooltipInformation: '...',
            },
          ],
        },
        {
          question: 'Do multi panels work?',
          panels: [
            {
              type: 'MultiPanel',
              panels: [
                {
                  type: 'BarChart',
                  title: 'Meeting results evolution',
                  report: 'COHORTS',
                },
                {
                  type: 'BarChart',
                  title: 'Meeting results evolution',
                  report: 'COHORTS_CR',
                },
                {
                  type: 'BarChart',
                  title: 'Meeting results evolution',
                  report: 'COHORTS_AVG_DAYS',
                },
              ],
            },
          ],
        },
      ],
    };

    expect(extractReportsFromDefinition(definition)).toEqual({
      regular: ['MEETING_RESULTS'],
      timeBased: ['MEETING_RESULTS_EVOLUTION', 'COHORTS', 'COHORTS_CR', 'COHORTS_AVG_DAYS'],
    });
  });
});
