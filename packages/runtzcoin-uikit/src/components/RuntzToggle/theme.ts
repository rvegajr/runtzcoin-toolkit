import { darkColors, lightColors } from "../../theme/colors";
import { RuntzToggleTheme } from "./types";

export const light: RuntzToggleTheme = {
  handleBackground: lightColors.backgroundAlt,
  handleShadow: lightColors.textDisabled,
};

export const dark: RuntzToggleTheme = {
  handleBackground: darkColors.backgroundAlt,
  handleShadow: darkColors.textDisabled,
};
