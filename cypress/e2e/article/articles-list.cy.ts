import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from '../../../src/shared/consts/localstorage';

describe('Пользователь заходит на страницу со списком статей', () => {
    beforeEach(() => {
        cy.login().then(() => {
            cy.visit('articles');
        });
    });
    it('И статьи успешно подгружаются', () => {
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
    });
    // it('И статьи успешно подгружаются (на стабах (фикстурах))', () => {
    //     cy.intercept('GET', '**/articles?*', { fixture: 'articles.json' });
    //     cy.getByTestId('ArticleList').should('exist');
    //     cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
    // });
    it('И статьи сортируются по количеству просмотров', () => {
        cy.getByTestId('ArticleSortField').select('views').should('have.value', 'views');
    });
    it('И статьи сортируются по названию', () => {
        cy.getByTestId('ArticleSortField').select('title').should('have.value', 'title');
    });
    it('И статьи сортируются по дате создания', () => {
        cy.getByTestId('ArticleSortField').select('createdAt').should('have.value', 'createdAt');
    });
    it('И статьи сортируются по убыванию', () => {
        cy.getByTestId('ArticleSortOrder').select('desc').should('have.value', 'desc');
    });
    it('И статьи сортируются по возрастанию', () => {
        cy.getByTestId('ArticleSortOrder').select('asc').should('have.value', 'asc');
    });
    it('И статьи сортируются по type=It', () => {
        cy.getByTestId('It').click();
    });
    it('И статьи сортируются по type=All', () => {
        cy.getByTestId('All').click();
    });
    it('И статьи сортируются по type=Economics', () => {
        cy.getByTestId('Economics').click();
    });
    it('И статьи сортируются по type=Science', () => {
        cy.getByTestId('Science').click();
    });
    it('И меняется отображение статей на вид-плитка', () => {
        cy.getByTestId('ArticleViewSelectorGrid').click();
        window.localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, 'grid');
    });
    it('И меняется отображение статей на вид-лист', () => {
        cy.getByTestId('ArticleViewSelectorList').click();
        window.localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, 'list');
    });
    it('И статьи сортируются по поиску', () => {
        cy.getByTestId('ArticlesHeaderFilters.Input').type('aw');
    });
});
