import { createAppTheme } from 'theme';
const theme = createAppTheme();

export const classes = {
  boxTimer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.custom?.main.antiFlashWhite || 'white',
    minHeight: '600px',
    borderRadius: '20px',
  },
  textUp: {
    marginTop: '50px',
    fontFamily: 'Manrope',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '60px',
    lineHeight: '50px',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: theme.palette.custom?.main.fontAzure || 'black',
    '@media (max-width: 1000px)': {
      fontSize: '32px',
      lineHeight: '45px',
    },
    '@media (max-width: 550px)': {
      textAlign: 'left',
      marginLeft: '20px',
    },
  },
  textDown: {
    fontFamily: 'Manrope',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '60px',
    lineHeight: '50px',
    textAlign: 'center',
    textTransform: 'uppercase',
    marginTop: '20px',
    color: theme.palette.custom?.main.backgroundRichBlack || 'black',
    '@media (max-width: 1000px)': {
      fontSize: '32px',
      lineHeight: '45px',
    },
    '@media (max-width: 550px)': {
      textAlign: 'left',
      marginLeft: '20px',
    },
  },
  timer: {
    marginTop: '55px',
    background: theme.palette.custom?.main.lightSilver || 'white',
    borderRadius: '70px',
    padding: '16px 47px',
    color: theme.palette.custom?.main.fontAzure || 'blue',
    '@media (max-width: 850px)': {
      fontSize: '24px',
    },
  },
  textTimer: {
    fontFamily: 'Manrope',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '72px',
    lineHeight: '98px',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: theme.palette.custom?.main.fontAzure || 'blue',
    '@media (max-width: 850px)': {
      lineHeight: '49px',
      fontSize: '24px',
    },
    '@media (max-width: 400px)': {
      lineHeight: '30px',
      fontSize: '20px',
    },
  },
  button: {
    marginTop: '50px',
    padding: '19px 55px',
    background: theme.palette.custom?.main.fontAzure || 'blue',
    borderRadius: '60px',
    textTransform: 'uppercase',
    fontSize: '14px',
    ':hover': { background: theme.palette.common.black },
    '@media (max-width: 600px)': {
      marginBottom: '50px',
    },
  },
  textButton: {
    fontFamily: 'Manrope',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '19px',
    letterSpacing: '0.1em',
    textDecoration: 'none',
    color: theme.palette.custom?.main.antiFlashWhite || 'white',
  },
};
