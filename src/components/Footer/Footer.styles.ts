import { createAppTheme } from 'theme';
const theme = createAppTheme();

export const classes = {
  footer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: '105px',
    background: theme.palette.custom?.main.footerRaisinBlack || 'black',
    '@media (max-width: 400px)': {
      background: theme.palette.custom?.main.backgroundRichBlack || 'black',
    },
  },
  logoFooter: {
    '@media (max-width: 400px)': {
      display: 'none',
    },
  },
  nameFooter: {
    marginTop: '85px',
    '@media (min-width: 400px)': {
      display: 'none',
    },
  },
  otherContact: {
    padding: '22px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '90%',
    height: '155px',
    background: theme.palette.custom?.main.chineseBlack || 'black',
    borderRadius: '3px',
    title: {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '12px',
      lineHeight: '14px',
      color: theme.palette.custom?.main.fontPhilippineGray,
    },
    boxSocial: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
    },
    text: {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '24px',
      lineHeight: '28px',
      color: theme.palette.common.white,
    },

    '@media (min-width: 400px)': {
      display: 'none',
    },
  },
  listSocial: {
    minWidth: '330px',
    marginTop: '67px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (max-width: 400px)': {
      minWidth: '300px',
      padding: '20px',
    },
  },
  social: {
    color: theme.palette.common.white,
  },
  policy: {
    marginTop: '25px',
    marginBottom: '12px',

    '@media (max-width: 700px)': {
      justifyContent: 'center',
    },
    '@media (max-width: 400px)': {
      display: 'none',
    },
  },
  linkFooter: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '9px',
    lineHeight: '11px',
    color: '#4F4F4F',
    textDecoration: 'none',
  },
  copyrightContainer: {
    marginBottom: '60px',
    '@media (max-width: 400px)': {
      display: 'none',
    },
  },
  copyright: {},
};
