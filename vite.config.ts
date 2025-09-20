import react from "@vitejs/plugin-react";

import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  build: {
    chunkSizeWarningLimit: 1000, // Предупреждение при больших чанках
    // Дополнительные оптимизации
    minify: "terser",
    rollupOptions: {
      output: {
        manualChunks: {
          // React экосистема
          react: ["react", "react-dom"]

          // Библиотеки UI
          // ui: ["react-router-dom", "styled-components"],

          // Утилиты
          // utils: ["lodash", "date-fns"],
        }
      }
    },
    sourcemap: false, // Отключить в продакшене
    terserOptions: {
      compress: {
        drop_console: true, // Удалить console.log в продакшене
        drop_debugger: true, // Удалить debugger
        passes: 2 // Количество проходов оптимизации
      },
      format: {
        comments: false // Удалить комментарии
      },
      mangle: {
        toplevel: true // Минифицировать глобальные переменные
      }
    }
  },
  plugins: [
    react({
      babel: {
        plugins: [
          [
            "babel-plugin-antd-style",
            {
              libraryDirectory: "lib",
              // Опции плагина (необязательно)
              libraryName: "antd-style",
              style: true // или 'css' для импорта CSS файлов
            }
          ]
        ]
      }
    }),
    svgr({
      include: "**/*.svg",
      svgrOptions: {
        exportType: "default"
      }
    })
  ],
  resolve: {
    alias: {
      "@components": fileURLToPath(new URL("src/components", import.meta.url)),
      "@public": fileURLToPath(new URL("public", import.meta.url)),
      "@styles": fileURLToPath(new URL("src/styles", import.meta.url))
    }
  }
});
