import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo, useCallback } from 'react'
import { ArticleDetails, ArticleList } from 'entities/Article'
import { Text, TextSize } from 'shared/ui/Text/Text'
import { useNavigate, useParams } from 'react-router-dom'
import { CommentList } from 'entities/Comment'
import { ReducerList, DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { articleDetailsCommnetsReducer, getArticleComments } from '../../model/slices/articleDetailsCommentsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { getArticleCommentsIsLoading } from '../../model/selectors/comments'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { AddCommentForm } from 'features/addCommentForm'
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import Page from 'widgets/Page/Page'
import { getArticleRecommendations } from '../../model/slices/articleDetaisPageRecommendationsSlice'
import { fetchArticleRecommendations } from '../../model/services/fetchArticleRecommendation/fetchArticleRecommendation'
import { articleDetailsPageReducer } from '../../model/slices'
import cls from './ArticleDetailsPage.module.scss'

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
  const navigate = useNavigate()

  const comments = useSelector(getArticleComments.selectAll)
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading)
  const recommendation = useSelector(getArticleRecommendations.selectAll)
  const recommendationIsLoading = useSelector(getArticleCommentsIsLoading)

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles)
  }, [navigate])

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
              <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
                  {t('Back to list')}
              </Button>
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
