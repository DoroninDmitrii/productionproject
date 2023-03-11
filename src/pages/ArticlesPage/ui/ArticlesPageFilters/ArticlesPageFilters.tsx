import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { getArticlesPageView } from '../../model/selectors/articlesPageSelectors'
import { articlePageActions } from '../../model/slices/articlePageSlice'
import { ArticleViewSelector } from 'features/ArticleViewSelector'
import { ArticleSortSelector, ArticleView } from 'entities/Article'
import Card from 'shared/ui/Card/Card'
import { Input } from 'shared/ui/Input/Input'
import cls from './ArticlesPageFilters.module.scss'

interface ArticlesPageFiltersProps {
  className?: string
}

export const ArticlesPageFilters = memo((props: ArticlesPageFiltersProps) => {
  const { className } = props
  const { t, i18n } = useTranslation('acticle')
  const dispatch = useAppDispatch()
  const view = useSelector(getArticlesPageView)

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(articlePageActions.setView(view))
  }, [dispatch])

  return (
      <div className={classNames(cls.ArticlesPageFilters, {}, [className])}>
          <div className={cls.sortWrapper}>
              <ArticleSortSelector
                order={}
                sort={}
                onChangeOrder={}
                onChangeSort={}
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
