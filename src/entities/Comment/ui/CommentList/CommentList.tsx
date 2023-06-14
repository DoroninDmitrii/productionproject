import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Comment } from '../../model/types/comment'
import { Text } from '@/shared/ui/Text'
import { classNames } from '@/shared/lib/classNames/classNames'
import CommentCard from '../CommentCard/CommentCard'
import { VStack } from '@/shared/ui/Stack'

interface CommentListProps {
  className?: string
  comments?: Comment[]
  isLoading?: boolean
}

export const CommentList = memo((props: CommentListProps) => {
  const { className, comments, isLoading } = props
  const { t, i18n } = useTranslation()

  if (isLoading) {
    return (
        <VStack gap='16' max className={classNames('', {}, [className])}>
            <CommentCard isLoading />
            <CommentCard isLoading />
            <CommentCard isLoading />
        </VStack>

    )
  }

  return (
      <VStack gap='16' max className={classNames('', {}, [className])}>
          {comments?.length
            ? comments.map((comment) => {
              return <CommentCard isLoading={isLoading} key={comment.id} comment={comment}/>
            })
            : <Text text={t('No comments')}/>}
      </VStack>
  )
})

export default CommentList
