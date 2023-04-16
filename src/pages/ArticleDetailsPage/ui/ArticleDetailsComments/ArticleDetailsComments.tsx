import { memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Text, TextSize } from 'shared/ui/Text/Text'
import { AddCommentForm } from 'features/addCommentForm'
import { CommentList } from 'entities/Comment'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice'
import { getArticleCommentsIsLoading } from '../../model/selectors/comments'
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle'
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'

interface ArticleDetailsCommentsProps {
  className?: string
  id: string
}

export const ArticleDetailsComments = memo((props: ArticleDetailsCommentsProps) => {
  const { className, id } = props
  const { t, i18n } = useTranslation('article-details')

  const dispatch = useDispatch()

  const comments = useSelector(getArticleComments.selectAll)
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading)

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text))
  }, [dispatch])

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id))
  })

  return (
      <div className={classNames('', {}, [className])}>
          <Text
            size={TextSize.L}
            className={''}
            title={t('Comments')}
          />
          <AddCommentForm onSendComment={onSendComment} />
          <CommentList
              isLoading={commentsIsLoading}
              comments={comments}
          />
      </div>
  )
})

export default ArticleDetailsComments