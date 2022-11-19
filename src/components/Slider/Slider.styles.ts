import { createAppTheme } from 'theme';
const theme = createAppTheme();

export const classes = {
  slider: {
    zIndex: 1,
    minHeight: '890px',
    marginBottom: '76px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    '@media (max-width: 700px)': {
      justifyContent: 'center',
    },
  },
  buttons: {
    width: '10%',
    height: '45vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    button: {
      width: '50px',
      height: '50px',
      background: theme.palette.custom?.main.silverSand,
      borderRadius: '50px',
      minWidth: 'auto',
      svg: {
        color: theme.palette.common.white,
      },
    },

    '@media (max-width: 700px)': {
      display: 'none',
    },
  },
  main: {
    width: '80%',
    minHeight: '640px',

    '@media (max-width: 700px)': {
      width: '95%',
    },
  },
  slideMain: {
    position: 'absolute',
    width: '80%',
    height: '430px',

    '@media (max-width: 700px)': {
      width: '95%',
    },
  },
  up: {
    opacity: 0,
    height: '430px',
    transition: 'background 1s ease-in-out, opacity 0.5s ease-in-out',
    borderRadius: '20px 20px 0px 0px',
    discount: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      width: '219px',
      height: '121px',
      bottom: '40px',
      left: '36px',
      borderRadius: '20px',
      background: theme.palette.custom?.main.fontAzure || 'blue',

      '@media (max-width: 700px)': {
        width: '120px',
        height: '65px',
      },

      text: {
        fontFamily: 'Manrope',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '64px',
        lineHeight: '50px',
        textTransform: 'uppercase',
        color: theme.palette.common.white,

        '@media (max-width: 700px)': {
          fontSize: '36px',
        },
      },
    },
  },
  down: {
    opacity: 0,
    background: theme.palette.common.white,
    minHeight: '200px',
    borderRadius: '0px 0px 20px 20px',
    padding: '40px',
    transition: 'background 1s ease-in-out, opacity 0.5s ease-in-out',

    mainTitle: {
      maxWidth: 360,
      fontFamily: 'Manrope',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: '48px',
      lineHeight: '50px',
      textTransform: 'uppercase',
      color: theme.palette.custom?.main.fontAzure || 'blue',

      '@media (max-width: 700px)': {
        fontSize: '30px',
        lineHeight: '35px',
      },

      black: {
        color: theme.palette.custom?.main.backgroundRichBlack || 'black',
      },
    },
    otherTitle: {
      maxWidth: 550,
      margin: '21px 0 54px 0',
      fontFamily: 'Manrope',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: '18px',
      lineHeight: '26px',

      '@media (max-width: 700px)': {
        fontSize: '14px',
        lineHeight: '20px',
      },
    },
    proposition: {
      display: 'flex',
      justifyContent: 'flex-start',
      flexWrap: 'wrap',
      width: '90%',
      gap: '3vw',
      margin: '0 0 21px',
    },
    service: {
      width: '240px',
      display: 'flex',
      justifyContent: 'flex-start',
      containerText: {
        marginLeft: '20px',
      },
    },
    indicator: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      background: theme.palette.common.white,

      '@media (max-width: 700px)': {
        alignItems: 'center',
        justifyContent: 'space-between',
      },

      button: {
        width: '50px',
        height: '50px',
        background: theme.palette.custom?.main.silverSand,
        borderRadius: '50px',
        minWidth: 'auto',
        svg: {
          color: theme.palette.common.white,
        },
        '@media (min-width: 700px)': {
          display: 'none',
        },
      },

      containerIndicator: {
        display: 'flex',
        padding: '6px 11px',
        background: theme.palette.custom?.main.brightGray,
        borderRadius: '30px',
        gap: '14px',

        miniIndicator: {
          width: '7px',
          height: '7px',
          borderRadius: '20px',
        },

        select: {
          background: theme.palette.custom?.main.fontAzure,
        },
        noSelect: {
          background: theme.palette.custom?.main.silverSand,
        },
      },
    },
    '@media (max-width: 700px)': {
      padding: '20px',
    },
  },
  show: (imageSlider: string) => ({
    opacity: 1,
    background: `${theme.palette.common.white} url(${imageSlider}) center center/cover no-repeat`,
  }),
};
