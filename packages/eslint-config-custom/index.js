module.exports = {
  extends: [
    "eslint-config-next",
    "turbo",
    "prettier",
    "plugin:@next/next/recommended",
  ],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
  },
};
