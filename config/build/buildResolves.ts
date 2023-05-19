import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';

export function buildResolves(options: BuildOptions): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'], // Для импортов
        preferAbsolute: true, // Абсолютные пути в приоритете
        modules: [options.paths.src, 'node_modules'], // Абсолютные импорты из src и node_modules
        mainFiles: ['index'],
        alias: {},
    };
}
