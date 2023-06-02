import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation();

    const [value, setValue] = useState('');

    const onChange = (val: string) => {
        setValue(val);
    };

    return (
        <>
            <div>{t('Главная страница')}</div>
            {/* <Counter /> */}
            {/* <BugButton /> */}
        </>
    );
};

export default MainPage;
