import { RatingCard } from '@/entities/Rating'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { useGetArticleRating } from '../../api/articleRatingApi'
import { useSelector } from 'react-redux'
import { getUserAuthData } from '@/entities/User'
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton'

interface ArticleRatingProps {
  className?: string
  articleId: string
}

export const ArticleRating = memo((props: ArticleRatingProps) => {
  const { className, articleId } = props
  const { t, i18n } = useTranslation()

  const userData = useSelector(getUserAuthData)

  const { data, isLoading } = useGetArticleRating({
    articleId,
    userId: userData?.id ?? ''
  })

  if (isLoading) {
    return <Skeleton width='100%' height={120}/>
  }

  const rating = data?.[0]

  return (
      <RatingCard
          rate={rating?.rate}
          className={className}
          title={t('Rate the article')}
          feedbackTitle={t('Leave your feedback about the article')}
          hasFeedback
      />
  )
})

export default ArticleRating
