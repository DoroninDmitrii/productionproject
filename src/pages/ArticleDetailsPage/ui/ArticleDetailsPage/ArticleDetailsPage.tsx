import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { ArticleDetails } from 'entities/Article'

interface ArticleDetailsPageProps {
  className?: string
}

export const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t, i18n } = useTranslation('article')

  return (
      <div className={classNames('', {}, [className])}>
          <ArticleDetails />
      </div>
  )
}

export default memo(ArticleDetailsPage)
