import { useTranslation } from 'react-i18next'
import { useSearchParams } from 'react-router-dom'
import { memo, useCallback } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { DynamicModuleLoader, ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect'
import Page from '@/widgets/Page/Page'
import { articlePageReducer } from '../../model/slices/articlePageSlice'
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage'
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage'
import ArticlesPageFilters from '../ArticlesPageFilters/ArticlesPageFilters'
import ArticleInfiniteList from '../ArticleInfiniteList/ArticleInfiniteList'
import cls from './ArticlePage.module.scss'

interface ArticlePageProps {
  className?: string
}

const reducers: ReducerList = {
  articlePage: articlePageReducer
}

export const ArticlesPage = ({ className }: ArticlePageProps) => {
  const { t, i18n } = useTranslation('article')
  const dispatch = useAppDispatch()

  const [searchParams] = useSearchParams()

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlesPage())
  }, [dispatch])

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams))
  })

  return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
          <Page
              onScrollEnd={onLoadNextPart}
              className={classNames('', {}, [className])}
          >
              <ArticlesPageFilters />
              <ArticleInfiniteList className={cls.list} />
          </Page>
      </DynamicModuleLoader>
  )
}

export default memo(ArticlesPage)
