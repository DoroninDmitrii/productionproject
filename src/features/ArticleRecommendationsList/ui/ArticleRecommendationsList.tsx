import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { ArticleList } from 'entities/Article'
import { Text, TextSize } from 'shared/ui/Text/Text'
import { VStack } from 'shared/ui/Stack'
import { rtkApi } from 'shared/api/rtkApi'

interface ArticleRecommendationsListProps {
  className?: string
}

const recommendationsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRecommendationsList: build.query({
      query: () => ({
        url: '/articles',
        params: {
          _limit: 3
        }
      })
    })
  })
})

const useArticleRecommendationsList = recommendationsApi.useGetArticleRecommendationsListQuery

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
  const { className } = props
  const { t, i18n } = useTranslation()
  const { isLoading, data } = useArticleRecommendationsList(3)

  return (
      <VStack gap='8' className={classNames('', {}, [className])}>
          <Text
              size={TextSize.L}
              title={t('Recommendations')}
          />
          <ArticleList
              articles={[]}
              target="_blank"
            />
      </VStack>
  )
})

export default ArticleRecommendationsList
