import { HTMLAttributeAnchorTarget } from 'react';
import { useTranslation } from 'react-i18next';

import { EArticleBlockType } from '../../model/consts/consts';
import { Article, ArticleTextBlock, ArticleView } from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import { ARTICLE_LIST_ITEM_LOCALSTORAGE_IDX } from '@/shared/consts/localstorage';
import { getRouteArticleDetails } from '@/shared/consts/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useHover } from '@/shared/lib/hooks/useHover/useHover';
import { AppImage } from '@/shared/ui/AppImage';
import { AppLink } from '@/shared/ui/AppLink';
import { Avatar } from '@/shared/ui/Avatar';
import { Button, EButtonTheme } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { Icon } from '@/shared/ui/Icon';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Text } from '@/shared/ui/Text';

import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
    index?: number;
}

export const ArticleListItem = (props: ArticleListItemProps) => {
    const { className, article, view, target, index } = props;
    const { t } = useTranslation();

    const [isHover, bindHover] = useHover();
    // console.log(isHover);

    const handleButtonClick = () => {
        sessionStorage.setItem(ARTICLE_LIST_ITEM_LOCALSTORAGE_IDX, JSON.stringify(index));
    };

    const types = <Text text={article.type.join(', ')} className={cls.types} />;
    const views = (
        <>
            <Text text={String(article.views)} className={cls.views} />
            <Icon Svg={EyeIcon} />
        </>
    );

    if (view === 'list') {
        const textBlock = article.blocks.find(
            (block) => block.type === EArticleBlockType.TEXT,
        ) as ArticleTextBlock;

        return (
            <div
                data-testid="ArticleListItem"
                className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
            >
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Avatar size={30} src={article.user.avatar} alt={article.title || ''} />
                        <Text text={article.user.username} className={cls.username} />
                        <Text text={article.createdAt} className={cls.date} />
                    </div>
                    <Text title={article.title} className={cls.title} />
                    {types}
                    <AppImage
                        fallback={<Skeleton width="100%" height={250} />}
                        src={article.img}
                        className={cls.img}
                        alt={article.title}
                    />
                    {textBlock && (
                        <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />
                    )}
                    <div className={cls.footer}>
                        <AppLink to={getRouteArticleDetails(article.id)} target={target}>
                            <Button onClick={handleButtonClick} theme={EButtonTheme.OUTLINE}>
                                {t('ReadMore')}
                            </Button>
                        </AppLink>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div {...bindHover} className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <AppLink
                data-testid="ArticleListItem"
                onClick={handleButtonClick}
                to={getRouteArticleDetails(article.id)}
                target={target}
            >
                <Card className={cls.card}>
                    <div className={cls.imageWrapper}>
                        <AppImage
                            fallback={<Skeleton width={200} height={200} />}
                            alt={article.title}
                            src={article.img}
                            className={cls.img}
                        />
                        <Text text={article.createdAt} className={cls.date} />
                    </div>
                    <div className={cls.infoWrapper}>
                        {types}
                        {views}
                    </div>
                    <Text text={article.title} className={cls.title} />
                </Card>
            </AppLink>
        </div>
    );
};
