import { createTheme, Theme } from '@mui/material/styles';
import '@mui/styles';
//import { Lora, Nunito } from '../fonts';

type TCustomColors = {
  main: {
    backgroundRaisinBlack: string;
    backgroundRaisinBlack70: string;
    borderColor: string;
    borderDesertSand: string;
    borderTumbleweed: string;
    borderDeer: string;
    coolGrey: string;
    backgroundDisabled: string;
    colorDisabled: string;
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
  BackgroundRaisinBlack = '#231C26',
  BackgroundRaisinBlack70 = '#231C26B2',
  CheckboxCoolGrey = '#9097AC',
  BorderDesertSand = '#EBC6A4',
  BorderTumbleweed = '#D4AA83',
  BorderDeer = '#B4885E',
  White = '#fff',
  BackgroundDisabled = '#adadad66',
  ColorDisabled = '#ffffff12',
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
            background: AppColor.BackgroundRaisinBlack,
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            color: AppColor.White,
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
          root: {
            color: AppColor.White,
          },
        },
      },
    },
    palette: {
      custom: {
        main: {
          backgroundRaisinBlack: AppColor.BackgroundRaisinBlack,
          backgroundRaisinBlack70: AppColor.BackgroundRaisinBlack70,
          borderColor: `linear-gradient(180deg, ${AppColor.BorderDesertSand} 11.22%, ${AppColor.BorderTumbleweed} 53.39%, ${AppColor.BorderDeer} 82.44%)`,
          borderDesertSand: AppColor.BorderDesertSand,
          borderTumbleweed: AppColor.BorderTumbleweed,
          borderDeer: AppColor.BorderDeer,
          coolGrey: AppColor.CheckboxCoolGrey,
          backgroundDisabled: AppColor.BackgroundDisabled,
          colorDisabled: AppColor.ColorDisabled,
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
