import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();

    return <div className={classNames('', {}, [className])}>{t('ArticlesPage')}</div>;
};

export default memo(ArticlesPage);
