import { memo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useNotification } from '../../api/notificationApi'
import { VStack } from '@/shared/ui/Stack'
import NotificationItem from '../NotificationItem/NotificationItem'
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton'
import cls from './NotificationList.module.scss'

interface NotificationListProps {
  className?: string
}

export const NotificationList = memo((props: NotificationListProps) => {
  const { className } = props

  const { data, isLoading } = useNotification(null, {
    pollingInterval: 10000
  })

  if (isLoading) {
    return (
        <VStack gap='16' max className={classNames(cls.NotificationList, {}, [className])}>
            <Skeleton width="100%" border="8px" height="80px"/>
        </VStack>
    )
  }

  return (
      <VStack gap='16' max className={classNames(cls.NotificationList, {}, [className])}>
          {data?.map(item => (
              <NotificationItem key={item.id} item={item} />
          ))}
      </VStack>
  )
})

export default NotificationList