import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    // Если не использовать ts - тогда нужен babel-loader(перегоняет новый стандарт js и перегоняет в старый чтобы браузеры поддерживали)

    const { isDev } = options;

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const babelLoader = buildBabelLoader(options);

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const cssLoader = buildCssLoader(isDev);

    return [fileLoader, svgLoader, babelLoader, typescriptLoader, cssLoader];
} // Лоудеры нужны для обработки файлов определенного расширения.
