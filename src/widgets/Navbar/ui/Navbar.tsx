/* eslint-disable i18next/no-literal-string */
import { useCallback, useState, memo } from 'react'
import { getUserAuthData, isUserAdmin, isUserManager, userAction } from 'entities/User'
import { LoginModal } from 'features/AuthByUsername'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'
import { Dropdown, Popover } from 'shared/ui/Popups'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Icon } from 'shared/ui/Icon/Icon'
import { HStack } from 'shared/ui/Stack'
import NotificationIcon from 'shared/assets/icons/notification-20-20.svg'
import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation()
  const [isAuthModal, setIsAuthModal] = useState(false)
  // for logout
  const authData = useSelector(getUserAuthData)
  // for logout
  const dispatch = useDispatch()

  // for admin panel
  const isAdmin = useSelector(isUserAdmin)
  const isManager = useSelector(isUserManager)

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])

  const onShowModal = useCallback(() => {
    setIsAuthModal(true)
  }, [])

  // for logout
  const onLogout = useCallback(() => {
    dispatch(userAction.logout())
  }, [dispatch])

  const isAdminPanelAvailable = isAdmin || isManager

  if (authData) {
    return (
        <header className={classNames(cls.navbar, {}, [className])}>
            <Text
              className={cls.appName}
              title={t('Blog')}
              theme={TextTheme.INVERTED}
              />
            <AppLink
              to={RoutePath.articles_create}
              theme={AppLinkTheme.SECONDARY}
              className={cls.createBtn}
              >
                {t('Create article')}
            </AppLink>

            <HStack gap='16' className={cls.actions}>
                <Popover
                    direction='bottom left'
                    trigger={
                        <Button theme={ButtonTheme.CLEAR}>
                            <Icon Svg={NotificationIcon} inverted />
                        </Button>
                }>
                    hello
                </Popover>
                <Dropdown
                    direction={'bottom left'}
                    items={[
                      ...(isAdminPanelAvailable
                        ? [{
                            content: t('Admin Panel'),
                            href: RoutePath.admin_panel
                          }]
                        : []),
                      {
                        content: t('Profile'),
                        href: `${RoutePath.profile}/${authData.id}`
                      },
                      {
                        content: t('Log out'),
                        onClick: onLogout
                      }
                    ]}
                    trigger={<Avatar size={30} src={authData.avatar}/>}
              />
            </HStack>
        </header>
    )
  }

  return (
      <header className={classNames(cls.navbar, {}, [className])}>
          <Button
          theme={ButtonTheme.CLEAR_INVERTED}
          className={cls.links}
          onClick={onShowModal}
          >
              {t('Log in')}
          </Button>
          {isAuthModal && <LoginModal
           isOpen={isAuthModal}
           isClose={onCloseModal}
           />}
      </header>
  )
})
