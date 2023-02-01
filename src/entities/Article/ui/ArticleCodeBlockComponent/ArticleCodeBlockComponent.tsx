import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import cls from './ArticleTextBlockComponent.module.scss'

interface ArticleCodeBlockComponentProps {
  className?: string
}

export const ArticleCodeBlockComponent = memo(({ className }: ArticleCodeBlockComponentProps) => {
  const { t, i18n } = useTranslation()

  return (
      <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
          {t('ArticleImageBlockComponent')}
      </div>
  )
})

export default ArticleCodeBlockComponent
