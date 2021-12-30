import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: '#212225',
      },
    },
    MuiButton: {
      textSizeSmall: {
        color: 'white',
        backgroundColor: '#212225',
      },
    },
    MuiTypography: {
      colorTextSecondary: {
        color: 'white',
      },
    },
    MuiIconButton: {
      root: {
        color: 'white',
      },
    },
    MuiStepLabel: {
      active: {
        color: 'white',
      },
      label: {
        color: 'white!important',
      },
      alternativeLabel: {
        color: 'white!important',
      },
      completed: {
        color: 'white!important',
      },
    },
    MuiStepper: {
      alternativeLabel: {
        backgroundColor: 'black',
      },
      completed: {
        color: 'white',
      },
    }
  },
});


export default theme;



