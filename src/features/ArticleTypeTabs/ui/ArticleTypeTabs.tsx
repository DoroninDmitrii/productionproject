import { memo, useMemo, useCallback } from 'react'
import { ArticleType } from '@/entities/Article'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Tabs, TabItem } from '@/shared/ui/Tabs'

interface ArticleTypeTabsProps {
  className?: string
  value: ArticleType
  onChangeType: (type: ArticleType) => void
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
  const { className, value, onChangeType } = props
  const { t, i18n } = useTranslation('article')

  const onTabClick = useCallback((tab: TabItem) => {
    onChangeType(tab.value as ArticleType)
  }, [onChangeType])

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
      <Tabs
        value={value}
        tabs={typeTabs}
        onTabClick={onTabClick}
        className={classNames('', {}, [className])}
      />
  )
})

export default ArticleTypeTabs
