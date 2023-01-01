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
  let configResolveModules = config?.resolve?.modules
  configResolveModules = [paths.src, 'node_modules']
  // Set new extensions for existing config
  config.resolve?.extensions?.push('.ts', '.tsx')
  // Set new rules for existing config
  config.module?.rules?.push(buildCssLoaders(true))

  const rules = config.module!.rules as RuleSetRule[]
  config.module!.rules = rules.map((rule) => {
    if (/svg/.test(rule?.test as string)) {
      return { ...rule, exclude: /\.svg$/i }
    }
    return rule
  })

  config.module?.rules?.push(buildSvgLoader())
  // fix isDev mistake in 34 lesson
  config.plugins?.push(new DefinePlugin({
    __IS_DEV__: true,
    __API__: JSON.stringify('')
  }))

  return config
}
