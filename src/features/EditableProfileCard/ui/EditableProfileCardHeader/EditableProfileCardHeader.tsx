import { useTranslation } from 'react-i18next'
import { useCallback, memo } from 'react'
import { Text } from 'shared/ui/Text/Text'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useSelector } from 'react-redux'
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData'
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly'
import { profileAction } from '../../model/slice/profileSlice'
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { getUserAuthData } from 'entities/User'
import { HStack } from 'shared/ui/Stack/HStack/HStack'

interface EditableProfileCardHeaderProps {
  className?: string
}

export const EditableProfileCardHeader = memo((props: EditableProfileCardHeaderProps) => {
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
})

export default EditableProfileCardHeader