import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { getArticlesPageOrder, getArticlesPageSort, getArticlesPageView } from '../../model/selectors/articlesPageSelectors'
import { articlePageActions } from '../../model/slices/articlePageSlice'
import { ArticleViewSelector } from 'features/ArticleViewSelector'
import { ArticleSortSelector, ArticleView } from 'entities/Article'
import Card from 'shared/ui/Card/Card'
import { Input } from 'shared/ui/Input/Input'
import { SortOrder } from 'shared/types'
import { ArticleSortField } from 'entities/Article/model/types/article'
import cls from './ArticlesPageFilters.module.scss'

interface ArticlesPageFiltersProps {
  className?: string
}

export const ArticlesPageFilters = memo((props: ArticlesPageFiltersProps) => {
  const { className } = props
  const { t, i18n } = useTranslation('acticle')
  const dispatch = useAppDispatch()
  const view = useSelector(getArticlesPageView)
  const sort = useSelector(getArticlesPageSort)
  const order = useSelector(getArticlesPageOrder)

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlePageActions.setView(view))
  }, [dispatch])

  const onChangeSort = useCallback((newSort: ArticleSortField) => {
    dispatch(articlePageActions.setSort(newSort))
  }, [dispatch])

  const onChangeOrder = useCallback((newOrder: SortOrder) => {
    dispatch(articlePageActions.setOrder(newOrder))
  }, [dispatch])

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
              <Input placeholder={t('Search')}/>
          </Card>
      </div>
  )
})

export default ArticlesPageFilters
