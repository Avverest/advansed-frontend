import webpack from 'webpack'
import { BuildOptions } from './types/config'
import { buildCssLoader } from './loaders/buildCssLoader'
import { buildSvgLoader } from './loaders/buildSvgLoader'

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const svgLoader = buildSvgLoader()

  const resourceLoader = {
    test: /\.(png|jpg|gif|woff2)$/i,
    type: 'asset/resource',
  }

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }
  const cssLoader = buildCssLoader(isDev)

  return [
    resourceLoader,
    svgLoader,
    typescriptLoader,
    cssLoader,
  ]
}
