import { useTranslation } from 'react-i18next'
import { Page } from '@/widgets/Page'
import { RatingCard } from '@/entities/Rating'

const MainPage = () => {
  const { t, i18n } = useTranslation()

  return (
      <Page>
          {t('Main page')}
      </Page>
  )
}

export default MainPage
