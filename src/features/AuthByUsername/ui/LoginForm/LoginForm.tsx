import { memo, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { useTranslation } from 'react-i18next'
import { loginAction } from '../../modal/slice/loginSlice'
import { getLoginState } from '../../modal/selectors/getLoginState/getLoginState'
import { loginByUsername } from '../../modal/services/loginByUserName/loginByUsername'
import cls from './LoginForm.module.scss'
import { Text, TextTheme } from 'shared/ui/Text/Text'

interface LoginFormProps {
  className?: string
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation()

  const dispatch = useDispatch()
  const { password, username, isLoading, error } = useSelector(getLoginState)

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginAction.setUsername(value))
  }, [dispatch])

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginAction.setPassword(value))
  }, [dispatch])

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ password, username }))
  }, [dispatch, password, username])

  return (
      <div
        className={classNames(cls.LoginForm, {}, [className])}>
          <Text title={t('Authentication form')}/>
          {error && <Text text={error} theme={TextTheme.ERROR}/>}
          <Input
           autofocus
           placeholder={t('Username')}
           type="text"
           className={cls.input}
           onChange={onChangeUsername}
           value={username}
           />
          <Input
          placeholder={t('Password')}
          type="text"
          className={cls.input}
          onChange={onChangePassword}
          value={password}
          />
          <Button
          theme={ButtonTheme.OUTLINE}
          className={cls.loginBtn}
          onClick={onLoginClick}
          disabled={isLoading}
          >
              {t('Log in')}
          </Button>
      </div>
  )
})
