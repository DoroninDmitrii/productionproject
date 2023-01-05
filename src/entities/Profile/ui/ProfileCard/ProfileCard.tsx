import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ProfileCard.module.scss'
import { useTranslation } from 'react-i18next'
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text'
import { Input } from 'shared/ui/Input/Input'
import { Profile } from '../../model/types/profile'
import Loader from 'shared/ui/Loader/Loader'
import { KeyboardEvent } from 'react'

interface ProfileCardProps {
  className?: string
  data?: Profile
  isLoading?: boolean
  error?: string
  readonly?: boolean
  onChangeFirstname: (value?: string) => void
  onChangeLastname: (value?: string) => void
  onChangeCity: (value?: string) => void
  onChangeAge: (value?: string) => void
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    isLoading,
    error,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeCity,
    onChangeAge
  } = props

  const { t } = useTranslation('profile')

  // validation
  const onKeyPress = (e: KeyboardEvent) => {
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault()
    }
  }

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
              onChange={onChangeFirstname}
              readonly={readonly}
              />

              <Input
              value={data?.lastname}
              placeholder={t('Your surname')}
              className={cls.input}
              onChange={onChangeLastname}
              readonly={readonly}
              />

              <Input
              onKeyPress={onKeyPress}
              value={data?.age}
              placeholder={t('Age')}
              className={cls.input}
              onChange={onChangeAge}
              readonly={readonly}
              />

              <Input
              value={data?.city}
              placeholder={t('City')}
              className={cls.input}
              onChange={onChangeCity}
              readonly={readonly}
              />
          </div>
      </div>
  )
}
