import { lazy } from 'react';

export const AboutAsync = lazy(
    () =>
        new Promise((resolve) => {
            setTimeout(
                () =>
                    // @ts-ignore
                    resolve(import('./About')),
                1500,
            );
        }),
);
