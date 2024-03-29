import webpack from 'webpack';

import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolves } from './buildResolves';
import { BuildOptions } from './types/config';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const { mode, paths, isDev } = options;

    return {
        mode,
        entry: paths.entry, // Стартовая точка приложения (dirname - папка, где сейчас находимся (корень))
        output: {
            filename: '[name].[contenthash].js', // Для динамических названий
            path: paths.build,
            clean: true, // Чистка от старых файлов
            publicPath: '/',
        }, // Настройки того, куда и как делается сборка
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options), // Конфигурация of loaders (обработка файлов, которые выходят за рамки js)
        },
        resolve: buildResolves(options), // Для импортов
        devtool: isDev ? 'eval-cheap-module-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    };
}
