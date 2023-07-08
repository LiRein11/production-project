import { FC, HTMLAttributeAnchorTarget, memo, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Virtuoso, VirtuosoGrid, VirtuosoGridHandle } from 'react-virtuoso';
import { classNames } from 'shared/lib/classNames/classNames';
import { ETextSize, Text } from 'shared/ui/Text/Text';
import { ArticlesPageFilters } from 'pages/ArticlesPage/ui/ArticlesPageFilters/ArticlesPageFilters';
import { ARTICLE_LIST_ITEM_LOCALSTORAGE_IDX } from 'shared/consts/localstorage';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
    onLoadNextPart?: () => void;
}

const getSkeletons = () => {
    return new Array(3).fill(0).map((_, index) => <ArticleListItemSkeleton className={cls.card} key={index} view="list" />);
};

const Header = () => <ArticlesPageFilters className={cls.card} />;

export const ArticleList = memo((props: ArticleListProps) => {
    const { className, articles, isLoading, view = 'grid', target, onLoadNextPart } = props;
    const { t } = useTranslation('articles');
    const [selectedArticleId, setSelectedArticleId] = useState(1);
    const virtuosoGridRef = useRef<VirtuosoGridHandle>(null);
    const renderArticle = (index: number, article: Article) => <ArticleListItem article={article} view={view} className={cls.card} key={article.id} target={target} index={index} />;

    const Footer = memo(() => {
        if (isLoading) {
            return <div className={cls.skeleton}>{getSkeletons()}</div>;
        }
        return null;
    });

    useEffect(() => {
        const idx = sessionStorage.getItem(ARTICLE_LIST_ITEM_LOCALSTORAGE_IDX) || 1;
        setSelectedArticleId(+idx);

        window.addEventListener('error', (e) => {
            if (e.message === 'ResizeObserver loop limit exceeded') {
                const resizeObserverErrDiv = document.getElementById('webpack-dev-server-client-overlay-div');
                const resizeObserverErr = document.getElementById('webpack-dev-server-client-overlay');
                if (resizeObserverErr) {
                    resizeObserverErr.setAttribute('style', 'display: none');
                }
                if (resizeObserverErrDiv) {
                    resizeObserverErrDiv.setAttribute('style', 'display: none');
                }
            }
        });
    }, []);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;
        if (view === 'grid') {
            timeoutId = setTimeout(() => {
                if (virtuosoGridRef.current) {
                    virtuosoGridRef.current.scrollToIndex(selectedArticleId);
                }
            }, 100);
        }

        return () => clearTimeout(timeoutId);
    }, [selectedArticleId, view]);

    // eslint-disable-next-line react/no-unstable-nested-components
    const ItemContainerComp: FC<{ height: number; width: number; index: number }> = ({ height, width, index }) => (
        <div className={cls.ItemContainer}>
            <ArticleListItemSkeleton key={index} view={view} className={cls.card} />
        </div>
    );

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text size={ETextSize.L} title={t('Articles not found')} />
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {view === 'list' ? (
                <Virtuoso
                    style={{ height: '100%' }}
                    data={articles}
                    itemContent={renderArticle}
                    endReached={onLoadNextPart}
                    initialTopMostItemIndex={selectedArticleId}
                    components={{
                        Header,
                        Footer,
                    }}
                />
            ) : (
                <VirtuosoGrid
                    ref={virtuosoGridRef}
                    totalCount={articles.length}
                    components={{
                        Header,
                        ScrollSeekPlaceholder: ItemContainerComp,
                    }}
                    endReached={onLoadNextPart}
                    data={articles}
                    itemContent={renderArticle}
                    listClassName={cls.itemsWrapper}
                    scrollSeekConfiguration={{
                        enter: (velocity) => Math.abs(velocity) > 200,
                        exit: (velocity) => Math.abs(velocity) < 30,
                    }}
                />
            )}

            {/* {articles?.length > 0 ? articles?.map(renderArticle) : null} */}
            {/* {isLoading && getSkeletons(view)} */}
        </div>
    );
});
