import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { getArticlesPageOrder, getArticlesPageSearch, getArticlesPageSort, getArticlesPageType, getArticlesPageView } from '../../model/selectors/articlesPageSelectors'
import { articlePageActions } from '../../model/slices/articlePageSlice'
import { ArticleViewSelector } from 'features/ArticleViewSelector'
import { ArticleSortSelector, ArticleTypeTabs, ArticleView } from 'entities/Article'
import Card from 'shared/ui/Card/Card'
import { Input } from 'shared/ui/Input/Input'
import { SortOrder } from 'shared/types'
import { ArticleSortField, ArticleType } from 'entities/Article/index'
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList'
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce'
import cls from './ArticlesPageFilters.module.scss'

interface ArticlesPageFiltersProps {
  className?: string
}

export const ArticlesPageFilters = memo((props: ArticlesPageFiltersProps) => {
  const { className } = props
  const { t, i18n } = useTranslation('article')
  const dispatch = useAppDispatch()
  const view = useSelector(getArticlesPageView)
  const sort = useSelector(getArticlesPageSort)
  const order = useSelector(getArticlesPageOrder)
  const search = useSelector(getArticlesPageSearch)
  const type = useSelector(getArticlesPageType)

  const fetchData = useCallback(() => {
    dispatch(fetchArticlesList({ replace: true }))
  }, [dispatch])

  const debouncedFetchData = useDebounce(fetchData, 500)

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlePageActions.setView(view))
    dispatch(articlePageActions.setPage(1))
  }, [dispatch])

  const onChangeSort = useCallback((newSort: ArticleSortField) => {
    dispatch(articlePageActions.setSort(newSort))
    dispatch(articlePageActions.setPage(1))
    fetchData()
  }, [dispatch, fetchData])

  const onChangeOrder = useCallback((newOrder: SortOrder) => {
    dispatch(articlePageActions.setOrder(newOrder))
    dispatch(articlePageActions.setPage(1))
    fetchData()
  }, [dispatch, fetchData])

  const onChangeSearch = useCallback((search: string) => {
    dispatch(articlePageActions.setSearch(search))
    dispatch(articlePageActions.setPage(1))
    debouncedFetchData()
  }, [dispatch, debouncedFetchData])

  const onChangeType = useCallback((value: ArticleType) => {
    dispatch(articlePageActions.setType(value))
    dispatch(articlePageActions.setPage(1))
    fetchData()
  }, [dispatch, fetchData])

  return (
      <div className={classNames(cls.ArticlesPageFilters, {}, [className])}>
          <div className={cls.sortWrapper}>
              <ArticleSortSelector
                order={order}
                sort={sort}
                onChangeOrder={onChangeOrder}
                onChangeSort={onChangeSort}
              />
              <ArticleViewSelector view={view} onViewClick={onChangeView}/>
          </div>
          <Card className={cls.search}>
              <Input
                value={search}
                onChange={onChangeSearch}
                placeholder={t('Search')}
              />
          </Card>
          <ArticleTypeTabs
            className={cls.tabs}
            value={type}
            onChangeType={onChangeType}
          />
      </div>
  )
})

export default ArticlesPageFilters
