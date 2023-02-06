import { memo } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './CommentList.module.scss'

interface CommentListProps {
  className?: string

}

export const CommentList = memo(({ className }: CommentListProps) => {
  return (
      <div className={classNames(cls.CommentList, {}, [className])}>
      </div>
  )
})

export default CommentList
