import { profileReducer } from 'entities/Profile'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import ProfilePageHeader from './ProfilePageHeader/ProfilePageHeader'
import Page from 'widgets/Page/Page'
import { VStack } from 'shared/ui/Stack/VStack/VStack'
import EditableProfileCard from 'features/EditableProfileCard/ui/EditableProfileCard'

const reducers: ReducerList = {
  profile: profileReducer
}
interface ProfilePageProps {
  className?: string
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t, i18n } = useTranslation('profile')

  return (
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
          <Page className={classNames('', {}, [className])}>
              <VStack max gap={'16'}>
                  <ProfilePageHeader />
                  <EditableProfileCard/>
              </VStack>

          </Page>
      </DynamicModuleLoader>
  )
}

export default ProfilePage
