import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Text } from 'shared/ui/Text/Text'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useSelector } from 'react-redux'
import { getProfileReadonly, profileAction } from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useCallback } from 'react'
import cls from './ProfilePageHeader.module.scss'

interface ProfilePageHeaderProps {
  className?: string
}

const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
  const {
    className
  } = props

  const { t } = useTranslation('profile')

  const readonly = useSelector(getProfileReadonly)
  const dispatch = useAppDispatch()

  const onEdit = useCallback(() => {
    dispatch(profileAction.setReadonly(false))
  }, [dispatch])

  const onCancellEdit = useCallback(() => {
    dispatch(profileAction.cancelEdit())
  }, [dispatch])

  return (
      <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
          <Text title={t('Profile')}/>
          {readonly
            ? (
                <Button
              className={cls.editBtn}
              theme={ButtonTheme.OUTLINE}
              onClick={onEdit}
              >
                    {t('Edit')}
                </Button>
              )

            : (
                <Button
            className={cls.editBtn}
            theme={ButtonTheme.OUTLINE}
            onClick={onCancellEdit}
            >
                    {t('Cancell')}
                </Button>
              )
          }
      </div>
  )
}

export default ProfilePageHeader
