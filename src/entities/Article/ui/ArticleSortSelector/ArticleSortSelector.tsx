import { ArticleSortField } from 'entities/Article/model/types/article'
import { memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Select, SelectOptions } from 'shared/ui/Select/Select'
import { SortOrder } from 'shared/types'
import cls from './ArticleSortSelector.module.scss'

interface ArticleSortSelectorProps {
  className?: string
  sort: ArticleSortField
  order: SortOrder
  onChangeOrder: (newOrder: SortOrder) => void
  onChangeSort: (newSort: ArticleSortField) => void
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
  const { className } = props
  const { t, i18n } = useTranslation('acticle')

  const orderOptions = useMemo<SelectOptions[]>(() => [
    {
      value: 'asc',
      content: t('ascending')
    },
    {
      value: 'desc',
      content: t('descending')
    }
  ], [t])

  const sortFieldOptions = useMemo<SelectOptions[]>(() => [
    {
      value: ArticleSortField.CREATED,
      content: t('data')
    },
    {
      value: ArticleSortField.TITLE,
      content: t('title')
    },
    {
      value: ArticleSortField.VIEWS,
      content: t('watching')
    }
  ], [t])

  return (
      <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
          <Select options={sortFieldOptions} label={t('Sort by')}/>
          <Select options={orderOptions} label={t('by')}/>
      </div>
  )
})

export default ArticleSortSelector
