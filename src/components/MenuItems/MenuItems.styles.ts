import { createAppTheme } from 'theme';
const theme = createAppTheme();

export const classes = {
  desktopMenu: {
    width: '35.47vw',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    textTransform: 'uppercase',
  },
  menuButton: (hover?: boolean) => ({
    color: hover
      ? theme.palette.common.white
      : theme.palette.custom?.main.fontPhilippineGray,
    textDecoration: 'none',
    fontFamily: 'Manrope',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '19px',
    letterSpacing: '0.05em',
    transition: 'color 0.5s ease-in-out',
  }),
};
