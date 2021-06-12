export const overview = {
  title: 'Overview',
  sections: [
    {
      title: 'How many meetings did you book? ',
      panels: [
        {
          type: 'BarChartPanel',
          title: 'Meetings',
          information:
            'This chart shows all meetings that were created in the selected time period. (Example: The meeting was created last week, and it is scheduled for tomorrow).',
          report: 'MEETINGS_CREATED',
          options: {
            sortByValue: true,
            sortDirection: 'DESC',
          },
        },
        {
          type: 'LineChartPanel',
          title: 'Meetings',
          information: 'This chart shows how the number of created meetings evolved over time.',
          report: 'MEETINGS_CREATED_EVOLUTION',
        },
      ],
    },
    {
      title: 'Through which channels did you get your meetings? ',
      panels: [
        {
          type: 'BarChartPanel',
          title: 'Meetings per channel',
          information:
            'This chart shows via which channels you got your meetings. The information is filled out by the user when creating the meeting.',
          report: 'MEETINGS_CHANNEL',
          options: {
            sortByValue: true,
            sortDirection: 'DESC',
          },
        },
        {
          type: 'LineChartPanel',
          title: 'Meetings per channel',
          information:
            'This chart shows you how the number of meetings per channel evolved over time.',
          report: 'MEETINGS_CHANNEL_EVOLUTION',
        },
      ],
    },
    {
      title: 'What were the results of the meetings that took place? ',
      panels: [
        {
          type: 'BarChartPanel',
          title: 'Meeting results',
          information:
            'This chart shows the meeting results of all meetings that were scheduled for the selected time period. (Example: The meeting was created last week, and it is scheduled for tomorrow).',
          report: 'MEETINGS_RESULTS',
          options: {
            sortByValue: true,
            sortDirection: 'DESC',
          },
        },
        {
          type: 'LineChartPanel',
          title: 'Meeting results',
          information: 'This chart shows how meeting results evolved over time.',
          report: 'MEETINGS_RESULTS_EVOLUTION',
        },
      ],
    },
    {
      title: 'How many companies did you start to prospect?',
      panels: [
        {
          type: 'BarChartPanel',
          title: 'Companies started to prospect',
          information:
            'This chart shows all companies that changed the status to "On Prospection" during the selected time period.',
          report: 'PROSPECTING_COMPANIES',
          options: {
            sortByValue: true,
            sortDirection: 'DESC',
          },
        },
        {
          type: 'LineChartPanel',
          title: 'Companies started to prospect',
          information:
            'This chart shows how the number of companies that changed the status to "On Prospection" evolved over time.',
          report: 'PROSPECTING_COMPANIES_EVOLUTION',
        },
      ],
    },
    {
      title: 'What were your most used channels when trying to establish contact?',
      panels: [
        {
          type: 'BarChartPanel',
          title: 'Activity per channel',
          information:
            'This chart shows you all activities that took place during the selected time period.',
          report: 'ALL_ACTIVITY_OUTGOING',
          options: {
            sortByValue: true,
            sortDirection: 'DESC',
          },
        },
        {
          type: 'LineChartPanel',
          title: 'Activity per channel',
          information:
            'This chart shows you how the number of activities that took place evolved over time.',
          report: 'ALL_ACTIVITY_OUTGOING_EVOLUTION',
        },
      ],
    },
    {
      title: 'What were the results of your call attempts?',
      panels: [
        {
          type: 'BarChartPanel',
          title: 'Call results',
          information:
            'This chart shows you the results of all call attempt that took place during the selected time period.',
          report: 'CALL_RESULTS',
          options: {
            sortByValue: true,
            sortDirection: 'DESC',
          },
        },
        {
          type: 'LineChartPanel',
          title: 'Call results',
          information: 'This chart shows you how the results of call attempts evolved over time.',
          report: 'CALL_RESULTS_EVOLUTION',
        },
      ],
    },
    {
      title: 'Which pitch did you use most often when making a "correct contact"?',
      panels: [
        {
          type: 'BarChartPanel',
          title: 'Pitch used',
          information:
            'This chart shows you which pitch was used when you reached an ICPs via phone.',
          report: 'PITCH_USED',
          options: {
            sortByValue: true,
            sortDirection: 'DESC',
          },
        },
        {
          type: 'LineChartPanel',
          title: 'Pitch used',
          information: 'This chart shows how the used pitches evolved over time.',
          report: 'PITCH_USED_EVOLUTION',
        },
      ],
    },
    {
      title: 'What were the main reasons you changed the status of companies to nurturing?',
      panels: [
        {
          type: 'BarChartPanel',
          title: 'Nurturing reasons',
          information:
            'This chart gives an overview of all nurturing reasons that were selected for companies that changed the status to nurturing during the selected time period.',
          report: 'NURTURING_REASONS',
          options: {
            sortByValue: true,
            sortDirection: 'DESC',
          },
        },
        {
          type: 'LineChartPanel',
          title: 'Nurturing reasons',
          information:
            'This chart gives an overview of how nurturing reasons that were selected for companies that changed the status to nurturing evolved over time.',
          report: 'NURTURING_REASONS_EVOLUTION',
        },
      ],
    },
    {
      title: 'What were the main reasons you changed the status of companies to discarded?',
      panels: [
        {
          type: 'BarChartPanel',
          title: 'Discarded reasons',
          information:
            'This chart gives an overview of all discarded reasons that were selected for companies that changed the status to discarded during the selected time period.',
          report: 'DISCARDED_REASONS',
          options: {
            sortByValue: true,
            sortDirection: 'DESC',
          },
        },
        {
          type: 'LineChartPanel',
          title: 'Discarded reasons',
          information:
            'This chart gives an overview how discarded reasons that were selected for companies that changed the status to discarded evolved over time.',
          report: 'DISCARDED_REASONS_EVOLUTION',
        },
      ],
    },
    {
      title: 'What is you current pipeline? Do you have enough companies in all stages?',
      panels: [
        {
          type: 'BarChartPanel',
          title: 'Current Pipeline',
          information:
            'This chart gives an overview of all active companies that you currently have in your pipeline.',
          disclaimer: 'Not affected by selected date range',
          report: 'PIPELINE',
        },
      ],
    },
  ],
};

export const conversionRates = {
  title: 'Conversion Rates',
  sections: [
    {
      title: 'What was the conversion rate of companies from "On prospection" to "Contacted"?',
      panels: [
        {
          type: 'BarChartPanel',
          title: 'On prospection ► Contacted (companies)',
          information:
            'This chart shows the conversion rate of companies from the status "On Prospection" to the status "Contacted". ' +
            'Important: The conversion rate is calculated by only considering companies that changed to the status of ' +
            '"On Prospection" during the selected time range. Of those companies, it counts how many have reached the status ' +
            '"Contacted" until today. We recommend using a longer time range (e.g. This quarter) to see more insightful conversion rates. ',
          report: 'CR_PROSPECTED_CONTACTED',
          options: {
            sortByValue: true,
            sortDirection: 'DESC',
          },
        },
        {
          type: 'LineChartPanel',
          title: 'On prospection ► Contacted (companies)',
          information:
            'This chart shows how the conversion rate of companies from the status "On Prospection" to the status "Contacted" ' +
            'evolved over time. Important: The conversion rate is calculated by only considering companies that changed to the status ' +
            'of "On Prospection" during the respective time range displayed on the x-axis. Of those companies, it counts how many have reached ' +
            'the status "Contacted" until today. We recommend using a longer time range (e.g. This quarter) to see more insightful conversion rates. ' +
            'Please note: Due to the way the conversion rate is calculated, it is normal to see a decrease in the conversion rate of recent weeks. ',
          report: 'CR_PROSPECTED_CONTACTED_EVOLUTION',
        },
      ],
    },
    {
      title: 'What was the conversion rate of companies from "Contacted" to "Meeting"?',
      panels: [
        {
          type: 'BarChartPanel',
          title: 'Contacted ► Meeting (companies) ',
          information:
            'This chart shows the conversion rate of companies from the status "Contacted" to the status "Meeting". ' +
            'Important: The conversion rate is calculated by only considering companies that changed to the status of ' +
            '"Contacted" during the selected time range. Of those companies, it counts how many have reached the status "Meeting" until today. ' +
            'We recommend using a longer time range (e.g. This quarter) to see more insightful conversion rates.',
          report: 'CR_CONTACTED_MEETING',
          options: {
            sortByValue: true,
            sortDirection: 'DESC',
          },
        },
        {
          type: 'LineChartPanel',
          title: 'Contacted ► Meeting (companies) ',
          information:
            'This chart shows how the conversion rate of companies from the status "Contacted" to the status "Meeting" evolved over time. ' +
            'Important: The conversion rate is calculated by only considering companies that changed to the status of "Contacted" during the ' +
            'respective time range displayed on the x-axis. Of those companies, it counts how many have reached the status "Meeting" until today. ' +
            'We recommend using a longer time range (e.g. This quarter) to see more insightful conversion rates. Please note: Due to the way the ' +
            'conversion rate is calculated, it is normal to see a decrease in the conversion rate of recent weeks. ',
          report: 'CR_CONTACTED_MEETING_EVOLUTION',
        },
      ],
    },
    {
      title: 'What was the conversion rate of companies from "Meeting" to "Account"?',
      panels: [
        {
          type: 'BarChartPanel',
          title: 'Meeting ► Account (companies)',
          information:
            'This chart shows the conversion rate of companies from the status "Meeting" to the status "Account". ' +
            'Important: The conversion rate is calculated by only considering companies that changed to the status of ' +
            '"Meeting" during the selected time range. Of those companies, it counts how many have reached the status "Account" until today. ' +
            'We recommend using a longer time range (e.g. This quarter) to see more insightful conversion rates.',
          report: 'CR_MEETING_ACCOUNT',
          options: {
            sortByValue: true,
            sortDirection: 'DESC',
          },
        },
        {
          type: 'LineChartPanel',
          title: 'Meeting ► Account (companies)',
          information:
            'This chart shows how the conversion rate of companies from the status "Meeting" to the status "Account" evolved over time. ' +
            'Important: The conversion rate is calculated by only considering companies that changed to the status of "Meeting" during the ' +
            'respective time range displayed on the x-axis. Of those companies, it counts how many have reached the status "Account" until today. ' +
            'We recommend using a longer time range (e.g. This quarter) to see more insightful conversion rates. ' +
            'Please note: Due to the way the conversion rate is calculated, it is normal to see a decrease in the conversion rate of recent weeks.',
          report: 'CR_MEETING_ACCOUNT_EVOLUTION',
        },
      ],
    },
    {
      title: 'What was the conversion rate of companies from "Account" to "Client"?',
      panels: [
        {
          type: 'BarChartPanel',
          title: 'Account ► Client (companies) ',
          information:
            'This chart shows the conversion rate of companies from the status "Account" to the status "Client". ' +
            'Important: The conversion rate is calculated by only considering companies that changed to the status of "Account" ' +
            'during the selected time range. Of those companies, it counts how many have reached the status "Client" until today. ' +
            'We recommend using a longer time range (e.g. This quarter) to see more insightful conversion rates.',
          report: 'CR_ACCOUNT_CLIENT',
          options: {
            sortByValue: true,
            sortDirection: 'DESC',
          },
        },
        {
          type: 'LineChartPanel',
          title: 'Account ► Client (companies) ',
          information:
            'This chart shows how the conversion rate of companies from the status "Account" to the status "Client", evolved over time. ' +
            'Important: The conversion rate is calculated by only considering companies that changed to the status of "Account" during ' +
            'the respective time range displayed on the x-axis. Of those companies, it counts how many have reached the status "Client" until today. ' +
            'We recommend using a longer time range (e.g. This quarter) to see more insightful conversion rates. ' +
            'Please note: Due to the way the conversion rate is calculated, it is normal to see a decrease in the conversion rate of recent weeks. ',
          report: 'CR_ACCOUNT_CLIENT_EVOLUTION',
        },
      ],
    },
    {
      title: 'What was the conversion rate of ICPs from "On Prospection" to "Contacted"?',
      panels: [
        {
          type: 'BarChartPanel',
          title: 'On Prospection ► Contacted (ICPs)',
          information:
            'This chart shows the conversion rate of ICPs from the status "On Prospection" to "Contacted". ' +
            'Important: The conversion rate is calculated by only considering ICPs that changed to the status of "On Prospection" ' +
            'during the selected time range. Of those ICPs, it counts how many have reached the status "Contacted" until today. ' +
            'We recommend using a longer time range (e.g. This quarter) to see more insightful conversion rates.',
          report: 'CR_LEAD_PROSPECTED_CONTACTED',
          options: {
            sortByValue: true,
            sortDirection: 'DESC',
          },
        },
        {
          type: 'LineChartPanel',
          title: 'On Prospection ► Contacted (ICPs) ',
          information:
            'This chart shows how the conversion rate of ICPs from the status "On Prospection" to the status "Contacted" evolved over time. ' +
            'Important: The conversion rate is calculated by only considering ICPs that changed to the status of "On Prospection" during the ' +
            'respective time range displayed on the x-axis. Of those ICPs, it counts how many have reached the status "Contacted" until today. ' +
            'We recommend using a longer time range (e.g. This quarter) to see more insightful conversion rates. ' +
            'Please note: Due to the way the conversion rate is calculated, it is normal to see a decrease in the conversion rate of recent weeks.',
          report: 'CR_LEAD_PROSPECTED_CONTACTED_EVOLUTION',
        },
      ],
    },
    {
      title: 'What was the conversion rate of ICPs from "Contacted" to "Meeting"?',
      panels: [
        {
          type: 'BarChartPanel',
          title: 'Contacted ► Meeting (ICPs)',
          information:
            'This chart shows the conversion rate of ICPs from the status "Contacted" to "Meeting". ' +
            'Important: The conversion rate is calculated by only considering ICPs that changed to the status of "Contacted" ' +
            'during the selected time range. Of those ICPs, it counts how many have reached the status "Meeting" until today. ' +
            'We recommend using a longer time range (e.g. This quarter) to see more insightful conversion rates.',
          report: 'CR_LEAD_CONTACTED_MEETING',
          options: {
            sortByValue: true,
            sortDirection: 'DESC',
          },
        },
        {
          type: 'LineChartPanel',
          title: 'Contacted ► Meeting (ICPs) ',
          information:
            'This chart shows how the conversion rate of ICPs from the status "Contacted" to the status "Meeting" evolved over time. ' +
            'Important: The conversion rate is calculated by only considering ICPs that changed to the status of "Contacted" during the respective time range displayed ' +
            'on the x-axis. Of those ICPs, it counts how many have reached the status "Meeting" until today. We recommend using a longer time range (e.g. ' +
            'This quarter) to see more insightful conversion rates. Please note: Due to the way the conversion rate is calculated, ' +
            'it is normal to see a decrease in the conversion rate of recent weeks.',
          report: 'CR_LEAD_CONTACTED_MEETING_EVOLUTION',
        },
      ],
    },
    {
      title:
        'How far did the companies advance that you started to prospect in the selected time range?',
      panels: [
        {
          type: 'FunnelPanel',
          title: 'Prospecting Funnel (from "On Prospection")',
          information:
            'This chart shows the overall prospecting funnel for the selected date range. ' +
            'The chart counts all companies that changed to the status "On Prospection" in the selected time period. ' +
            'The different rows indicate the number of companies that have reached the given status until today. ' +
            'Example: A company was created during the selected time range, had the status "On Prospection" for 3 days, ' +
            'and now has the status "Contacted". This company is counted with 1 in the row "On Prospection" and also counted with 1 in the row "Contacted".',
          report: 'FUNNEL_PROSPECTION',
        },
        {
          type: 'MultiPanel',
          title: 'Prospecting Cohorts (from "On Prospection")',
          information:
            'This table gives an overview of how different cohorts perform. Each row represents one cohort. ' +
            'A cohort is defined by all companies that changed the status to "On Prospection" in the selected time period. ' +
            'The columns indicate the number of companies that have reached the given status until today. Example: ' +
            'A company had the status "On Prospection" for 3 days and now has the status "Contacted". ' +
            'This company is counted with 1 in the column "On Prospection" and also counted with 1 in the column "Contacted".\n' +
            '\n' +
            'When showing the results as "Percentage", it shows the number of companies that have reached the given status until today, ' +
            'calculated as a percentage of all companies of that cohort. \n' +
            '\n' +
            'When showing the result as "Days", it shows the average time (in days) after which companies reached the given stage. ',
          panels: [
            {
              type: 'TableChartPanel',
              report: 'COHORTS_PROSPECTED',
              dropdownTitle: 'Total',
              timeColumnTitle: 'Prospected in',
            },
            {
              type: 'TableChartPanel',
              report: 'COHORTS_PROSPECTED_CR',
              dropdownTitle: 'Percentage',
              timeColumnTitle: 'Prospected in',
            },
            {
              type: 'TableChartPanel',
              report: 'COHORTS_PROSPECTED_AVG_DAYS',
              dropdownTitle: 'Days',
              timeColumnTitle: 'Prospected in',
            },
          ],
        },
      ],
    },
    {
      title: 'How far did the companies advance that were delivered in the selected time range?',
      panels: [
        {
          type: 'FunnelPanel',
          title: 'Prospecting Funnel (from "Delivered")',
          information:
            'This chart shows the overall prospecting funnel for the selected date range. ' +
            'The chart counts all companies that changed to the status "Delivered" in the selected time period. ' +
            'The different rows indicate the number of companies that have reached the given status until today. ' +
            'Example: A company was created during the selected time range, had the status "On Prospection" for 3 days, ' +
            'and now has the status "Contacted". This company is counted with 1 in the row "On Prospection" and also counted with 1 in the row "Contacted".',
          report: 'FUNNEL_DELIVERED',
        },
        {
          type: 'MultiPanel',
          title: 'Prospecting cohorts (from "Delivered")',
          information:
            'This table gives an overview of how different cohorts perform. Each row represents one cohort. ' +
            'A cohort is defined by all companies that changed the status to "Delivered" in the selected time period. ' +
            'The columns indicate the number of companies that have reached the given status until today. Example: ' +
            'A company had the status "On Prospection" for 3 days and now has the status "Contacted". ' +
            'This company is counted with 1 in the column "On Prospection" and also counted with 1 in the column "Contacted".\n' +
            '\n' +
            'When showing the results as "Percentage", it shows the number of companies that have reached the given status until today, ' +
            'calculated as a percentage of all companies of that cohort. \n' +
            '\n' +
            'When showing the result as "Days", it shows the average time (in days) after which companies reached the given stage.',
          panels: [
            {
              type: 'TableChartPanel',
              report: 'COHORTS',
              dropdownTitle: 'Total',
              timeColumnTitle: 'Delivered in',
            },
            {
              type: 'TableChartPanel',
              report: 'COHORTS_CR',
              dropdownTitle: 'Percentage',
              timeColumnTitle: 'Delivered in',
            },
            {
              type: 'TableChartPanel',
              report: 'COHORTS_AVG_DAYS',
              dropdownTitle: 'Days',
              timeColumnTitle: 'Delivered in',
            },
          ],
        },
      ],
    },
  ],
};
