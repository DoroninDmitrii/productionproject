import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './ArticleTextBlockComponent.module.scss'

interface ArticleTextBlockComponentProps {
  className?: string
}

export const ArticleTextBlockComponent = ({ className }: ArticleTextBlockComponentProps) => {
  const { t, i18n } = useTranslation()

  return (
      <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
          {t('ArticleImageBlockComponent')}
      </div>
  )
}

export default ArticleTextBlockComponent
