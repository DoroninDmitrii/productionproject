import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'

interface ProfilePageProps {
  className?: string
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t, i18n } = useTranslation()

  return (
      <div className={classNames('', {}, [className])}>
          {t('Profile Page')}
      </div>
  )
}

export default ProfilePage
