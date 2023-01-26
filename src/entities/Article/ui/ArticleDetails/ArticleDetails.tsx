import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './ArticleDetails.module.scss'

interface ArticleDetailsProps {
  className?: string
}

export const ArticleDetails = ({ className }: ArticleDetailsProps) => {
  const { t, i18n } = useTranslation()

  return (
      <div className={classNames(cls.ArticleDetails, {}, [className])}>
          {t('ArticleImageBlockComponent')}
      </div>
  )
}

export default ArticleDetails
