module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: ['plugin:react/recommended', 'airbnb', 'plugin:i18next/recommended'],
    parser: '@typescript-eslint/parser',
    overrides: [
        {
            files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
            rules: {
                'max-len': 'off',
            },
        },
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
        // project: ["./tsconfig.json"],
    },
    plugins: ['react', '@typescript-eslint', 'i18next', 'react-hooks', 'sergey-plugin', 'unused-imports', 'import'],
    ignorePatterns: ['.eslintrc.js'],
    rules: {
        'import/order': [
            'error',
            {
                pathGroups: [
                    {
                        pattern: '@/**',
                        group: 'internal',
                        position: 'after',
                    },
                    {
                        pattern: './**.module.*',
                        group: 'internal',
                        position: 'after',
                    },
                ],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: false,
                },
            },
        ],
        'unused-imports/no-unused-imports': 'error',
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        indent: [2, 4],
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'warn',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        'react/jsx-no-comment-textnodes': 'off',
        'implicit-arrow-linebreak': 'off',
        'max-len': ['error', { ignoreComments: true, code: 1000 }],
        'react/button-has-type': 'off',
        'i18next/no-literal-string': [
            'off',
            // 'error',
            // { markupOnly: true, ignoreAttribute: ['to', '//'] },
        ],
        'object-curly-newline': 'off',
        'no-trailing-spaces': ['error', { skipBlankLines: true }],
        'linebreak-style': 'off',
        'operator-linebreak': 'off',
        'arrow-body-style': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
        'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies
        'no-param-reassign': 'off',
        'no-undef': 'off',
        'no-unsafe-optional-chaining': 'off',
        'react/no-array-index-key': 'off',
        'sergey-plugin/path-checker': ['error', { alias: '@' }],
        'sergey-plugin/public-api-imports': ['error', { alias: '@', testFilesPatterns: ['**/.test.*', '**/*.story.*', '**/StoreDecorator.tsx'] }],
        'sergey-plugin/layer-imports': ['error', { alias: '@', ignoreImportPatterns: ['**/redux', '**/testing'] }],
        'no-nested-ternary': 'off',
    },
    globals: {
        __IS_DEV__: true,
        __API__: true,
        __PROJECT__: true,
    },
};
