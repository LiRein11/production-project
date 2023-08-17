import { CSSProperties, useMemo } from 'react';

import UserIcon from '../../../assets/icons/user-32-32.svg';
import { AppImage } from '../../redesigned/AppImage';
import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';
import { HStack } from '../Stack';
import { Text } from '../Text';

import { classNames, Mods } from '@/shared/lib/classNames/classNames';

import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
    username?: string;
}

export const Avatar = ({ className, src, size = 100, alt, username }: AvatarProps) => {
    const mods: Mods = {};

    const styles = useMemo<CSSProperties>(
        () => ({
            width: size,
            height: size,
        }),
        [size],
    );

    const fallback = <Skeleton width={size} height={size} border="50%" />;
    const errorFallback = <Icon width={size} height={size} Svg={UserIcon} />;

    return (
        <HStack gap="8">
            <AppImage
                fallback={fallback}
                errorFallback={errorFallback}
                src={src}
                alt={alt}
                style={styles}
                className={classNames(cls.Avatar, mods, [className])}
            />
            {username && <Text text={username} bold />}
        </HStack>
    );
};
