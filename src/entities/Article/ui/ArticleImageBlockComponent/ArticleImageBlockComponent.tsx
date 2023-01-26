import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './ArticleImageBlockComponent.module.scss'

interface ArticleImageBlockComponentProps {
  className?: string
}

export const ArticleImageBlockComponent = ({ className }: ArticleImageBlockComponentProps) => {
  const { t, i18n } = useTranslation()

  return (
      <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
          {t('ArticleImageBlockComponent')}
      </div>
  )
}

export default ArticleImageBlockComponent
