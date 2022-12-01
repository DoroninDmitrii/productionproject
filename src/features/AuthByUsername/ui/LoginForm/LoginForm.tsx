import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'
import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'

interface LoginFormProps {
  className?: string
}

export const LoginForm = ({ className }: LoginFormProps) => {
  const { t } = useTranslation()
  return (
      <div
        className={classNames(cls.LoginForm, {}, [className])}
        >
          <input type="text" className={cls.input}/>
          <input type="text" className={cls.input}/>
          <Button className={cls.loginBtn}>
              {t('Log in')}
          </Button>
      </div>
  )
}