module.exports = {
  extends: ["next/core-web-vitals", "prettier", "plugin:import/typescript"],
  plugins: ["unused-imports", "import"],
  rules: {
    "no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        pathGroups: [
          {
            pattern: "services/**",
            group: "internal",
          },
          {
            pattern: "api/**",
            group: "internal",
          },
          {
            pattern: "model/**",
            group: "internal",
          },
          {
            pattern: "utils/**",
            group: "internal",
          },
          {
            pattern: "@chakra-ui/**",
            group: "parent",
          },
          {
            pattern: "react-icons/**",
            group: "parent",
          },
          {
            pattern: "containers/**",
            group: "parent",
          },
          {
            pattern: "components/**",
            group: "parent",
          },
        ],
        pathGroupsExcludedImportTypes: [],
      },
    ],
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: "./tsconfig.json",
      },
    },
  },
};
