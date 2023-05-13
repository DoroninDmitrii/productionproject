import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './NotificationList.module.scss'

interface NotificationListProps {
  className?: string
}

export const NotificationList = memo((props: NotificationListProps) => {
  const { className } = props
  const { t, i18n } = useTranslation()

  return (
      <div className={classNames(cls.NotificationList, {}, [className])}>

      </div>
  )
})

export default NotificationList
