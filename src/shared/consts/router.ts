export const getRouteMain = () => '/';
export const getRouteAbout = () => '/about';
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteArticles = () => '/articles';
export const getRouteArticleDetails = (id: string) => `/articles/${id}`;
export const getRouteArticleCreate = () => '/articles/new';
export const getRouteArticleEdit = (id: string) => `/articles/${id}/edit`;
export const getRouteAdminPanel = () => '/admin';
export const getRouteForbidden = () => '/forbidden';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'article_details',
    ARTICLE_CREATE = 'article_create',
    ARTICLE_EDIT = 'article_edit',
    ADMIN_PANEL = 'admin_panel',
    FORBIDDEN = 'forbidden',

    // Last
    NOT_FOUND = 'not_found',
}

// export const RoutePath: Record<AppRoutes, string> = {
//     [AppRoutes.MAIN]: '/',
//     [AppRoutes.ABOUT]: '/about',
//     [AppRoutes.PROFILE]: '/profile/',
//     [AppRoutes.ARTICLES]: '/articles',
//     [AppRoutes.ARTICLE_DETAILS]: '/articles/',
//     [AppRoutes.ARTICLE_CREATE]: '/articles/new',
//     [AppRoutes.ARTICLE_EDIT]: '/articles/:id/edit',
//     [AppRoutes.ADMIN_PANEL]: '/admin',
//     [AppRoutes.FORBIDDEN]: '/forbidden',

//     // Последний
//     [AppRoutes.NOT_FOUND]: '*',
// };
