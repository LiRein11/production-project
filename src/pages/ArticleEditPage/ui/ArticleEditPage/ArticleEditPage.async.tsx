import { lazy } from 'react';

export const ArticleEditPageAsync = lazy(
    () =>
        new Promise((resolve) => {
            setTimeout(
                () =>
                    // @ts-ignore
                    resolve(import('./ArticleEditPage')),
                500,
            );
        }),
);
