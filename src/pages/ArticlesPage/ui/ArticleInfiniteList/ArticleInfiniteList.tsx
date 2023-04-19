import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { ArticleList } from 'entities/Article'
import { getArticles } from '../../model/slices/articlePageSlice'
import {
  getArticlesPageError,
  getArticlesPageHasMore,
  getArticlesPageInited,
  getArticlesPageIsLoading,
  getArticlesPageNum,
  getArticlesPageView
} from '../../model/selectors/articlesPageSelectors'
import { Text } from 'shared/ui/Text/Text'

interface ArticleInfiniteListProps {
  className?: string
}

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
  const { className } = props
  const { t, i18n } = useTranslation('article')

  const dispatch = useAppDispatch()

  const articles = useSelector(getArticles.selectAll)
  const isLoading = useSelector(getArticlesPageIsLoading)
  const view = useSelector(getArticlesPageView)
  const error = useSelector(getArticlesPageError)
  const page = useSelector(getArticlesPageNum)
  const hasMore = useSelector(getArticlesPageHasMore)
  const inited = useSelector(getArticlesPageInited)

  if (error) {
    // @ts-ignore
    return <Text>{t('Mistake is happened')}</Text>
  }

  return (
      <ArticleList
          isLoading={isLoading}
          view={view}
          articles={articles}
          className={className}
      />
  )
})

export default ArticleInfiniteList
