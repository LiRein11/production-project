import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { User } from '@/entities/User';
import { OnEditBtn } from '@/features/onEditBtn';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

interface ArticleAdditionalInfoProps {
    className?: string;
    author: User;
    createdAt: string;
    views: number;
}

export const ArticleAdditionalInfo = memo((props: ArticleAdditionalInfoProps) => {
    const { className, author, createdAt, views } = props;
    const { t } = useTranslation();

    // const isLoading = useSelector(getArticleDetailsIsLoading);

    // if (isLoading) {
    //     return (
    //         <VStack max gap="32">
    //             <HStack gap="8">
    //                 <Skeleton height={32} width={32} border="50%" />
    //                 <Skeleton height={24} width={50} />
    //                 <Skeleton height={24} width={80} />
    //             </HStack>
    //             <Skeleton height={40} width={150} border="50%" />
    //             <Skeleton height={40} width={120} />
    //         </VStack>
    //     );
    // }

    return (
        <VStack gap="32" className={classNames('', {}, [className])}>
            <HStack gap="8">
                <Avatar src={author?.avatar} username={author?.username} size={32} />
                <Text text={createdAt} />
            </HStack>
            <OnEditBtn />
            <Text text={t('{{count}} views', { count: views })} />
        </VStack>
    );
});
