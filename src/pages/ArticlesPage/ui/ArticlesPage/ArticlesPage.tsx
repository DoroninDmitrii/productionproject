import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducerList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Page } from '@/widgets/Page';
import { articlePageReducer } from '../../model/slices/articlePageSlice';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import ArticlesPageFilters from '../ArticlesPageFilters/ArticlesPageFilters';
import ArticleInfiniteList from '../ArticleInfiniteList/ArticleInfiniteList';
import { ArticlePageGreeting } from '@/features/ArticlePageGreeting';
import { ToggleFeatures } from '@/shared/lib/features';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import ViewSelectorContainer from '../ViewSelectorContainer/ViewSelectorContainer';
import { FilterContainer } from '../FilterContainer/FilterContainer';
import cls from './ArticlePage.module.scss';

interface ArticlePageProps {
  className?: string;
}

const reducers: ReducerList = {
    articlePage: articlePageReducer,
};

export const ArticlesPage = ({ className }: ArticlePageProps) => {
    const { t, i18n } = useTranslation('article');
    const dispatch = useAppDispatch();

    const [searchParams] = useSearchParams();

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    const content = (
        <ToggleFeatures feature='isAppRedesigned' 
            on={
                <StickyContentLayout 
                    left={<ViewSelectorContainer />}
                    right={<FilterContainer />}
                    content={
                        <Page
                            data-testid={'ArticlesPage'}
                            onScrollEnd={onLoadNextPart}
                            className={classNames(cls.ArticlePageRedesigned, {}, [className])}
                        >
                            <ArticleInfiniteList className={cls.list} />
                            <ArticlePageGreeting />
                        </Page>
                    }
                />
            } 
            off={
                <Page
                    data-testid={'ArticlesPage'}
                    onScrollEnd={onLoadNextPart}
                    className={classNames('', {}, [className])}
                >
                    <ArticlesPageFilters />
                    <ArticleInfiniteList className={cls.list} />
                    <ArticlePageGreeting />
                </Page>
            }
        />
    )

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            {content}
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
