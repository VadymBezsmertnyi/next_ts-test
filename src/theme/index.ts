import { createTheme, Theme } from '@mui/material/styles';
import '@mui/styles';
import { Manrope } from '../../public/font';

type TCustomColors = {
  main: {
    backgroundRichBlack: string;
    fontPhilippineGray: string;
  };
  font: {};
  background: {};
  accent: {};
  colors: {};
  other: {};
};
declare module '@mui/material/styles' {
  interface PaletteOptions {
    custom?: TCustomColors;
  }
  interface Palette {
    custom?: TCustomColors;
  }
}
declare module '@mui/styles/defaultTheme' {
  interface DefaultTheme extends Theme {}
}

export enum AppColor {
  BackgroundRichBlack = '#040E18',
  FontPhilippineGray = '#8E8E8E',
}

export const createAppTheme = () => {
  const theme = createTheme({
    typography: {
      fontFamily: 'Lora',
    },

    components: {
      MuiCssBaseline: {
        styleOverrides: {
          fallbacks: [
            {
              '@font-face': {
                fontFamily: 'Manrope',
                src: `url(${Manrope}) format('truetype')`,
              },
            },
          ],
          body: {
            background: AppColor.BackgroundRichBlack,
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontFamily: 'Nunito',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: '20px',
            lineHeight: '27px',
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {},
        },
      },
    },
    palette: {
      custom: {
        main: {
          backgroundRichBlack: AppColor.BackgroundRichBlack,
          fontPhilippineGray: AppColor.FontPhilippineGray,
        },
        font: {},
        background: {},
        colors: {},
        accent: {},
        other: {},
      },
    },
  });
  return theme;
};
