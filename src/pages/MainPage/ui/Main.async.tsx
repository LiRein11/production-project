import { lazy } from 'react';

export const MainAsync = lazy(() => import('./MainPage'));

// export const MainAsync = lazy(
//     () =>
//         new Promise((resolve) => {
//             setTimeout(
//                 () =>
//                     // @ts-ignore
//                     resolve(import('./MainPage')),
//                 1500,
//             );
//         }),
// ); // Искусственная задержка
