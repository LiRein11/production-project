import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import { BuildOptions } from './types/config';

export function buildPlugins({ paths, isDev, env }: BuildOptions): webpack.WebpackPluginInstance[] {
    const plugins = [
        new HtmlWebpackPlugin({
            template: paths.html,
        }), // Создаёт html файлик и прокидывает в него скрипты
        new webpack.ProgressPlugin(), // Для процентов сборки
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }), // Выделение css-кода в отдельные файлы (чтобы не оставались в бандле)
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
        }), // Для создания глобальных переменных
        new BundleAnalyzerPlugin({ analyzerMode: env.analyze ? 'server' : 'disabled' }), // Анализ бандла
    ];

    if (isDev) {
        plugins.push(new webpack.HotModuleReplacementPlugin()); // Обновить приложение после изменения в коде и при этом не обновлять страницу)
    }

    return plugins;
}
