import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'

interface ArticleDetailsPageProps {
  className?: string
}

export const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t, i18n } = useTranslation('article')

  return (
      <div className={classNames('', {}, [className])}>
          {t('Article page')}
      </div>
  )
}

export default memo(ArticleDetailsPage)
