// register ts-node
require("ts-node").register({ swc: true, transpileOnly: true, project: "tsconfig.tsnode.json" });

// register tsconfig paths
const tsconfigPaths = require("tsconfig-paths");
tsconfigPaths.register({
  ...tsconfigPaths.loadConfig("tsconfig.tsnode.json"),
  baseUrl: ".",
});

const main = require("./dev_server").main;
main();
