import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { useHover } from 'shared/lib/hooks/useHover/useHover';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, EButtonTheme } from 'shared/ui/Button/Button';
import { Card } from 'shared/ui/Card/Card';
import { Icon } from 'shared/ui/Icon/Icon';
import { Text } from 'shared/ui/Text/Text';
import { ARTICLE_LIST_ITEM_LOCALSTORAGE_IDX } from 'shared/consts/localstorage';
import { Article, ArticleTextBlock, ArticleView, EArticleBlockType } from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
    className?: string;
    article?: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
    index?: number;
}

export const ArticleListItem = (props: ArticleListItemProps) => {
    const { className, article, view, target, index } = props;
    const { t } = useTranslation();

    const [isHover, bindHover] = useHover();
    console.log(isHover);

    const handleButtonClick = () => {
        sessionStorage.setItem(ARTICLE_LIST_ITEM_LOCALSTORAGE_IDX, JSON.stringify(index));
    };

    const types = <Text text={article?.type.join(', ')} className={cls.types} />;
    const views = (
        <>
            <Text text={String(article?.views)} className={cls.views} />
            <Icon Svg={EyeIcon} />
        </>
    );

    if (view === 'list') {
        const textBlock = article?.blocks.find((block) => block.type === EArticleBlockType.TEXT) as ArticleTextBlock;

        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Avatar size={30} src={article?.user.avatar} alt={article?.title || ''} />
                        <Text text={article?.user.username} className={cls.username} />
                        <Text text={article?.createdAt} className={cls.date} />
                    </div>
                    <Text title={article?.title} className={cls.title} />
                    {types}
                    <img src={article?.img} className={cls.img} alt={article?.title} />
                    {textBlock && <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />}
                    <div className={cls.footer}>
                        <AppLink to={RoutePath.article_details + article?.id} target={target}>
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
            <AppLink onClick={handleButtonClick} to={RoutePath.article_details + article?.id} target={target}>
                <Card className={cls.card}>
                    <div className={cls.imageWrapper}>
                        <img alt={article?.title} src={article?.img} className={cls.img} />
                        <Text text={article?.createdAt} className={cls.date} />
                    </div>
                    <div className={cls.infoWrapper}>
                        {types}
                        {views}
                    </div>
                    <Text text={article?.title} className={cls.title} />
                </Card>
            </AppLink>
        </div>
    );
};
