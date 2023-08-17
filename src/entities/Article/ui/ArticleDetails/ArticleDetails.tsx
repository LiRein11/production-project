import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/getArticleDetails';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slices/articleDetailsSlice';

import { renderArticleBlock } from './renderBlock';

import CalendarIcon from '@/shared/assets/icons/calendar-20-20.svg';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicReducerLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { ToggleFeatures } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import {
    Text as TextDeprecated,
    ETextAlign,
    ETextTheme,
    ETextSize,
} from '@/shared/ui/deprecated/Text';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

import cls from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
    className?: string;
    id?: string;
}

const Deprecated = () => {
    const article = useSelector(getArticleDetailsData);

    return (
        <>
            <HStack justify="center" max className={cls.avatarWrapper}>
                <AvatarDeprecated src={article?.img} size={200} alt="avatar" />
            </HStack>
            <VStack gap="4" max data-testid="ArticleDetails.Info">
                <TextDeprecated
                    className={cls.title}
                    title={article?.title}
                    text={article?.subtitle}
                    size={ETextSize.L}
                />
                <HStack gap="8" className={cls.articleInfo}>
                    <IconDeprecated Svg={EyeIcon} className={cls.icon} />
                    <TextDeprecated text={String(article?.views)} />
                </HStack>
                <HStack gap="8" className={cls.articleInfo}>
                    <IconDeprecated Svg={CalendarIcon} className={cls.icon} />
                    <TextDeprecated text={String(article?.createdAt)} />
                </HStack>
            </VStack>
            {article?.blocks.map((block) => renderArticleBlock(block))}
        </>
    );
};

const Redesigned = () => {
    const article = useSelector(getArticleDetailsData);

    return (
        <>
            <Text title={article?.title} size="l" bold />
            <Text title={article?.subtitle} />
            <AppImage
                fallback={<Skeleton width="100%" height={420} border="16px" />}
                src={article?.img}
                className={cls.img}
            />

            {article?.blocks.map((block) => renderArticleBlock(block))}
        </>
    );
};

const reducers: ReducersList = { articleDetails: articleDetailsReducer };

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const { className, id } = props;
    const { t } = useTranslation('article-details');

    const article = useSelector(getArticleDetailsData);
    const error = useSelector(getArticleDetailsError);
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const dispatch = useAppDispatch();

    useInitialEffect(() => {
        dispatch(fetchArticleById(id));
    });

    let content;

    if (isLoading) {
        content = (
            <>
                <SkeletonDeprecated className={cls.avatar} width={200} height={200} border="50%" />
                <SkeletonDeprecated className={cls.title} width={300} height={32} />
                <SkeletonDeprecated className={cls.skeleton} width={600} height={24} />
                <SkeletonDeprecated className={cls.skeleton} width="100%" height={200} />
                <SkeletonDeprecated className={cls.skeleton} width="100%" height={200} />
            </>
        );
    } else if (error) {
        content = (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={<Text title={t('ErrorArticle')} align="center" variant="error" />}
                off={
                    <TextDeprecated
                        title={t('ErrorArticle')}
                        align={ETextAlign.CENTER}
                        theme={ETextTheme.ERROR}
                    />
                }
            />
        );
    } else {
        content = (
            <ToggleFeatures feature="isAppRedesigned" off={<Deprecated />} on={<Redesigned />} />
        );
    }

    return (
        <DynamicReducerLoader reducers={reducers} removeAfterUnmount>
            <VStack gap="16" max className={classNames(cls.ArticleDetails, {}, [className])}>
                {content}
            </VStack>
        </DynamicReducerLoader>
    );
});
