import { borderRadius } from "../theme";

// Border radius utility functions
export const getBorderRadius = (step: keyof typeof borderRadius) =>
  `${borderRadius[step]}px`;

// Border radius style objects for styled-components or inline styles
export const borderRadiusStyles = {
  backdrop: {
    borderRadius: getBorderRadius(3) // 8px
  },

  // Buttons, inputs, and backdrop
  button: {
    borderRadius: getBorderRadius(3) // 8px
  },

  // Cards and large containers
  card: {
    borderRadius: getBorderRadius(4) // 16px
  },

  // Checkboxes and small elements
  checkbox: {
    borderRadius: getBorderRadius(1) // 2px
  },

  // Icon boxes and tags
  iconBox: {
    borderRadius: getBorderRadius(2) // 4px
  },

  input: {
    borderRadius: getBorderRadius(3) // 8px
  },

  // All radius steps
  radius1: {
    borderRadius: getBorderRadius(1) // 2px
  },
  radius2: {
    borderRadius: getBorderRadius(2) // 4px
  },
  radius3: {
    borderRadius: getBorderRadius(3) // 8px
  },
  radius4: {
    borderRadius: getBorderRadius(4) // 16px
  }
} as const;

// CSS classes for border radius
export const borderRadiusClasses = {
  backdrop: "radius-backdrop",
  button: "radius-button",
  card: "radius-card",
  checkbox: "radius-checkbox",
  iconBox: "radius-icon-box",
  input: "radius-input",
  radius1: "radius-1",
  radius2: "radius-2",
  radius3: "radius-3",
  radius4: "radius-4"
} as const;

// CSS variables for border radius
export const borderRadiusCSSVars = {
  "--radius-1": getBorderRadius(1),
  "--radius-2": getBorderRadius(2),
  "--radius-3": getBorderRadius(3),
  "--radius-4": getBorderRadius(4)
} as const;
