import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { Page } from 'widgets/Page';

interface ArticleEditPageProps {
    className?: string;
}

const ArticleEditPage = memo((props: ArticleEditPageProps) => {
    const { className } = props;
    const { t } = useTranslation('articles');
    const { id } = useParams<{ id: string }>();
    const isEdit = Boolean(id);

    return <Page className={classNames('', {}, [className])}>{isEdit ? t('EditPage') + id : t('CreateNewArticle')}</Page>;
});

export default ArticleEditPage;
