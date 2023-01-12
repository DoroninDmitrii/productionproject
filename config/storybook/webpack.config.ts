/* eslint-disable @typescript-eslint/prefer-ts-expect-error */
/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import path from 'path'
import webpack, { DefinePlugin, RuleSetRule } from 'webpack'
import { buildCssLoaders } from '../build/loaders/buildCssLoaders'
import { buildSvgLoader } from '../build/loaders/buildSvgLoader'
import { BuildPaths } from '../build/types/config'

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src')
  }
  // For absolute import in storybook (add node_modules to fix storybook problem)
  config!.resolve!.modules = [paths.src, 'node_modules']
  // Set new extensions for existing config
  config!.resolve!.extensions!.push('.ts', '.tsx')
  // Set new rules for existing config
  config!.module!.rules!.push(buildCssLoaders(true))
  // @ts-ignore
  config!.module!.rules = config!.module!.rules?.map((rule: RuleSetRule) => {
    if (/svg/.test(rule?.test as string)) {
      return { ...rule, exclude: /\.svg$/i }
    }
    return rule
  })

  config!.module!.rules?.push(buildSvgLoader())
  // fix isDev mistake in 34 lesson
  config!.plugins!.push(new DefinePlugin({
    __IS_DEV__: true,
    __API__: JSON.stringify(''),
    __PROJECT__: JSON.stringify('storybook')
  }))

  return config
}
