import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Card } from '@/shared/ui/redesigned/Card'
import { Input } from '@/shared/ui/redesigned/Input'
import { ArticleSortSelector } from '@/features/ArticleSortSelector'
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { ArticleSortField , ArticleType } from '@/entities/Article'
import { SortOrder } from '@/shared/types/sort'
import SearchIcon from '@/shared/assets/icons/search.svg'
import { Icon } from '@/shared/ui/redesigned/Icon'
import cls from './ArticlesFilters.module.scss'

interface ArticlesFiltersProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  type: ArticleType;
  search: string;
  onChangeSearch: (value: string) => void;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
  onChangeType: (type: ArticleType) => void;
}

export const ArticlesFilters = memo((props: ArticlesFiltersProps) => {
    const { 
        className, 
        onChangeOrder, 
        onChangeSearch, 
        onChangeSort, 
        onChangeType, 
        order, 
        search, 
        sort, 
        type 
    } = props
    const { t, i18n } = useTranslation()

    return (
        <Card className={classNames(cls.ArticlesFilters, {}, [className])}
            padding='24' 
        >
            <VStack>
                <Input
                    value={search}
                    onChange={onChangeSearch}
                    placeholder={t('Search')}
                    addonLeft={<Icon Svg={SearchIcon} />}
                />
                <ArticleTypeTabs
                    className={cls.tabs}
                    value={type}
                    onChangeType={onChangeType}
                />
                <ArticleSortSelector
                    order={order}
                    sort={sort}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
            </VStack>
        </Card>
    )
})
