import { BugButton } from 'app/providers/ErrorBoundary';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <>
            <div>{t('Главная страница')}</div>
            <BugButton />
        </>
    );
};

export default MainPage;
