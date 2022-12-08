import { memo, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { useTranslation } from 'react-i18next'
import { loginAction } from '../../modal/slice/loginSlice'
import cls from './LoginForm.module.scss'

interface LoginFormProps {
  className?: string
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation()

  const dispatch = useDispatch()

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginAction.setUsername(value))
  }, [dispatch])

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginAction.setPassword(value))
  }, [dispatch])

  return (
      <div
        className={classNames(cls.LoginForm, {}, [className])}
        >
          <Input
           autofocus
           placeholder={t('Username')}
           type="text"
           className={cls.input}
           onChange={onChangeUsername}
           />
          <Input
          placeholder={t('Password')}
          type="text"
          className={cls.input}
          onChange={onChangePassword}
          />
          <Button theme={ButtonTheme.OUTLINE} className={cls.loginBtn}>
              {t('Log in')}
          </Button>
      </div>
  )
})
