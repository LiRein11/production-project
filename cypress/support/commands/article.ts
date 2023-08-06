import { Article } from '../../../src/entities/Article';

const defaultArticle = {
    title: 'Kotlin news',
    subtitle: 'Что нового в Kotlin за 2023 год?',
    img: 'https://pluspng.com/img-png/kotlin-logo-png-kotlin-collection-function-techshots-medium-1200x630.png',
    views: 242,
    createdAt: '12.03.2023',
    userId: '1',
    type: ['IT'],
    blocks: [],
};

export const createArticle = (article?: Article) => {
    return cy
        .request({
            method: 'POST',
            url: 'http://localhost:8000/articles',
            headers: { Authorization: 'asaf' },
            body: article ?? defaultArticle,
        })
        .then((resp) => resp.body);
};

export const removeArticle = (articleId: string) => {
    return cy.request({
        method: 'DELETE',
        url: `http://localhost:8000/articles/${articleId}`,
        headers: { Authorization: 'asaf' },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            createArticle(article?: Article): Chainable<Article>;
            removeArticle(articleId: string): Chainable<void>;
        }
    }
}
