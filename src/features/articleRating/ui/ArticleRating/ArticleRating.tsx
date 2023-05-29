import { RatingCard } from '@/entities/Rating'
import { memo } from 'react'
import { useTranslation } from 'react-i18next'

interface ArticleRatingProps {
  className?: string
  articleId: string
}

export const ArticleRating = memo((props: ArticleRatingProps) => {
  const { className } = props
  const { t, i18n } = useTranslation()

  return (
      <RatingCard
          className={className}
          title={t('Rate the article')}
          feedbackTitle={t('Leave your feedback about the article')}
          hasFeedback
      />
  )
})

export default ArticleRating
