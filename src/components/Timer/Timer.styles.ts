import { createAppTheme } from 'theme';
const theme = createAppTheme();

export const classes = {
  timer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#fff url(/feedback.png) center center/cover no-repeat',
    minHeight: '600px',
    margin: '0 20px',
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
    maxWidth: '570px',
    fontFamily: 'Manrope',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '18px',
    lineHeight: '24px',
    textAlign: 'center',
    letterSpacing: '0.1em',
    marginTop: '20px',
    color: theme.palette.custom?.main.backgroundRichBlack || 'black',
    '@media (max-width: 1000px)': {
      fontSize: '14px',
      lineHeight: '20px',
    },
    '@media (max-width: 550px)': {
      textAlign: 'left',
      marginLeft: '20px',
    },
  },
  button: {
    marginTop: '50px',
    padding: '19px 55px',
    background: theme.palette.custom?.main.backgroundRichBlack || 'black',
    borderRadius: '60px',
    textTransform: 'uppercase',
    fontSize: '14px',
    ':hover': { background: theme.palette.common.black },
    '@media (max-width: 600px)': {
      marginBottom: '50px',
    },
  },
  textButton: {
    color: theme.palette.common.white,
  },
};
