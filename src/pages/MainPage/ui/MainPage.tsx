import { useTranslation } from 'react-i18next'
import { ListBox } from 'shared/ui/ListBox/ListBox'
import { HStack } from 'shared/ui/Stack'
import Page from 'widgets/Page/Page'

const MainPage = () => {
  const { t, i18n } = useTranslation()

  return (
      <Page>
          {t('Main page')}
      </Page>
  )
}

export default MainPage
