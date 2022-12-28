import { useTranslation } from 'react-i18next'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import cls from './SidebarItem.module.scss'
import { SidebarItemType } from '../../model/items'

interface SidebarItemsProps {
  item: SidebarItemType
  collapsed: boolean
}

const SidebarItem = ({ item, collapsed }: SidebarItemsProps) => {
  const { t, i18n } = useTranslation()

  return (
      <AppLink
         theme={AppLinkTheme.SECONDARY}
         to={item.path}
        className={cls.item}
      >
          <item.Icon className={cls.icon}/>
          <span className={cls.link}>{t(item.text)}</span>
      </AppLink>
  )
}

export default SidebarItem
