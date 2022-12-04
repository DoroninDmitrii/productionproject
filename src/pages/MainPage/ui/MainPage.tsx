import { BugButton } from 'app/providers/ErrorBoundary'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Input } from 'shared/ui/Input/Input'

const MainPage = () => {
  const { t, i18n } = useTranslation()

  return (
      <div>
          <BugButton/>

          {t('Main page')}
      </div>
  )
}

export default MainPage
