import React from 'react'
import { useTranslation } from 'react-i18next'
import Page from 'widgets/Page/Page'

const ForbiddenPage = () => {
  const { t, i18n } = useTranslation()
  return (
      <Page>
          {t('You have not right for that page')}
      </Page>
  )
}

export default ForbiddenPage
