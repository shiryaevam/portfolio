import nimbusCleanPlugin from "eslint-plugin-nimbus-clean";
import globals from "globals";
import tsLint from "typescript-eslint";

export default tsLint.config(
  ...nimbusCleanPlugin.configs.recommended,
  // Other configs

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
