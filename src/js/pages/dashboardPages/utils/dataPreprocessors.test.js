import {
  preprocessLineChartData,
  preprocessStackedBarChartData,
  preprocessTableChartData,
} from './dataPreprocessors';

/* jscpd:ignore-start */
describe('dataPreprocessors', () => {
  describe('preprocessLineChartData', () => {
    const reportExample = 'REPORT_EXAMPLE';
    let responseFromApi = [
      {
        count: 1,
        _label: 'Next Step Scheduled',
        __timestamp: 1604185200000,
      },
      {
        count: 0,
        _label: 'Next Step Scheduled',
        __timestamp: 1596232800000,
      },
      {
        count: 0,
        _label: 'Next Step Scheduled',
        __timestamp: 1598911200000,
      },
      {
        count: 0,
        _label: 'Next Step Scheduled',
        __timestamp: 1601503200000,
      },
      {
        count: 1,
        _label: 'Scheduled',
        __timestamp: 1596232800000,
      },
      {
        count: 5,
        _label: 'Scheduled',
        __timestamp: 1598911200000,
      },
      {
        count: 2,
        _label: 'Scheduled',
        __timestamp: 1601503200000,
      },
      {
        count: 91,
        _label: 'Scheduled',
        __timestamp: 1604185200000,
      },
    ];

    let expected = {
      dataKeys: ['Next Step Scheduled', 'Scheduled'],
      groupKey: '__timestamp',
      points: [
        {
          _label: 'Scheduled',
          __timestamp: 1604185200000,
          'Next Step Scheduled': 1,
          Scheduled: 91,
        },
        {
          _label: 'Scheduled',
          __timestamp: 1596232800000,
          'Next Step Scheduled': 0,
          Scheduled: 1,
        },
        {
          _label: 'Scheduled',
          __timestamp: 1598911200000,
          'Next Step Scheduled': 0,
          Scheduled: 5,
        },
        {
          _label: 'Scheduled',
          __timestamp: 1601503200000,
          'Next Step Scheduled': 0,
          Scheduled: 2,
        },
      ],
      unit: false,
    };

    it('returns data from api in a format that charts can understand', () => {
      expect(preprocessLineChartData(responseFromApi, reportExample)).toEqual(expected);
    });
  });

  describe('preprocessStackedBarChartData', () => {
    const report = 'REPORT_EXAMPLE';
    let responseFromApi = [
      {
        _label_stack: 'Call',
        count: 239,
        _label: 'On Prospection',
      },
      {
        _label_stack: 'Call',
        count: 84,
        _label: 'Contacted',
      },
      {
        _label_stack: 'Call',
        count: 133,
        _label: 'Engaged',
      },
      {
        _label_stack: 'Call',
        count: 33,
        _label: 'Meeting',
      },
      {
        _label_stack: 'Call',
        count: 1,
        _label: 'Account',
      },
      {
        _label_stack: 'Email',
        count: 24,
        _label: 'On Prospection',
      },
      {
        _label_stack: 'Email',
        count: 39,
        _label: 'Contacted',
      },
      {
        _label_stack: 'Email',
        count: 0,
        _label: 'Engaged',
      },
      {
        _label_stack: 'Email',
        count: 16,
        _label: 'Meeting',
      },
      {
        _label_stack: 'Email',
        count: 0,
        _label: 'Account',
      },
      {
        _label_stack: 'LinkedIn Message',
        count: 2,
        _label: 'On Prospection',
      },
      {
        _label_stack: 'LinkedIn Message',
        count: 4,
        _label: 'Contacted',
      },
      {
        _label_stack: 'LinkedIn Message',
        count: 0,
        _label: 'Engaged',
      },
      {
        _label_stack: 'LinkedIn Message',
        count: 0,
        _label: 'Meeting',
      },
      {
        _label_stack: 'LinkedIn Message',
        count: 0,
        _label: 'Account',
      },
    ];

    let expected = {
      dataKeys: ['Call', 'Email', 'LinkedIn Message'],
      groupKey: '_label',
      points: [
        {
          _label: 'On Prospection',
          Call: 239,
          Email: 24,
          'LinkedIn Message': 2,
        },
        {
          _label: 'Contacted',
          Call: 84,
          Email: 39,
          'LinkedIn Message': 4,
        },
        {
          _label: 'Engaged',
          Call: 133,
          Email: 0,
          'LinkedIn Message': 0,
        },
        {
          _label: 'Meeting',
          Call: 33,
          Email: 16,
          'LinkedIn Message': 0,
        },
        {
          _label: 'Account',
          Call: 1,
          Email: 0,
          'LinkedIn Message': 0,
        },
      ],
      showTooltip: true,
      unit: false,
    };

    it('returns data from api in a format that charts can understand', () => {
      const result = preprocessStackedBarChartData(report, responseFromApi);

      expect(result).toEqual(expected);
    });

    // TODO
    describe('sortByValue/sortDirection', () => {
      it('sorts data by value', () => {});
    });
  });

  describe('preprocessTableChartData', () => {
    let responseFromApi = [
      {
        count: 106,
        _label: 'Delivered',
        __timestamp: 1613347200000,
      },
      {
        count: 48,
        _label: 'On Prospection',
        __timestamp: 1613347200000,
      },
      {
        count: 16,
        _label: 'Contacted',
        __timestamp: 1613347200000,
      },
      {
        count: 11,
        _label: 'Engaged',
        __timestamp: 1613347200000,
      },
      {
        count: 10,
        _label: 'Meeting',
        __timestamp: 1613347200000,
      },
      {
        count: 3,
        _label: 'Nurturing',
        __timestamp: 1613347200000,
      },
      {
        count: 0,
        _label: 'Discarded',
        __timestamp: 1613347200000,
      },
      {
        count: 63,
        _label: 'Delivered',
        __timestamp: 1612742400000,
      },
      {
        count: 27,
        _label: 'On Prospection',
        __timestamp: 1612742400000,
      },
      {
        count: 9,
        _label: 'Contacted',
        __timestamp: 1612742400000,
      },
      {
        count: 1,
        _label: 'Engaged',
        __timestamp: 1612742400000,
      },
      {
        count: 1,
        _label: 'Meeting',
        __timestamp: 1612742400000,
      },
      {
        count: 10,
        _label: 'Nurturing',
        __timestamp: 1612742400000,
      },
      {
        count: 14,
        _label: 'Discarded',
        __timestamp: 1612742400000,
      },
      {
        count: 74,
        _label: 'Delivered',
        __timestamp: 1612137600000,
      },
      {
        count: 55,
        _label: 'On Prospection',
        __timestamp: 1612137600000,
      },
      {
        count: 25,
        _label: 'Contacted',
        __timestamp: 1612137600000,
      },
      {
        count: 8,
        _label: 'Engaged',
        __timestamp: 1612137600000,
      },
      {
        count: 7,
        _label: 'Meeting',
        __timestamp: 1612137600000,
      },
      {
        count: 22,
        _label: 'Nurturing',
        __timestamp: 1612137600000,
      },
      {
        count: 9,
        _label: 'Discarded',
        __timestamp: 1612137600000,
      },
    ];

    let expected = {
      labels: [
        '__timestamp',
        'Delivered',
        'On Prospection',
        'Contacted',
        'Engaged',
        'Meeting',
        'Nurturing',
        'Discarded',
      ],
      rows: [
        {
          __timestamp: 1613347200000,
          Delivered: 106,
          'On Prospection': 48,
          Contacted: 16,
          Engaged: 11,
          Meeting: 10,
          Nurturing: 3,
          Discarded: 0,
        },
        {
          __timestamp: 1612742400000,
          Delivered: 63,
          'On Prospection': 27,
          Contacted: 9,
          Engaged: 1,
          Meeting: 1,
          Nurturing: 10,
          Discarded: 14,
        },
        {
          __timestamp: 1612137600000,
          Delivered: 74,
          'On Prospection': 55,
          Contacted: 25,
          Engaged: 8,
          Meeting: 7,
          Nurturing: 22,
          Discarded: 9,
        },
      ],
    };

    it('returns data from api in a format that charts can understand', () => {
      const result = preprocessTableChartData(responseFromApi, false);

      expect(result).toEqual(expected);
    });
  });
});
/* jscpd:ignore-end */
