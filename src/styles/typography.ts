import { typography } from "../theme";

// Typography utility functions
export const getFontSize = (step: keyof typeof typography.fontSize) =>
  `${typography.fontSize[step]}px`;

export const getLineHeight = (step: keyof typeof typography.lineHeight) =>
  typography.lineHeight[step];

export const getFontWeight = (weight: keyof typeof typography.fontWeight) =>
  typography.fontWeight[weight];

// Typography style objects for styled-components or inline styles
export const typographyStyles = {
  bodyLarge: {
    fontFamily: typography.fontFamily.primary,
    fontSize: getFontSize(3),
    fontWeight: getFontWeight("regular"),
    lineHeight: getLineHeight(3)
  },
  bodyMedium: {
    fontFamily: typography.fontFamily.primary,
    fontSize: getFontSize(2),
    fontWeight: getFontWeight("regular"),
    lineHeight: getLineHeight(2)
  },
  // Body text styles
  bodySmall: {
    fontFamily: typography.fontFamily.primary,
    fontSize: getFontSize(1),
    fontWeight: getFontWeight("regular"),
    lineHeight: getLineHeight(1)
  },
  // Heading styles
  h1: {
    fontFamily: typography.fontFamily.primary,
    fontSize: getFontSize(9),
    fontWeight: getFontWeight("bold"),
    lineHeight: getLineHeight(9)
  },
  h2: {
    fontFamily: typography.fontFamily.primary,
    fontSize: getFontSize(8),
    fontWeight: getFontWeight("semiBold"),
    lineHeight: getLineHeight(8)
  },
  h3: {
    fontFamily: typography.fontFamily.primary,
    fontSize: getFontSize(7),
    fontWeight: getFontWeight("semiBold"),
    lineHeight: getLineHeight(7)
  },

  h4: {
    fontFamily: typography.fontFamily.primary,
    fontSize: getFontSize(6),
    fontWeight: getFontWeight("medium"),
    lineHeight: getLineHeight(6)
  },
  h5: {
    fontFamily: typography.fontFamily.primary,
    fontSize: getFontSize(5),
    fontWeight: getFontWeight("medium"),
    lineHeight: getLineHeight(5)
  },
  h6: {
    fontFamily: typography.fontFamily.primary,
    fontSize: getFontSize(4),
    fontWeight: getFontWeight("medium"),
    lineHeight: getLineHeight(4)
  },

  // Text scale styles
  text1: {
    fontFamily: typography.fontFamily.primary,
    fontSize: getFontSize(1),
    lineHeight: getLineHeight(1)
  },
  text2: {
    fontFamily: typography.fontFamily.primary,
    fontSize: getFontSize(2),
    lineHeight: getLineHeight(2)
  },
  text3: {
    fontFamily: typography.fontFamily.primary,
    fontSize: getFontSize(3),
    lineHeight: getLineHeight(3)
  },
  text4: {
    fontFamily: typography.fontFamily.primary,
    fontSize: getFontSize(4),
    lineHeight: getLineHeight(4)
  },
  text5: {
    fontFamily: typography.fontFamily.primary,
    fontSize: getFontSize(5),
    lineHeight: getLineHeight(5)
  },
  text6: {
    fontFamily: typography.fontFamily.primary,
    fontSize: getFontSize(6),
    lineHeight: getLineHeight(6)
  },
  text7: {
    fontFamily: typography.fontFamily.primary,
    fontSize: getFontSize(7),
    lineHeight: getLineHeight(7)
  },
  text8: {
    fontFamily: typography.fontFamily.primary,
    fontSize: getFontSize(8),
    lineHeight: getLineHeight(8)
  },
  text9: {
    fontFamily: typography.fontFamily.primary,
    fontSize: getFontSize(9),
    lineHeight: getLineHeight(9)
  }
} as const;

// CSS classes for typography
export const typographyClasses = {
  bodyLarge: "body-large",
  bodyMedium: "body-medium",
  bodySmall: "body-small",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  text1: "text-1",
  text2: "text-2",
  text3: "text-3",
  text4: "text-4",
  text5: "text-5",
  text6: "text-6",
  text7: "text-7",
  text8: "text-8",
  text9: "text-9"
} as const;
