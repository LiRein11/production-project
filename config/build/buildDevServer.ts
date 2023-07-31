import type { Configuration as ConfigurationDevServer } from 'webpack-dev-server';

import { BuildOptions } from './types/config';

export function buildDevServer(options: BuildOptions): ConfigurationDevServer {
    return {
        port: options.port,
        open: true,
        historyApiFallback: true, // Чтобы не было ошибки при обновлении страницы не на главной (cannot get /about)
        hot: true,
    };
}
