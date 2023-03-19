const Colors = {
  primary: "#0F55E3",
  secondary: "#330FE3",
  info: "#930ED5",
  success: "#E30F55",
  warning: "#E30FBF",
  danger: "#E3330F",
  light: "#FCFCFF",
  gray: "#E5E7E9",
  grey: '#615E5E',
  tcolor: '#B0B0B0',
  dark: "#1C1F24"
}

export const ColorsRGB = {
  primary: (opacity) => `rgba(15, 85, 227, ${opacity})`,
  secondary: (opacity) => `rgba(51, 15, 227, ${opacity})`,
  info: (opacity) => `rgba(157, 15, 227, ${opacity})`,
  success: (opacity) => `rgba(227, 15, 85, ${opacity})`,
  warning: (opacity) => `rgba(227, 15, 191, ${opacity})`,
  danger: (opacity) => `rgba(257, 51, 15, ${opacity})`,
  light: (opacity) => `rgba(240, 240, 240, ${opacity})`,
  dark: (opacity) => `rgba(28, 31, 36, ${opacity})`
}

export default Colors;