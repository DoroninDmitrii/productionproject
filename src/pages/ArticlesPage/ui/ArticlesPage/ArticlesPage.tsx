import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { ArticleList, ArticleView } from 'entities/Article'
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articlePageReducer } from '../../model/slices/articlePageSlice'

interface ArticlePageProps {
  className?: string
}

const reducers: ReducerList = {
  articlePage: articlePageReducer
}

export const ArticlePage = ({ className }: ArticlePageProps) => {
  const { t, i18n } = useTranslation('article')

  return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
          <div className={classNames('', {}, [className])}>
              <ArticleList isLoading={false} view={ArticleView.BIG} articles={[]}/>
          </div>
      </DynamicModuleLoader>
  )
}

export default memo(ArticlePage)
