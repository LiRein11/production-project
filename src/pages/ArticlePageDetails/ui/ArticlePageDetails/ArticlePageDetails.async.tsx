import { lazy } from 'react';

export const ArticlePageDetailsAsync = lazy(
    () =>
        new Promise((resolve) => {
            setTimeout(
                () =>
                    // @ts-ignore
                    resolve(import('./ArticlePageDetails')),
                400,
            );
        }),
);
