import { memo, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import cls from './ArticleDetailsPageHeader.module.scss'

interface ArticleDetailsPageHeaderProps {
  className?: string
}

export const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps) => {
  const { className } = props
  const { t, i18n } = useTranslation('article-details')
  const navigate = useNavigate()

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles)
  }, [navigate])

  return (
      <div className={classNames(cls.ArticleDetailsPageHeader, {}, [className])}>
          <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
              {t('Back to list')}
          </Button>
          <Button className={cls.editBtn} theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
              {t('Edit')}
          </Button>
      </div>
  )
})

export default ArticleDetailsPageHeader
