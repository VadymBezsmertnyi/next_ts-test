export const classes = {
  desktopHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  mobileHeader: {},
  boxPhoneButton: {
    display: 'flex',
    alignItems: 'center',
    '@media (max-width: 1000px)': {
      display: 'none',
    },
  },
  burgerButton: {
    '@media (min-width: 1000px)': {
      display: 'none',
    },
  },
};
