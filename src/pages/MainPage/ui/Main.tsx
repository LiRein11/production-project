import { useTranslation } from 'react-i18next';

const Main = () => {
  const { t } = useTranslation();

  return (
    <div>
      {t('Главная страница')}
    </div>
  );
};

export default Main;
