import { theme as antTheme } from "antd";

import type { ThemeConfig } from "antd";

/**
 * Ant Design Theme Configuration
 * Generated from Figma Design Tokens
 */
export const theme: ThemeConfig = {
  algorithm: antTheme.darkAlgorithm,
  components: {
    Button: {
      borderColorDisabled: "#45556C", // slate-600
      borderRadius: 8, // radius.3
      colorBgContainerDisabled: "#45556C", // slate-600
      // === Danger/Error Button ===
      colorError: "#FB2C36", // semantic.error (red-500)

      colorErrorActive: "#E7000B", // red-600
      colorErrorBg: "#FB2C36", // red-500
      colorErrorBgHover: "#FF6467", // red-400
      colorErrorBorderHover: "#FF6467", // red-400
      colorErrorHover: "#FF6467", // semantic.error-hover (red-400)
      colorErrorText: "#FB2C36", // red-500
      // === Link Button ===
      colorLink: "#FFA1AD", // theme.link (rose-300)
      colorLinkActive: "#FF637E", // rose-400

      colorLinkHover: "#FFCCD2", // theme.link-hover (rose-200)
      // === Primary Button ===
      colorPrimary: "#FFB86A", // primary.bg (orange-300)
      colorPrimaryActive: "#FF8904", // orange-400
      colorPrimaryHover: "#FFD6A7", // primary.hover (orange-200)
      // === Disabled State ===
      colorTextDisabled: "#62748E", // slate-500
      defaultActiveBg: "#1D293D", // slate-800
      defaultActiveBorderColor: "#1D293D", // slate-800

      // === Default Button ===
      defaultBg: "#314158", // slate-700
      defaultBorderColor: "#314158", // slate-700
      defaultColor: "#F8FAFC", // slate-50

      defaultGhostBorderColor: "#90A1B9", // theme.foreground (slate-400)
      defaultGhostColor: "#90A1B9", // theme.foreground (slate-400)
      defaultHoverBg: "#45556C", // slate-600

      defaultHoverBorderColor: "#45556C", // slate-600
      defaultHoverColor: "#F8FAFC", // slate-50
      // === Ghost Button ===
      ghostBg: "transparent",

      // === Spacing ===
      paddingBlock: 10, // spacing.button.top-bottom
      paddingInline: 12, // spacing.button.left-right
      primaryColor: "#020618" // primary.inverted (slate-950) - text on primary
    },
    Card: {
      colorBgContainer: "#0F172B",
      colorBorderSecondary: "#314158"
    },
    Input: {
      colorBgContainer: "#0F172B", // theme.background (slate-900)
      colorBorder: "#314158" // theme.stroke (slate-700)
    },
    Menu: {
      colorBgContainer: "#0F172B",
      itemSelectedBg: "#314158"
    },
    Modal: {
      colorBgElevated: "#1D293D"
    },
    Select: {
      colorBgContainer: "#0F172B",
      colorBorder: "#314158"
    },
    Table: {
      colorBgContainer: "#0F172B",
      headerBg: "#1D293D"
    },
    Typography: {
      colorText: "#90A1B9",
      colorTextHeading: "#F8FAFC",
      colorTextSecondary: "#62748E"
    }
  },
  token: {
    // === Border Radius ===
    borderRadius: 8, // radius.3
    borderRadiusLG: 16, // radius.4
    borderRadiusOuter: 8, // radius.3
    borderRadiusSM: 4, // radius.2
    borderRadiusXS: 2, // radius.1

    // Background colors
    colorBgBase: "#020618", // theme.backdrop (slate-950)
    colorBgContainer: "#0F172B", // theme.background (slate-900)
    colorBgElevated: "#1D293D", // slate-800
    colorBgLayout: "#020618", // theme.backdrop (slate-950)
    colorBgSpotlight: "#314158", // slate-700

    // Border colors
    colorBorder: "#314158", // theme.stroke (slate-700)
    colorBorderSecondary: "#1D293D", // slate-800
    colorError: "#FB2C36", // semantic.error.background (red-500)
    colorInfo: "#615FFF", // indigo-500
    // Link colors
    colorLink: "#FFA1AD", // theme.link-foreground (rose-300)

    colorLinkActive: "#FF637E", // rose-400
    colorLinkHover: "#FFCCD2", // theme.link-hover-foreground (rose-200)
    // === Seed Tokens (Colors) ===
    colorPrimary: "#FFB86A", // primary.background (orange-300)

    colorSuccess: "#00C950", // semantic.success.background (green-500)
    // Text colors
    colorTextBase: "#90A1B9", // theme.foreground (slate-400)

    colorTextHeading: "#F8FAFC", // theme.heading-foreground (slate-50)
    colorTextQuaternary: "#314158", // slate-700

    colorTextSecondary: "#62748E", // slate-500
    colorTextTertiary: "#45556C", // slate-600
    colorWarning: "#F0B100", // semantic.warning.background (yellow-500)
    // === Control ===
    controlHeight: 40, // spacing.8

    controlHeightLG: 48, // spacing.9
    controlHeightSM: 32, // spacing.7
    // === Typography ===
    fontFamily: "'Fira Code', 'Courier New', monospace",
    fontFamilyCode: "'Fira Code', 'Courier New', monospace",
    // Font sizes (body)
    fontSize: 14, // font-size.body.sm

    // Font sizes (headings)
    fontSizeHeading1: 60, // font-size.heading.h1
    fontSizeHeading2: 48, // font-size.heading.h2
    fontSizeHeading3: 36, // font-size.heading.h3

    fontSizeHeading4: 30, // font-size.heading.h4
    fontSizeHeading5: 24, // font-size.heading.h5
    fontSizeLG: 18, // font-size.body.lg
    fontSizeSM: 14, // font-size.body.sm
    fontSizeXL: 20, // font-size.heading.h6

    // Line heights (body)
    lineHeight: 1.4, // ~19.6/14 (body.sm)
    // Line heights (headings)
    lineHeightHeading1: 1.1, // 66/60
    lineHeightHeading2: 1.2, // 57.6/48
    lineHeightHeading3: 1.3, // 46.8/36
    lineHeightHeading4: 1.4, // 42/30

    lineHeightHeading5: 1.4, // 33.6/24
    lineHeightLG: 1.5, // 27/18 (body.lg)
    lineHeightSM: 1.4, // body.sm
    margin: 16, // spacing.5
    marginLG: 24, // spacing.6

    marginSM: 12, // spacing.4
    marginXL: 32, // spacing.7
    marginXS: 8, // spacing.3
    // === Spacing ===
    padding: 16, // spacing.5
    paddingLG: 24, // spacing.6

    paddingSM: 12, // spacing.4
    paddingXL: 32, // spacing.7
    paddingXS: 8 // spacing.3
  }
};
