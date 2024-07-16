import base from "eslint-config-voodoocreation/base";

export default [
  ...base,
  {
    ignores: ["**/*.d.tsZZ"],
    languageOptions: {
      ecmaVersion: 2015,
      parserOptions: {
        project: "tsconfig.lint.json",
      },
      sourceType: "module",
    },
  },
];
