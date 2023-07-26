import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/ui/Page/Page';

const ForbiddenPage = memo(() => {
    const { t } = useTranslation();

    return <Page>{t('NoAccess')}</Page>;
});

export default ForbiddenPage;
