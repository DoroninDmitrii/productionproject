import { useTranslation } from 'react-i18next'
import { ListBox } from 'shared/ui/ListBox/ListBox'
import { HStack } from 'shared/ui/Stack'
import Page from 'widgets/Page/Page'

const MainPage = () => {
  const { t, i18n } = useTranslation()

  return (
      <Page>
          {t('Main page')}
          <HStack>
              <ListBox
                  defaultValue={'Chose'}
                  onChange={(value: string) => {}}
                  value={undefined}
                  items={[
                    { value: '1', content: '1' },
                    { value: '2', content: '2', disabled: true },
                    { value: '3', content: '3' }
                  ]}
              />
          </HStack>
      </Page>
  )
}

export default MainPage
