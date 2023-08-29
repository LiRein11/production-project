## Страница статьи

#### Public api

-   Components

`AdditionalInfoContainer` - Компонент-контейнер для блока с дополнительной информацией статьи

`DetailsContainer` - Компонент-контейнер для описания статьи

`ArticleDetailsComments` - Компонент с блоком комментариев

`ArticleDetailsPageHeader` - Компонент с шапкой статьи

`ArticlePageDetails` - Компонент со страницей статьи

-   types

`ArticleDetailsCommentsSchema` - Тип, описывающий редюсер

`ArticleDetailsRecommendationsSchema` - Тип, описывающий редюсер

`ArticlePageDetailsSchema` - Тип, описывающий редюсер

-   selectors

`getCanEditArticle` - Селектор для получения информации о возможности редактировать

`getArticleCommentsIsLoading` - Селектор для получения информации о состоянии загрузки комментариев к статье

`getArticleCommentsError` - Селектор для получения информации об ошибке комментариев к статье

`getArticleRecommendationsIsLoading` - Селектор для получения информации о текущем состоянии загрузки рекомендаций к статье

`getArticleRecommendationsError` - Селектор для получения информации об ошибке рекомендаций к статье

-   slices

`articleDetailsCommentsSlice` - Слайс для с комментариями к статье

`articleDetailsRecommendationsSlice` - Слайс для работы с рекомендациями к статье

`articlePageDetailsReducer` - Редюсер, объединяющий два слайса указанных выше

-   services

`addCommentForArticle` - Сервис для добавления комментария к статье

`fetchArticleRecommendations` - Сервис для получения рекомендаций к статье

`fetchCommentsByArticleId` - Сервис для получения комментариев по id статьи
