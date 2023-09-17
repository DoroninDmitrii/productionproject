import { memo, useCallback } from 'react'
import { ArticleViewSelector } from '@/features/ArticleViewSelector'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import { ArticleView } from '@/entities/Article'
import { getArticlesPageView } from '../../model/selectors/articlesPageSelectors'
import { articlePageActions } from '../../model/slices/articlePageSlice'

interface ViewSelectorContainerProps {
  className?: string
}

export const ViewSelectorContainer = memo((props: ViewSelectorContainerProps) => {
    const { className } = props

    const dispatch = useAppDispatch();
    const view = useSelector(getArticlesPageView);

    const onChangeView = useCallback(
        (view: ArticleView) => {
            dispatch(articlePageActions.setView(view));
            dispatch(articlePageActions.setPage(1));
        },
        [dispatch],
    );

    return (
        <ArticleViewSelector 
            className={className}
            view={view} 
            onViewClick={onChangeView} 
        />
    )
})

export default ViewSelectorContainer
