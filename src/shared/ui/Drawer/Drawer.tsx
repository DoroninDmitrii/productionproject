import { ReactNode, memo } from 'react'
import { useTranslation } from 'react-i18next'
import { Mods, classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider'
import { Portal } from '../Portal/Portal'
import { Overlay } from '../Overlay/Overlay'
import { useModal } from '../../lib/hooks/useModal/useModal'
import cls from './Drawer.module.scss'

interface DrawerProps {
  className?: string
  children: ReactNode
  isOpen?: boolean
  isClose?: () => void
  lazy?: boolean
}

export const Drawer = memo((props: DrawerProps) => {
  const { className, children, isOpen, isClose, lazy } = props
  const { t, i18n } = useTranslation()

  const { theme } = useTheme()

  const {
    close,
    isClosing,
    isMounted
  } = useModal(
    {
      animationDelay: 300,
      isClose,
      isOpen
    }
  )

  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing
  }
  // For lazy loading modal
  if (lazy && !isMounted) {
    return null
  }

  return (
      <Portal>
          <div className={classNames(cls.Drawer, mods, [className, theme, 'app_drawer'])}>
              <Overlay onClick={isClose} />
              <div className={cls.content} >
                  {children}
              </div>
          </div>
      </Portal>
  )
})

export default Drawer
