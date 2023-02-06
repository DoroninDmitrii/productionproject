import { memo } from 'react'
import { Comment } from '../../model/types/comment'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './CommentCard.module.scss'

interface CommentCardProps {
  className?: string
  comment: Comment
  isLoading?: boolean
}

export const CommentCard = memo((props: CommentCardProps) => {
  const { className, comment, isLoading } = props
  return (
      <div className={classNames(cls.CommentCard, {}, [className])}>
          comment
      </div>
  )
})

export default CommentCard
