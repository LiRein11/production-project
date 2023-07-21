import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import CopyPlugin from 'copy-webpack-plugin';
import CircularDependencyPlugin from 'circular-dependency-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BuildOptions } from './types/config';

export function buildPlugins({ paths, isDev, env, apiUrl, project }: BuildOptions): webpack.WebpackPluginInstance[] {
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
            __API__: JSON.stringify(apiUrl),
            __PROJECT__: JSON.stringify(project),
        }), // Для создания глобальных переменных
        new BundleAnalyzerPlugin({ analyzerMode: env.analyze ? 'server' : 'disabled' }), // Анализ бандла
        new CopyPlugin({
            patterns: [{ from: paths.locales, to: paths.buildLocales }],
        }), // Для копирования файлов/директорий в билд сборку\
        new ForkTsCheckerWebpackPlugin({
            typescript: {
                diagnosticOptions: {
                    semantic: true,
                    syntactic: true,
                },
                mode: 'write-references',
            },
        }), // Для параллельной слежки за ts ошибками.
    ];

    if (isDev) {
        plugins.push(new webpack.HotModuleReplacementPlugin()); // Обновить приложение после изменения в коде и при этом не обновлять страницу)
        plugins.push(new ReactRefreshWebpackPlugin());
        plugins.push(
            new CircularDependencyPlugin({
                exclude: /node_modules/,
                failOnError: true,
            }),
        );
    }

    return plugins;
}
