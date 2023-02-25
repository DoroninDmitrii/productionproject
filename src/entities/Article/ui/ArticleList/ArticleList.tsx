import { Article, ArticleView } from '../../model/types/article'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import ArticleListItem from '../ArticleListItem/ArticleListItem'
import cls from './ArticleList.module.scss'

interface ArticleListProps {
  className?: string
  articles: Article[]
  isLoading?: boolean
  view?: ArticleView
}

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    className,
    articles,
    isLoading,
    view = ArticleView.SMALL
  } = props

  const { t, i18n } = useTranslation()

  const renderArticle = (article: Article) => {
    return <ArticleListItem article={article} view={view} className={cls.card} key={article.id} />
  }

  return (
      <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
          {articles.length > 0
            ? articles.map(renderArticle)
            : null}
      </div>
  )
})

export default ArticleList
