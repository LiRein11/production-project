import { CSSProperties, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

export interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt: string;
}

export const Avatar = ({ className, src, size, alt }: AvatarProps) => {
    const styles = useMemo<CSSProperties>(() => {
        return { height: size || 100, width: size || 100 };
    }, [size]);

    return <img src={src} style={styles} className={classNames(cls.Avatar, {}, [className])} alt={alt} />;
};
