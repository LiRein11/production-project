## Страница статей

#### Public api

-   Components

`ArticleInfiniteList` - Компонент со статьями

`ArticlesPage` - Компонент со страницей статей

`ArticlesPageFilters` - Компонент с фильтрами статей на странице

`FiltersContainer` - Компонент-контейнер для фильтров статей

`ViewSelectorContainer` - Компонент-контейнер с переключателем вида просмотра статей

-   types

`ArticlesHeaderFiltersSchema` - Тип, описывающий редюсер

-   selectors

`getArticlesPageView` - Селектор для получения информации о выбранном виде просмотра статей

`getArticlesPageIsLoading` - Селектор для получения информации о состоянии загрузки статей

`getArticlesPageError` - Селектор для получения информации об ошибке статей

`getArticlesPageNum` - Селектор для получения информации о странице статей

`getArticlesPageLimit` - Селектор для получения информации о лимите статей

`getArticlesPageHasMore` - Селектор для получения информации о наличии ещё статей

`getArticlesPageInited` - Селектор для получения информации о инициализации статей

`getArticlesPageOrder` - Селектор для получения информации о сортировке статей по возрастанию/убыванию

`getArticlesPageSort` - Селектор для получения информации о сортировке статей по дате создания

`getArticlesPageSearch` - Селектор для получения информации о поиске статей

`getArticlesPageType` - Селектор для получения информации о сортировке статей по типу

-   slices

`articlesHeaderFiltersSlice` - Слайс для работы со страницей статей

-   services

`initArticlesPage` - Сервис для инициализации статей на странице

`fetchNextArticlesPage` - Сервис для подгрузки статей

`fetchArticlesPage` - Сервис для получения статей

-   lib

`useArticleFilters` - Хук для переиспользуемой логики с фильтрацией статей
