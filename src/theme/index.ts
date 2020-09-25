import { transparentize } from "polished";

type Theme = {
  colors: {
    white: string;
    whiteTransparent: string;
    lavender: string;
    lavenderLight: string;
    blue: string;
    blueLight: string;
    blueVeryLight: string;
    blueSuperLight: string;
    blueNatural: string;
    blueMediumLight: string;
    blueStroke: string;
    blueWhite: string;
    blueDark: string;
    blueDarkLight: string;
    blueVeryDark: string;
    blueSuperDark: string;
    blueGrey: string;
    blueDisabledText: string;
  };
  fonts: {
    RobotoItalic: "Roboto Italic";
    RobotoRegular: "Roboto Regular";
    RobotoMedium: "Roboto Medium";
  };
};

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}

export const theme: Theme = {
  colors: {
    white: "#ffffff",
    whiteTransparent: transparentize(0.96, "#ffffff"),

    lavender: "#676DAA",
    lavenderLight: "#EEF1FA",

    blue: "#272D67",
    blueLight: "#91A0C9",
    blueVeryLight: "#E0E6F6",
    blueSuperLight: "#E3EBF7",
    blueWhite: "#F7F9FF",
    blueNatural: "#3869DE",
    blueMediumLight: "#7BA2FF",
    blueStroke: "#5285FF",
    blueDark: "#97A7CF",
    blueDarkLight: "#B4C1E4",
    blueVeryDark: "#244DAE",
    blueSuperDark: "#3564D3",
    blueGrey: "#E0E7F8",
    blueDisabledText: "#BFCBE9",
  },
  fonts: { RobotoItalic: "Roboto Italic", RobotoRegular: "Roboto Regular", RobotoMedium: "Roboto Medium" },
};
