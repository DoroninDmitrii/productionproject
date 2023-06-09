import { classNames } from '@/shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { ArticleDetails } from '@/entities/Article'
import { useParams } from 'react-router-dom'
import { ReducerList, DynamicModuleLoader } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { Page } from '@/widgets/Page'
import { articleDetailsPageReducer } from '../../model/slices'
import ArticleDetailsPageHeader from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader'
import { ArticleRecommendationsList } from '@/features/ArticleRecommendationsList'
import { VStack } from '@/shared/ui/Stack'
import ArticleDetailsComments from '../ArticleDetailsComments/ArticleDetailsComments'
import cls from './ArticleDetailsPage.module.scss'
import { ArticleRating } from '@/features/articleRating'

interface ArticleDetailsPageProps {
  className?: string
}

const reducers: ReducerList = {
  articleDetailsPage: articleDetailsPageReducer
}

export const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t, i18n } = useTranslation('article-details')
  const { id } = useParams<{ id: string }>()

  // if (!id) {
  //   return (
  //       <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
  //           {t('Article is not found')}
  //       </Page>
  //   )
  // }

  if (!id) {
    return null
  }

  return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
          <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
              <VStack gap={'16'} max>
                  <ArticleDetailsPageHeader/>
                  <ArticleDetails id={id} />
                  <ArticleRating articleId={id} />
                  <ArticleRecommendationsList />
                  <ArticleDetailsComments id={id} />
              </VStack>
          </Page>
      </DynamicModuleLoader>
  )
}

export default memo(ArticleDetailsPage)
