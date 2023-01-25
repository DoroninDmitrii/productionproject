import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'

interface ArticlePageProps {
  className?: string
}

export const ArticlePage = ({ className }: ArticlePageProps) => {
  const { t, i18n } = useTranslation('article')

  return (
      <div className={classNames('', {}, [className])}>
          {t('Article page')}
      </div>
  )
}

export default memo(ArticlePage)
