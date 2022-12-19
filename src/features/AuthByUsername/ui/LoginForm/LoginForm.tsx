import { memo, useCallback, useEffect } from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { useTranslation } from 'react-i18next'
import { loginAction, loginReducer } from '../../modal/slice/loginSlice'
import { loginByUsername } from '../../modal/services/loginByUserName/loginByUsername'
import cls from './LoginForm.module.scss'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { ReduxStoreWithManager } from 'app/providers/StoreProvider/config/StateSchema'
import { getLoginUsername } from '../../modal/selectors/getLoginUsername/getLoginUsername'
import { getLoginPassward } from '../../modal/selectors/getLoginPassword/getLoginPassword'
import { getLoginisLoading } from '../../modal/selectors/getLoginisLoading/getLoginisLoading'
import { getLoginError } from '../../modal/selectors/getLoginError/getLoginError'

export interface LoginFormProps {
  className?: string
}

const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const store = useStore() as ReduxStoreWithManager

  const username = useSelector(getLoginUsername)
  const password = useSelector(getLoginPassward)
  const isLoading = useSelector(getLoginisLoading)
  const error = useSelector(getLoginError)


  useEffect(() => {
    store.reducerManager.add('loginForm', loginReducer)

    return () => {
      store.reducerManager.remove('loginForm')
    }
  }, [])

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
          {error && <Text text={t('Your login or password is not correct')} theme={TextTheme.ERROR}/>}
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

export default LoginForm
