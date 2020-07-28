module.exports = {
  env: {
    es6: true,
    jest: true,
    browser: true
  },
  extends: [
    "airbnb",
    "prettier",
    "prettier/react",
    "plugin:cypress/recommended",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: [
    "react",
    "jsx-a11y",
    "import",
    "react-hooks",
    "prettier",
    "import-helpers",
    "cypress",
  ],
  rules: {
    "prettier/prettier": "error",
    "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx"] }],
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": "off",
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "react/jsx-one-expression-per-line": "off",
    "no-console": ["error", { allow: ["tron"] }],
    "no-param-reassign": "off",
    "import-helpers/order-imports": [
      "warn",
      {
          newlinesBetween: "always", // new line between groups
          groups: [
            "/^react/",
            "module",
            "/^~/",
            ["parent", "sibling", "index"],
          ],
          alphabetize: { order: "asc", ignoreCase: true },
      },
    ],
    "cypress/no-assigning-return-values": "error",
    "cypress/no-unnecessary-waiting": "error",
    "cypress/assertion-before-screenshot": "warn",
    "cypress/no-force": "warn",
    "cypress/no-async-tests": "error"
  },
};
