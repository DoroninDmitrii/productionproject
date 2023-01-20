import webpack from 'webpack'
import { BuildOptions } from './types/config'
import { buildCssLoaders } from './loaders/buildCssLoaders'
import { buildSvgLoader } from './loaders/buildSvgLoader'
import { buildBabelLoader } from './loaders/buildBabelLoader'

export function buildLoaders (options: BuildOptions): webpack.RuleSetRule[] {
  const { isDev } = options

  const svgLoader = buildSvgLoader()

  const babelLoader = buildBabelLoader(options)

  const cssLoader = buildCssLoaders(isDev)

  // if you don't use typescript you need to install babel-loader
  const typesctiptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  }

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader'
      }
    ]
  }

  return [
    fileLoader,
    svgLoader,
    babelLoader,
    typesctiptLoader,
    cssLoader
  ]
}
