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
    fontWeight: 600,
    fontSize: '1vw',
    lineHeight: '19px',
    letterSpacing: '0.02em',
    transition: 'color 0.5s ease-in-out',
  }),
};
