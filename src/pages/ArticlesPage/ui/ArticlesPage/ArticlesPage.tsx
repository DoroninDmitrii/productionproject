import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { ArticleList, ArticleView } from 'entities/Article'
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articlePageActions, articlePageReducer, getArticles } from '../../model/slices/articlePageSlice'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { fetchArticlesList } from '../../model/services/fetchArticlesList'
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView
} from '../../model/selectors/articlesPageSelectors'
import { ArticleViewSelector } from 'features/ArticleViewSelector'

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

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlePageActions.setView(view))
  }, [dispatch])

  useInitialEffect(() => {
    dispatch(fetchArticlesList())
    dispatch(articlePageActions.initState())
  })

  return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
          <div className={classNames('', {}, [className])}>
              <ArticleViewSelector view={view} onViewClick={onChangeView}/>
              <ArticleList
                isLoading={isLoading}
                view={view}
                articles={articles}
              />
          </div>
      </DynamicModuleLoader>
  )
}

export default memo(ArticlePage)
