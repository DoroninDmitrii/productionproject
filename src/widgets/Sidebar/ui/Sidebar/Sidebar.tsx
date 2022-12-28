import { useMemo, useState, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button'
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import cls from './Sidebar.module.scss'
import { SidebarItemsList } from '../../model/items'
import SidebarItem from '../SidebarItem/SidebarItem'

interface SidebarProps {
  className?: string
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)
  const { t } = useTranslation()

  const onToggle = () => {
    setCollapsed(prev => !prev)
  }

  const itemList = useMemo(() => {
    return SidebarItemsList.map((item) => (
        <SidebarItem
      item={item}
      collapsed={collapsed}
      key={item.path}
      />
    ))
  }, [collapsed])

  return (
      <div data-testid='sidebar' className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
          <Button
              // eslint-disable-next-line i18next/no-literal-string
              data-testid='sidebar-toggle'
              onClick={onToggle}
              className={cls.collapseBtn}
              theme={ButtonTheme.BACKGROUND_INVERTED}
              square
              size={ButtonSize.L}
          >
              {collapsed ? '>' : '<'}
          </Button>

          <div className={cls.items}>
              {itemList}
          </div>
          <div className={cls.switchers}>
              <ThemeSwitcher />
              <LangSwitcher short={collapsed} className={cls.lang}/>
          </div>
      </div>
  )
})
