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
  };
  fonts: {
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
  },
  fonts: { RobotoRegular: "Roboto Regular", RobotoMedium: "Roboto Medium" },
};
