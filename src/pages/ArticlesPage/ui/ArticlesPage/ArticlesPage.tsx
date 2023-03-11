import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { ArticleList } from 'entities/Article'
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import Page from 'widgets/Page/Page'
import {
  getArticlesPageError,
  getArticlesPageHasMore,
  getArticlesPageInited,
  getArticlesPageIsLoading,
  getArticlesPageNum,
  getArticlesPageView
} from '../../model/selectors/articlesPageSelectors'
import { articlePageReducer, getArticles } from '../../model/slices/articlePageSlice'
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage'
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage'
import ArticlesPageFilters from '../ArticlesPageFilters/ArticlesPageFilters'
import cls from './ArticlePage.module.scss'

interface ArticlePageProps {
  className?: string
}

const reducers: ReducerList = {
  articlePage: articlePageReducer
}

export const ArticlePage = ({ className }: ArticlePageProps) => {
  const { t, i18n } = useTranslation('article')
  const dispatch = useAppDispatch()
  const articles = useSelector(getArticles.selectAll)
  const isLoading = useSelector(getArticlesPageIsLoading)
  const view = useSelector(getArticlesPageView)
  const error = useSelector(getArticlesPageError)
  const page = useSelector(getArticlesPageNum)
  const hasMore = useSelector(getArticlesPageHasMore)
  const inited = useSelector(getArticlesPageInited)

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage())
  }, [dispatch])

  useInitialEffect(() => {
    dispatch(initArticlesPage())
  })

  return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
          <Page onScrollEnd={onLoadNextPart} className={classNames('', {}, [className])}>
              <ArticlesPageFilters/>
              <ArticleList
                isLoading={isLoading}
                view={view}
                articles={articles}
                className={cls.list}
              />
          </Page>
      </DynamicModuleLoader>
  )
}

export default memo(ArticlePage)
