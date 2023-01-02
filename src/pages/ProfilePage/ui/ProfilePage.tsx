import { fetchProfileData, profileReducer, getProfileData, getProfileError, getProfileisLoading } from 'entities/Profile'
import { ProfileCard } from 'entities/Profile/ui/ProfileCard/ProfileCard'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSelector } from 'react-redux'

const reducers: ReducerList = {
  profile: profileReducer
}
interface ProfilePageProps {
  className?: string
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t, i18n } = useTranslation()
  const dispatch = useAppDispatch()

  const data = useSelector(getProfileData)
  const isLoading = useSelector(getProfileisLoading)
  const error = useSelector(getProfileError)

  useEffect(() => {
    dispatch(fetchProfileData())
  }, [dispatch])

  return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
          <div className={classNames('', {}, [className])}>
              <ProfileCard
              data={data}
              isLoading={isLoading}
              error={error}
               />
          </div>
      </DynamicModuleLoader>
  )
}

export default ProfilePage
