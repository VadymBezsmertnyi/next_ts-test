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
  },
  listSocial: {
    minWidth: '330px',
    marginTop: '67px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  social: {
    color: theme.palette.common.white,
  },
  policy: {
    marginTop: '25px',
    marginBottom: '12px',
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
  copyright: {
    marginBottom: '60px',
  },
};
