import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Page } from '@/widgets/Page';

const MainPage = memo(() => {
    const { t } = useTranslation();

    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <>
            <Page data-testid="MainPage">{t('Главная страница')}</Page>
            {/* <Counter /> */}
            {/* <BugButton /> */}
        </>
    );
});

export default MainPage;
