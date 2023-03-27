/* eslint-disable i18next/no-literal-string */
import { useCallback, useState, memo } from 'react'
import { getUserAuthData, userAction } from 'entities/User'
import { LoginModal } from 'features/AuthByUsername'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import cls from './Navbar.module.scss'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

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
            <Button
              theme={ButtonTheme.CLEAR_INVERTED}
              className={cls.links}
              onClick={onLogout}
            >
                {t('Log out')}
            </Button>
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
