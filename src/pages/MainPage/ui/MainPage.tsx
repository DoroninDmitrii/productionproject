import { useTranslation } from 'react-i18next'
import Page from '@/widgets/Page/Page'
import StarRating from '@/shared/ui/StarRating/StarRating'

const MainPage = () => {
  const { t, i18n } = useTranslation()

  return (
      <Page>
          {t('Main page')}
          <StarRating size={50}/>
      </Page>
  )
}

export default MainPage
