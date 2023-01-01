import { classNames } from 'shared/lib/classNames/classNames'
import cls from './ProfileCard.module.scss'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData'
import { getProfileisLoading } from 'entities/Profile/model/selectors/getProfileisLoading/getProfileisLoading'
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError'
import { Text } from 'shared/ui/Text/Text'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'

interface ProfileCardProps {
  className?: string
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className
  } = props

  const { t } = useTranslation('profile')

  const data = useSelector(getProfileData)
  const isLoading = useSelector(getProfileisLoading)
  const error = useSelector(getProfileError)

  return (
      <div className={classNames(cls.ProfileCard, {}, [className])}>
          <div className={cls.header}>
              <Text title={t('Profile')}/>
              <Button
              className={cls.editBtn}
              theme={ButtonTheme.OUTLINE}
              >
                  {t('Edit')}
              </Button>
          </div>
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