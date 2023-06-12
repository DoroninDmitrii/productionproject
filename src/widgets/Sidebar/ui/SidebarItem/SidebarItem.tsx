import { useTranslation } from 'react-i18next'
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink'
import { SidebarItemType } from '../../model/types/sidebar'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useSelector } from 'react-redux'
import { getUserAuthData } from '@/entities/User'
import cls from './SidebarItem.module.scss'

interface SidebarItemsProps {
  item: SidebarItemType
  collapsed: boolean
}

const SidebarItem = ({ item, collapsed }: SidebarItemsProps) => {
  const { t, i18n } = useTranslation()

  const isAuth = useSelector(getUserAuthData)

  if (item.authOnly && !isAuth) {
    return null
  }

  return (
      <AppLink
         theme={AppLinkTheme.SECONDARY}
         to={item.path}
        className={classNames(cls.item, { [cls.collapsed]: collapsed }, [])}
      >
          <item.Icon className={cls.icon}/>
          <span className={cls.link}>{t(item.text)}</span>
      </AppLink>
  )
}

export default SidebarItem
