import { theme as antdTheme } from "antd";

import type { ThemeConfig } from "antd";

export const theme: ThemeConfig = {
  algorithm: antdTheme.darkAlgorithm,
  components: {
    Button: {
      defaultShadow: "0 2px 8px rgba(139, 92, 246, 0.2)",
      primaryShadow: "0 4px 12px rgba(0, 255, 136, 0.3)",
    },
    Card: {
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
      colorBgContainer: "#1a1a1a",
      colorBorder: "#333333",
    },
    Form: {
      labelColor: "#e5e5e5",
    },
    Input: {
      colorBgContainer: "#1a1a1a",
      colorBorder: "#333333",
      colorText: "#ffffff",
      colorTextPlaceholder: "#737373",
    },
    Layout: {
      siderBg: "#111111",
      bodyBg: "#0a0a0a",
      headerBg: "#111111",
    },
    Menu: {
      darkItemBg: "transparent",
      darkItemColor: "#e5e5e5",
      darkItemHoverBg: "rgba(139, 92, 246, 0.1)",
      darkItemHoverColor: "#8b5cf6",
      darkItemSelectedBg: "rgba(0, 255, 136, 0.1)",
      darkItemSelectedColor: "#00ff88",
    },
  },
  token: {
    // Радиусы
    borderRadius: 8,
    borderRadiusLG: 12,
    borderRadiusSM: 6,
    // Тени
    boxShadow: "0 4px 12px rgba(0, 255, 136, 0.15)",
    boxShadowSecondary: "0 2px 8px rgba(139, 92, 246, 0.15)",

    // Фон
    colorBgBase: "#0a0a0a", // Очень темный фон
    colorBgContainer: "#111111", // Темный контейнер
    colorBgElevated: "#1a1a1a", // Приподнятый элемент

    // Границы
    colorBorder: "#333333", // Темная граница
    colorBorderSecondary: "#262626", // Очень темная граница
    colorError: "#ef4444", // Красный
    colorInfo: "#3b82f6", // Синий

    // Основные цвета
    colorPrimary: "#00ff88", // Неоновый зеленый
    colorSuccess: "#00ff88", // Зеленый

    colorText: "#e5e5e5", // Светло-серый
    // Текст
    colorTextBase: "#ffffff", // Белый текст
    colorTextSecondary: "#a3a3a3", // Серый

    colorTextTertiary: "#737373", // Темно-серый
    colorWarning: "#f59e0b", // Желтый

    // Размеры
    fontSize: 16,
    fontSizeHeading1: 60,
    fontSizeHeading2: 48,
    fontSizeHeading3: 36,
    fontSizeHeading4: 30,
    fontSizeHeading5: 24,
  },
};
