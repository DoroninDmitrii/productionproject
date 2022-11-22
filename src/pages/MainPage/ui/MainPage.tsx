import { BugButton } from 'app/providers/ErrorBoundary'
import { Counter } from 'entities/Counter'
import React from 'react'
import { useTranslation } from 'react-i18next'

const MainPage = () => {
  const { t, i18n } = useTranslation()
  return (
      <div>
          <Counter/>
          <BugButton/>
          {t('Main page')}
      </div>
  )
}

export default MainPage
