module.exports = {
  extends: ["next", "turbo", "prettier"],
  rules: {
    "no-console": 2,
    "@next/next/no-html-link-for-pages": "off",
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")],
    },
  },
};
