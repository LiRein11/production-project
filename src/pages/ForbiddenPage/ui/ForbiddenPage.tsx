import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Page } from '@/widgets/Page';

const ForbiddenPage = memo(() => {
    const { t } = useTranslation();

    return <Page data-testid="ForbiddenPage">{t('NoAccess')}</Page>;
});

export default ForbiddenPage;
