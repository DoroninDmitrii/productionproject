import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const MainPage = () => {
    const { t, i18n } = useTranslation();

    return <Page data-testid={'MainPage'}>{t('Main page')}</Page>;
};

export default MainPage;
