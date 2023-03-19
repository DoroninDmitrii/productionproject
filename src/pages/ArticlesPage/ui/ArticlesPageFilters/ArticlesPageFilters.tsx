import { memo, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { getArticlesPageOrder, getArticlesPageSearch, getArticlesPageSort, getArticlesPageType, getArticlesPageView } from '../../model/selectors/articlesPageSelectors'
import { articlePageActions } from '../../model/slices/articlePageSlice'
import { ArticleViewSelector } from 'features/ArticleViewSelector'
import { ArticleSortSelector, ArticleView } from 'entities/Article'
import Card from 'shared/ui/Card/Card'
import { Input } from 'shared/ui/Input/Input'
import { SortOrder } from 'shared/types'
import { ArticleSortField, ArticleType } from 'entities/Article/model/types/article'
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList'
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce'
import Tabs, { TabItem } from 'shared/ui/Tabs/Tabs'
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

  const onChangeType = useCallback((tab: TabItem) => {
    dispatch(articlePageActions.setType(tab.value as ArticleType))
    dispatch(articlePageActions.setPage(1))
    debouncedFetchData()
  }, [dispatch, debouncedFetchData])

  const typeTabs = useMemo<TabItem[]>(() => [
    {
      value: ArticleType.ALL,
      content: t('All')
    },
    {
      value: ArticleType.IT,
      content: t('It')
    },
    {
      value: ArticleType.ECONOMICS,
      content: t('Economic')
    },
    {
      value: ArticleType.SCIENCE,
      content: t('Science')
    }
  ], [t])

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
          <Tabs
            tabs={typeTabs}
            value={type}
            onTabClick={onChangeType}
          />
      </div>
  )
})

export default ArticlesPageFilters
