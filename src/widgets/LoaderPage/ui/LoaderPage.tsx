import { classNames } from '@/shared/lib/classNames/classNames';
import { Loader } from '@/shared/ui/deprecated/Loader';

import cls from './LoaderPage.module.scss';

export interface LoaderPageProps {
    className?: string;
}

export const LoaderPage = ({ className }: LoaderPageProps) => {
    return (
        <div className={classNames(cls.LoaderPage, {}, [className])}>
            <Loader />
        </div>
    );
};
