import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { ArticleDetails, ArticleList } from 'entities/Article'
import { Text, TextSize } from 'shared/ui/Text/Text'
import { useParams } from 'react-router-dom'
import { CommentList } from 'entities/Comment'
import { ReducerList, DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { getArticleCommentsIsLoading } from '../../model/selectors/comments'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { AddCommentForm } from 'features/addCommentForm'
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle'
import Page from 'widgets/Page/Page'
import { getArticleRecommendations } from '../../model/slices/articleDetaisPageRecommendationsSlice'
import { fetchArticleRecommendations } from '../../model/services/fetchArticleRecommendation/fetchArticleRecommendation'
import { articleDetailsPageReducer } from '../../model/slices'
import cls from './ArticleDetailsPage.module.scss'
import ArticleDetailsPageHeader from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader'

interface ArticleDetailsPageProps {
  className?: string
}

const reducers: ReducerList = {
  articleDetailsPage: articleDetailsPageReducer
}

export const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t, i18n } = useTranslation('article-details')
  const { id } = useParams<{ id: string }>()
  const dispatch = useDispatch()

  const comments = useSelector(getArticleComments.selectAll)
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading)
  const recommendation = useSelector(getArticleRecommendations.selectAll)
  const recommendationIsLoading = useSelector(getArticleCommentsIsLoading)

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text))
  }, [dispatch])

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id))
    dispatch(fetchArticleRecommendations())
  })

  if (!id) {
    return (
        <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            {t('Article is not found')}
        </Page>
    )
  }

  return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
          <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
              <ArticleDetailsPageHeader/>
              <ArticleDetails id={id} />
              <Text
                size={TextSize.L}
                className={cls.commentTitle}
                title={t('Recommendations')}
              />
              <ArticleList
                articles={recommendation}
                isLoading={recommendationIsLoading}
                className={cls.recommendations}
                // eslint-disable-next-line i18next/no-literal-string
                target="_blank"
              />
              <Text
                size={TextSize.L}
                className={cls.commentTitle}
                title={t('Comments')}
              />
              <AddCommentForm onSendComment={onSendComment} />
              <CommentList isLoading={commentsIsLoading} comments={comments} />
          </Page>
      </DynamicModuleLoader>
  )
}

export default memo(ArticleDetailsPage)
