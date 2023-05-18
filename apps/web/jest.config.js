const base = require("../../packages/jest-config-react");

module.exports = {
  ...base,
  rootDir: ".",
  name: "web",
  displayName: "Web Tests",
  moduleDirectories: ["node_modules", "src"],
};
