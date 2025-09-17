import { theme as antdTheme } from "antd";

import type { ThemeConfig } from "antd";

// Color palettes from design system
export const colors = {
  // Semantic colors
  error: {
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    50: "#fef2f2",
    500: "#ef4444", // Main
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
    950: "#450a0a",
  },

  // Neutral colors
  gray: {
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    50: "#f9fafb",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
    950: "#030712",
  },

  // Secondary / Indigo
  indigo: {
    100: "#e0e7ff",
    200: "#c7d2fe",
    300: "#a5b4fc",
    400: "#818cf8",
    50: "#eef2ff",
    500: "#6366f1", // Main
    600: "#4f46e5",
    700: "#4338ca",
    800: "#3730a3",
    900: "#312e81",
    950: "#1e1b4b",
  },

  info: {
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    50: "#fefce8",
    500: "#f59e0b", // Main
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f",
    950: "#451a03",
  },

  // Primary / Orange
  orange: {
    100: "#ffedd5",
    200: "#fed7aa",
    300: "#fdba74", // Main
    400: "#fb923c",
    50: "#fff7ed",
    500: "#f97316",
    600: "#ea580c",
    700: "#c2410c",
    800: "#9a3412",
    900: "#7c2d12",
    950: "#431407",
  },

  // Accent / Purple
  purple: {
    100: "#f3e8ff",
    200: "#e9d5ff",
    300: "#d8b4fe",
    400: "#c084fc", // Main
    50: "#faf5ff",
    500: "#a855f7",
    600: "#9333ea",
    700: "#7c3aed",
    800: "#6b21a8",
    900: "#581c87",
    950: "#3b0764",
  },

  // Secondary / Rose
  rose: {
    100: "#ffe4e6",
    200: "#fecdd3",
    300: "#fda4af", // Main
    400: "#fb7185",
    50: "#fff1f2",
    500: "#f43f5e",
    600: "#e11d48",
    700: "#be123c",
    800: "#9f1239",
    900: "#881337",
    950: "#4c0519",
  },

  // Appearance / Slate
  slate: {
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    50: "#f8fafc",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
    950: "#020617",
  },

  success: {
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    50: "#f0fdf4",
    500: "#22c55e", // Main
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d",
    950: "#052e16",
  },

  // Secondary / Teal
  teal: {
    100: "#ccfbf1",
    200: "#99f6e4",
    300: "#5eead4",
    400: "#2dd4bf", // Main
    50: "#f0fdfa",
    500: "#14b8a6",
    600: "#0d9488",
    700: "#0f766e",
    800: "#115e59",
    900: "#134e4a",
    950: "#042f2e",
  },
};

// Spacing scale from design system
export const spacing = {
  1: "2px", // Step 1
  10: "64px", // Step 10
  2: "4px", // Step 2
  3: "8px", // Step 3
  4: "12px", // Step 4
  5: "16px", // Step 5
  6: "24px", // Step 6
  7: "32px", // Step 7
  8: "40px", // Step 8
  9: "48px", // Step 9
} as const;

// Numeric spacing values for Ant Design tokens
export const spacingNumeric = {
  1: 2, // Step 1
  10: 64, // Step 10
  2: 4, // Step 2
  3: 8, // Step 3
  4: 12, // Step 4
  5: 16, // Step 5
  6: 24, // Step 6
  7: 32, // Step 7
  8: 40, // Step 8
  9: 48, // Step 9
} as const;

// Type definitions for spacing
export type SpacingKey = keyof typeof spacing;
export type SpacingNumericKey = keyof typeof spacingNumeric;
export type SpacingNumericValue = (typeof spacingNumeric)[SpacingNumericKey];
export type SpacingValue = (typeof spacing)[SpacingKey];

// Typography scale from design system
export const typography = {
  fontFamily: {
    primary: "'Fira Code', 'Courier New', monospace",
  },
  fontSize: {
    1: 14, // Step 1
    2: 16, // Step 2
    3: 18, // Step 3
    4: 20, // Step 4
    5: 24, // Step 5
    6: 30, // Step 6
    7: 36, // Step 7
    8: 48, // Step 8
    9: 60, // Step 9
  },
  fontWeight: {
    bold: 700,
    light: 300,
    medium: 500,
    regular: 400,
    semiBold: 600,
  },
  lineHeight: {
    1: 1.4, // 140% (19.6px)
    2: 1.5, // 150% (24px)
    3: 1.5, // 150% (27px)
    4: 1.5, // 150% (30px)
    5: 1.4, // 140% (33.6px)
    6: 1.4, // 140% (42px)
    7: 1.3, // 130% (46.8px)
    8: 1.2, // 120% (57.6px)
    9: 1.1, // 110% (66px)
  },
} as const;

// Type definitions for typography
export type TypographyFontSizeKey = keyof typeof typography.fontSize;
export type TypographyFontWeightKey = keyof typeof typography.fontWeight;
export type TypographyLineHeightKey = keyof typeof typography.lineHeight;

// Border radius scale from design system
export const borderRadius = {
  1: 2, // Step 1 - checkboxes
  2: 4, // Step 2 - icon boxes
  3: 8, // Step 3 - buttons, background backdrop, inputs
  4: 16, // Step 4 - cards
} as const;

// Type definitions for border radius
export type BorderRadiusKey = keyof typeof borderRadius;
export type BorderRadiusValue = (typeof borderRadius)[BorderRadiusKey];

export const theme: ThemeConfig = {
  algorithm: antdTheme.darkAlgorithm,
  components: {
    Badge: {
      borderRadius: borderRadius[2], // 4px - icon boxes
    },
    Button: {
      borderRadius: borderRadius[3], // 8px - buttons
      defaultShadow: `0 2px 8px ${colors.purple[400]}20`,
      paddingBlock: spacingNumeric[2], // 4px
      paddingInline: spacingNumeric[4], // 12px
      primaryShadow: `0 4px 12px ${colors.teal[400]}30`,
    },
    Card: {
      borderRadius: borderRadius[4], // 16px - cards
      boxShadow: `0 4px 12px ${colors.gray[950]}30`,
      colorBgContainer: colors.gray[800],
      colorBorder: colors.gray[700],
      padding: spacingNumeric[6], // 24px
      paddingLG: spacingNumeric[8], // 40px
    },
    Checkbox: {
      borderRadius: borderRadius[1], // 2px - checkboxes
    },
    Drawer: {
      borderRadius: borderRadius[4], // 16px - cards
    },
    Form: {
      labelColor: colors.gray[200],
      itemMarginBottom: spacingNumeric[5], // 16px
    },
    Input: {
      borderRadius: borderRadius[3], // 8px - inputs
      colorBgContainer: colors.gray[800],
      colorBorder: colors.gray[700],
      colorText: colors.gray[50],
      colorTextPlaceholder: colors.gray[500],
      paddingBlock: spacingNumeric[2], // 4px
      paddingInline: spacingNumeric[3], // 8px
    },
    Layout: {
      siderBg: colors.gray[900],
      bodyBg: colors.gray[950],
      headerBg: colors.gray[900],
      padding: spacingNumeric[6], // 24px
    },
    Menu: {
      darkItemBg: "transparent",
      darkItemColor: colors.gray[200],
      darkItemHoverBg: `${colors.purple[400]}10`,
      darkItemHoverColor: colors.purple[400],
      darkItemSelectedBg: `${colors.teal[400]}10`,
      darkItemSelectedColor: colors.teal[400],
      itemPaddingInline: spacingNumeric[4], // 12px
    },
    Modal: {
      borderRadius: borderRadius[4], // 16px - cards
    },
    Radio: {
      borderRadius: borderRadius[1], // 2px - checkboxes
    },
    Switch: {
      borderRadius: borderRadius[1], // 2px - checkboxes
    },
    Tag: {
      borderRadius: borderRadius[2], // 4px - icon boxes
    },
    Tooltip: {
      borderRadius: borderRadius[3], // 8px - buttons/inputs
    },
  },
  token: {
    // Радиусы (используем borderRadius scale)
    borderRadius: borderRadius[3], // 8px - buttons, inputs
    borderRadiusLG: borderRadius[4], // 16px - cards
    borderRadiusSM: borderRadius[2], // 4px - icon boxes
    borderRadiusXS: borderRadius[1], // 2px - checkboxes

    // Тени
    boxShadow: `0 4px 12px ${colors.teal[400]}15`,
    boxShadowSecondary: `0 2px 8px ${colors.purple[400]}15`,
    // Фон
    colorBgBase: colors.gray[950], // Очень темный фон
    colorBgContainer: colors.gray[900], // Темный контейнер
    colorBgElevated: colors.gray[800], // Приподнятый элемент
    // Границы
    colorBorder: colors.gray[700], // Темная граница
    colorBorderSecondary: colors.gray[800], // Очень темная граница
    // Семантические цвета
    colorError: colors.error[500], // Красный

    colorInfo: colors.info[500], // Желтый
    colorLink: colors.indigo[400], // Ссылки - Indigo

    colorLinkHover: colors.indigo[300], // Ссылки при наведении
    // Основные цвета
    colorPrimary: colors.teal[400], // Основной цвет - Teal
    colorSuccess: colors.success[500], // Зеленый

    // Текст
    colorText: colors.gray[200], // Светло-серый
    colorTextBase: colors.gray[50], // Белый текст

    colorTextSecondary: colors.gray[400], // Серый
    colorTextTertiary: colors.gray[500], // Темно-серый
    colorWarning: colors.info[500], // Желтый
    // Типографика (используем typography scale)
    fontFamily: typography.fontFamily.primary,
    fontSize: typography.fontSize[2], // 16px
    // Заголовки
    fontSizeHeading1: typography.fontSize[9], // 60px

    fontSizeHeading2: typography.fontSize[8], // 48px
    fontSizeHeading3: typography.fontSize[7], // 36px
    fontSizeHeading4: typography.fontSize[6], // 30px
    fontSizeHeading5: typography.fontSize[5], // 24px
    fontSizeLG: typography.fontSize[4], // 20px
    fontSizeSM: typography.fontSize[1], // 14px
    lineHeight: typography.lineHeight[2], // 1.5
    margin: spacingNumeric[5], // 16px
    marginLG: spacingNumeric[6], // 24px

    marginSM: spacingNumeric[3], // 8px
    marginXS: spacingNumeric[2], // 4px
    // Отступы (используем spacing scale)
    padding: spacingNumeric[5], // 16px
    paddingLG: spacingNumeric[6], // 24px
    paddingSM: spacingNumeric[3], // 8px
    paddingXS: spacingNumeric[2], // 4px
  },
};
