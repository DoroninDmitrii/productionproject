import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './CommentCard.module.scss'

interface CommentCardProps {
  className?: string

}

export const CommentCard = memo(({ className }: CommentCardProps) => {
  return (
      <div className={classNames(cls.CommentCard, {}, [className])}>
      </div>
  )
})

export default CommentCard
