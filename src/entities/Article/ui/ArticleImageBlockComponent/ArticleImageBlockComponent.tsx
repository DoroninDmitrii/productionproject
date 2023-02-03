import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { ArticleImageBlock } from '../../model/types/article'
import cls from './ArticleImageBlockComponent.module.scss'

interface ArticleImageBlockComponentProps {
  className?: string
  block: ArticleImageBlock
}

export const ArticleImageBlockComponent = memo((props: ArticleImageBlockComponentProps) => {
  const { className, block } = props
  const { t, i18n } = useTranslation()

  return (
      <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
          {t('ArticleImageBlockComponent')}
      </div>
  )
})

export default ArticleImageBlockComponent
