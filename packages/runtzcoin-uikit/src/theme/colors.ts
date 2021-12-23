import { Colors } from "./types";

export const baseColors = {
  failure: "#990651",
  primary: "#f3f7ff",
  primaryBright: "#007eed",
  primaryDark: "#003fb5",
  secondary: "#7645D9",
  success: "#00a166",
  warning: "#FFB237",
};

export const additionalColors = {
  binance: "#F0B90B",
  overlay: "#452a7a",
};

export const lightColors: Colors = {
  ...baseColors,
  ...additionalColors,
  background: "#16002a",
  backgroundDisabled: "#230842",
  backgroundAlt: "#230842",
  cardBorder: "#524B63",
  contrast: "#FFFFFF",
  dropdown: "#1E1D20",
  invertedContrast: "#191326",
  input: "#483f5a",
  input2: "#483f5a",
  inputSecondary: "#66578D",
  tertiary: "#353547",
  text: "#eeeeee",
  textDisabled: "#f0ebfd",
  // textSubtle: "#303133",
  textSubtle: "#f0ebfd",
  textSubtle2: "#f0ebfd",
  scroll: "#fdc702",
  borderColor: "#524B63",
  disabled: "#E9EAEB",
  gradients: {
    bubblegum: "linear-gradient(90deg, rgba(30,33,36,1) 0%, rgba(65,0,122,1) 51%, rgba(36,31,42,1) 100%)",
    inverseBubblegum: "linear-gradient(90deg, rgba(30,33,36,1) 0%, rgba(65,0,122,1) 51%, rgba(36,31,42,1) 100%)",
    cardHeader: "linear-gradient(90deg, rgba(30,33,36,1) 0%, rgba(65,0,122,1) 51%, rgba(36,31,42,1) 100%)",
    blue: "linear-gradient(90deg, rgba(30,33,36,1) 0%, rgba(65,0,122,1) 51%, rgba(36,31,42,1) 100%)",
    violet: "linear-gradient(90deg, rgba(30,33,36,1) 0%, rgba(65,0,122,1) 51%, rgba(36,31,42,1) 100%)",
    violetAlt: "linear-gradient(90deg, rgba(30,33,36,1) 0%, rgba(65,0,122,1) 51%, rgba(36,31,42,1) 100%)",
    gold: "linear-gradient(90deg, rgba(30,33,36,1) 0%, rgba(65,0,122,1) 51%, rgba(36,31,42,1) 100%)",
  },
  dropdownDeep: "",
  backgroundAlt2: "",
  gold: "",
  silver: "",
  bronze: ""
};

export const darkColors: Colors = {
  ...baseColors,
  ...additionalColors,
  background: "#16002a",
  backgroundDisabled: "#230842",
  backgroundAlt: "#230842",
  cardBorder: "#524B63",
  contrast: "#FFFFFF",
  dropdown: "#1E1D20",
  invertedContrast: "#191326",
  input: "#483f5a",
  input2: "#483f5a",
  inputSecondary: "#66578D",
  tertiary: "#353547",
  text: "#eeeeee",
  textDisabled: "#f0ebfd",
  // textSubtle: "#303133",
  textSubtle: "#f0ebfd",
  textSubtle2: "#f0ebfd",
  scroll: "#fdc702",
  borderColor: "#524B63",
  disabled: "#E9EAEB",
  gradients: {
    bubblegum: "linear-gradient(90deg, rgba(30,33,36,1) 0%, rgba(65,0,122,1) 51%, rgba(36,31,42,1) 100%)",
    cardHeader: "linear-gradient(90deg, rgba(30,33,36,1) 0%, rgba(65,0,122,1) 51%, rgba(36,31,42,1) 100%)",
    blue: "linear-gradient(90deg, rgba(30,33,36,1) 0%, rgba(65,0,122,1) 51%, rgba(36,31,42,1) 100%)",
    violet: "linear-gradient(90deg, rgba(30,33,36,1) 0%, rgba(65,0,122,1) 51%, rgba(36,31,42,1) 100%)",
    violetAlt: "linear-gradient(90deg, rgba(30,33,36,1) 0%, rgba(65,0,122,1) 51%, rgba(36,31,42,1) 100%)",
    gold: "linear-gradient(90deg, rgba(30,33,36,1) 0%, rgba(65,0,122,1) 51%, rgba(36,31,42,1) 100%)",
    inverseBubblegum: "linear-gradient(90deg, rgba(30,33,36,1) 0%, rgba(65,0,122,1) 51%, rgba(36,31,42,1) 100%)"
  },
  dropdownDeep: "",
  backgroundAlt2: "#230842",
  gold: "",
  silver: "",
  bronze: ""
};