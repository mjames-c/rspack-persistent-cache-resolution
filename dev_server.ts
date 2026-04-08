import path from "node:path";
import { DevServer, rspack, type RspackOptions } from "@rspack/core";
import { RspackDevServer } from "@rspack/dev-server";
import { mode } from "@/rspack/mode";

const config: RspackOptions = {
  mode,
  entry: "./src/index.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  cache: {
    type: "persistent",
    buildDependencies: [__filename],
    storage: { type: "filesystem", directory: "./rspack-cache" },
  }, // property under test
  devServer: {},
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "builtin:swc-loader",
            options: {
              jsc: {
                parser: {
                  syntax: "typescript",
                },
              },
            },
          },
        ],
      },
    ],
  },
};

export async function main(): Promise<void> {
  const compiler = rspack(config);
  const server = new RspackDevServer(config.devServer as DevServer, compiler);
  await server.start();
}
