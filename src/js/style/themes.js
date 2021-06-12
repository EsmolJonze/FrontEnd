import { createMuiTheme } from '@material-ui/core';
import { cssVariables } from './variables';

export const mainTheme = createMuiTheme({
  palette: {
    primary: {
      main: cssVariables.color.bloobirds.natural,
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily: [cssVariables.typography.ProximaNovaSoft, 'Roboto'].join(','),
  },
  overrides: {
    MuiTab: {
      root: {
        '&$selected': {
          'font-weight': 'bold',
        },
      },
      wrapper: {
        'flex-direction': 'row',
        '&>svg': {
          marginRight: 10,
        },
      },
    },
    MuiTabs: {
      indicator: {
        height: '4px',
        'background-image': `linear-gradient(to left, #43ccf2, ${
          cssVariables.color.bloobirds.natural
        })`,
      },
    },
    MuiAppBar: {
      root: {
        'box-shadow': '0 2px 8px 0 rgba(0, 0, 0, 0.16)',
      },
    },
  },
});
