import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './PageError.module.scss';

export interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
    const reloadPage = () => {
        window.location.reload(); // Перезагрузка страницы
    };

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p>Произошла ошибка</p>
            <button onClick={reloadPage}>Перезагрузить страницу</button>
        </div>
    );
};
