import { createTheme, Theme } from '@mui/material/styles';
import '@mui/styles';
import { Manrope } from 'font';

type TCustomColors = {
  main: {
    backgroundRichBlack: string;
    fontPhilippineGray: string;
    white20: string;
    fontAzure: string;
    lightSilver: string;
    antiFlashWhite: string;
    footerRaisinBlack: string;
    silverSand: string;
    brightGray: string;
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
  White20 = '#ffffff20',
  FontAzure = '#0090FF',
  LightSilver = '#D6D6D6',
  SilverSand = '#C4C4C4',
  AntiFlashWhite = '#F5F5F5',
  FooterRaisinBlack = '#202020',
  BrightGray = '#EFEFEF',
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
          white20: AppColor.White20,
          fontAzure: AppColor.FontAzure,
          lightSilver: AppColor.LightSilver,
          antiFlashWhite: AppColor.AntiFlashWhite,
          footerRaisinBlack: AppColor.FooterRaisinBlack,
          silverSand: AppColor.SilverSand,
          brightGray: AppColor.BrightGray,
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
