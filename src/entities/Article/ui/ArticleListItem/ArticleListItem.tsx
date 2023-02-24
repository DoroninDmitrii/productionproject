import { Article, ArticleView } from '../../model/types/article'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ArticleListItem.module.scss'

interface ArticleListItemProps {
  className?: string
  article: Article
  view: ArticleView
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const { className, article, view } = props
  const { t, i18n } = useTranslation()

  return (
      <div className={classNames(cls.ArticleListItem, {}, [className])}>
          {article.title}
      </div>
  )
})

export default ArticleListItem
