import path from 'path';
import webpack, { DefinePlugin, RuleSetRule } from 'webpack';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { BuildPaths } from '../build/types/config';

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        entry: '',
        build: '',
        html: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };

    config!.resolve!.modules!.unshift(paths.src);
    config!.resolve!.extensions!.push('.ts', '.tsx');

    // eslint-disable-next-line
    const rules = config.module!.rules! as RuleSetRule[];
    config!.module!.rules = rules.map((rule) => {
        // Default rule for images /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }
        return rule;
    }); // Находит правило, которое обрабатывает svg и затем если оно найдено, то для этого правила исключается обработка svg. В обратном случае если с svg никак не связано, то это правило возвращается. (фиксится ошибка с svg у storybook). У сторибука свой способ обработки svg, а так как в проекте подключен svgr лоудер(который превращает svg в React компонент), приходится убирать способ сторибука обрабатывать svg из массива.

    config!.module!.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }); // А потом как раз добавляется свой способ обработки svg - svgr.

    config!.module!.rules.push(buildCssLoader(true));

    config!.plugins!.push(
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(true),
            __API__: JSON.stringify(''),
        }),
    );

    return config;
}; // Добавление к конфигу webpack storybook пути для абсолютных импортов, расширений и cssLoader. То есть у сторибука есть свой webpack конфиг, и таким образом его можно расширять под конкретные задачи.
