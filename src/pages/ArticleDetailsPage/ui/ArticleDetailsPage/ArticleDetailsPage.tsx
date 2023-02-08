import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { ArticleDetails } from 'entities/Article'
import { Text } from 'shared/ui/Text/Text'
import { useParams } from 'react-router-dom'
import { CommentList } from 'entities/Comment'
import cls from './ArticleDetailsPage.module.scss'

interface ArticleDetailsPageProps {
  className?: string
}

export const ArticleDetailsPage = ({ className }: ArticleDetailsPageProps) => {
  const { t, i18n } = useTranslation('article-details')
  const { id } = useParams<{ id: string }>()

  if (!id) {
    return (
        <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            {t('Article is not found')}
        </div>
    )
  }

  return (
      <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
          <ArticleDetails id={id} />
          <Text className={cls.commentTitle} title={t('Comments')}/>
          <CommentList isLoading={true} comments={[
            {
              id: '1',
              text: 'comment 1',
              user: { id: '1', username: 'First', avatar: 'https://cdn.britannica.com/81/191581-050-8C0A8CD3/Alan-Turing.jpg' }
            },
            {
              id: '2',
              text: 'comment 2',
              user: { id: '2', username: 'Second', avatar: 'https://cdn.britannica.com/81/191581-050-8C0A8CD3/Alan-Turing.jpg' }
            }
          ]} />
      </div>
  )
}

export default memo(ArticleDetailsPage)
