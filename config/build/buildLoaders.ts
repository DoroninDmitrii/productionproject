import webpack from "webpack"
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/config";


export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: isDev 
            ? '[path][name]__[local]--[hash:base64:5]' 
            : '[hash:base64:5]' 
          },
        }
      },
      // Compiles Sass to CSS
      "sass-loader",
    ],
  }

  // if you don't use typescript you need to install babel-loader
  const typesctiptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }
  
  return [
    typesctiptLoader,
    cssLoader
  ]

}
