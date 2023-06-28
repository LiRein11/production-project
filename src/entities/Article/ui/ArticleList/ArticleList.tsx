import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
}

const getSkeletons = (view: ArticleView) => {
    return new Array(view === 'grid' ? 15 : 3)
        .fill(0)
        .map((item, index) => <ArticleListItemSkeleton className={cls.card} key={index} view={view} />);
};

export const ArticleList = memo((props: ArticleListProps) => {
    const { className, articles, isLoading, view = 'grid' } = props;
    const { t } = useTranslation();

    if (isLoading) {
        return <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>{getSkeletons(view)}</div>;
    }

    const renderArticle = (article: Article) => {
        return <ArticleListItem article={article} view={view} className={cls.card} key={article.id} />;
    };

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles?.length > 0 ? articles?.map(renderArticle) : null}
        </div>
    );
});
