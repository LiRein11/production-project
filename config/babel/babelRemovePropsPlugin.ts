import { PluginItem } from '@babel/core';

export default function babelRemovePropsPlugin(): PluginItem {
    return {
        visitor: {
            Program(path, state) {
                const forbidden = state.opts.props || []; // babelRemovePropsPlugin(['data-testid', 'test-atr'])

                path.traverse({
                    JSXIdentifier(current) {
                        const nodeName = current.node.name;

                        if (forbidden.includes(nodeName)) {
                            current.parentPath.remove();
                        } // if (nodeName === 'data-testid')
                    },
                });
            },
        },
    };
} // Плагин для выпиливания атрибутов из прод сборки (например 'data-testid)
