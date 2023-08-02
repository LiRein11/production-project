import { fetchArticles } from '../fetchArticles/fetchArticles';

import { initArticlesPage } from './initArticlesPage';

import { EArticleType } from '@/entities/Article';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

jest.mock('@/pages/ArticlesPage/model/services/fetchArticles/fetchArticles');

const params = new URLSearchParams();
params.append('param1', 'value1');
params.append('param2', 'value2');
describe('initArticlesPage.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                type: EArticleType.ALL,
                limit: 5,
                isLoading: false,
                hasMore: true,
                _inited: false,
            },
        });

        const queryString = params.toString();

        await thunk.callThunk(params);
        expect(queryString).toBe('param1=value1&param2=value2');
        expect(thunk.dispatch).toBeCalledTimes(4); // pending, fulfilled, 2 диспатча в самом экшене
        expect(fetchArticles).toHaveBeenCalledWith({});
    });

    test('initArticlesPage not called ', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                type: EArticleType.ALL,
                limit: 5,
                isLoading: false,
                hasMore: false,
                _inited: true,
            },
        });

        const queryString = params.toString();

        await thunk.callThunk(params);
        expect(queryString).toBe('param1=value1&param2=value2');

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticles).not.toHaveBeenCalled();
    });

    test('initArticlesPage isLoading ', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                type: EArticleType.ALL,
                limit: 5,
                isLoading: true,
                hasMore: true,
                _inited: false,
            },
        });

        const queryString = params.toString();

        await thunk.callThunk(params);
        expect(queryString).toBe('param1=value1&param2=value2');

        expect(thunk.dispatch).toBeCalledTimes(4);
        expect(fetchArticles).toHaveBeenCalledWith({});
    });
});
