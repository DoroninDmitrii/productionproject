import path from 'path';
import webpack from 'webpack';
import { buildCssLoaders } from '../build/loaders/buildCssLoaders';
import { BuildPaths } from '../build/types/config';

export default ({config}: {config: webpack.Configuration}) => {

  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };
  // For absolute import in storybook
  config.resolve?.modules?.push(paths.src)
  // Set new extensions for existing config
  config.resolve?.extensions?.push('.ts', '.tsx')
  // Set new rules for existing config
  config.module?.rules?.push(buildCssLoaders(true))

  return config
}


