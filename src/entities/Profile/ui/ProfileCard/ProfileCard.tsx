import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ProfileCard.module.scss'
import { useTranslation } from 'react-i18next'
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text'
import { Input } from 'shared/ui/Input/Input'
import { Profile } from '../../model/types/profile'
import Loader from 'shared/ui/Loader/Loader'

interface ProfileCardProps {
  className?: string
  data?: Profile
  isLoading?: boolean
  error?: string
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    isLoading,
    error
  } = props

  const { t } = useTranslation('profile')

  if (isLoading) {
    return (
        <div className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
            <Loader />
        </div>
    )
  }

  if (error) {
    return (
        <div className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
            <Text
            theme={TextTheme.ERROR}
            title={t('Mistake is happened')}
            text={t('Try again')}
            align={TextAlign.CENTER}
            />
        </div>
    )
  }

  return (
      <div className={classNames(cls.ProfileCard, {}, [className])}>
          <div className={cls.data}>
              <Input
              value={data?.first}
              placeholder={t('Your name')}
              className={cls.input}
              />

              <Input
              value={data?.lastname}
              placeholder={t('Your surname')}
              className={cls.input}
              />
          </div>
      </div>
  )
}
