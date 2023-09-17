import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { ArticlesFilters } from '@/widgets/ArticlesFilters'
import { useArticleFilters } from '../../lib/hooks/useArticleFilters'

interface FilterContainerProps {
  className?: string
}

export const FilterContainer = memo((props: FilterContainerProps) => {
    const { className } = props
    const { t, i18n } = useTranslation()

    const {
        onChangeOrder, 
        onChangeSearch,
        onChangeSort,
        onChangeType,
        order,
        search,
        sort,
        type,
    } = useArticleFilters();

    return (
        <ArticlesFilters 
            className={className}
            onChangeOrder={onChangeOrder}
            onChangeSearch={onChangeSearch}
            onChangeSort={onChangeSort}
            onChangeType={onChangeType}
            order={order}
            search={search}
            sort={sort}
            type={type}
        />
    )
})

