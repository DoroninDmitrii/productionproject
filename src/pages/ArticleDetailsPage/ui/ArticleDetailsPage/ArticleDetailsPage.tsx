import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { ArticleDetails } from 'entities/Article'
import { Text } from 'shared/ui/Text/Text'
import { useParams } from 'react-router-dom'
import { CommentList } from 'entities/Comment'
import { ReducerList, DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleDetailsCommnetsReducer, getArticleComments } from '../../model/slices/articleDetailsCommentsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { getArticleCommentsIsLoading } from '../../model/selectors/comments'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { AddCommentForm } from 'features/addCommentForm'
import cls from './ArticleDetailsPage.module.scss'

interface ArticleDetailsPageProps {
  className?: string
}

const reducers: ReducerList = {
  articleDetailsComments: articleDetailsCommnetsReducer
}

export const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t, i18n } = useTranslation('article-details')
  const { id } = useParams<{ id: string }>()
  const dispatch = useDispatch()

  const comments = useSelector(getArticleComments.selectAll)
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading)

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id))
  })

  if (!id) {
    return (
        <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            {t('Article is not found')}
        </div>
    )
  }

  return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
          <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
              <ArticleDetails id={id} />
              <Text className={cls.commentTitle} title={t('Comments')}/>
              <AddCommentForm />
              <CommentList isLoading={commentsIsLoading} comments={comments} />
          </div>
      </DynamicModuleLoader>
  )
}

export default memo(ArticleDetailsPage)
