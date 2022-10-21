import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
      <div className={classNames(cls.navbar, {}, [className])}>
          <div className={cls.links}>
              <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={cls.mainLink}>Main Page</AppLink>
              <AppLink theme={AppLinkTheme.RED} to={'/about'}>About Page</AppLink>
          </div>
      </div>
  )
}
