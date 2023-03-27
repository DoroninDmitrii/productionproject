import { memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { getUserAuthData } from 'entities/User'
import { getArticleDetailsData } from 'entities/Article'
import { getCanEditArticle } from '../../model/selectors/article'
import cls from './ArticleDetailsPageHeader.module.scss'

interface ArticleDetailsPageHeaderProps {
  className?: string
}

export const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps) => {
  const { className } = props
  const { t, i18n } = useTranslation('article-details')
  const navigate = useNavigate()
  const userData = useSelector(getUserAuthData)
  const article = useSelector(getArticleDetailsData)
  const canEdit = useSelector(getCanEditArticle)

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles)
  }, [navigate])

  const onEditArticle = useCallback(() => {
    navigate(`${RoutePath.articles_details}/${article?.id}/edit`)
  }, [navigate, article?.id])

  return (
      <div className={classNames(cls.ArticleDetailsPageHeader, {}, [className])}>
          <Button
            theme={ButtonTheme.OUTLINE}
            onClick={onBackToList}>
              {t('Back to list')}
          </Button>

          {canEdit && (
          <Button
          className={cls.editBtn}
          theme={ButtonTheme.OUTLINE}
          onClick={onEditArticle}>
              {t('Edit')}
          </Button>
          )}
      </div>
  )
})

export default ArticleDetailsPageHeader
