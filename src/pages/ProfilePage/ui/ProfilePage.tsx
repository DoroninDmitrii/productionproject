import { fetchProfileData, profileReducer, getProfileData, getProfileError, getProfileisLoading, profileAction, getProfileReadonly, getProfileForm } from 'entities/Profile'
import { ProfileCard } from 'entities/Profile/ui/ProfileCard/ProfileCard'
import { useCallback, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'
import ProfilePageHeader from './ProfilePageHeader/ProfilePageHeader'

const reducers: ReducerList = {
  profile: profileReducer
}
interface ProfilePageProps {
  className?: string
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t, i18n } = useTranslation()
  const dispatch = useAppDispatch()

  const formData = useSelector(getProfileForm)
  const isLoading = useSelector(getProfileisLoading)
  const error = useSelector(getProfileError)
  const readonly = useSelector(getProfileReadonly)

  useEffect(() => {
    dispatch(fetchProfileData())
  }, [dispatch])

  const onChangeFirstname = useCallback((value?: string) => {
    dispatch(profileAction.updateProfile({ first: value || '' }))
  }, [dispatch])

  const onChangeLastname = useCallback((value?: string) => {
    dispatch(profileAction.updateProfile({ lastname: value || '' }))
  }, [dispatch])

  return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
          <div className={classNames('', {}, [className])}>
              <ProfilePageHeader />
              <ProfileCard
              data={formData}
              isLoading={isLoading}
              error={error}
              onChangeFirstname={onChangeFirstname}
              onChangeLastname={onChangeLastname}
              readonly={readonly}
               />
          </div>
      </DynamicModuleLoader>
  )
}

export default ProfilePage
