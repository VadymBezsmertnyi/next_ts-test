import { createAppTheme } from 'theme';
const theme = createAppTheme();

export const classes = {
  sharesUp: {
    marginTop: '40px',
    marginBottom: '0',
    padding: `9px 380px 8px 380px`,
    '@media (max-width: 1700px)': {
      padding: `9px 300px 8px 300px`,
    },
    '@media (max-width: 1500px)': {
      padding: `9px 200px 8px 200px`,
    },
    '@media (max-width: 1300px)': {
      padding: `9px 16px 8px 16px`,
    },
  },
  textUp: {
    fontFamily: 'Manrope',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '60px',
    lineHeight: '65px',
    letterSpacing: '0.1em',
    color: theme.palette.common.white,
    '@media (max-width: 1000px)': {
      fontSize: '32px',
      lineHeight: '45px',
    },
  },
  textDown: {
    fontFamily: 'Manrope',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '18px',
    lineHeight: '24px',
    letterSpacing: '0.1em',
    marginTop: '20px',
    color: theme.palette.common.white,
    '@media (max-width: 1000px)': {
      fontSize: '14px',
      lineHeight: '18px',
    },
  },
  textColor: {
    color: theme.palette.custom?.main.fontAzure,
    '@media (max-width: 1000px)': {
      color: theme.palette.common.white,
    },
  },
  button: {
    marginTop: '32px',
    padding: '19px 55px',
    background: theme.palette.custom?.main.fontAzure || '',
    borderRadius: '60px',
    textTransform: 'uppercase',
    fontSize: '14px',
  },
  textButton: {
    fontFamily: 'Manrope',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '19px',
    letterSpacing: '0.1em',
    textDecoration: 'none',
    color: theme.palette.common.white,
  },
};
