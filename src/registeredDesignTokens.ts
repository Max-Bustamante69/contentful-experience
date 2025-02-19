import { defineDesignTokens } from "@contentful/experiences-sdk-react";

// Color Tokens
export const colorTokens = {
  // Plain Theme
  plainPrimary: "#1E1A3A",
  plainSecondary: "#D0D7E1",
  plainAccent: "#D0D7E1",
  plainBackground: "#FFFFFF",
  plainForeground: "#2C2A3B",
  plainMuted: "#D0D7E1",
  plainMutedForeground: "#3A4C67",

  // Pastel Theme
  pastelPrimary: "#5CC7D1",
  pastelSecondary: "#9E7CC6",
  pastelAccent: "#D178D1",
  pastelBackground: "#F4F8A6",
  pastelForeground: "#2C2A3B",
  pastelMuted: "#D0D7E1",
  pastelMutedForeground: "#3A4C67",

  // High Contrast Theme
  highContrastPrimary: "#36D700",
  highContrastSecondary: "#000000",
  highContrastAccent: "#36D700",
  highContrastBackground: "#FFFFFF",
  highContrastForeground: "#000000",
  highContrastMuted: "#E6E6E6",
  highContrastMutedForeground: "#666666",

  // Common Colors
  destructive: "#F04837",
  destructiveForeground: "#D0D7E1",
  border: "#A3B4D2",
  input: "#A3B4D2",
  ring: "#2C2A3B",
};


// Typography Tokens
const fontSizeTokens = {
  xs: "0.75rem",
  sm: "0.875rem",
  base: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "3xl": "1.875rem",
  "4xl": "2.25rem",
  "5xl": "3rem",
};

const fontWeightTokens = {
  normal: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
  extrabold: "800",
};

const lineHeightTokens = {
  tight: "1.25",
  snug: "1.375",
  normal: "1.5",
  relaxed: "1.625",
  loose: "2",
};

// Spacing Tokens
const spacingTokens = {
  px: "1px",
  0: "0",
  0.5: "0.125rem",
  1: "0.25rem",
  1.5: "0.375rem",
  2: "0.5rem",
  2.5: "0.625rem",
  3: "0.75rem",
  3.5: "0.875rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  11: "2.75rem",
  12: "3rem",
  14: "3.5rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  36: "9rem",
  40: "10rem",
  44: "11rem",
  48: "12rem",
  52: "13rem",
  56: "14rem",
  60: "15rem",
  64: "16rem",
  72: "18rem",
  80: "20rem",
  96: "24rem",
};

// Border Radius Tokens
const borderRadiusTokens = {
  none: "0",
  sm: "0.125rem",
  DEFAULT: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px",
};

// Text Style Tokens
const textStyleTokens = {
  h1: {
    fontSize: fontSizeTokens["4xl"],
    fontWeight: fontWeightTokens.extrabold,
    lineHeight: lineHeightTokens.tight,
    letterSpacing: "0.025em",
  },
  h2: {
    fontSize: fontSizeTokens["3xl"],
    fontWeight: fontWeightTokens.semibold,
    lineHeight: lineHeightTokens.tight,
    letterSpacing: "0.025em",
  },
  h3: {
    fontSize: fontSizeTokens["2xl"],
    fontWeight: fontWeightTokens.semibold,
    lineHeight: lineHeightTokens.snug,
  },
  h4: {
    fontSize: fontSizeTokens.xl,
    fontWeight: fontWeightTokens.semibold,
    lineHeight: lineHeightTokens.snug,
  },
  body: {
    fontSize: fontSizeTokens.base,
    fontWeight: fontWeightTokens.normal,
    lineHeight: lineHeightTokens.normal,
  },
  bodyLarge: {
    fontSize: fontSizeTokens.lg,
    fontWeight: fontWeightTokens.normal,
    lineHeight: lineHeightTokens.relaxed,
  },
};



// Define and register the design tokens
defineDesignTokens({
  color: colorTokens,
  fontSize: fontSizeTokens,
  fontWeight: fontWeightTokens,
  lineHeight: lineHeightTokens,
  spacing: spacingTokens,
  borderRadius: borderRadiusTokens,
  text: textStyleTokens,
});
