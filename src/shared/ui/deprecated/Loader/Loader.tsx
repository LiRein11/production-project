// import { classNames } from 'shared/lib/classNames/classNames';
import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Loader.module.scss';

export interface LoaderProps {
    className?: string;
}

/**
 * Устарел, используются новые компоненты из папки redesigned
 * @deprecated
 */
export const Loader = ({ className }: LoaderProps) => {
    return (
        <div className={classNames(cls['lds-ellipsis'], {}, [className])}>
            <div />
            <div />
            <div />
            <div />
        </div>
    );
};
