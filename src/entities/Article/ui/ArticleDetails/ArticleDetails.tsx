import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicReducerLoader, ReducersList } from 'shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { ETextAlign, ETextSize, ETextTheme, Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/getArticleDetails';
import cls from './ArticleDetails.module.scss';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { ArticleBlock, EArticleBlockType } from '../../model/types/article';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

interface ArticleDetailsProps {
    className?: string;
    id: string;
}

const renderBlock = (block: ArticleBlock) => {
    switch (block.type) {
    case EArticleBlockType.CODE:
        return <ArticleCodeBlockComponent key={block.id} className={cls.block} block={block} />;
    case EArticleBlockType.IMAGE:
        return <ArticleImageBlockComponent key={block.id} className={cls.block} block={block} />;
    case EArticleBlockType.TEXT:
        return <ArticleTextBlockComponent key={block.id} className={cls.block} block={block} />;
    default:
        return null;
    }
};

const reducers: ReducersList = { articleDetails: articleDetailsReducer };

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const { className, id } = props;
    const { t } = useTranslation('article-details');

    const article = useSelector(getArticleDetailsData);
    const error = useSelector(getArticleDetailsError);
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
            dispatch(fetchArticleById(id));
        }
    }, [dispatch, id]);

    let content;

    if (isLoading) {
        content = (
            <>
                <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
                <Skeleton className={cls.title} width={300} height={32} />
                <Skeleton className={cls.skeleton} width={600} height={24} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
                <Skeleton className={cls.skeleton} width="100%" height={200} />
            </>
        );
    } else if (error) {
        content = <Text title={t('ErrorArticle')} align={ETextAlign.CENTER} theme={ETextTheme.ERROR} />;
    } else {
        content = (
            <>
                <div className={cls.avatarWrapper}>
                    <Avatar src={article?.img} size={200} alt="avatar" />
                </div>
                <Text className={cls.title} title={article?.title} text={article?.subtitle} size={ETextSize.L} />
                <div className={cls.articleInfo}>
                    <Icon Svg={EyeIcon} className={cls.icon} />
                    <Text text={String(article?.views)} />
                </div>
                <div className={cls.articleInfo}>
                    <Icon Svg={CalendarIcon} className={cls.icon} />
                    <Text text={String(article?.createdAt)} />
                </div>
                {article?.blocks.map((block) => renderBlock(block))}
            </>
        );
    }

    return (
        <DynamicReducerLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetails, {}, [className])}>{content}</div>
        </DynamicReducerLoader>
    );
});
