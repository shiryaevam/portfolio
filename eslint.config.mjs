import prettierConfig from "eslint-config-prettier";
import nimbusCleanPlugin from "eslint-plugin-nimbus-clean";
import globals from "globals";
import tsLint from "typescript-eslint";

export default tsLint.config(
  ...nimbusCleanPlugin.configs.recommended,
  prettierConfig, // Отключает правила ESLint, которые конфликтуют с Prettier

  { ignores: ["dist"] },
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
  {
    rules: {
      "import/no-unresolved": [
        "error",
        {
          ignore: [String.raw`^/.*\.svg$`],
        },
      ],
      indent: "off", // Отключаем правило отступов
      // Отключаем правила, которые могут конфликтовать с Prettier
      "linebreak-style": "off", // Отключаем правило для окончаний строк
      "max-len": "off", // Отключаем ограничение длины строки
      quotes: "off", // Отключаем правило кавычек
      semi: "off", // Отключаем правило точки с запятой
    },
    settings: {
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx", ".svg", ".json"],
        },
        typescript: {
          alwaysTryTypes: true,
          project: "./tsconfig.app.json",
        },
      },
    },
  },
);
