import { memo, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import {
  fetchProfileData,
  getProfileError,
  getProfileisLoading,
  profileAction,
  getProfileReadonly,
  getProfileForm,
  getProfileValidateErrors,
  ValidateProfileError
} from 'entities/Profile'
import { ProfileCard } from 'entities/Profile/ui/ProfileCard/ProfileCard'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { Currency } from 'entities/Currency'
import { Country } from 'entities/Country'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect'
import cls from './EditableProfileCard.module.scss'

interface EditableProfileCardProps {
  className?: string
}

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
  const { className } = props
  const { t, i18n } = useTranslation('profile')

  const dispatch = useAppDispatch()

  const formData = useSelector(getProfileForm)
  const isLoading = useSelector(getProfileisLoading)
  const error = useSelector(getProfileError)
  const readonly = useSelector(getProfileReadonly)
  const validateErrors = useSelector(getProfileValidateErrors)
  const { id } = useParams<{ id: string }>()

  const validateErrorTranslates = {
    [ValidateProfileError.SERVER_ERROR]: t('Server error'),
    [ValidateProfileError.NO_DATA]: t('Data is absented'),
    [ValidateProfileError.INCORRECT_USER_DATA]: t('Incorrect user data'),
    [ValidateProfileError.INCORRECT_COUNTRY]: t('Incorrect country'),
    [ValidateProfileError.INCORRECT_AGE]: t('Incorrect age')
  }

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id))
    }
  })

  const onChangeFirstname = useCallback((value?: string) => {
    dispatch(profileAction.updateProfile({ first: value || '' }))
  }, [dispatch])

  const onChangeLastname = useCallback((value?: string) => {
    dispatch(profileAction.updateProfile({ lastname: value || '' }))
  }, [dispatch])

  const onChangeAge = useCallback((value?: string | number) => {
    dispatch(profileAction.updateProfile({ age: Number(value || 0) }))
  }, [dispatch])

  const onChangeCity = useCallback((value?: string) => {
    dispatch(profileAction.updateProfile({ city: value || '' }))
  }, [dispatch])

  const onChangeUsername = useCallback((value?: string) => {
    dispatch(profileAction.updateProfile({ username: value || '' }))
  }, [dispatch])

  const onChangeAvatar = useCallback((value?: string) => {
    dispatch(profileAction.updateProfile({ avatar: value || '' }))
  }, [dispatch])

  const onChangeCurrency = useCallback((currency?: Currency) => {
    dispatch(profileAction.updateProfile({ currency }))
  }, [dispatch])

  const onChangeCountry = useCallback((country?: Country) => {
    dispatch(profileAction.updateProfile({ country }))
  }, [dispatch])

  return (
      <div className={classNames(cls.EditableProfileCard, {}, [className])}>
          {validateErrors?.length && validateErrors.map((err) => (
              <Text
                  theme={TextTheme.ERROR}
                  text={validateErrorTranslates[err]}
                  key={err}
              />
          ))}
          <ProfileCard
              data={formData}
              isLoading={isLoading}
              error={error}
              onChangeFirstname={onChangeFirstname}
              onChangeLastname={onChangeLastname}
              onChangeAge={onChangeAge}
              onChangeCity={onChangeCity}
              onChangeUsername={onChangeUsername}
              onChangeAvatar={onChangeAvatar}
              onChangeCurrency={onChangeCurrency}
              onChangeCountry={onChangeCountry}
              readonly={readonly}
          />
      </div>
  )
})

export default EditableProfileCard
