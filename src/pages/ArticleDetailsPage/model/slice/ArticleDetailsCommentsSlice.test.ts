import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema';
import { articleDetailsCommentsReducer } from './ArticleDetailsCommentsSlice';

const comments = [
    {
        id: '1',
        text: 'some comment',
        articleId: '1',
        user: { id: '1', username: 'lirein' },
    },
    {
        id: '2',
        text: 'some comment 2',
        articleId: '1',
        user: { id: '2', username: 'lireinn' },
    },
];
describe('ArticleDetailsCommentsSlice.test', () => {
    test('test fetch comments by article id pending', () => {
        const state: DeepPartial<ArticleDetailsCommentsSchema> = {
            isLoading: false,
        };
        expect(
            articleDetailsCommentsReducer(
                state as ArticleDetailsCommentsSchema,
                fetchCommentsByArticleId.pending,
            ),
        ).toEqual({
            isLoading: true,
            error: undefined,
        });
    });

    test('test fetch comments by article id fulfilled', () => {
        const state: DeepPartial<ArticleDetailsCommentsSchema> = {
            isLoading: true,
        };
        expect(
            articleDetailsCommentsReducer(
                state as ArticleDetailsCommentsSchema,
                fetchCommentsByArticleId.fulfilled(comments, '', ''),
            ),
        ).toEqual({
            isLoading: false,
            error: undefined,
            entities: {
                1: {
                    id: '1',
                    text: 'some comment',
                    articleId: '1',
                    user: { id: '1', username: 'lirein' },
                },
                2: {
                    id: '2',
                    text: 'some comment 2',
                    articleId: '1',
                    user: { id: '2', username: 'lireinn' },
                },
            },
            ids: ['1', '2'],
        });
    });
});
