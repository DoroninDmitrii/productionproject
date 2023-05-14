import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { useDispatch, useSelector } from 'react-redux'
import { Dropdown } from 'shared/ui/Popups'
import { getUserAuthData, isUserAdmin, isUserManager, userAction } from 'entities/User'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { RoutePath } from 'shared/config/routeConfig/routeConfig'

interface AvatarDropdownProps {
  className?: string
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
  const { className } = props
  const { t, i18n } = useTranslation()
  const authData = useSelector(getUserAuthData)

  // for logout
  const dispatch = useDispatch()

  // for admin panel
  const isAdmin = useSelector(isUserAdmin)
  const isManager = useSelector(isUserManager)

  // for logout
  const onLogout = useCallback(() => {
    dispatch(userAction.logout())
  }, [dispatch])

  const isAdminPanelAvailable = isAdmin || isManager

  if (!authData) {
    return null
  }

  return (
      <Dropdown
          className={classNames('', {}, [className])}
          direction={'bottom left'}
          items={[
            ...(isAdminPanelAvailable
              ? [{
                  content: t('Admin Panel'),
                  href: RoutePath.admin_panel
                }]
              : []),
            {
              content: t('Profile'),
              href: `${RoutePath.profile}/${authData.id}`
            },
            {
              content: t('Log out'),
              onClick: onLogout
            }
          ]}
      trigger={<Avatar size={30} src={authData.avatar}/>}
      />
  )
})

export default AvatarDropdown
