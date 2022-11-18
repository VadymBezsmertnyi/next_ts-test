import { createAppTheme } from 'theme';
const theme = createAppTheme();

export const classes = {
  menu: {
    width: '681px',
    margin: '0 10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    textTransform: 'uppercase',
    ['desktop']: {
      '@media (max-width: 1000px)': {
        display: 'none',
      },
    },
    ['mobile']: {
      flexDirection: 'column',
      width: 'auto',
      borderRadius: '4px',
      background: theme.palette.custom?.main.white20 || 'white',
      padding: '10px',
      boxShadow: `0px 2px 11px 3px ${theme.palette.custom?.main.white20}`,
      '@media (min-width: 1000px)': {
        display: 'none',
      },
    },
  },
  menuButton: (hover?: boolean) => ({
    color: hover
      ? theme.palette.common.white
      : theme.palette.custom?.main.fontPhilippineGray,
    textDecoration: 'none',
    margin: '0 5px',
    minWidth: '45px',
    fontFamily: 'Manrope',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '19px',
    letterSpacing: '0.05em',
    transition: 'color 0.5s ease-in-out',
  }),
};
