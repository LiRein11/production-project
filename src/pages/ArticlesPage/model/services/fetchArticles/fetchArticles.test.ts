import { fetchArticles } from './fetchArticles';

import { EArticleType, EArticleBlockType } from '@/entities/Article';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

// const articles = jest.mock('../fetchArticles/fetchArticles');

const articles = [
    {
        id: '1',
        title: 'Javascript news',
        subtitle: 'Что нового в JS за 2022 год?',
        img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
        views: 1022,
        createdAt: '26.02.2022',
        type: [EArticleType.IT],
        user: {
            id: '1',
            username: 'LiRein',
            avatar: 'https://catherineasquithgallery.com/uploads/posts/2021-02/1612257690_85-p-paren-na-fioletovom-fone-111.jpg',
        },
        blocks: [
            {
                id: '1',
                type: EArticleBlockType.TEXT,
                title: 'Заголовок этого блока',
                paragraphs: [
                    'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                    'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                    'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
                ],
            },
        ],
    },
    {
        id: '2',
        title: 'Javascript news',
        subtitle: 'Что нового в JS за 2022 год?',
        img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
        views: 1022,
        createdAt: '26.02.2022',
        type: [EArticleType.IT],
        user: {
            id: '1',
            username: 'LiRein',
            avatar: 'https://catherineasquithgallery.com/uploads/posts/2021-02/1612257690_85-p-paren-na-fioletovom-fone-111.jpg',
        },
        blocks: [
            {
                id: '1',
                type: EArticleBlockType.TEXT,
                title: 'Заголовок этого блока',
                paragraphs: [
                    'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
                    'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
                    'Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:',
                ],
            },
        ],
    },
];

describe('fetchArticles.test', () => {
    test('success', async () => {
        const thunk = new TestAsyncThunk(fetchArticles, {
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
        thunk.api.get.mockReturnValue(
            Promise.resolve({
                data: articles,
            }),
        );
        console.log(articles);
        const action = await thunk.callThunk({});

        expect(thunk.api.get).toHaveBeenCalled();
        expect(action.meta.requestStatus).toBe('fulfilled');
        expect(action.payload).toEqual(articles);

        // expect(thunk.dispatch).toBeCalledTimes(4); // pending, fulfilled, 2 диспатча в самом экшене
        // expect(fetchArticles).toHaveBeenCalledWith({ page: 1 });
    });

    test('fetchArticles error ', async () => {
        const thunk = new TestAsyncThunk(fetchArticles, {
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
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk({});

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('error');
    });
});
