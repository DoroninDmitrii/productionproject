import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Text } from 'shared/ui/Text/Text'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import cls from './ProfilePageHeader.module.scss'

interface ProfilePageHeaderProps {
  className?: string
}

const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
  const {
    className
  } = props

  const { t } = useTranslation('profile')

  return (
      <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
          <Text title={t('Profile')}/>
          <Button
              className={cls.editBtn}
              theme={ButtonTheme.OUTLINE}
              >
              {t('Edit')}
          </Button>
      </div>
  )
}

export default ProfilePageHeader
