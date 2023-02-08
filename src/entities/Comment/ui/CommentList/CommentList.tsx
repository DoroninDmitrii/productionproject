import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Comment } from '../../model/types/comment'
import { Text } from 'shared/ui/Text/Text'
import { classNames } from 'shared/lib/classNames/classNames'
import CommentCard from '../CommentCard/CommentCard'
import cls from './CommentList.module.scss'

interface CommentListProps {
  className?: string
  comments?: Comment[]
  isLoading?: boolean
}

export const CommentList = memo((props: CommentListProps) => {
  const { className, comments, isLoading } = props
  const { t, i18n } = useTranslation()

  return (
      <div className={classNames(cls.CommentList, {}, [className])}>
          {comments?.length
            ? comments.map((comment) => {
              return <CommentCard isLoading={isLoading} className={cls.comment} key={comment.id} comment={comment}/>
            })
            : <Text text={t('No comments')}/>}
      </div>
  )
})

export default CommentList
