import { BugButton } from 'app/providers/ErrorBoundary'
import React from 'react'
import { useTranslation } from 'react-i18next'

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
