import { createTheme, Theme } from '@mui/material/styles';
import '@mui/styles';
//import { Lora, Nunito } from '../fonts';

type TCustomColors = {
  main: {
    backgroundRichBlack: string;
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
                fontFamily: 'Nunito',
                //src: `url(${Nunito}) format('truetype')`,
              },
            },
            {
              '@font-face': {
                fontFamily: 'Lora',
                //src: `url(${Lora}) format('truetype')`,
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
