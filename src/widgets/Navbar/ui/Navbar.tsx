/* eslint-disable i18next/no-literal-string */
import { useCallback, useState, memo } from 'react'
import { getUserAuthData, userAction } from 'entities/User'
import { LoginModal } from 'features/AuthByUsername'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
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
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button
          theme={ButtonTheme.CLEAR_INVERTED}
          className={cls.links}
          onClick={onLogout}
          >
                {t('Log out')}
            </Button>
        </div>
    )
  }

  return (
      <div className={classNames(cls.navbar, {}, [className])}>
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
      </div>
  )
})
