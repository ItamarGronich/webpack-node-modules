import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import { StatsWriterPlugin } from "webpack-stats-plugin";

const entry = {
  app: "./src/index.js",
};

const devtool = "inline-source-map";

const devServer = {
  open: true,
  hot: true,
  client: {
    logging: "verbose",
    progress: true,
  },
};

const plugins = [new HtmlWebpackPlugin(), new CleanWebpackPlugin()];

if (process.argv.includes("--analyze")) {
  // plugins.push(new BundleAnalyzerPlugin());
  plugins.push(
    new StatsWriterPlugin({
      stats: {
        all: true,
        assets: true,
      },
    })
  );
}

const output = {
  filename: "[name].bundle.js",
  path: path.resolve("dist"),
  publicPath: "/",
};

const otherOptions = {
  profile: true,
};

export default {
  entry,
  devtool,
  devServer,
  output,
  plugins,
  ...otherOptions,
};
