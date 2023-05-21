import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import { BuildOptions } from './types/config';

export function buildPlugins({ paths, isDev, env }: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
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
        new webpack.HotModuleReplacementPlugin(), // Обновить приложение после изменения в коде и при этом не обновлять страницу
        new BundleAnalyzerPlugin({ analyzerMode: env.analyze ? 'server' : 'disabled' }), // Анализ бандла
    ];
}
