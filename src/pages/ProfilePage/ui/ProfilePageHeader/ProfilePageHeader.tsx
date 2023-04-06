/* eslint-disable i18next/no-literal-string */
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import { Text } from 'shared/ui/Text/Text'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useSelector } from 'react-redux'
import { getProfileData, getProfileReadonly, profileAction, updateProfileData } from 'entities/Profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useCallback } from 'react'
import { getUserAuthData } from 'entities/User'
import { HStack } from 'shared/ui/Stack/HStack/HStack'

interface ProfilePageHeaderProps {
  className?: string
}

const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
  const {
    className
  } = props

  const { t } = useTranslation('profile')

  const readonly = useSelector(getProfileReadonly)
  const authData = useSelector(getUserAuthData)
  const profileData = useSelector(getProfileData)
  const dispatch = useAppDispatch()

  const canEdit = authData?.id === profileData?.id

  const onEdit = useCallback(() => {
    dispatch(profileAction.setReadonly(false))
  }, [dispatch])

  const onCancelEdit = useCallback(() => {
    dispatch(profileAction.cancelEdit())
  }, [dispatch])

  const onSave = useCallback(() => {
    dispatch(updateProfileData())
  }, [dispatch])

  return (
      <HStack max justify='between' className={classNames('', {}, [className])}>
          <Text title={t('Profile')}/>
          {canEdit && (
          <>
              {readonly
                ? (
                    <Button
                        theme={ButtonTheme.OUTLINE}
                        onClick={onEdit}
                    >
                        {t('Edit')}
                    </Button>
                  )

                : (
                    <HStack gap={'8'}>
                        <Button
                            theme={ButtonTheme.OUTLINE_RED}
                            onClick={onCancelEdit}
                        >
                            {t('Cancel')}
                        </Button>

                        <Button
                            theme={ButtonTheme.OUTLINE}
                            onClick={onSave}
                        >
                            {t('Save')}
                        </Button>
                    </HStack>
                  )
          }
          </>
          )}
      </HStack>
  )
}

export default ProfilePageHeader
