/* eslint-disable i18next/no-literal-string */
import { classNames, Mods } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text'
import { Input } from 'shared/ui/Input/Input'
import { Profile } from '../../model/types/profile'
import Loader from 'shared/ui/Loader/Loader'
import { KeyboardEvent } from 'react'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Currency, CurrencySelect } from 'entities/Currency'
import { Country } from 'entities/Country/model/types/country'
import { CountrySelect } from 'entities/Country'
import { HStack, VStack } from 'shared/ui/Stack/'
import cls from './ProfileCard.module.scss'

interface ProfileCardProps {
  className?: string
  data?: Profile
  isLoading?: boolean
  error?: string
  readonly?: boolean
  onChangeFirstname?: (value?: string) => void
  onChangeLastname?: (value?: string) => void
  onChangeCity?: (value?: string) => void
  onChangeAge?: (value?: string) => void
  onChangeUsername?: (value?: string) => void
  onChangeAvatar?: (value?: string) => void
  onChangeCurrency?: (value?: Currency) => void
  onChangeCountry?: (value?: Country) => void
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
    onChangeAge,
    onChangeUsername,
    onChangeAvatar,
    onChangeCountry,
    onChangeCurrency
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
        <HStack justify={'center'} max className={classNames(cls.ProfileCard, {}, [className, cls.loading])}>
            <Loader />
        </HStack>
    )
  }

  if (error) {
    return (
        <HStack justify={'center'} max className={classNames(cls.ProfileCard, {}, [className, cls.error])}>
            <Text
                theme={TextTheme.ERROR}
                title={t('Mistake is happened')}
                text={t('Try again')}
                align={TextAlign.CENTER}
            />
        </HStack>
    )
  }

  const mods: Mods = {
    [cls.editing]: !readonly
  }

  return (
      <VStack max gap='8' className={classNames(cls.ProfileCard, mods, [className])}>

          {data?.avatar && (
              <HStack justify={'center'} max className={cls.avatarWrapper}>
                  <Avatar src={data?.avatar}/>
              </HStack>
          )}

          <Input
              value={data?.first}
              placeholder={t('Your name')}
              className={cls.input}
              onChange={onChangeFirstname}
              readonly={readonly}
              data-testid={'ProfileCard.firstname'}
          />

          <Input
              value={data?.lastname}
              placeholder={t('Your surname')}
              className={cls.input}
              onChange={onChangeLastname}
              readonly={readonly}
              data-testid={'ProfileCard.lastname'}
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

          <Input
              value={data?.username}
              placeholder={t('Username')}
              className={cls.input}
              onChange={onChangeUsername}
              readonly={readonly}
          />

          <Input
              value={data?.avatar}
              placeholder={t('Avatar')}
              className={cls.input}
              onChange={onChangeAvatar}
              readonly={readonly}
          />

          <CurrencySelect
              className={cls.input}
              value={data?.currency}
              onChange={onChangeCurrency}
              readonly={readonly}
          />

          <CountrySelect
              className={cls.input}
              value={data?.country}
              onChange={onChangeCountry}
              readonly={readonly}
            />
      </VStack>
  )
}
